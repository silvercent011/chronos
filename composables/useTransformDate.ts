import { formatISO } from "date-fns";
import { utcToZonedTime } from "date-fns-tz";

export const useTransformDate = () => {
  const stringDate = ref<string>(
    formatISO(new Date(), {
      representation: "complete",
      format: "extended",
    }).split("T")[0]
  );

  const parsedDate = ref<Date>();

  watch(stringDate, (value) => {
    parsedDate.value = utcToZonedTime(new Date(value), "Etc/GMT");
  });

  return { stringDate, parsedDate };
};
