<script lang="ts" setup>
import { Register } from "@prisma/client";

const props = defineProps<{
  item: Register;
}>();

const { totalHours, uncompleteHoursMinutes } = useTimeConverter({
  value: props.item.minutes,
});
</script>

<template>
  <v-card :value="true">
    <template #title>
      {{ item.title }}
    </template>
    <template #subtitle>
      <p>Tempo: {{ `${totalHours}h${uncompleteHoursMinutes}min` }}</p>
    </template>
    <v-card-actions>
      <v-checkbox label="Lançado no Jira?" />
      <v-btn variant="flat"> Jira </v-btn>
      <v-btn variant="flat"> GitHub </v-btn>
    </v-card-actions>
  </v-card>
</template>
