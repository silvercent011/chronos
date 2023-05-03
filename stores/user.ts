import { User } from "@prisma/client";
import useSWRV from "swrv";

export const useUserStore = defineStore("user", () => {
  const { data: user } = useSWRV<User>("/api/user/me", $fetch, {
    refreshInterval: 15000,
  });

  return { user };
});
