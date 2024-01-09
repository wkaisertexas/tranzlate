import OpenAI from "openai";

import { readFileSync, writeFileSync } from "fs";

import { LANGUAGES, BASE_REVIEW_STATE } from "./consts.js";

// MAKE prompt should be made internationizable, but this needs to hapen later
const makePrompt = ({
  projectDescription,
  comment,
  string,
  sourceLanguage,
  targetLanguage,
}) => `
${projectDescription}

${comment ? `a translation comment has been made: ${comment}\n` : ""}
input string which should be translated to ${LANGUAGES[targetLanguage]}:

${string}

Translation from ${LANGUAGES[sourceLanguage]} to ${
  LANGUAGES[targetLanguage]
}: `;

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

  await Promise.all(
    languages.map(async (language) => {
      let completion = await getCompletion({
        string: key,
        comment: strings[key].comment,
        targetLanguage: language,
        sourceLanguage,
        description,
      });
      returnValue[language] = {
        value: completion,
        state: review_state,
      };
    }),
  );

  return { localizations: returnValue };
};

const getCompletion = async ({
  string,
  comment,
  sourceLanguage,
  targetLanguage,
  description,
}) => {
  const prompt = makePrompt({
    projectDescription: description,
    string,
    comment,
    sourceLanguage,
    targetLanguage,
  });
  const gptResponse = await openai.chat.completions.create({
    model: completionModel,
    messages: [
      {
        role: "system",
        content: prompt,
      },
      {
        role: "user",
        content: string,
      },
    ],
  });

  // TODO: introduce some error handling here

  let response = gptResponse.choices[0].message.content;
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
  review_state = state;

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
    newStringsObj[key] = newStrings[index];
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
