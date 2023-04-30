import { Register } from "@prisma/client";

export const useMonthTime = ({
  values,
}: {
  values: globalThis.Ref<Register[]>;
}) => {
  const totalMinutesOnMonth = computed(() => {
    return values.value?.reduce((act, item) => (act += item.minutes), 0) || 0;
  });

  const totalHoursOnMonth = computed(() => {
    let horas = Math.floor(totalMinutesOnMonth.value / 60);

    return horas;
  });

  const uncompleteHoursMinutes = computed(() => {
    let minutos = totalMinutesOnMonth.value % 60;

    return minutos;
  });

  return { totalMinutesOnMonth, totalHoursOnMonth, uncompleteHoursMinutes };
};
