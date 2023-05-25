<script setup lang="ts">
import { User } from "@prisma/client";

defineProps<{ user: User }>();
</script>

<template>
  <v-card class="d-flex flex-column align-center pa-5">
    <v-avatar size="150">
      <v-img :src="user.img" :alt="user.name" />
    </v-avatar>
    <v-card-title class="text-h5 text-md-h5 text-lg-h4">{{
      user.name
    }}</v-card-title>
    <v-card-text>{{ user.email }} </v-card-text>
  </v-card>
</template>
