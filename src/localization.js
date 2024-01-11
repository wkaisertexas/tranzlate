import { readFileSync } from "fs";

import { BASE_LANGUAGE } from "./consts.js";
import { getLanguage } from "./config.js";

let CURRENTLANGUAGE = getLanguage() || BASE_LANGUAGE;

let STRINGCATALOG = (() => {
  let data = readFileSync("./strings.json");
  return JSON.parse(data);
})();

let unique_strings = {};

const convertString = (string) => {
  unique_strings[string] = unique_strings[string] + 1 || 0;

  if (!STRINGCATALOG.strings[string]) {
    console.log(`No string found for ${string}`);
    return string;
  }

  if (!STRINGCATALOG.strings[string].localizations[CURRENTLANGUAGE]) {
    console.log(`No translation found for ${string} in ${CURRENTLANGUAGE}`);
    return string;
  }

  return STRINGCATALOG.strings[string].localizations[CURRENTLANGUAGE].value;
};

import { writeStringCatalog } from "./translate.js";

const makeStringsDictionary = () => {
  let strings = {};
  for (let string in unique_strings) {
    strings[string] = {}; // empty object
  }

  let finalStringCatalog = {
    strings: strings,
    sourceLanguage: "en",
    version: "1.0",
  };

  writeStringCatalog("strings.json", finalStringCatalog);
};

export { convertString, CURRENTLANGUAGE, STRINGCATALOG, makeStringsDictionary };
