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
  <v-container class="d-flex flex-column h-screen align-center justify-center">
    <h1>Chronos</h1>
    <div>
      <v-btn @click="signInWithGitHub">
        <template #prepend>
          <v-icon icon="mdi-github"></v-icon>
        </template>
        Entrar com GitHub
      </v-btn>
    </div>
  </v-container>
</template>
