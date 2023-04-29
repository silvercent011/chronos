import { Project } from "@prisma/client";

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

  return { projects, fetchProjects, createProject };
});
