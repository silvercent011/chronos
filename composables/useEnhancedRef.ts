import { UnwrapRef } from "nuxt/dist/app/compat/vue-demi";

export function useEnhancedRef<T>(
  value: T
): [globalThis.Ref<UnwrapRef<T>>, () => void] {
  const startValue = <UnwrapRef<T>>structuredClone(value);

  const val = ref(value);

  function reset() {
    val.value = startValue;
  }

  return [val, reset];
}
