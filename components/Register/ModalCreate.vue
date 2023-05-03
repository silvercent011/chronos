<script setup lang="ts">
import { useProjectStore } from "~/stores/project";
import { useRegisterStore } from "~/stores/register";

const dialog = ref(false);

const projectStore = useProjectStore();

const registerStore = useRegisterStore();

const payload = ref({
  title: "",
  minutes: "",
  jiraUrl: "",
  githubUrl: "",
  registerType: "",
  projectId: "",
});

async function createRegister() {
  registerStore.createRegister(payload.value);
  dialog.value = false;
  payload.value = {
    title: "",
    minutes: "",
    jiraUrl: "",
    githubUrl: "",
    registerType: "",
    projectId: "",
  };
}

onMounted(() => {
  if (projectStore.projects && projectStore.projects.length !== 0) {
    payload.value.projectId = projectStore.projects[0].id;
  }
});
</script>

<template>
  <v-dialog v-model="dialog" persistent width="1024">
    <template v-slot:activator="{ props }">
      <v-btn
        style="position: fixed; bottom: 80px; right: 20px; z-index: 2000"
        color="primary"
        v-bind="props"
        >Criar Registro</v-btn
      >
    </template>
    <v-card>
      <v-container>
        <v-card-title>
          <span class="text-h5">Criar Registro</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-select
                v-model="payload.projectId"
                :items="projectStore.projects"
                item-title="name"
                item-value="id"
                label="Projeto"
              ></v-select>
            </v-row>
            <v-row>
              <v-text-field
                v-model="payload.title"
                label="Título do registro*"
                required
              ></v-text-field>
            </v-row>
            <v-row>
              <v-text-field
                :rules="[validateTime]"
                v-model="payload.minutes"
                label="Tempo gasto*"
                required
              ></v-text-field>
            </v-row>
            <v-row>
              <v-text-field
                v-model="payload.jiraUrl"
                label="URL do Jira"
              ></v-text-field>
            </v-row>
            <v-row>
              <v-text-field
                v-model="payload.githubUrl"
                label="URL do GitHub"
              ></v-text-field>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn variant="text" @click="dialog = false"> Cancelar </v-btn>
          <v-btn variant="text" @click="createRegister"> Criar </v-btn>
        </v-card-actions>
      </v-container>
    </v-card>
  </v-dialog>
</template>
