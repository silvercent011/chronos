import { Project, Register } from "@prisma/client";

export const useProjectStore = defineStore("project", () => {
  const projects = ref<Project[]>([]);

  async function fetchProjects() {
    const headers = useRequestHeaders(["cookie"]) as HeadersInit;

    const { data: _projects } = await useFetch<Project[]>("/api/projects", {
      headers,
    });

    if (_projects.value) {
      projects.value = _projects.value;
    }
  }

  async function createProject({ title }: { title: string }) {
    const headers = useRequestHeaders(["cookie"]) as HeadersInit;

    const { data: _project } = await useLazyFetch<Project>("/api/projects", {
      method: "POST",
      headers,
      body: { name: title },
    });

    if (_project.value) {
      fetchProjects();
    }
  }

  async function getTodayRegisters(
    id: string,
    dt: string = new Date().toString()
  ) {
    const headers = useRequestHeaders(["cookie"]) as HeadersInit;

    const date = new Date(dt);

    console.log(id);

    const { data: _registers } = await useFetch<Register[]>(
      `/api/projects/${id}/registers`,
      {
        headers,
        query: {
          ano: date.getFullYear(),
          mes: String(date.getMonth() + 1).padStart(2, "0"),
          dia: String(date.getDate() + 1).padStart(2, "0"),
        },
      }
    );

    return _registers;
  }

  async function getMonthRegisters(id: string) {
    const headers = useRequestHeaders(["cookie"]) as HeadersInit;

    const { data: _registers } = await useFetch<Register[]>(
      `/api/projects/${id}/registers`,
      {
        headers,
        query: {
          ano: new Date().getFullYear(),
          mes: String(new Date().getMonth() + 1).padStart(2, "0"),
        },
      }
    );

    return _registers;
  }

  return {
    projects,
    fetchProjects,
    createProject,
    getMonthRegisters,
    getTodayRegisters,
  };
});
