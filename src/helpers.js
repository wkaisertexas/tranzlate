import { isCancel, cancel, select, multiselect, text } from "@clack/prompts";

import { convertString } from "./localization.js";

import { VALID_MODELS, LANGUAGES, SUPPORTED_TRANSLATIONS } from "./consts.js";
import { setAPIKey, getAPIKeyFromConfig } from "./config.js";

/**
 * Either does nothing or exits the process if the user canceled
 * 
 * @param {string} input
 * @returns 
 */
const gracefulExit = (input) => {
  if (!isCancel(input)) return;
  cancel(convertString("Translation cancelled"));
  process.exit(0);
};

/**
 * Allows the user to select an openai model
 * 
 * @returns string
 */
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

/**
 * Asks the user to multiselect a list of target langauges
 * 
 * @returns
 */
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

/**
 * Gets either a valid api key from the config or prompts the user for one
 * 
 * @returns {Promise<string>} openai key
 */
const getAPIKey = async () => {
  let apiKey = process.env["OPENAI_API_KEY"];

  if (!process.env["OPENAI_API_KEY"]) {
    if (getAPIKeyFromConfig()) return getAPIKeyFromConfig();

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
  }

  gracefulExit(apiKey);
  setAPIKey(apiKey);

  return apiKey;
};

/**
 * A lowercase inclusion to check for suppported translations
 * 
 * @param {string} language
 * @returns string | undefined translation
 */
const matchSupportedTranslations = (language) => {
  let matching = SUPPORTED_TRANSLATIONS.map((supported_language) =>
    String(supported_language).toLowerCase() === String(language).toLowerCase()
      ? 0
      : 1,
  );
  let index = matching.indexOf(0);

  if (index === -1) return;

  return SUPPORTED_TRANSLATIONS[index];
};

export {
  gracefulExit,
  getModel,
  getLanguages,
  getAPIKey,
  matchSupportedTranslations,
};
