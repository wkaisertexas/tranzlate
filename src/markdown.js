/// General parser for creating abreviated readme files using ISO language codes

/// REF: ISO 639-1 Language codes
/// https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes

import { readFileSync, writeFileSync } from "fs";
import OpenAI from "openai";
import { globSync } from "glob";

let openai;
const markdownTranslate = async ({ targetLanguages, source, glob }) => {
  openai = new OpenAI();

  let files = globSync(source) || [source];

  await Promise.all(
    files.map(async (file) => {
      await Promise.all(
        targetLanguages.map(async (targetLanguage) => {
          return await tranzlateFileToLangauge({ targetLanguage, file });
        }),
      );
    }),
  );
};

const tranzlateFileToLangauge = async ({ targetLanguage, file }) => {
  console.log(readFileSync(file));
  let messages = [
    {
      content:
        "You are a translation agent who is translating a markdown file. Into another language. Do not translate any code or langauge specific file names or urls.",
      role: "system",
    },
    {
      content: readFileSync(file).toString(),
      role: "user",
    },
  ];

  let res = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: messages,
  }); // this takes a long time. Splitting by paragraphs could be a way to speed this up

  let text = res.choices[0].message.content;
  let newFileName = file.replace(".md", `.${targetLanguage}.md`);

  writeFileSync(newFileName, text);
};

await markdownTranslate({
  targetLanguages: ["fr"],
  source: "en", // I am not sure how essential this is
  glob: "../README.md",
});

export { markdownTranslate };
