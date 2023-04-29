import "@mdi/font/css/materialdesignicons.css";
import { createVuetify } from "vuetify";
import { md2 } from "vuetify/blueprints";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import "vuetify/styles";

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
      defaultTheme: "dark",
    },
  });

  nuxtApp.vueApp.use(vuetify);
});
