import OpenAI from "openai";

import { readFileSync, writeFileSync } from "fs";

import { LANGUAGES, BASE_REVIEW_STATE } from "./consts.js";

const readStringCatalog = (path) => {
  let stringData = readFileSync(path);
  return JSON.parse(stringData);
};

const writeStringCatalog = (path, obj) => {
  let jsonString = JSON.stringify(obj, null, 2);

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
  let returnValue = {}; // return value has `state` and `value` keys

  let completion = await getCompletion({
    string: key,
    comment: strings[key].comment,
    targetLanguages: languages,
    sourceLanguage,
    description,
  });

  Object.keys(completion).forEach((key) => {
    returnValue[key] = {
      value: completion[key], // the translated string
      state: review_state,
    };
  });

  return { localizations: returnValue };
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
          .map((lang) => LANGUAGES[lang] + "(" + lang + ")")
          .join(
            ", ",
          )}. ${descriptionPrompt} You are asked to translate strings and return the result in a json object with the language code as the key and the translation as the value. Do not modify template strings (e.g. %lld) in any way. ${commentString}`,
      },
      {
        role: "user",
        content: string,
      },
    ],
    response_format: { type: "json_object" }, // should give us a json response
  });

  let response = gptResponse.choices[0].message.content;

  response = JSON.parse(response); // turn response into a json object (should work)

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
  let stringCatalog = readStringCatalog(inputFile); // TODO: make this support multiple files with glob
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
    newStringsObj[key] = { stringUnit: newStrings[index] };
  });

  let newStringCatalog = {
    sourceLanguage: sourceLanguage,
    strings: newStringsObj,
    version: stringCatalog.version,
  };

  // write the final string stringCatalog
  writeStringCatalog(outputFile, newStringCatalog);
};

export { translate, writeStringCatalog };
