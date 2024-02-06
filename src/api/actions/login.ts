'use server';

import { signIn } from "@/app/auth.config";

export async function authentication (prevState: string | undefined,  formData: FormData) {
  formData.append('email', 'ricardo@gmail.com')
  
  console.log("Correr este codigo : " , formData );

  try {
    await signIn('credentials',  Object.fromEntries(formData));
  } catch (error) {
    console.log("ERROR : ", error);
    
    return 'CreadetialsSignin'
  }
}