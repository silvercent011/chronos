<script setup lang="ts">
import { useUserStore } from "~/stores/user";

const userStore = useUserStore();

const { user, isError, isLoading } = storeToRefs(userStore);
</script>

<template>
  <v-card v-if="!isError && !isLoading && user" class="w-100">
    <template #title>
      <v-avatar size="36px">
        <v-img alt="Avatar" :src="user.img"></v-img>
      </v-avatar>
      {{ user.name }}
    </template>
  </v-card>
</template>
