import { readFileSync } from "fs";

import { BASE_LANGUAGE } from "./consts.js";
import { getLanguage } from "./config.js";
import { writeStringCatalog } from "./translate.js";

import STRING_CATALOG from "./strings.json" assert { type: "json" };
let CURRENT_LANGUAGE = getLanguage() || BASE_LANGUAGE;

/**
 * Global object to store unique strings found in the project for translation
 */
let unique_strings = {};

/**
 * Looks up a string in a string catalog and returns the localized versions
 * If no translation is found, the original string is returned
 * 
 * @param {string} string 
 * @returns string
 */
const convertString = (string) => {
  unique_strings[string] = unique_strings[string] + 1 || 0;

  if (!STRING_CATALOG.strings[string]) {
    // console.log(`No string found for ${string}`);
    return string;
  }

  if (!STRING_CATALOG.strings[string].localizations[CURRENT_LANGUAGE]) {
    // console.log(`No translation found for ${string} in ${CURRENT_LANGUAGE}`);
    return string;
  }

  return STRING_CATALOG.strings[string].localizations[CURRENT_LANGUAGE].value;
};

/**
 * Creates a `strings.json` file with the unique strings found in the project
 */
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

/**
 * Adds new strings into the `strings.json` file, does not delete any existing strings
 * 
 * @param {Array[strings]} strings 
 */
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
  CURRENT_LANGUAGE,
  STRING_CATALOG,
  makeStringsDictionary,
  expandStrings,
};
