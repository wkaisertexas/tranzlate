/**
 * General parser for creating abbreviated README files using ISO language codes
 * 
 * [REF: ISO 639-1 Language codes](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes)
 */
import { gracefulExit } from "./helpers.js";
import { convertString } from "./localization.js";
import { LANGUAGES, VALID_MODELS } from "./consts.js";

import { readFileSync, writeFileSync } from "fs";
import OpenAI from "openai";
import { globSync } from "glob";
import { intro, select, text, multiselect, spinner } from "@clack/prompts";
import color from "picocolors";

/**
 * Turns markdown files into files with the langauge postfixed
 * 
 * @param {string} fileGlob Files to translate
 * @returns 
 */
const markdownTUI = async (fileGlob) => {
  if (fileGlob && process.argv.length < 3) return;
  if (
    !fileGlob &&
    "markdown" !== process.argv[1] &&
    "markdown" !== process.argv[2]
  )
    return;

  if (!fileGlob) {
    // this means the file glob has been called before
    // console setup and intro
    console.clear();
    intro(
      `${color.bgCyan(
        color.black(
          convertString(" tranzlate: automatic markdown translation "),
        ),
      )}`,
    );
  }

  // if the second argument is not a file, ask for the file
  fileGlob = fileGlob || process.argv[2];
  if (!(process.argv[2] && process.argv[2].endsWith(".md"))) {
    fileGlob = await text({
      message: convertString("Enter a markdown file or glob"),
      placeholder: "./README.md",
      required: true,
    });

    gracefulExit(fileGlob);

    if (!fileGlob) {
      fileGlob = "./README.md";
    }
  }

  // Selecting the languages
  let languages = await multiselect({
    message: convertString("Select languages to translate to"),
    options: Object.entries(LANGUAGES).map(([key, value]) => ({
      value: key,
      label: `${key} - ${value}`,
    })),
  });
  gracefulExit(languages);

  // Selecting the model
  let model = await select({
    message: convertString("Select a model"),
    options: VALID_MODELS.map((model) => ({
      value: model,
      label: model,
    })),
  });
  gracefulExit(model);

  model = model || VALID_MODELS[0];

  let waitingSpinner = spinner();

  waitingSpinner.start(
    convertString("Translating (can take a while with long markdown files)"),
  );

  // translate the file
  await markdownTranslate({
    targetLanguages: languages,
    model: model,
    glob: fileGlob,
  });

  waitingSpinner.stop(convertString("Finished translating"));

  process.exit(0);
};

let openai; // cheeky global

/**
 * Takes languages and a model and uses it to convert each markdown file
 * 
 * @param {string[]} targetLanguages Languages to translate to
 * @param {string} model OpenAI model to use
 * @param {string} glob File glob to translate
 */
const markdownTranslate = async ({ targetLanguages, model, glob }) => {
  openai = new OpenAI();

  let files = globSync(glob) || [glob];

  await Promise.all(
    files.map(async (file) => {
      await Promise.all(
        targetLanguages.map(async (targetLanguage) => {
          return await translateFileToLanguage({ targetLanguage, model, file });
        }),
      );
    }),
  );
};

/**
 * Translates a *single* markdonw file into a target language
 * @param {targetLanguage} targetLanguage Language to translate to
 * @param {model} model OpenAI model to use
 * @param {file} file File to translate
 */
const translateFileToLanguage = async ({ targetLanguage, model, file }) => {
  let messages = [
    {
      content: `You are a translation agent who is translating a markdown file. 
        Into another language.
        Do not translate any code or language specific file names or urls.
        You are translating from ENGLISH to ${LANGUAGES[targetLanguage]}.
        `,
      role: "system",
    },
    {
      content: readFileSync(file).toString(),
      role: "user",
    },
  ];

  let res = await openai.chat.completions.create({
    model: model,
    messages: messages,
  }); // this takes a long time. Splitting by paragraphs could be a way to speed this up

  let text = res.choices[0].message.content;
  let newFileName = file.replace(".md", `.${targetLanguage}.md`);

  if(!newFileName.endsWith(".md")) { // avoiding overwriting the file
    newFileName = newFileName + `.${targetLanguage}`;
  }

  writeFileSync(newFileName, text);
};

export { markdownTUI, markdownTranslate };
