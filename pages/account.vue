<script lang="ts" setup>
import { storeToRefs } from "pinia";
import { useUserStore } from "~/stores/user";

const { signOut } = useAuth();

const userStore = useUserStore();

const { user, error } = storeToRefs(userStore);
</script>

<template>
  <v-app-bar color="primary">
    <v-toolbar-title>Perfil</v-toolbar-title>
    <template v-slot:append>
      <ThemeButton />
    </template>
  </v-app-bar>
  <v-container class="d-flex flex-column">
    {{}}
    <!-- <UserAccountCard v-if="!error && !isValidating && user" :user="user" /> -->
    <v-btn variant="elevated" class="my-3" color="red" @click="signOut"
      >Sair</v-btn
    >
  </v-container>
</template>
