/// Used for translating string catalogs
import { intro, select, spinner, outro, text } from "@clack/prompts";
import colors from "picocolors";

import { gracefulExit, getAPIKey, getLanguages, getModel } from "./helpers.js";
import { convertString } from "./localization.js";
import { DEFAULT_INPUT_FILE } from "./consts.js";
import { translate } from "./translate.js";

import { existsSync } from "fs";

/**
 * An enum representing the possible translation states of a string key in a string catalog
 */
const STATES = {
  needs_review: `needs_review (${convertString("recommended")})`,
  translated: `translated (${convertString("error-prone")})`,
};

const getState = async () => {
  const state = await select({
    message: convertString("Select the `state` of translated string keys"),
    options: Object.entries(STATES).map(([key, value]) => ({
      value: key,
      label: value,
    })),
    required: true,
    default: Object.keys(STATES)[0],
  });

  gracefulExit(state);
};

/**
 * Prompt TUI for asking which catalog to translate and to which languages
 */
const stringCatalogTUI = async () => {
  introduction();

  // General stuff
  const inputFile = await getInputFile();
  const outputFile = await getOutputFile(inputFile);
  const languages = await getLanguages();
  const state = await getState();
  const model = await getModel();
  const description = await getDescription();
  const apiKey = await getAPIKey();

  // translation progress
  const translationProgress = spinner();
  translationProgress.start(convertString("Translating"));

  await translate({
    inputFile,
    outputFile,
    languages,
    model,
    description,
    apiKey,
    state,
  });

  translationProgress.stop(convertString("Translation complete!"));

  outro(convertString("Thank you for using Translate!"));
};

const introduction = () => {
  console.clear();

  intro(
    `${colors.bgCyan(
      colors.black(convertString(" tranzlate: automatic string translation ")),
    )}`,
  );
};

const getInputFile = async () => {
  let inputFile = await text({
    message: convertString("Enter input file"),
    placeholder: DEFAULT_INPUT_FILE,
    validate: validateInput,
    required: false,
  });
  gracefulExit(inputFile);

  if (inputFile) {
    inputFile = inputFile.trim();
  } else {
    inputFile = DEFAULT_INPUT_FILE;
  }

  return inputFile;
};

/**
 * Make sure the input file path is valid and exists either returns nothing (accept) or an error message (retry)
 * 
 * @param {string} input 
 * @returns string | undefined
 */
const validateInput = (input) => {
  if (!input) return; // okay to be optional / empty -> we use Localizable.strings by default
  if (!input.endsWith(".xcstrings")) {
    return convertString("Input file must end with .xcstrings");
  }
  if(!existsSync(input)) {
    return convertString("File does not exist");
  }
};

const getOutputFile = async (inputFile) => {
  let outputFile = await text({
    message: convertString("Enter the output file"),
    placeholder: inputFile,
    validate: validateOutput,
    required: false,
  });
  gracefulExit(outputFile);

  if (outputFile) {
    outputFile = outputFile.trim();
  } else {
    outputFile = inputFile;
  }

  return outputFile;
};

/**
 * Make sure the output file path is a valid .xcstrings file path or empty
 * 
 * @param {string} input 
 * @returns string | undefined
 */
const validateOutput = (input) => {
  if (!input) return; // okay to be optional / empty -> just use the input file
  if (!input.endsWith(".xcstrings")) {
    return convertString("Input file must end with .xcstrings");
  }
};

const getDescription = async () => {
  const description = await text({
    message: convertString("Enter a description or special instructions for translation"),
    help: convertString("This will be used to give context to the translator."),
    placeholder: convertString("This app is a todo list app."),
    required: false,
  });
  gracefulExit(description);
  return description;
};

export { stringCatalogTUI };
