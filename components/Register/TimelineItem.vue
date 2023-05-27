<script lang="ts" setup>
import { Register } from "@prisma/client";

interface TimelineItemProps {
  item: Register;
}

const props = defineProps<TimelineItemProps>();

const { totalHours, uncompleteHoursMinutes } = useTimeConverter({
  value: props.item.minutes,
});
</script>

<template>
  <v-timeline-item size="small">
    <v-card :value="true" class="w-100 flex-grow-1">
      <template #title>
        {{ item.title }}
      </template>
      <template #subtitle>
        <p>Tempo: {{ `${totalHours}h${uncompleteHoursMinutes}min` }}</p>
      </template>
      <!-- <v-card-actions>
        <v-checkbox label="Lançado no Jira?" />
        <v-btn variant="flat"> Jira </v-btn>
        <v-btn variant="flat"> GitHub </v-btn>
      </v-card-actions> -->
    </v-card>
  </v-timeline-item>
</template>
