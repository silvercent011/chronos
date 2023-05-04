import { getServerSession } from "#auth";

export default defineEventHandler(async (event) => {
  const session = await getServerSession(event);

  try {
    const body = await readBody(event);

    const { name, monthHours } = body;

    const user = await prisma.user.findUnique({
      where: {
        email: session!.user!.email as string,
      },
    });
    const project = await prisma.project.create({
      data: {
        name,
        monthHours: parseInt(monthHours),
        user: {
          connect: {
            id: user!.id,
          },
        },
      },
    });

    return project;
  } catch (error) {
    return sendError(
      event,
      createError({ statusCode: 401, statusMessage: "Unauthorized" })
    );
  }
});
