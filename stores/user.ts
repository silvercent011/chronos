import { User } from "@prisma/client";

export const useUserStore = defineStore("user", () => {
  const user = ref<User>();

  async function fetchUserData() {
    const headers = useRequestHeaders(["cookie"]) as HeadersInit;

    const { data: _user } = await useFetch<User>("/api/user/me", { headers });

    if (_user.value) {
      user.value = _user.value;
    }
  }

  return { user, fetchUserData };
});
