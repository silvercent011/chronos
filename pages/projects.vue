<script setup lang="ts">
import { useProjectStore } from "~/stores/project";

const projectStore = useProjectStore();
</script>

<template>
  <v-app-bar color="primary" floating>
    <v-toolbar-title>Projetos</v-toolbar-title>
  </v-app-bar>
  <v-container>
    <ProjectModalCreate />
    <div class="d-flex flex-column">
      <ProjectCard
        v-for="project in projectStore.projects"
        :key="project.id"
        :project="project"
      />
    </div>
  </v-container>
</template>
