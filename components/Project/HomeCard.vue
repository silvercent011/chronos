<script setup lang="ts">
import { Project, Register } from "@prisma/client";
import { useProjectStore } from "~/stores/project";

interface ProjectHomeCardProps {
  project: Project;
}

const props = defineProps<ProjectHomeCardProps>();

const projectStore = useProjectStore();

const values = ref<Register[]>([]);

async function fetchValues() {
  const response = await projectStore.getMonthRegisters(props.project.id);
  if (response.value) {
    values.value = response.value;
  }
}

const { totalHoursOnMonth, totalMinutesOnMonth, uncompleteHoursMinutes } =
  useMonthTime({ values });

onMounted(async () => {
  await fetchValues();
});
</script>

<template>
  <v-card class="ma-2">
    <v-card-title>
      <span class="text-h5">{{ project.name }}</span>
    </v-card-title>

    <v-card-text>
      <p>Horas: {{ `${totalHoursOnMonth}h${uncompleteHoursMinutes}min` }}</p>
      <p>Minutos: {{ totalMinutesOnMonth }}</p>
    </v-card-text>
  </v-card>
</template>
