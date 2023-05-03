import { getServerSession } from "#auth";

export default eventHandler(async (event) => {
  const session = await getServerSession(event);

  const openRoutes = ["/", "/login"];

  if (
    !session &&
    !event.path?.startsWith("/api") &&
    !openRoutes.includes(event.path as string)
  ) {
    if (event.path!.startsWith("/api")) {
      throw createError({ statusMessage: "Unauthenticated", statusCode: 403 });
    }
  }
});
