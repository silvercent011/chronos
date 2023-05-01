<script setup lang="ts">
import { Register } from "@prisma/client";

import { useProjectStore } from "~/stores/project";

const projectStore = useProjectStore();

const date = ref<Date>(new Date());

const selectedProject = ref();

const todayRegisters = ref<Register[]>();

async function fetchRegisters() {
  const response = await projectStore.getTodayRegisters(
    selectedProject.value,
    date.value
  );
  if (response.value) {
    todayRegisters.value = response.value;
  }
}

watchEffect(async () => {
  if (selectedProject.value && date.value) {
    await fetchRegisters();
  }
});

onMounted(async () => {
  console.log("selectedProject.value", selectedProject.value);
  console.log("date.value", date.value);

  await projectStore.fetchProjects();
  selectedProject.value = projectStore.projects[0].id;
});
</script>

<template>
  <v-container>
    <div class="inputs">
      <v-select
        v-model="selectedProject"
        :items="projectStore.projects"
        item-title="name"
        item-value="id"
        label="Projeto"
      ></v-select>
      <v-text-field
        v-model="date"
        label="Start date"
        type="date"
      ></v-text-field>
    </div>
    <div class="timeline">
      <RegisterTimelineItem
        v-for="item in todayRegisters"
        :key="item.id"
        :item="item"
      />
    </div>
  </v-container>
</template>

<style scoped>
.timeline {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.inputs {
  display: flex;
  align-items: baseline;
  gap: 1rem;
}
</style>
