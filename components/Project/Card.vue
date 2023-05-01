<script lang="ts" setup>
import { Project } from "@prisma/client";

interface ProjectCardProps {
  project: Project;
}

defineProps<ProjectCardProps>();
</script>

<template>
  <div class="bg-neutral-700 rounded-lg p-5">
    <h1 class="text-2xl">{{ project.name }}</h1>
    <p>Criado em: {{ new Date(project.createdAt).toLocaleDateString() }}</p>
    <p>Atualizado em: {{ new Date(project.updatedAt).toLocaleDateString() }}</p>
  </div>
</template>
