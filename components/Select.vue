<template>
  <select
    :value="modelValue"
    class="form-select select-none rounded-md border-primary-600 px-2.5 py-1.5 text-lg outline-none focus:border-primary-700 active:border-primary-700"
    @input="emitValue"
  >
    <slot />
  </select>
</template>

<script lang="ts" setup>
defineProps(["modelValue"]);
const emits = defineEmits(["update:modelValue"]);

function emitValue(event: any) {
  emits("update:modelValue", event.target.value);
}
</script>
