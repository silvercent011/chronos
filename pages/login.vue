<script setup lang="ts">
const { signIn } = useAuth();

function signInWithGitHub() {
  signIn("github");
}
</script>

<template>
  <IonPage>
    <IonContent>
      <IonButton @click="signInWithGitHub"> Entrar com GitHub </IonButton>
    </IonContent>
  </IonPage>
</template>
