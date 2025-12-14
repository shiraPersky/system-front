// import js from "@eslint/js";
// import globals from "globals";
// import * as tseslint from "typescript-eslint";
// import reactHooks from "eslint-plugin-react-hooks";
// import react from "eslint-plugin-react";
// import jsxA11y from "eslint-plugin-jsx-a11y";
// import reactRefresh from "eslint-plugin-react-refresh";
// import promise from "eslint-plugin-promise";
// import importPlugin from "eslint-plugin-import";
// import unicorn from "eslint-plugin-unicorn";
// import sonarjs from "eslint-plugin-sonarjs";
// import regexp from "eslint-plugin-regexp";
// import simpleImportSort from "eslint-plugin-simple-import-sort";
// import n from "eslint-plugin-n";
// import noSecrets from "eslint-plugin-no-secrets";
// import noUnsanitized from "eslint-plugin-no-unsanitized";

// import eslintConfigPrettier from "eslint-config-prettier/flat";

// import { defineConfig } from "eslint/config";

// export default defineConfig([
//   js.configs.recommended,
//   ...tseslint.configs.recommendedTypeChecked,

//   {
//     files: ["src/**/*.{js,ts,jsx,tsx}"],
//     ignores: ["dist/**", "build/**", "node_modules/**"],
//     languageOptions: {
//       parser: tseslint.parser,
//       parserOptions: {
//         project: "./tsconfig.app.json",
//         sourceType: "module",
//         ecmaVersion: "latest",
//       },
//       globals: { ...globals.browser, ...globals.node },
//     },
//     plugins: {
//       "@typescript-eslint": tseslint.plugin,
//       react,
//       "react-hooks": reactHooks,
//       "jsx-a11y": jsxA11y,
//       "react-refresh": reactRefresh,
//       import: importPlugin,
//       promise,
//       unicorn,
//       sonarjs,
//       regexp,
//       n,
//       "no-secrets": noSecrets,
//       "no-unsanitized": noUnsanitized,
//       "simple-import-sort": simpleImportSort,
//     },
//     settings: {
//       react: { version: "detect" },
//       "import/resolver": {
//         typescript: {},
//       },
//     },
//     rules: {
//       // React
//       ...react.configs.recommended.rules,
//       ...reactHooks.configs.recommended.rules,
//       ...jsxA11y.configs.recommended.rules,
//       "react-refresh/only-export-components": "error",
//       "react/react-in-jsx-scope": "off",
//       "react/jsx-uses-react": "off",

//       // Import
//       ...importPlugin.configs.recommended.rules,
//       ...promise.configs.recommended.rules,
//       "import/no-extraneous-dependencies": [
//         "error",
//         {
//           devDependencies: false,
//         },
//       ],

//       "import/no-duplicates": "error",

//       "@typescript-eslint/no-unused-vars": [
//         "error",
//         { argsIgnorePattern: "^_", varsIgnorePattern: "^_" },
//       ],

//       // Patterns
//       ...sonarjs.configs.recommended.rules,
//       ...unicorn.configs.recommended.rules,
//       "unicorn/filename-case": "off",
//       "unicorn/prevent-abbreviations": "off",
//       ...regexp.configs.recommended.rules,
//       ...n.configs.recommended.rules,

//       // Security
//       ...noSecrets.configs.recommended.rules,
//       ...noUnsanitized.configs.recommended.rules,

//       // Sorting
//       "simple-import-sort/imports": "error",
//       "simple-import-sort/exports": "error",
//     },
//   },

//   // Avoid TS project errors outside src
//   {
//     files: ["**/*.{js,ts,jsx,tsx}"],
//     ignores: ["src/**/*"],
//     languageOptions: {
//       parserOptions: { project: false },
//     },
//   },
//   eslintConfigPrettier,
// ]);

import js from "@eslint/js";
import globals from "globals";
import * as tseslint from "typescript-eslint";
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
import noSecrets from "eslint-plugin-no-secrets";
import noUnsanitized from "eslint-plugin-no-unsanitized";

import eslintConfigPrettier from "eslint-config-prettier";

export default [
  // Base configs
  js.configs.recommended,

  // TypeScript configs for src files only
  ...tseslint.configs.recommendedTypeChecked.map((config) => ({
    ...config,
    files: ["src/**/*.{ts,tsx}"],
  })),

  // TypeScript parser config for src files
  {
    files: ["src/**/*.{ts,tsx}"],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        project: "./tsconfig.app.json",
        sourceType: "module",
        ecmaVersion: "latest",
      },
    },
  },

  // Main configuration for all src files
  {
    files: ["src/**/*.{js,ts,jsx,tsx}"],
    languageOptions: {
      globals: { ...globals.browser, ...globals.node },
    },
    plugins: {
      "@typescript-eslint": tseslint.plugin,
      react,
      "react-hooks": reactHooks,
      "jsx-a11y": jsxA11y,
      "react-refresh": reactRefresh,
      import: importPlugin,
      promise,
      unicorn,
      sonarjs,
      regexp,
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
      // React
      ...(react.configs?.recommended?.rules || {}),
      ...(reactHooks.configs?.recommended?.rules || {}),
      ...(jsxA11y.configs?.recommended?.rules || {}),
      "react-refresh/only-export-components": "error",
      "react/react-in-jsx-scope": "off",
      "react/jsx-uses-react": "off",

      // Import
      ...(importPlugin.configs?.recommended?.rules || {}),
      ...(promise.configs?.recommended?.rules || {}),
      "import/no-extraneous-dependencies": [
        "error",
        {
          devDependencies: false,
        },
      ],
      "import/no-duplicates": "error",

      "@typescript-eslint/no-unused-vars": [
        "error",
        { argsIgnorePattern: "^_", varsIgnorePattern: "^_" },
      ],

      // Patterns
      ...(sonarjs.configs?.recommended?.rules || {}),
      ...(unicorn.configs?.recommended?.rules || {}),
      "unicorn/filename-case": "off",
      "unicorn/prevent-abbreviations": "off",
      ...(regexp.configs?.recommended?.rules || {}),

      // Security
      ...(noSecrets.configs?.recommended?.rules || {}),
      ...(noUnsanitized.configs?.recommended?.rules || {}),

      // Sorting
      "simple-import-sort/imports": "error",
      "simple-import-sort/exports": "error",

      "sonarjs/no-nested-functions": "off",
    },
  },

  // Config files and other root files - disable type checking
  {
    files: ["*.js", "*.mjs", "*.cjs"],
    languageOptions: {
      globals: { ...globals.node },
    },
  },

  // Prettier config (must be last)
  eslintConfigPrettier,
];