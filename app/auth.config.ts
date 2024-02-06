import { validatePasswordApi } from "@/src/api/services/auth/auth.service";
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
      async authorize(credentials) : Promise<any>{
        console.log("Llegamos a este punto!!!!! : ", credentials);
        

        const parsedCredencials: any =
        passwordFormValidation.safeParse(credentials);
          console.log("Parese credentials: ", parsedCredencials);
          
        if (!parsedCredencials.success) return null;

        const response = await validatePasswordApi(parsedCredencials.data);
        console.log("RESPONSE DATA :", response);
        
        return response;
      },
    }),
  ],
};

export const { signIn, signOut, auth: middleware } = NextAuth(authConfig);
