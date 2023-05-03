export const useRegisterStore = defineStore("register", () => {
  async function createRegister(payload: any) {
    const headers = useRequestHeaders(["cookie"]) as HeadersInit;

    const convertedMinutes = convertHoursToMinutes(payload.minutes);
    const finalPayload = {
      title: payload.title,
      minutes: convertedMinutes,
      jiraUrl: payload.jiraUrl,
      githubUrl: payload.githubUrl,
      registerType: "DEFAULT",
      projectId: payload.projectId,
    };

    const { data: _register } = await useLazyFetch<any>("/api/registers", {
      method: "POST",
      headers,
      body: finalPayload,
    });
  }

  return { createRegister };
});
