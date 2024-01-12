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

const expandStrings = (strings) => {
  let readingFile = JSON.parse(readFileSync("./strings.json").toString());
  let old_strings = Object.keys(readingFile.strings);

  let new_strings = strings;

  let final_strings = old_strings.concat(new_strings);

  // use a set to remove duplicates
  final_strings = [...new Set(final_strings)];

  let strings_object = {};

  for (let string of final_strings) {
    strings_object[string] = {};
  }

  let finalStringCatalog = {
    strings: strings_object,
    sourceLanguage: "en",
    version: "1.0",
  };

  writeStringCatalog("strings.json", finalStringCatalog);
};

export {
  convertString,
  CURRENTLANGUAGE,
  STRINGCATALOG,
  makeStringsDictionary,
  expandStrings,
};
