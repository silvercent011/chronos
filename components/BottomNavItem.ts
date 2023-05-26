import { VBtn, VIcon } from "vuetify/components";

export default defineComponent({
  props: {
    to: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
      required: true,
    },
  },

  setup(props) {
    return () =>
      h(VBtn, { to: props.to }, () => [
        h(VIcon, () => `${props.icon}`),
        h("span", props.title),
      ]);
  },
});
