import OpenAI from "openai";
import { readFileSync, writeFileSync } from "fs";
import { LANGUAGES, BASE_REVIEW_STATE } from "./consts.js";

/**
 * Parses a string catalog as a JSON object from a file
 * @param {string} path 
 * @returns 
 */
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

/**
 * Makes and calls an openai prompt to get all translations for a string
 * 
 * @param {string} string the string to translate
 * @param {string} comment a comment from the developer
 * @param {string} sourceLanguage the source language
 * @param {Array} targetLanguages the target languages
 * @param {string} description the project description
 * @returns 
 */
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

/**
 * Translates a set of strings into multiple languages
 * @param {string} key The string to translate
 * @param {object} strings The strings part of the catalog
 * @param {Array} languages The languages to translate to
 * @param {string} sourceLanguage The source language
 * @param {string} description The project description
 * @returns 
 */
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
  });``

  return returnValue; // Returns the localizations object
};

let openai, completionModel;
let review_state = BASE_REVIEW_STATE;

/**
 * Primary function called by the user-facing form to translate a string catalog
 *
 * @param {string} inputFile Input string catalog file path
 * @param {string} outputFile Output file path
 * @param {Array} languages Languages to translate to
 * @param {string} model OpenAI model to use
 * @param {string} description Project description
 * @param {string} apiKey OpenAI API key
 * @param {string} state Translation state to use after completion
 */
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

  // Merging new and old translated strings
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
