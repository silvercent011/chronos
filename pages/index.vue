<script setup lang="ts">
import { useProjectStore } from "~/stores/project";

const projectStore = useProjectStore();
</script>

<template>
  <v-app-bar color="primary">
    <v-toolbar-title>Página Inicial</v-toolbar-title>
  </v-app-bar>
  <v-container class="d-flex flex-column">
    <UserCard class="w-100 my-2" />
    <ProjectHomeCard
      class="my-2"
      v-for="project in projectStore.projects"
      :project="project"
    />
  </v-container>
</template>
