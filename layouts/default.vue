<template>
  <v-layout>
    <v-app-bar elevation="2" density="prominent">
      <v-app-bar-title>
        <v-container class="font-weight-bold text-h4"> CHronos </v-container>
      </v-app-bar-title>
    </v-app-bar>
    <v-main>
      <slot />
      <RegisterModalCreate />
    </v-main>
    <BottomNav />
  </v-layout>
</template>
