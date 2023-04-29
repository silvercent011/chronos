<script setup lang="ts">
const { signIn } = useAuth();

function signInWithGitHub() {
  signIn("github");
}

definePageMeta({
  layout: false,
});
</script>

<template>
  <v-container>
    <v-btn @click="signInWithGitHub"> Entrar com GitHub </v-btn>
  </v-container>
</template>
