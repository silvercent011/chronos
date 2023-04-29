import { getServerSession } from "#auth";

export default defineEventHandler(async (event) => {
  const session = await getServerSession(event);

  try {
    const body = await readBody(event);

    const { title, minutes, jiraUrl, githubUrl, registerType, projectId } =
      body;

    const user = await prisma.user.findUnique({
      where: {
        email: session!.user!.email as string,
      },
    });
    const register = await prisma.register.create({
      data: {
        title,
        minutes,
        jiraUrl,
        githubUrl,
        registerType,
        projectId,
      },
    });

    return register;
  } catch (error) {
    return sendError(
      event,
      createError({ statusCode: 401, statusMessage: "Unauthorized" })
    );
  }
});
