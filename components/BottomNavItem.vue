<script setup lang="ts">
const props = defineProps({
  to: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  icon: {
    type: String,
    required: true,
  },
});

const route = useRoute();

const isActive = computed(() => {
  return route.path === props.to;
});
</script>

<template>
  <NuxtLink :to="to" class="flex-1 flex flex-col items-center justify-center">
    <Icon class="w-6 h-6" :name="icon" />
    <span v-if="isActive">{{ title }}</span>
  </NuxtLink>
</template>
