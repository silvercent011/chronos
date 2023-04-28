<script setup lang="ts">
import { VBtn, VIcon } from "vuetify/components";

const BottomNavItem = defineComponent({
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
</script>

<template>
  <v-bottom-navigation mode="shift">
    <BottomNavItem to="/" title="Início" icon="mdi-home" />

    <BottomNavItem to="/timeline" title="Timeline" icon="mdi-timeline" />

    <BottomNavItem to="/projects" title="Projetos" icon="mdi-account-group" />

    <BottomNavItem to="/account" title="Usuário" icon="mdi-account-circle" />
  </v-bottom-navigation>
</template>
