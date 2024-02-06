import * as z from "zod";

export const passwordFormValidation = z.object({
  email: z.string()
  .min(1, {
    message: "El correo electrónico es requerido",
  })
  .email({
    message: "El correo electrónico no es válido",
  }),
  password: z.string()
  .min(1, {
    message: "La contraseña es requerida",
  })
})

export type IValidatePasswordRequest = z.infer<typeof passwordFormValidation>