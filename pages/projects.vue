<script setup lang="ts">
import { useProjectStore } from "~/stores/project";

const projectStore = useProjectStore();
</script>

<template>
  <v-toolbar color="primary">
    <v-toolbar-title>Projetos</v-toolbar-title>
  </v-toolbar>
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
