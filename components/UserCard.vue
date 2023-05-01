<script setup lang="ts">
import { useUserStore } from "~/stores/user";

const userStore = useUserStore();

userStore.fetchUserData();
</script>

<template>
  <div class="p-5 bg-neutral-700 rounded-lg">
    <div v-if="userStore.user" class="flex items-center gap-4">
      <img
        class="h-16 w-16 rounded-full"
        alt="Avatar"
        :src="userStore.user.img"
      />
      <h2 class="text-2xl">
        {{ userStore.user.name }}
      </h2>
    </div>
    <!-- <template #subtitle>
        {{ data?.user?.email }}
      </template> -->
  </div>
</template>
