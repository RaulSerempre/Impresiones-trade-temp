import * as z from "zod";

export const newPasswordFormSchema = z
  .object({
    password: z
      .string()
      .min(8, {
        message: "La contraseña debe tener al menos 8 caracteres",
      })
      .regex(
        new RegExp(".*[A-Z].*"),
        "La contraseña debe tener una letra mayúscula."
      )
      .regex(
        new RegExp(".*\\d.*"),
        "La contraseña debe tener al menos un número"
      )
      .regex(
        new RegExp(".*[`~<>?,./!@#$%^&*()\\-_+=\"'|{}\\[\\];:\\\\].*"),
        "La contraseña debe tener al menos un símbolo"
      ),
    confirmPassword: z.string().min(1, {
      message: "La contraseña es requerida",
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Las contraseñas no coinciden",
    path: ["confirmPassword"],
  });

export type INewPasswordRequest = z.infer<typeof newPasswordFormSchema>;
