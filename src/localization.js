import fs from "fs";

let BASELANGUAGE = "fr";
let CURRENTLANGUAGE = loadLanguage() || BASELANGUAGE;

// import STRINGCATALOG from "./strings.json" // strings
function loadLanguage() {
  let language = process.env.LANGUAGE || process.env.LANG || BASELANGUAGE; // this could be a banger
}

let STRINGCATALOG = (() => {
  let data = fs.readFileSync("./strings.json");
  return JSON.parse(data);
})();

let unique_strings = {};

const convertString = (string) => {
  // console.log(STRINGCATALOG)
  // console.log(string)

  unique_strings[string] = unique_strings[string] + 1 || 0;

  // console.log(STRINGCATALOG.strings)

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

  console.log(unique_strings);
  let finalStringCatalog = {
    strings: strings,
    sourceLanguage: "en",
    version: "1.0",
  };

  writeStringCatalog("LocalShit.xcstrings", finalStringCatalog);
};

export { convertString, CURRENTLANGUAGE, makeStringsDictionary };
