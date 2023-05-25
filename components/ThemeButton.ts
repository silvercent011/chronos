import { useTheme } from "vuetify";
import { VBtn } from "vuetify/components";

export default defineComponent({
  setup() {
    const theme = useTheme();

    const toggleTheme = () =>
      (theme.global.name.value = theme.global.current.value.dark
        ? "light"
        : "dark");

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
