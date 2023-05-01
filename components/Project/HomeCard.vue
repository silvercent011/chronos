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
  <div class="bg-neutral-700 rounded-lg p-5">
    <h1 class="text-2xl">{{ project.name }}</h1>
    <p>Horas: {{ `${totalHoursOnMonth}h${uncompleteHoursMinutes}min` }}</p>
    <p>Minutos: {{ totalMinutesOnMonth }}</p>
  </div>
</template>
