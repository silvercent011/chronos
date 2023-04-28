<script setup lang="ts">
definePageMeta({
  alias: ["/"],
});
</script>

<template>
  <IonPage>
    <IonContent>
      <IonTabs>
        <IonRouterOutlet />
        <IonTabBar slot="bottom">
          <IonTabButton tab="home" href="/home/homepage">
            <IonIcon :icon="ioniconsAlbumsOutline" />
            <IonLabel>Timeline</IonLabel>
          </IonTabButton>
          <IonTabButton tab="account" href="/home/account">
            <IonIcon :icon="ioniconsPerson" />
            <IonLabel>Usuário</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonContent>
  </IonPage>
</template>
