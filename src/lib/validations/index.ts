import * as z from "zod";

export const emailValidationSchema = z.object({
  email: z.string()
  .min(1, {
    message: "El correo electrónico es requerido",
  })
  .email({
    message: "El correo electrónico no es válido",
  }),
  remember: z.boolean(),
})

export type IValidateEmailRequest = z.infer<typeof emailValidationSchema>