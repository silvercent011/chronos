<template>
  <v-layout>
    <v-app-bar elevation="2">
      <v-app-bar-title>Chronos</v-app-bar-title>
    </v-app-bar>
    <v-main>
      <slot />
    </v-main>
    <BottomNav />
  </v-layout>
</template>
