<script lang="ts" setup>
import { useUserStore } from "~/stores/user";

const { signOut } = useAuth();

const userStore = useUserStore();

const { user, isError, isLoading } = storeToRefs(userStore);
</script>

<template>
  <v-app-bar color="primary">
    <v-toolbar-title>Perfil</v-toolbar-title>
    <template v-slot:append>
      <ThemeButton />
    </template>
  </v-app-bar>
  <v-container class="d-flex flex-column pa-5">
    <v-skeleton-loader class="border" v-if="isLoading && !isError && !user">
    </v-skeleton-loader>
    <UserAccountCard v-else-if="!isError && !isLoading && user" :user="user" />

    <v-btn variant="elevated" class="my-3" color="red" @click="signOut"
      >Sair</v-btn
    >
  </v-container>
</template>
