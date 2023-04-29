import { getServerSession } from "#auth";

export default defineEventHandler(async (event) => {
  const session = await getServerSession(event);

  try {
    const user = await prisma.user.findUnique({
      where: {
        email: session!.user!.email as string,
      },
    });

    const projects = await prisma.project.findMany({
      where: {
        userId: user!.id,
      },
    });

    return projects;
  } catch (error) {
    return sendError(
      event,
      createError({ statusCode: 401, statusMessage: "Unauthorized" })
    );
  }
});
