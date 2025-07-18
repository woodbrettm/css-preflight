import { defineConfig } from "eslint/config";
import css from '@eslint/css';

export default defineConfig({
  files: ['**/*.css'],
  plugins: {
    css,
  },
  language: 'css/css',
  extends: [
    'css/recommended',
  ],
  rules: {
    'css/use-baseline': 'off',
  }
});
