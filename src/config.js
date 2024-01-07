/// Handles the configuration of the application

const supportedTranslations = ["en", "es", "fr", "de", "it", "pt", "ru", "zh"];

const conditionallySetLanguage = () => {
  if (process.argv.length < 3) return;
  if (process.argv[0] !== "set-language") return;
  if (!supportedTranslations.includes(process.argv[2])) return;

  localStorage.setItem("language", process.argv[2]);
  process.exit(0);
};

export { conditionallySetLanguage };
