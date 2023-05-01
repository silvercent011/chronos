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
  <q-container>
    <q-btn @click="signInWithGitHub"> Entrar com GitHub </q-btn>
  </q-container>
</template>
