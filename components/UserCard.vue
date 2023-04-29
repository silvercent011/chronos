<script setup lang="ts">
import { useUserStore } from "~/stores/user";

const userStore = useUserStore();

userStore.fetchUserData();
</script>

<template>
  <v-card>
    <template v-if="userStore.user" #title>
      <v-avatar size="36px">
        <v-img alt="Avatar" :src="userStore.user.img"></v-img>
      </v-avatar>
      {{ userStore.user.name }}
    </template>
    <!-- <template #subtitle>
        {{ data?.user?.email }}
      </template> -->
  </v-card>
</template>
