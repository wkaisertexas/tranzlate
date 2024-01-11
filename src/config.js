import { SUPPORTED_TRANSLATIONS, BASE_LANGUAGE, LANGUAGES } from "./consts.js";
import { gracefulExit, matchSupportedTranslations } from "./helpers.js";

import { readFileSync, writeFileSync } from "fs";
import { intro, select, outro } from "@clack/prompts";

import path from "path";
import os from "os";
import ini from "ini";
import colors from "picocolors";

const CONFIG_PATH = path.join(os.homedir(), ".tranzlate");

const config = (() => {
  try {
    return ini.parse(readFileSync(CONFIG_PATH, "utf-8"));
  } catch (err) {
    return {};
  }
})();

// Setters
const conditionallySetLanguage = async () => {
  console.log(process.argv);
  if (process.argv.length < 3) return;
  if (process.argv[3] !== "set-language" && process.argv[2] !== "set-language")
    return;

  console.clear();

  let language_to_set = process.argv[3];
  if (matchSupportedTranslations(process.argv[2])) {
    language_to_set = process.argv[2];
  }
  if (!matchSupportedTranslations(language_to_set)) {
    language_to_set = await askUserForLanguage();
  }

  config.language = language_to_set;
  saveConfig();

  outro(convertString(`Language set to ${LANGUAGES[language_to_set]}`));

  process.exit(0);
};

const setAPIKey = (key) => {
  config.api_key = key;
  saveConfig();
};

const saveConfig = () => {
  let stringConfig = ini.stringify(config);
  console.log(config);
  console.log(stringConfig);
  writeFileSync(CONFIG_PATH, stringConfig);
};

// Getters
const getLanguage = () => {
  if (config.language) return config.language;

  return BASE_LANGUAGE;
};

const getAPIKeyFromConfig = () => {
  if (config.api_key) return config.api_key;

  return;
};

import { convertString } from "./localization.js";

// Helpers
const askUserForLanguage = async () => {
  intro(
    `${colors.bgCyan(
      colors.black(convertString(" tranzlate: default language selection")),
    )}`,
  );

  let language = await select({
    message: convertString("Select a language to set as your default language"),
    options: SUPPORTED_TRANSLATIONS.map((language) => {
      return {
        label: `${language} - ${LANGUAGES[language]}`,
        value: language,
      };
    }),
    required: true,
  });

  gracefulExit(language);

  return language;
};

export {
  conditionallySetLanguage,
  getLanguage,
  getAPIKeyFromConfig,
  setAPIKey,
};
