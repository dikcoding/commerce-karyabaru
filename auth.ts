import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import Credentials from "next-auth/providers/credentials";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Google,
    Credentials({
      authorize: async (credentials) => {
        if (
          credentials.email === "admin@gmail.com" &&
          credentials.password == "admin123"
        )
          return credentials;
        return null;
      },
    }),
  ],
});
