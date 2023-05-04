import { UnwrapRef } from "nuxt/dist/app/compat/vue-demi";

export const useEnhancedRef = <T>(
  value: any
): [globalThis.Ref<UnwrapRef<T>>, () => void] => {
  const startValue = value;

  const val = ref<T>(value);

  function reset() {
    val.value = startValue;
  }

  return [val, reset];
};
