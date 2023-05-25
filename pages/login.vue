<script setup lang="ts">
const { signIn } = useAuth();

function signInWithGitHub() {
  signIn("github");
}

function signInWithGoogle() {
  signIn("google");
}

definePageMeta({
  layout: false,
});
</script>

<template>
  <v-container class="d-flex flex-column h-screen align-center justify-center">
    <h1>Chronos</h1>
    <div class="d-flex flex-column btns">
      <v-btn @click="signInWithGitHub">
        <template #prepend>
          <v-icon icon="mdi-github"></v-icon>
        </template>
        Entrar com GitHub
      </v-btn>

      <v-btn @click="signInWithGoogle">
        <template #prepend>
          <v-icon icon="mdi-google"></v-icon>
        </template>
        Entrar com Google
      </v-btn>
    </div>
  </v-container>
</template>

<style scoped>
.btns {
  gap: 1rem;
}
</style>
