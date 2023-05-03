<script setup lang="ts">
import { useUserStore } from "~/stores/user";

const userStore = useUserStore();
</script>

<template>
  <v-card class="w-100">
    <template v-if="userStore.user" #title>
      <v-avatar size="36px">
        <v-img alt="Avatar" :src="userStore.user.img"></v-img>
      </v-avatar>
      {{ userStore.user.name }}
    </template>
  </v-card>
</template>
