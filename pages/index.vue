<script setup lang="ts">
import { useProjectStore } from "~/stores/project";

const projectStore = useProjectStore();
</script>

<template>
  <v-container>
    <UserCard />

    <div>
      <ProjectHomeCard
        v-for="project in projectStore.projects"
        :project="project"
      />
    </div>
  </v-container>
</template>
