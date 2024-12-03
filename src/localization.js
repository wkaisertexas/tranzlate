import { readFileSync } from "fs";

import { BASE_LANGUAGE } from "./consts.js";
import { getLanguage } from "./config.js";
import STRINGCATALOG from "./strings.json" assert { type: "json" };

let CURRENTLANGUAGE = getLanguage() || BASE_LANGUAGE;

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

  if (!STRINGCATALOG.strings[string]) {
    // console.log(`No string found for ${string}`);
    return string;
  }

  if (!STRINGCATALOG.strings[string].localizations[CURRENTLANGUAGE]) {
    // console.log(`No translation found for ${string} in ${CURRENTLANGUAGE}`);
    return string;
  }

  return STRINGCATALOG.strings[string].localizations[CURRENTLANGUAGE].value;
};

import { writeStringCatalog } from "./translate.js";

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
  CURRENTLANGUAGE,
  STRINGCATALOG,
  makeStringsDictionary,
  expandStrings,
};
