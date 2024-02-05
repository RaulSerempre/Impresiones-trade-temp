'use server';

import { signIn } from "@/app/auth.config";

export async function authentication ( formData: any) {
  console.log("Correr este codigo");
  
  try {
    await signIn('credentials', Object.fromEntries(formData));
  } catch (error) {
    return 'CreadetialsSignin'
  }
}