import { Project, Register } from "@prisma/client";

export async function generateCSVData(
  projectData: Project,
  registers: Register[]
) {
  const { name: projectName, monthHours } = projectData;

  const header = "PROJETO;TITULO;TEMPO GASTO(MINUTOS)";

  const _registers = await Promise.all(
    registers.map(async ({ title, minutes }) => {
      return `${projectName};${title};${minutes}`;
    })
  );

  const { totalHoursOnMonth, uncompleteHoursMinutes } = transformMonthTime({
    values: registers,
  });

  const finalLine = `TOTAL;;${totalHoursOnMonth}h${uncompleteHoursMinutes}min`;

  const content = [header, ..._registers, finalLine].join("\n");

  const csvBuffer = Buffer.from(content, "utf-8");

  const decoder = new TextDecoder("utf-8");

  const csvString = decoder.decode(csvBuffer);

  return csvString;
}
