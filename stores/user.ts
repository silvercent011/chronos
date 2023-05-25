import { User } from "@prisma/client";
import useSWRV from "swrv";

export const useUserStore = defineStore("user", () => {
  const {
    data: user,
    error,
    isValidating,
  } = useSWRV<User>("/api/user/me", $fetch, {
    refreshInterval: 5000,
  });

  return { user, error };
});
