// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  devtools: true,
  modules: [
    "@sidebase/nuxt-auth",
    "@vueuse/nuxt",
    "@pinia/nuxt",
    "@nuxtjs/tailwindcss",
    "nuxt-icon",
    "nuxt-headlessui",
  ],
  pinia: {
    autoImports: ["defineStore", ["defineStore", "definePiniaStore"]],
  },
  quasar: {
    plugins: ["Dark"],
    config: {
      dark: true,
    },
  },
});
