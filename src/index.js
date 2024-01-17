// Removing annoying and ui-breaking warnings
process.env.TRANZLATE_DEV || process.removeAllListeners("warning");

import { conditionallySetLanguage } from "./configTUI.js";
import { markdownTUI } from "./markdown.js";
import { stringCatalogTUI } from "./catalog.js";

/// Alternative paths
await conditionallySetLanguage();
await markdownTUI();

// String catalog translation
await stringCatalogTUI();

// Extracting strings (Optional)
// import { makeStringsDictionary } from "./localization.js";
// makeStringsDictionary();
