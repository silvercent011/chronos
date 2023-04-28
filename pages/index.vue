<script setup lang="ts">
const { data } = useAuth();
</script>

<template>
  <v-container>
    <v-card>
      <template #title>
        <v-avatar size="36px">
          <v-img alt="Avatar" :src="data?.user?.image!"></v-img>
        </v-avatar>
        {{ data?.user?.name }}
      </template>
      <!-- <template #subtitle>
        {{ data?.user?.email }}
      </template> -->
    </v-card>
  </v-container>
</template>
