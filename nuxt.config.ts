// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  devtools: true,
  modules: ["@sidebase/nuxt-auth", "@pinia/nuxt"],
  build: {
    transpile: ["vuetify"],
  },
  pinia: {
    autoImports: ["defineStore", ["defineStore", "definePiniaStore"]],
  },
  auth: {
    baseURL: process.env.PUBLIC_URL,
  },
});
