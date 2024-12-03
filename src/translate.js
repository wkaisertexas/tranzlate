import OpenAI from "openai";
import { readFileSync, writeFileSync } from "fs";
import { LANGUAGES, BASE_REVIEW_STATE } from "./consts.js";

const readStringCatalog = (path) => {
  let stringData = readFileSync(path);
  return JSON.parse(stringData);
};

/**
 * Saves a string catalog in the specific file format so it is diff-able
 * @param {string} path 
 * @param {object} catalog 
 */
const writeStringCatalog = (path, catalog) => {
  let jsonString = JSON.stringify(catalog, null, 2);

  let formattedJson =
    jsonString
      .split("\n")
      .map((line) => {
        return line.replace(/:\s+/g, " : ").replace("{}", "{\n\n    }");
      })
      .join("\n") + "\n";

  writeFileSync(path, formattedJson);
};

const multiTranslate = async ({
  key,
  strings,
  languages,
  sourceLanguage,
  description,
}) => {
  let returnValue = {}; // Will store the localizations object

  let completion = await getCompletion({
    string: key,
    comment: strings[key].comment,
    targetLanguages: languages,
    sourceLanguage,
    description,
  });

  Object.keys(completion).forEach((lang) => {
    returnValue[lang] = {
      stringUnit: {
        value: completion[lang], // The translated string
        state: review_state,
      },
    };
  });

  return returnValue; // Returns the localizations object
};

const getCompletion = async ({
  string,
  comment,
  sourceLanguage,
  targetLanguages,
  description,
}) => {
  let commentString = comment ? `A comment from the developer: ${comment}` : "";
  let descriptionPrompt = description
    ? `The project description is: ${description}`
    : "";

  const gptResponse = await openai.chat.completions.create({
    model: completionModel,
    messages: [
      {
        role: "system",
        content: `You are a translation expert from ${sourceLanguage} to the following languages: ${targetLanguages
          .map((lang) => LANGUAGES[lang] + " (" + lang + ")")
          .join(
            ", ",
          )}. ${descriptionPrompt} You are asked to translate strings and return the result in a JSON object with the language code as the key and the translation as the value. Do not modify template strings (e.g., %lld) in any way. ${commentString}`,
      },
      {
        role: "user",
        content: string,
      },
    ],
    response_format: { type: "json_object" }, // Should return a JSON response
  });

  let response = gptResponse.choices[0].message.content;

  response = JSON.parse(response); // Parse response into a JSON object

  return response;
};

let openai, completionModel;
let review_state = BASE_REVIEW_STATE;

const translate = async ({
  inputFile,
  outputFile,
  languages,
  model,
  description,
  apiKey,
  state,
}) => {
  let stringCatalog = readStringCatalog(inputFile);
  let sourceLanguage = stringCatalog.sourceLanguage;
  let strings = stringCatalog.strings;

  openai = new OpenAI({
    apiKey: apiKey,
  });
  completionModel = model;
  review_state = state ? state : BASE_REVIEW_STATE;

  let newStrings = await Promise.all(
    Object.keys(strings).map(
      async (key) =>
        await multiTranslate({
          key,
          strings,
          languages,
          sourceLanguage,
          description,
        }),
    ),
  );

  let newStringsObj = {};
  Object.keys(strings).forEach((key, index) => {
    let comment = strings[key].comment ? { comment: strings[key].comment } : {};
    newStringsObj[key] = {
      ...comment,
      localizations: newStrings[index],
    };
  });

  let newStringCatalog = {
    sourceLanguage: sourceLanguage,
    strings: newStringsObj,
    version: stringCatalog.version,
  };

  // Write the final string catalog
  writeStringCatalog(outputFile, newStringCatalog);
};

export { translate, writeStringCatalog };
