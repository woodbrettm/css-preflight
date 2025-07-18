import process from 'node:process';
import path from 'node:path';

import { defineConfig } from 'vite'

export default defineConfig({
  root: path.resolve(process.cwd(), './playground'),
  server: {
    host: true,
    port: 5173,
  },
});
