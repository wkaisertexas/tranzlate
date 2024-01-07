import OpenAI from "openai";
import * as fs from "fs";
import {
  intro,
  select,
  spinner,
  outro,
  isCancel,
  cancel,
  text,
  multiselect,
} from "@clack/prompts";
import * as p from "@clack/prompts";
import color from "picocolors";

import { translate } from "./translate.js";
import LANGUAGES from "./languages.js";
import { conditionallySetLanguage } from "./config.js";
import { convertString, makeStringsDictionary } from "./localization.js";

const DEFAULT_INPUT_FILE = "Localizable.xcstrings";
const VALID_MODELS = ["gpt-3.5-turbo", "gpt-4"];
const STATES = {
  needs_review: `needs_review ${convertString(
    "(recommended)",
    "used to denote using the automatic translation with review",
  )}`,
  translated: `translated ${convertString(
    "(error-prone)",
    "used to denote a method of using the automatic translation without review",
  )}`,
};

// conditionally set the language
conditionallySetLanguage();

console.clear();

intro(
  `${color.bgCyan(
    color.black(convertString(" tranzlate: automatic string translation ")),
  )}`,
);

const validateStringFileInput = (input) => {
  if (!input) return; // okay to be optional / empty
  if (!input.endsWith(".xcstrings")) {
    return convertString("Input file must end with .xcstrings");
  }
};

const gracefulExit = (input) => {
  if (!isCancel(input)) return;
  cancel(convertString("Translation cancelled"));
  process.exit(0);
};
let inputFile = await text({
  message: convertString("Enter input file"),
  placeholder: DEFAULT_INPUT_FILE,
  validate: validateStringFileInput,
  required: false,
});
gracefulExit(inputFile);

if (inputFile) {
  inputFile = inputFile.trim();
} else {
  inputFile = DEFAULT_INPUT_FILE;
}

let outputFile = await text({
  message: convertString("Enter the output file"),
  placeholder: inputFile,
  validate: validateStringFileInput,
  required: false,
});
gracefulExit(outputFile);

if (outputFile) {
  outputFile = outputFile.trim();
} else {
  outputFile = inputFile;
}

const languages = await multiselect({
  message: convertString("Select languages to translate to."),
  options: Object.keys(LANGUAGES).map((key) => ({
    value: key,
    label: LANGUAGES[key],
  })),
  required: true,
});

let apiKey = process.env["OPENAI_API_KEY"];

if (!process.env["OPENAI_API_KEY"]) {
  // ask for an api key

  // save the api key
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

const description = await text({
  message: convertString("Enter a description of your project"),
  help: convertString("This will be used to give context to the translator."),
  placeholder: convertString("This app is a todo list app."),
});

const state = await select({
  message: convertString("Select the `state` of translated string keys"),
  options: Object.keys(STATES).map((key) => ({
    value: key,
    label: STATES[key],
  })),
  required: true,
  default: Object.keys(STATES)[0],
});

gracefulExit(state);

let translationProgressSpinner = spinner();
translationProgressSpinner.start(convertString("Translating"));

await translate({
  inputFile,
  outputFile,
  languages,
  model,
  description,
  apiKey,
  state,
});

translationProgressSpinner.stop(convertString("Translation complete!"));

outro(convertString("Thanks for using Tranzlate!"));

makeStringsDictionary();
