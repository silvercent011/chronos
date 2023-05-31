export default defineEventHandler(async (event) => {
  const { id } = getRouterParams(event);

  const { mes, ano, dia } = getQuery(event);

  const { gte, lte } = createDate(ano as string, mes as string, dia as any);

  const project = await prisma.project.findUnique({
    where: {
      id,
    },
  });

  const registers = await prisma.register.findMany({
    where: {
      projectId: id,
      createdAt: {
        gte,
        lte,
      },
    },
  });

  const csvPayload = await generateCSVData(project!, registers);

  setHeader(
    event,
    "Content-Disposition",
    `attachment; filename=report-${mes}-${ano}.csv`
  );

  setHeader(event, "Content-Type", "text/csv");

  return csvPayload;
});
