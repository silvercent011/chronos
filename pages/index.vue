<template>
  <IonPage>
    <IonContent>
      <IonTabs>
        <IonRouterOutlet />
        <IonTabBar slot="bottom">
          <IonTabButton tab="home" href="/">
            <IonIcon :icon="ioniconsHome" />
            <IonLabel>Página Inicial</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonContent>
  </IonPage>
</template>
