import "@mdi/font/css/materialdesignicons.css";
import { ThemeDefinition, createVuetify } from "vuetify";
import { md3 } from "vuetify/blueprints";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import { aliases, mdi } from "vuetify/iconsets/mdi";
import { VSkeletonLoader } from "vuetify/labs/VSkeletonLoader";
import "vuetify/styles";

const CustomDarkTheme: ThemeDefinition = {
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
const CustomLightTheme: ThemeDefinition = {
  dark: false,
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

export default defineNuxtPlugin((nuxtApp) => {
  const { theme } = useCookieTheme();

  const vuetify = createVuetify({
    components: {
      VSkeletonLoader,
      ...components,
    },
    directives,
    ssr: true,
    blueprint: md3,
    icons: {
      defaultSet: "mdi",
      aliases,
      sets: {
        mdi,
      },
    },
    theme: {
      defaultTheme: theme.value,
      themes: {
        CustomLightTheme,
        CustomDarkTheme,
      },
    },
  });

  nuxtApp.vueApp.use(vuetify);
});
