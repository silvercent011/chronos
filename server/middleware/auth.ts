import { getServerSession } from "#auth";

export default eventHandler(async (event) => {
  const session = await getServerSession(event);

  const openRoutes = ["/", "/login"];

  if (
    !session &&
    !event.path?.startsWith("/api/auth") &&
    !openRoutes.includes(event.path as string)
  ) {
    throw createError({ statusMessage: "Unauthenticated", statusCode: 403 });
  }
});
