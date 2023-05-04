<script setup lang="ts">
import { useProjectStore } from "~/stores/project";

const dialog = ref(false);

const projectStore = useProjectStore();

const [title, resetTitle] = useEnhancedRef<string>("");

const [monthHours, resetMA] = useEnhancedRef<string>("");

async function createProject() {
  await projectStore.createProject({
    title: title.value,
    monthHours: monthHours.value,
  });

  dialog.value = false;

  resetTitle();
  resetMA();
}
</script>

<template>
  <v-dialog v-model="dialog" persistent width="1024">
    <template v-slot:activator="{ props }">
      <v-btn color="primary" v-bind="props">Criar Projeto</v-btn>
    </template>
    <v-card>
      <v-container>
        <v-card-title>
          <span class="text-h5">Criar Projeto</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-text-field
                v-model="title"
                label="Título do projeto*"
                required
              ></v-text-field>
            </v-row>
            <v-row>
              <v-text-field
                v-model="monthHours"
                label="Horas/Mês*"
                type="number"
                required
              ></v-text-field>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn variant="outlined" @click="dialog = false"> Cancelar </v-btn>
          <v-btn variant="elevated" @click="createProject"> Criar </v-btn>
        </v-card-actions>
      </v-container>
    </v-card>
  </v-dialog>
</template>
