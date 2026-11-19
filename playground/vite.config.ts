import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

/*
  host: true is set so the vite server
  can be connected to when running
  inside of containers.
*/

export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    port: 5173,
    strictPort: true,
  },
  preview: {
    host: true,
    port: 5173,
    strictPort: true,
  }
});
