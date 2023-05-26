// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: {
    enabled: true,
  },
  modules: ["@nuxt/devtools", "@sidebase/nuxt-auth", "@pinia/nuxt"],
  build: {
    transpile: ["vuetify", "swrv"],
  },
  pinia: {
    autoImports: [
      "defineStore",
      ["defineStore", "definePiniaStore"],
      "storeToRefs",
    ],
  },
  auth: {
    // origin: process.env.AUTH_ORIGIN as string,
    baseURL: process.env.AUTH_ORIGIN as string,
  },
});
