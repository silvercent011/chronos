<script setup lang="ts">
defineProps({
  isOpen: {
    type: Boolean,
    required: true,
  },
});

const emit = defineEmits(["close"]);

function setIsOpen(value: boolean) {
  emit("close", value);
}
</script>

<template>
  <ClientOnly>
    <HeadlessTransitionRoot appear :show="isOpen" as="template">
      <HeadlessDialog as="div" class="relative z-10" @close="setIsOpen">
        <HeadlessTransitionChild
          as="template"
          enter="duration-300 ease-out"
          enter-from="opacity-0"
          enter-to="opacity-100"
          leave="duration-200 ease-in"
          leave-from="opacity-100"
          leave-to="opacity-0"
        >
          <div class="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-3xl" />
        </HeadlessTransitionChild>

        <div class="fixed inset-0 overflow-y-auto">
          <div
            class="flex min-h-full items-center justify-center p-4 text-center"
          >
            <HeadlessTransitionChild
              as="template"
              enter="duration-300 ease-out"
              enter-from="opacity-0 scale-95"
              enter-to="opacity-100 scale-100"
              leave="duration-200 ease-in"
              leave-from="opacity-100 scale-100"
              leave-to="opacity-0 scale-95"
            >
              <HeadlessDialogPanel>
                <div
                  class="flex flex-col gap-5 relative rounded-lg bg-foreground p-8 text-start ring-2 ring-primary-600"
                >
                  <div class="absolute right-5 top-5">
                    <Icon
                      name="mdi:close"
                      class="text-gray-500 hover:text-primary-800"
                      size="20"
                      @click="() => setIsOpen(false)"
                    />
                  </div>
                  <slot />
                </div>
              </HeadlessDialogPanel>
            </HeadlessTransitionChild>
          </div>
        </div> </HeadlessDialog
    ></HeadlessTransitionRoot>
  </ClientOnly>
</template>
