import js from "@eslint/js";
import globals from "globals";

export default [
  js.configs.recommended,
  {
    files: ["**/*.js"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        ...globals.node,
        ...globals.jest,
      },
    },
    rules: {
      // Отключаем все стилистические правила
      "@stylistic/semi": "off",
      "@stylistic/arrow-parens": "off",
      "@stylistic/no-trailing-spaces": "off",
      "@stylistic/eol-last": "off",
      "@stylistic/quotes": "off",
      "@stylistic/brace-style": "off",
      "@stylistic/quote-props": "off",
      "@stylistic/no-multi-spaces": "off",
      "@stylistic/comma-dangle": "off",
      
      // Основные правила
      "no-unused-vars": ["error", { "argsIgnorePattern": "^_" }],
      "semi": ["error", "always"],
    },
  },
  {
    ignores: ["coverage/", "node_modules/"],
  },
];