<script setup lang="ts">
definePageMeta({
  alias: ["/", "/home"],
});
</script>

<template>
  <IonPage>
    <IonHeader>
      <IonToolbar>
        <IonTitle>Timeline</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent>
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Timeline</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-row>
        <ion-item>
          <ion-select
            aria-label="Fruit"
            interface="action-sheet"
            placeholder="Select fruit"
          >
            <ion-select-option value="apples">Apples</ion-select-option>
            <ion-select-option value="oranges">Oranges</ion-select-option>
            <ion-select-option value="bananas">Bananas</ion-select-option>
          </ion-select>
        </ion-item>
        <ion-datetime-button datetime="datetime"></ion-datetime-button>
        <ion-modal :keep-contents-mounted="true">
          <ion-datetime id="datetime"></ion-datetime>
        </ion-modal>
      </ion-row>
      <div class="ion-padding">Listen now content</div>
    </IonContent>
  </IonPage>
</template>
