<script setup lang="ts">
import { useProjectStore } from "~/stores/project";

const projectStore = useProjectStore();
</script>

<template>
  <v-toolbar color="primary">
    <v-toolbar-title>Página Inicial</v-toolbar-title>
  </v-toolbar>
  <v-container class="d-flex flex-column">
    <UserCard class="w-100 ma-2" />
    <ProjectHomeCard
      class="ma-2"
      v-for="project in projectStore.projects"
      :project="project"
    />
  </v-container>
</template>
