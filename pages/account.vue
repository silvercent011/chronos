<script lang="ts" setup>
const { signOut } = useAuth();
</script>

<template>
  <v-toolbar color="primary">
    <v-toolbar-title>Perfil</v-toolbar-title>
  </v-toolbar>
  <v-container>
    TODO
    <v-btn variant="elevated" color="red" @click="signOut">Sair</v-btn>
  </v-container>
</template>
