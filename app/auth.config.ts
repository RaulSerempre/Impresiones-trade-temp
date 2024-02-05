import { emailValidationSchema } from "@/src/lib/validations";
import type { NextAuthConfig } from "next-auth";
import NextAuth from "next-auth";
import credentials from "next-auth/providers/credentials";

export const authConfig: NextAuthConfig = {
  pages: {
    signIn: "/auth/login",
  },
  providers: [
    credentials({
      async authorize(credentials, req) {

        const parsedCredencials: any =
          emailValidationSchema.safeParse(credentials);
        if (!parsedCredencials.success) return null;

        // llamar al servicio de login y guardar los datos

        const { email } = parsedCredencials.data;

        return null;
      },
    }),
  ],
};

export const { signIn, signOut, auth: middleware } = NextAuth(authConfig);
