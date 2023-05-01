<template>
  <button
    class="flex items-center justify-center gap-2 rounded-md px-5 py-2 font-normal transition-all disabled:opacity-50"
    :class="[color]"
  >
    <slot v-if="!sending" />
    <div v-else class="flex items-center gap-2">
      <Icon name="eos-icons:loading" />
      Enviando
    </div>
  </button>
</template>

<script lang="ts" setup>
interface ButtonProps {
  variant?: "primary" | "secondary" | "success" | "fail" | "opaque";
  sending?: boolean;
}

const props = withDefaults(defineProps<ButtonProps>(), {
  variant: "primary",
  sending: false,
});

const color = computed(() => {
  switch (props.variant) {
    case "primary":
      return "bg-primary-800 hover:bg-primary-600 text-white";
    case "secondary":
      return "bg-secondary-800 hover:bg-secondary-600 text-white";
    case "success":
      return "bg-green-800 hover:bg-green-600 text-white";
    case "fail":
      return "bg-red-800 hover:bg-red-600 text-white";
    case "opaque":
      return "bg-primary-50 hover:bg-primary-100 border-2 border-primary-500 text-primary-900";
    default:
      return "bg-primary-800 hover:bg-primary-600 text-white";
  }
});
</script>
