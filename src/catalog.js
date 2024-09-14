/// Used for translating string catalogs
import { intro, select, spinner, outro, text } from "@clack/prompts";

import { gracefulExit, getAPIKey, getLanguages, getModel } from "./helpers.js";
import colors from "picocolors";
import { convertString } from "./localization.js";

import { DEFAULT_INPUT_FILE } from "./consts.js";
import { translate } from "./translate.js";

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
    validate: validateStringFileInput,
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

const validateStringFileInput = (input) => {
  if (!input) return; // okay to be optional / empty
  if (!input.endsWith(".xcstrings")) {
    return convertString("Input file must end with .xcstrings");
  }
};

const getOutputFile = async (inputFile) => {
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

  return outputFile;
};

const getDescription = async () => {
  const description = await text({
    message: convertString("Enter a description of your project"),
    help: convertString("This will be used to give context to the translator."),
    placeholder: convertString("This app is a todo list app."),
    required: false,
  });
  gracefulExit(description);
  return description;
};

export { stringCatalogTUI };
