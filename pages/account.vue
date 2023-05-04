<script lang="ts" setup>
import { useUserStore } from "~/stores/user";

const { signOut } = useAuth();

const userStore = useUserStore();
</script>

<template>
  <v-app-bar color="primary">
    <v-toolbar-title>Perfil</v-toolbar-title>
  </v-app-bar>
  <v-container class="d-flex flex-column">
    <v-card class="d-flex flex-column align-center pa-5">
      <v-avatar size="150">
        <v-img :src="userStore.user?.img" :alt="userStore.user?.name" />
      </v-avatar>
      <v-card-title class="text-h5 text-md-h5 text-lg-h4">{{
        userStore.user?.name
      }}</v-card-title>
      <v-card-text>{{ userStore.user?.email }} </v-card-text>
    </v-card>
    <v-btn variant="elevated" class="my-3" color="red" @click="signOut"
      >Sair</v-btn
    >
  </v-container>
</template>
