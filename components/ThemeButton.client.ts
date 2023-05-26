import { useTheme } from "vuetify";
import { VBtn } from "vuetify/components";

export default defineComponent({
  setup() {
    const theme = useTheme();

    const setTheme = (themeName: string) => {
      console.log({ themeName });

      theme.global.name.value = themeName;
      localStorage.setItem("theme", themeName);
    };

    const strg = localStorage.getItem("theme");

    if (strg && strg === "CustomLightTheme") {
      setTheme("CustomLightTheme");
    } else {
      setTheme("CustomDarkTheme");
    }

    watch(theme.global.name, (name) => {
      setTheme(name);
    });

    const toggleTheme = () =>
      (theme.global.name.value = theme.global.current.value.dark
        ? "CustomLightTheme"
        : "CustomDarkTheme");

    return () =>
      h(VBtn, {
        onClick: () => toggleTheme(),
        color: "white",
        icon: theme.global.current.value.dark
          ? "mdi-lightbulb"
          : "mdi-lightbulb-off",
      });
  },
});
