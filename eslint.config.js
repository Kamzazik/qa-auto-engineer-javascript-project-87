import js from "@eslint/js";
import globals from "globals";

export default [
  {
    files: ["**/*.js"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        ...globals.node,  // для process
        ...globals.jest,  // для test, expect
      },
    },
    rules: {
      "no-unused-vars": ["error", { "argsIgnorePattern": "options" }],
    },
  },
  js.configs.recommended,
  {
    ignores: [
      "coverage/",
      "node_modules/",
    ],
  },
];