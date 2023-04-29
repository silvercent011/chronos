export default defineEventHandler(async (event) => {
  const { id } = getRouterParams(event);

  const registers = await prisma.register.findMany({
    where: {
      projectId: id,
    },
  });

  return registers;
});
