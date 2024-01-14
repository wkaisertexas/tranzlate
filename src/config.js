import { BASE_LANGUAGE } from "./consts.js";

import { readFileSync, writeFileSync } from "fs";

import path from "path";
import os from "os";
import ini from "ini";

const CONFIG_PATH = path.join(os.homedir(), ".tranzlate");

const config = (() => {
  try {
    return ini.parse(readFileSync(CONFIG_PATH, "utf-8"));
  } catch (err) {
    return {};
  }
})();

// Setters
const setLanguage = (language) => {
  config.language = language;
  saveConfig();
};

const setAPIKey = (key) => {
  config.api_key = key;
  saveConfig();
};

const saveConfig = () => {
  let stringConfig = ini.stringify(config);
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
export { getLanguage, getAPIKeyFromConfig, setAPIKey, setLanguage };
