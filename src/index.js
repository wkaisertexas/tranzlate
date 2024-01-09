import { conditionallySetLanguage } from "./config.js";
import { markdownTUI } from "./markdown.js";
import { stringCatalogTUI } from "./catalog.js";

/// Alternative paths
conditionallySetLanguage();
await markdownTUI();

// String catalog translation
await stringCatalogTUI();

// Extracting strings (Optional)
// import { makeStringsDictionary } from "./localization.js";
// makeStringsDictionary();
