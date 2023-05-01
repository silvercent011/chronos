<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script lang="ts" setup>
useHead({
  bodyAttrs: {
    class: "bg-foreground text-background transition-all",
  },
});
</script>
