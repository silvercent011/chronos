export const useTimeConverter = ({ value }: { value: number }) => {
  const totalHours = computed(() => {
    const horas = Math.floor(value / 60);

    return horas;
  });

  const uncompleteHoursMinutes = computed(() => {
    const minutos = value % 60;

    return minutos;
  });

  return { totalHours, uncompleteHoursMinutes };
};
