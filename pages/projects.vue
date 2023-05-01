<script setup lang="ts">
import { useProjectStore } from "~/stores/project";

const projectStore = useProjectStore();

if (projectStore.projects.length === 0) {
  projectStore.fetchProjects();
}
</script>

<template>
  <ProjectModalCreate />
  <div class="flex flex-col gap-2">
    <ProjectCard
      v-for="project in projectStore.projects"
      :key="project.id"
      :project="project"
    />
  </div>
</template>
