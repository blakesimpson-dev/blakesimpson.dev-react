import react from '@vitejs/plugin-react';
import {defineConfig} from 'vite';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
  },
  build: {
    // Netlify publishes from build/ (the old CRA output dir)
    outDir: 'build',
  },
});
