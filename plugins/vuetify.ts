import "@mdi/font/css/materialdesignicons.css";
import { createVuetify } from "vuetify";
import { md2 } from "vuetify/blueprints";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import "vuetify/styles";

const myCustomTheme = {
  dark: true,
  colors: {
    primary: "#673ab7",
    secondary: "#009688",
    accent: "#00bcd4",
    error: "#f44336",
    warning: "#ffc107",
    info: "#2196f3",
    success: "#8bc34a",
  },
};

import { aliases, mdi } from "vuetify/iconsets/mdi";
export default defineNuxtPlugin((nuxtApp) => {
  const vuetify = createVuetify({
    components,
    directives,
    ssr: false,
    blueprint: md2,
    icons: {
      defaultSet: "mdi",
      aliases,
      sets: {
        mdi,
      },
    },
    theme: {
      defaultTheme: "myCustomTheme",
      themes: {
        myCustomTheme,
      },
    },
  });

  nuxtApp.vueApp.use(vuetify);
});
