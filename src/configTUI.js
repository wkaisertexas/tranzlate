import { LANGUAGES, SUPPORTED_TRANSLATIONS } from "./consts.js";
import { gracefulExit, matchSupportedTranslations } from "./helpers.js";
import { setLanguage } from "./config.js";
import { convertString } from "./localization.js";

import { intro, select, outro } from "@clack/prompts";

import colors from "picocolors";

const conditionallySetLanguage = async () => {
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

  setLanguage(language_to_set);

  outro(`${convertString("Language set to")} ${LANGUAGES[language_to_set]}`);

  process.exit(0);
};

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

export { conditionallySetLanguage };
