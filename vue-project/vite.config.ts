import { fileURLToPath, URL } from 'node:url';
import federation from '@originjs/vite-plugin-federation';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  build: {
    target: 'esnext',
    minify: false,
  },
  plugins: [
    vue(),
    federation({
      name: 'remote-app',
      filename: 'remoteEntry.js',
      exposes: {
        './NavBar': './src/components/NavBar.vue',
      },
      shared: ['primevue/config', 'primevue/button'],
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
});
