function converterHorasParaMinutos(horasString: string) {
  const regex = /^(\d+h)?(\d+m)?$/;
  const matches = regex.exec(horasString);

  if (!matches) {
    throw new Error("Formato de hora inválido.");
  }

  const horas = matches[1] ? parseInt(matches[1]) : 0;
  const minutos = matches[2] ? parseInt(matches[2]) : 0;

  return horas * 60 + minutos;
}

export const useRegisterStore = defineStore("register", () => {
  async function createRegister(payload: any) {
    const headers = useRequestHeaders(["cookie"]) as HeadersInit;

    const convertedMinutes = converterHorasParaMinutos(payload.minutes);
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

    if (_register.value) {
      // fetchRegisters();
    }
  }

  return { createRegister };
});
