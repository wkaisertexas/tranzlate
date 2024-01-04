import OpenAI from 'openai';
import * as fs from 'fs';
import { intro, select, spinner, outro, isCancel, cancel, text, group, multiselect } from '@clack/prompts'
import * as p from '@clack/prompts';
import color from "picocolors";


import { translate } from './translate.js';
import LANGUAGES from './languages.js';

const DEFAULT_INPUT_FILE = "Localizable.xcstrings";
const VALID_MODELS = ['gpt-3.5-turbo', 'gpt-4']
const STATES = {
  'needs_review': 'needs_review (recommended)',
  'translated': 'translated (error-prone)'
}

console.clear();

intro(`${color.bgCyan(color.black(" tranzlate: automatic string translation "))}`);

const validateStringFileInput = (input) => {
  if (!input) return; // okay to be optional / empty
  if (!input.endsWith(".xcstrings")) {
    return "Input file must end with .xcstrings";
  }
}

const gracefulExit = (input) => {
  if (!isCancel(input)) return;
  cancel("Translation cancelled")
  process.exit(0);
}

let inputFile = await text({
  message: "Enter input file",
  placeholder: DEFAULT_INPUT_FILE,
  validate: validateStringFileInput,
  required: false,
})
gracefulExit(inputFile);

if (inputFile){
  inputFile = inputFile.trim();
} else {
  inputFile = DEFAULT_INPUT_FILE;
}

let outputFile = await text({
  message: "Enter the output file",
  placeholder: inputFile,
  validate: validateStringFileInput,
  required: false,
})
gracefulExit(outputFile);

if (outputFile){
  outputFile = outputFile.trim();
} else {
  outputFile = inputFile;
}

const languages = await multiselect({
  message: 'Select languages to translate to.',
  options: Object.keys(LANGUAGES).map((key) => ({
    value: key,
    label: LANGUAGES[key],
  })),
  required: true,
})

let apiKey = process.env['OPENAI_API_KEY'];

if (!process.env['OPENAI_API_KEY']) {
  // ask for an api key

  // save the api key
  apiKey = await text({
    message: "Enter your OpenAI API key",
    placeholder: "sk-1234567890",
    validate: (input) => {
      if (input.startsWith("sk-")) {
        return true;
      } else {
        return "API key must start with sk-";
      }
    },
  })
}

gracefulExit(apiKey);

const model = await select({
  message: 'Select a model',
  options: VALID_MODELS.map((model) => ({
    value: model,
    label: model,
  })),
  required: true,
  default: VALID_MODELS[0],
})
gracefulExit(model);

const description = await text({
  message: "Enter a description of your project",
  help: "This will be used to give context to the translator.",
  placeholder: "This app is a todo list app.",
})

const state = await select({
  message: 'Select the `state` of translated string keys',
  options: Object.keys(STATES).map((key) => ({
    value: key,
    label: STATES[key],
  })),
  required: true,
  default: Object.keys(STATES)[0],
})

gracefulExit(state);

translate({inputFile, outputFile, languages, model, description, apiKey, state});

outro("Thanks for using Tranzlate!");
