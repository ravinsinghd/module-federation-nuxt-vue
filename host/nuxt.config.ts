// https://nuxt.com/docs/api/configuration/nuxt-config
import federation from '@originjs/vite-plugin-federation';
export default defineNuxtConfig({
  css: ['primevue/resources/themes/lara-light-blue/theme.css'],
  build: {
    transpile: ['primevue'],
  },
  app: {
    head: {},
  },
  vite: {
    build: {
      target: 'esnext',
      minify: false,
    },
    plugins: [
      federation({
        name: 'host-app',
        remotes: {
          remote_app: 'http://localhost:8080/remoteEntry.js',
        },
        shared: ['primevue/config', 'primevue/button'],
      }),
    ],
  },
});
