<script lang="ts" setup>
import { Project } from "@prisma/client";

interface ProjectCardProps {
  project: Project;
}

defineProps<ProjectCardProps>();
</script>

<template>
  <v-card class="ma-2">
    <v-card-title>
      <span class="text-h5">{{ project.name }}</span>
    </v-card-title>

    <v-card-text>
      <p>Criado em: {{ new Date(project.createdAt).toLocaleDateString() }}</p>
      <p>
        Atualizado em: {{ new Date(project.updatedAt).toLocaleDateString() }}
      </p>
    </v-card-text>
  </v-card>
</template>
