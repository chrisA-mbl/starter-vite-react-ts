import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from '@honkhonk/vite-plugin-svgr';
// https://vitejs.dev/config/
export default defineConfig({
  root: './src',
  publicDir: '../public',
  build: {
    outDir: '../dist',
  },
  plugins: [
    svgr(),
    react({
      jsxImportSource: '@emotion/react',
      babel: {
        plugins: ['@emotion/babel-plugin'],
      },
    }),
  ],
});
