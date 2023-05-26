export default defineEventHandler(async (event) => {
  const { id } = getRouterParams(event);

  const { mes, ano, dia } = getQuery(event);

  const { gte, lte } = createDate(ano as string, mes as string, dia as any);

  const registers = await prisma.register.findMany({
    where: {
      projectId: id,
      createdAt: {
        gte,
        lte,
      },
    },
  });

  return registers;
});
