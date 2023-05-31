import { Register } from "@prisma/client";

export const transformMonthTime = ({ values }: { values: Register[] }) => {
  const totalMinutesOnMonth =
    values.reduce((act, item) => (act += item.minutes), 0) || 0;

  const totalHoursOnMonth = Math.floor(totalMinutesOnMonth / 60);

  const uncompleteHoursMinutes = totalMinutesOnMonth % 60;

  return { totalMinutesOnMonth, totalHoursOnMonth, uncompleteHoursMinutes };
};
