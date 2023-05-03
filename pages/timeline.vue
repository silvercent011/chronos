<script setup lang="ts">
import { Register } from "@prisma/client";
import { formatISO } from "date-fns";
import { utcToZonedTime } from "date-fns-tz";
import { useProjectStore } from "~/stores/project";

const projectStore = useProjectStore();

const date = ref<string>(
  formatISO(new Date(), {
    representation: "complete",
    format: "extended",
  }).split("T")[0]
);

const parsedDate = ref<Date>();

const selectedProject = ref();

const todayRegisters = ref<Register[]>();

async function fetchRegisters() {
  const response = await projectStore.getTodayRegisters(
    selectedProject.value,
    parsedDate.value
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

watch(date, (value) => {
  parsedDate.value = utcToZonedTime(new Date(value), "Etc/GMT");
  console.log(parsedDate.value);
});

watchEffect(async () => {
  console.log("date.value", date.value);
  if (projectStore.projects) {
    selectedProject.value = projectStore.projects[0].id;
  }
});
</script>

<template>
  <v-app-bar color="primary" extended sticky>
    <v-toolbar-title>Linha do Tempo</v-toolbar-title>

    <template #extension>
      <div class="inputs w-100 pa-5">
        <v-select
          class="flex-grow-1"
          v-model="selectedProject"
          :items="projectStore.projects"
          item-title="name"
          item-value="id"
          label="Projeto"
        ></v-select>
        <v-text-field
          v-model="date"
          label="Data"
          type="date"
        ></v-text-field></div
    ></template>
  </v-app-bar>
  <v-container>
    <v-timeline class="w-100" side="end">
      <RegisterTimelineItem
        v-for="item in todayRegisters"
        :key="item.id"
        :item="item"
      />
    </v-timeline>
  </v-container>
</template>

<style scoped>
.inputs {
  display: flex;
  align-items: baseline;
  gap: 1rem;
}
</style>
