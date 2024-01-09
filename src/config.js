import { SUPPORTED_TRANSLATIONS, BASE_LANGUAGE } from "./consts.js";

import path from "path";
import os from "os";

const CONFIG_PATH = path.join(os.homedir(), ".tranzlate");

// Setters
const conditionallySetLanguage = () => {
  if (process.argv.length < 3) return;
  if (process.argv[0] !== "set-language") return;
  if (!SUPPORTED_TRANSLATIONS.includes(process.argv[2])) return;

  localStorage.setItem("language", process.argv[2]);
  process.exit(0);
};

// Getters
const getLanguage = () => {
  // should load the configuration file if it exists else default to the standard file
  return "fr";
};

export { conditionallySetLanguage, getLanguage };
