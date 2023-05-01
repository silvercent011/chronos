import { NuxtAuthHandler } from "#auth";
import GithubProvider from "next-auth/providers/github";

const clientId = process.env.GITHUB_CLIENT_ID;
const clientSecret = process.env.GITHUB_CLIENT_SECRET;

export default NuxtAuthHandler({
  secret: "test",
  providers: [
    // @ts-expect-error You need to use .default here for it to work during SSR. May be fixed via Vite at some point
    GithubProvider.default({
      clientId,
      clientSecret,
    }),
  ],
});
