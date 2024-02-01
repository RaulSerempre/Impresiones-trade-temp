import * as z from "zod";

export const passwordFormValidation = z.object({
  password: z.string()
  .min(1, {
    message: "La contraseña es requerida",
  })
})

export type IValidatePasswordRequest = z.infer<typeof passwordFormValidation>