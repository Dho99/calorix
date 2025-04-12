import Google from "next-auth/providers/google";
import type { NextAuthConfig } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { findUser } from "../../api/user";
import { validatePassword } from "../../hasher";

export default {
  providers: [
    Google,
    Credentials({
      credentials: {
        email: { label: "Email" },
        password: { label: "Password", type: "password" },
      },
      authorize: async (credentials) => {
        const user = await findUser(credentials?.email as string);

        const verifyPassword = await validatePassword(user?.data?.password as string, credentials?.password as string);

        if (!user || !(verifyPassword)) {
          throw new Error("Invalid credentials.");
        }

        return {
          id: user?.data?.id,
          name: user?.data?.name,
          email: user?.data?.email,
          username: user?.data?.username,
        };
      },
    }),
  ],
  pages: {
    signIn: "/auth/signin",
    error: "/auth/error",
  },
  callbacks: {
    async authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const isOnPages = nextUrl.pathname.startsWith("/pages");
      if (isOnPages) {
        if (isLoggedIn) return true;
        return false;
      } else if (isLoggedIn) {
        return Response.redirect(new URL("/pages/dashboard", nextUrl));
      }
      return false;
    },
    async jwt({ token, user }) {
      if (user) {
        token.user = {
          id: user.id,
          name: user.name,
          email: user.email,
          image: user.image,
        };
      }
      return token;
    },
    async session({ session, token }) {
      if (token.user) {
        session.user = token.user as typeof session.user & {
          id: string;
          username?: string;
        };
      }
      return session;
    },
  },
} satisfies NextAuthConfig;
