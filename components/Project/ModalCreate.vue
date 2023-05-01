<script setup lang="ts">
import { useProjectStore } from "~/stores/project";

const dialog = ref(false);

const projectStore = useProjectStore();

const title = ref("");

async function createProject() {
  await projectStore.createProject({ title: title.value });
  dialog.value = false;
  title.value = "";
}
</script>

<template>
  <Button class="my-2" @click="dialog = true">Criar Projeto</Button>
  <ModalBase :isOpen="dialog" @close="dialog = !dialog">
    <h1 class="text-2xl">Criar Projeto</h1>
    <FormGroup>
      <Label>Nome do projeto:</Label>
      <Input v-model="title" type="text" />
    </FormGroup>
    <div class="flex gap-2">
      <Button class="flex-1" variant="fail" @click="dialog = false"
        >Cancelar</Button
      >
      <Button class="flex-1" @click="createProject">Criar</Button>
    </div>
  </ModalBase>
</template>
