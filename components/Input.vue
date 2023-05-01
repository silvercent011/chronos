<template>
  <input
    class="form-input select-none bg-transparent rounded-md border-primary-600 px-2.5 py-1.5 text-lg outline-none focus:border-primary-700 active:border-primary-700"
    :value="modelValue"
    @input="emitValue"
  />
</template>

<script lang="ts" setup>
defineProps(["modelValue"]);
const emits = defineEmits(["update:modelValue"]);

function emitValue(event: any) {
  emits("update:modelValue", event.target.value);
}
</script>
