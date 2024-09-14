const DEFAULT_INPUT_FILE = "Localizable.xcstrings";
const VALID_MODELS = [
  "gpt-4o",
  "gpt-4o-mini",
  "gpt-4o-2024-08-06",
  "gpt-4o-mini-2024-07-18",
  "gpt-3.5-turbo",
];
const SUPPORTED_TRANSLATIONS = [
  "en",
  "zh-Hans",
  "zh-Hant",
  "es",
  "ja",
  "ko",
  "fr",
  "de",
  "ru",
  "uk",
  "vi",
  "ar",
  "pt-BR",
  "tr",
];
const LANGUAGES = {
  ar: "Arabic",
  ca: "Catalan",
  "zh-Hans": "Chinese (Simplified)",
  "zh-Hant": "Chinese (Traditional)",
  hr: "Croatian",
  cs: "Czech",
  da: "Danish",
  nl: "Dutch",
  en: "English",
  "en-AU": "English (Australia)",
  "en-CA": "English (Canada)",
  "en-GB": "English (U.K.)",
  "en-US": "English (U.S.)",
  fi: "Finnish",
  fr: "French",
  "fr-CA": "French (Canada)",
  de: "German",
  el: "Greek",
  he: "Hebrew",
  hi: "Hindi",
  hu: "Hungarian",
  id: "Indonesian",
  it: "Italian",
  ja: "Japanese",
  ko: "Korean",
  ms: "Malay",
  no: "Norwegian",
  pl: "Polish",
  "pt-BR": "Portuguese (Brazil)",
  "pt-PT": "Portuguese (Portugal)",
  ro: "Romanian",
  ru: "Russian",
  sk: "Slovak",
  "es-MX": "Spanish (Mexico)",
  es: "Spanish (Spain)",
  sv: "Swedish",
  th: "Thai",
  tr: "Turkish",
  uk: "Ukrainian",
  vi: "Vietnamese",
};
const BASE_LANGUAGE = "en";
const BASE_REVIEW_STATE = "needs_review";

export {
  DEFAULT_INPUT_FILE,
  VALID_MODELS,
  SUPPORTED_TRANSLATIONS,
  LANGUAGES,
  BASE_LANGUAGE,
  BASE_REVIEW_STATE,
};
