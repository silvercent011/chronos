<script setup lang="ts">
import { useProjectStore } from "~/stores/project";

const projectStore = useProjectStore();

projectStore.fetchProjects();
</script>

<template>
  <div class="flex flex-col gap-4">
    <UserCard />

    <div class="flex flex-col gap-4">
      <ProjectHomeCard
        v-for="project in projectStore.projects"
        :project="project"
      />
    </div>
  </div>
</template>
