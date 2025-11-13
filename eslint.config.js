import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import reactHooks from "eslint-plugin-react-hooks";
import react from "eslint-plugin-react";
import jsxA11y from "eslint-plugin-jsx-a11y";
import reactRefresh from "eslint-plugin-react-refresh";
import promise from "eslint-plugin-promise";
import importPlugin from "eslint-plugin-import";
import unicorn from "eslint-plugin-unicorn";
import sonarjs from "eslint-plugin-sonarjs";
import regexp from "eslint-plugin-regexp";
import simpleImportSort from "eslint-plugin-simple-import-sort";
import n from "eslint-plugin-n";
import noSecrets from "eslint-plugin-no-secrets";
import noUnsanitized from "eslint-plugin-no-unsanitized";

import eslintConfigPrettier from "eslint-config-prettier/flat";

import { defineConfig } from "eslint/config";

// //Helper function for turn on all the rules on specific plugin
// const enableAllRules = (name, plugin) => {
//   const rules = plugin.rules || {};
//   return Object.fromEntries(
//     Object.entries(rules).map(([ruleName]) => [`${name}/${ruleName}`, "error"])
//   );
// };

export default defineConfig([
  {
    files: ["src/**/*.{js,ts,jsx,tsx}"],
    languageOptions: {
      parser: tseslint.parser, //to enable to eslint's rules to work on ts files
      parserOptions: {
        sourceType: "module",
        ecmaVersion: "latest",
        project: "./tsconfig.app.json", //tsconfig.json
      },
      globals: { ...globals.browser, ...globals.node },
    },
    plugins: {
      "@typescript-eslint": tseslint,
      react,
      "react-hooks": reactHooks,
      "jsx-a11y": jsxA11y,
      "react-refresh": reactRefresh,
      import: importPlugin,
      promise,
      unicorn,
      sonarjs,
      regexp,
      n,
      "no-secrets": noSecrets,
      "no-unsanitized": noUnsanitized,
      "simple-import-sort": simpleImportSort,
    },
    settings: {
      react: { version: "detect" },
      "import/resolver": {
        typescript: {},
      },
    },
    rules: {
      //Core
      ...js.configs.recommended.rules,

      // TypeScript
      ...tseslint.configs.recommended.rules,

      // React
      ...react.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      ...jsxA11y.configs.recommended.rules,
      "react-refresh/only-export-components": "error",
      "react/react-in-jsx-scope": "off",
      "react/jsx-uses-react": "off",

      // Import
      // ...importPlugin.configs.recommended.rules,
      // ...promise.configs.recommended.rules,
      "import/no-extraneous-dependencies": [
        "error",
        {
          devDependencies: false,
        },
      ],

      "import/no-duplicates": "error",

      "@typescript-eslint/no-unused-vars": [
      "warn",
      { "argsIgnorePattern": "^_" },
    ],

      // // Patterns
      // ...sonarjs.configs.recommended.rules,
      // ...unicorn.configs.recommended.rules,
      // ...regexp.configs.recommended.rules,
      // ...n.configs.recommended.rules,

      // // Security
      // ...noSecrets.configs.recommended.rules,
      // ...noUnsanitized.configs.recommended.rules,

      // Sorting
      "simple-import-sort/imports": "error",
      "simple-import-sort/exports": "error",
    },
  },

  // Avoid TS project errors outside src
  {
    files: ["**/*.{js,ts,jsx,tsx}"],
    ignores: ["src/**/*"],
    languageOptions: {
      parserOptions: { project: false },
    },
  },
  eslintConfigPrettier,
]);
