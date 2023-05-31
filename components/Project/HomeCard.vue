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

function exportValues() {
  projectStore.exportMonthRegisters(props.project.id);
}

const { totalHoursOnMonth, totalMinutesOnMonth, uncompleteHoursMinutes } =
  useMonthTime({ values });

const [mesAt, anoAt] = getAtualPeriodNames();

onMounted(async () => {
  await fetchValues();
});
</script>

<template>
  <v-card class="w-100 d-flex">
    <div class="flex-grow-1">
      <v-card-title>
        <span class="text-h5">{{ project.name }}</span>
      </v-card-title>

      <v-card-text>
        <p>Horas: {{ `${totalHoursOnMonth}h${uncompleteHoursMinutes}min` }}</p>
        <p>Minutos: {{ totalMinutesOnMonth }}</p>
      </v-card-text>
    </div>
    <div class="d-flex flex-grow-1 px-5 flex-column justify-center align-end">
      <p>{{ mesAt.toString().toUpperCase() }}, {{ anoAt }}</p>
      <p class="text-h4 font-weight-black">
        <span> {{ totalHoursOnMonth }}</span
        >/{{ project.monthHours }}h
        <v-btn
          @click="exportValues"
          icon="mdi-download"
          variant="outlined"
        ></v-btn>
      </p>
    </div>
  </v-card>
</template>
