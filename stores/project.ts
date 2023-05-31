import { Project, Register } from "@prisma/client";
import { useQuery } from "@tanstack/vue-query";

export const useProjectStore = defineStore("project", () => {
  const projectsFetcher = async () => await $fetch("/api/projects");

  const {
    data: projects,
    error,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["projects"],
    queryFn: projectsFetcher,
    refetchInterval: 5000,
  });

  async function createProject({
    title,
    monthHours,
  }: {
    title: string;
    monthHours: string;
  }) {
    const headers = useRequestHeaders(["cookie"]) as HeadersInit;

    const {
      data: _project,
      error,
      pending,
    } = await useLazyFetch<Project>("/api/projects", {
      method: "POST",
      headers,
      body: { name: title, monthHours },
    });
  }

  async function getTodayRegisters(id: string, dt: Date = new Date()) {
    const headers = useRequestHeaders(["cookie"]) as HeadersInit;

    const date = new Date(dt);

    const {
      data: _registers,
      error,
      pending,
    } = await useFetch<Register[]>(`/api/projects/${id}/registers`, {
      headers,
      query: {
        ano: date.getFullYear(),
        mes: String(date.getMonth() + 1).padStart(2, "0"),
        dia: String(date.getDate()).padStart(2, "0"),
      },
    });

    return _registers;
  }

  async function getMonthRegisters(id: string) {
    const headers = useRequestHeaders(["cookie"]) as HeadersInit;

    const date = new Date();

    const {
      data: _registers,
      error,
      pending,
    } = await useFetch<Register[]>(`/api/projects/${id}/registers`, {
      headers,
      query: {
        ano: date.getFullYear(),
        mes: String(date.getMonth() + 1).padStart(2, "0"),
      },
    });

    return _registers;
  }

  async function exportMonthRegisters(id: string) {
    const headers = useRequestHeaders(["cookie"]) as HeadersInit;

    const date = new Date();

    const { data } = await useFetch(`/api/projects/${id}/report`, {
      headers,
      query: {
        ano: date.getFullYear(),
        mes: String(date.getMonth() + 1).padStart(2, "0"),
      },
    });

    // @ts-ignore
    const url = window.URL.createObjectURL(new Blob([data.value]));
    const link = document.createElement("a");
    link.setAttribute(
      "download",
      `report-${String(date.getMonth() + 1).padStart(
        2,
        "0"
      )}-${date.getFullYear()}.csv`
    );
    link.href = url;
    document.body.appendChild(link);
    link.click();
  }

  return {
    projects,
    createProject,
    getMonthRegisters,
    getTodayRegisters,
    exportMonthRegisters,
  };
});
