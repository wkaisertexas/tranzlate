import { SUPPORTED_TRANSLATIONS } from "./consts.js";

const conditionallySetLanguage = () => {
  if (process.argv.length < 3) return;
  if (process.argv[0] !== "set-language") return;
  if (!SUPPORTED_TRANSLATIONS.includes(process.argv[2])) return;

  localStorage.setItem("language", process.argv[2]);
  process.exit(0);
};

export { conditionallySetLanguage };
