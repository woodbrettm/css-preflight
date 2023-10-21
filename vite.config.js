import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    minify: true,
    sourcemap: false,
    cssCodeSplit: false,
    lib: {
      entry: resolve(__dirname, './src/index.js'),
      name: 'CssPreflight',
      fileName: 'css-preflight',
    },
  },
});
