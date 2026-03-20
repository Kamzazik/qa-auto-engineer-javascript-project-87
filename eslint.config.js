import js from '@eslint/js';
import globals from 'globals';

export default [
  js.configs.recommended,
  {
    files: ['**/*.js'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.node,
        ...globals.jest,
      },
    },
    rules: {
      // Отключаем правила @stylistic
      '@stylistic/semi': 'off',
      '@stylistic/arrow-parens': 'off',
      '@stylistic/no-trailing-spaces': 'off',
      '@stylistic/eol-last': 'off',
      '@stylistic/quotes': 'off',
      '@stylistic/brace-style': 'off',
      '@stylistic/quote-props': 'off',
      '@stylistic/no-multi-spaces': 'off',
      
      // Основные правила
      'semi': ['error', 'always'],
      'quotes': ['error', 'single'],
      'no-unused-vars': ['error', { 'argsIgnorePattern': '^_' }],
    },
  },
  {
    ignores: ['coverage/', 'node_modules/'],
  },
];