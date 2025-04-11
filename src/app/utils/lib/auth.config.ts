import Google from "next-auth/providers/google"
import type { NextAuthConfig } from "next-auth"
 
// Notice this is only an object, not a full Auth.js instance
export default {
  providers: [Google],
  pages: {
    signIn: "/auth/signin",
  },
  callbacks: {
    async authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const isOnPages = nextUrl.pathname.startsWith("/pages");
      if (isOnPages) {
        if (isLoggedIn) return true;
        return false; // Redirect unauthenticated users to login page
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
    }

  },
 
} satisfies NextAuthConfig