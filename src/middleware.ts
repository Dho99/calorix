import NextAuth from "next-auth"
import authConfig from "@/app/utils/lib/auth/auth.config"

 
export const { auth: middleware } = NextAuth(authConfig)

export const config = {
  matcher: ['/pages/user/:path*']
};

