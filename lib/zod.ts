import { object, strictObject, string } from "zod";

export const loginSchema = object({
  email: string({ required_error: "Email es requerido" })
    .min(1, "Email es requerido")
    .email("Email inválido"),
  password: string({ required_error: "Contraseña es requerida" })
    .min(1, "Contraseña es requerida")
    .min(6, "La contraseña debe tener un mínimo de 6 carácteres")
    .max(32, "La contraseña no debe sobrepasar los 32 caractéres"),
});

export const registerSchema = object({
  email: string({ required_error: "Email es requerido" })
    .min(1, "Email es requerido")
    .email("Email inválido"),
  password: string({ required_error: "Contraseña es requerida" })
    .min(1, "Contraseña es requerida")
    .min(6, "La contraseña debe tener un mínimo de 6 carácteres")
    .max(32, "La contraseña no debe sobrepasar los 32 caractéres"),
  name: string({ required_error: "Nombre es requerido" })
    .min(1, "Nombre es requerido")
    .max(12, "Nombre no puede tener un máximo de 32 carácteres"),
});
