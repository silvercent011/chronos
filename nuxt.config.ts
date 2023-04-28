// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: true,
  modules: ["@sidebase/nuxt-auth"],
  build: {
    transpile: ["vuetify"],
  },
});
