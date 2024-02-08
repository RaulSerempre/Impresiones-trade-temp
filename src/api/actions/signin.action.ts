"use server";

import { signIn } from "@/app/auth.config";
import { ISignInRequest } from "@/src/interfaces/auth/signin.interface";

export const signInAction = async (data: ISignInRequest) => {
  try {
    await signIn("credentials", {
      ...data,
      redirect: false,
    });

    return "success";
  } catch (error) {
    throw "CreadetialsSignin";
  }
};
