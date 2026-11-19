import { defineConfig } from 'oxlint';

export default defineConfig({
  plugins: [
    'typescript',
    'unicorn',
    'oxc',
    'react',
    'import',
  ],
  categories: {
    correctness: 'error',
  },
  rules: {
    'react/rules-of-hooks': 'error',
    'react/only-export-components': ['warn', { 'allowConstantExport': true }],
  },
  env: {
    builtin: true,
  },
});
