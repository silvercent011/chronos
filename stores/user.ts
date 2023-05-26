import { useQuery } from "@tanstack/vue-query";

export const useUserStore = defineStore("user", () => {
  const userFetcher = async () => await $fetch("/api/user/me");

  const {
    data: user,
    error,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["user"],
    queryFn: userFetcher,
    refetchInterval: 5000,
  });

  return { user, error, isError, isLoading };
});
