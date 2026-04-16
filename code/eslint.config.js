import js from '@eslint/js'
import globals from 'globals'

export default [
  js.configs.recommended,
  {
    files: ['**/*.{js,mjs,cjs}'],
    languageOptions: {
      ecmaVersion: 2020,
      sourceType: 'module',
      globals: {
        ...globals.node,
        ...globals.jest,
      },
    },
    rules: {
      'semi': ['error', 'never'],
      'no-trailing-spaces': 'error',
      'eol-last': ['error', 'always'],
      'arrow-parens': ['error', 'as-needed'],
      'comma-dangle': ['error', 'always-multiline'],
      'brace-style': ['error', '1tbs'],
      'quotes': ['error', 'single'],
      'indent': ['error', 2],
    },
  },
]
