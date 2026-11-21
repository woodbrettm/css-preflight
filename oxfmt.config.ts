import { defineConfig } from 'oxfmt';

export default defineConfig({
  embeddedLanguageFormatting: 'auto',
  endOfLine: 'lf',
  insertFinalNewline: true,
  printWidth: 90,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: 'all',
  useTabs: false,
  ignorePatterns: [
    '*',
    '!**/',
    '!README.md',
  ],
});
