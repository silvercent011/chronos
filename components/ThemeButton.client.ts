import { useTheme } from "vuetify";
import { VBtn } from "vuetify/components";

export default defineComponent({
  setup() {
    const theme = useTheme();

    const { setTheme } = useCookieTheme();

    const toggleTheme = () => {
      const actTheme = theme.global.current.value.dark
        ? "CustomLightTheme"
        : "CustomDarkTheme";

      theme.global.name.value = actTheme;

      setTheme(actTheme);
    };

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
