import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    minify: false,
    sourcemap: false,
    cssCodeSplit: true,
    outDir: 'dist',
    lib: {
      entry: {
        core: resolve(__dirname, './src/core/core.js'),
        remSamePx: resolve(__dirname, './src/utils/rem-same-px.css'),
      },
      name: 'CssPreflight',
      formats: ['es'],
    },
  },
});
