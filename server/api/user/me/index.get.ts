import { getServerSession } from "#auth";

export default defineEventHandler(async (event) => {
  const session = await getServerSession(event);

  if (session && session.user) {
    const user = await prisma.user.upsert({
      update: {},
      create: {
        email: session.user.email as string,
        name: session.user.name as string,
      },
      where: {
        email: session.user.email as string,
      },
    });

    return user;
  }
});
