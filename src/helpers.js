import { isCancel, cancel, select, multiselect } from "@clack/prompts";

import { convertString } from "./localization.js";

import { VALID_MODELS, LANGUAGES } from "./consts.js";

const gracefulExit = (input) => {
  if (!isCancel(input)) return;
  cancel(convertString("Translation cancelled"));
  process.exit(0);
};

const getModel = async () => {
  const model = await select({
    message: convertString("Select a model"),
    options: VALID_MODELS.map((model) => ({
      value: model,
      label: model,
    })),
    required: true,
    default: VALID_MODELS[0],
  });
  gracefulExit(model);
  return model;
};

const getLanguages = async () => {
  const languages = await multiselect({
    message: convertString("Select languages to translate to."),
    options: Object.keys(LANGUAGES).map((key) => ({
      value: key,
      label: LANGUAGES[key],
    })),
    required: true,
  });

  gracefulExit(languages);

  return languages;
};

const getAPIKey = async () => {
  let apiKey = process.env["OPENAI_API_KEY"];

  if (!process.env["OPENAI_API_KEY"]) {
    apiKey = await text({
      message: convertString("Enter your OpenAI API key"),
      placeholder: "sk-1234567890",
      validate: (input) => {
        if (input.startsWith("sk-")) {
          return true;
        } else {
          return convertString("API key must start with sk-");
        }
      },
    });

    // TODO: figure out if I should save the api key
  }

  gracefulExit(apiKey);

  return apiKey;
};

export { gracefulExit, getModel, getLanguages, getAPIKey };
