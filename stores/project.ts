import { Project, Register } from "@prisma/client";
import useSWRV from "swrv";

export const useProjectStore = defineStore("project", () => {
  // const projects = ref<Project[]>([]);

  const {
    data: projects,
    error,
    mutate: mutateProjects,
  } = useSWRV<Project[]>("/api/projects", $fetch, { refreshInterval: 15000 });

  async function createProject({
    title,
    monthHours,
  }: {
    title: string;
    monthHours: string;
  }) {
    const headers = useRequestHeaders(["cookie"]) as HeadersInit;

    const { data: _project } = await useLazyFetch<Project>("/api/projects", {
      method: "POST",
      headers,
      body: { name: title, monthHours },
    });
  }

  async function getTodayRegisters(id: string, dt: Date = new Date()) {
    const headers = useRequestHeaders(["cookie"]) as HeadersInit;

    const date = new Date(dt);

    const { data: _registers } = await useFetch<Register[]>(
      `/api/projects/${id}/registers`,
      {
        headers,
        query: {
          ano: date.getFullYear(),
          mes: String(date.getMonth() + 1).padStart(2, "0"),
          dia: String(date.getDate()).padStart(2, "0"),
        },
      }
    );

    return _registers;
  }

  async function getMonthRegisters(id: string) {
    const headers = useRequestHeaders(["cookie"]) as HeadersInit;

    const date = new Date();

    const { data: _registers } = await useFetch<Register[]>(
      `/api/projects/${id}/registers`,
      {
        headers,
        query: {
          ano: date.getFullYear(),
          mes: String(date.getMonth() + 1).padStart(2, "0"),
        },
      }
    );

    return _registers;
  }

  return {
    projects,
    createProject,
    getMonthRegisters,
    getTodayRegisters,
  };
});
