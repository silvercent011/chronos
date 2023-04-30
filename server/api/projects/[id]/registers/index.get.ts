export default defineEventHandler(async (event) => {
  const { id } = getRouterParams(event);

  const { mes, ano, dia } = getQuery(event);

  console.log({ mes, ano, dia });

  const registers = await prisma.register.findMany({
    where: {
      projectId: id,
      createdAt: {
        gte: new Date(dia ? `${ano}-${mes}-${dia}` : `${ano}-${mes}-01`),
        lte: new Date(
          dia
            ? `${ano}-${mes}-${String(parseInt(dia as string) + 1).padStart(
                2,
                "0"
              )}`
            : `${ano}-${String(parseInt(mes as string) + 1).padStart(
                2,
                "0"
              )}-01`
        ),
      },
    },
  });

  return registers;
});
