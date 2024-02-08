import { signInService } from "@/src/api/services/auth/signin.service";
import { passwordFormValidation } from "@/src/lib/validations/password-form.validation";
import type { NextAuthConfig } from "next-auth";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
export const authConfig: NextAuthConfig = {
  pages: {
    signIn: "/auth/password",
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      async authorize(credentials): Promise<any> {
        const parsedCredencials: any =
          passwordFormValidation.safeParse(credentials);

        if (!parsedCredencials.success) return null;

        const response = await signInService(parsedCredencials.data);
        return response;
      },
    }),
  ],
};

export const { signIn, signOut, auth, handlers } = NextAuth(authConfig);
