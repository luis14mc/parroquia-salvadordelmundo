import { z } from "zod";

const phoneSchema = z
  .string()
  .trim()
  .min(8, "El número de contacto es obligatorio.")
  .max(20, "El número de contacto es demasiado largo.")
  .refine((value) => value.replace(/\D/g, "").length >= 8, "Ingresa un número de contacto válido.");

function calculateAge(dateValue: string) {
  const birth = new Date(`${dateValue}T00:00:00`);
  const today = new Date();
  let age = today.getFullYear() - birth.getFullYear();
  const monthDifference = today.getMonth() - birth.getMonth();

  if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birth.getDate())) {
    age -= 1;
  }

  return age;
}

export const catequesisRegistrationSchema = z
  .object({
    programa: z.enum(["adultos", "primera-comunion", "confirmacion"]),
    nombre_completo: z.string().trim().min(3, "Ingresa el nombre completo."),
    fecha_nacimiento: z.string().date("Ingresa una fecha de nacimiento válida."),
    telefono_contacto: phoneSchema,
    correo: z.string().trim().email("Ingresa un correo válido.").optional().or(z.literal("")),
    direccion: z.string().trim().max(300).optional().or(z.literal("")),
    sector: z.string().trim().max(120).optional().or(z.literal("")),
    responsable_nombre: z.string().trim().max(200).optional().or(z.literal("")),
    estado_bautismo: z.enum(["tiene-fe", "no-bautizado", "no-aplica"]).default("no-aplica"),
    estado_comunion: z.enum(["tiene-constancia", "no-comunion", "no-aplica"]).default("no-aplica"),
    sin_sacramentos_confirmado: z.boolean().default(false),
    privacidad_aceptada: z.literal(true, { errorMap: () => ({ message: "Debes aceptar el aviso de privacidad." }) }),
    website: z.string().max(0).optional().or(z.literal("")),
  })
  .superRefine((input, ctx) => {
    const age = calculateAge(input.fecha_nacimiento);
    const minimumAge = input.programa === "adultos" ? 18 : input.programa === "confirmacion" ? 15 : 9;

    if (age < minimumAge) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["fecha_nacimiento"],
        message: `La edad mínima para este proceso es de ${minimumAge} años.`,
      });
    }

    if (input.programa === "adultos" && !input.sin_sacramentos_confirmado) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["sin_sacramentos_confirmado"],
        message: "Confirma que no has recibido los sacramentos de iniciación cristiana.",
      });
    }

    if (input.programa === "primera-comunion") {
      if (!input.responsable_nombre?.trim()) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          path: ["responsable_nombre"],
          message: "Ingresa el nombre del padre, madre o encargado.",
        });
      }

      if (input.estado_bautismo === "no-aplica") {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          path: ["estado_bautismo"],
          message: "Indica la situación del Bautismo.",
        });
      }
    }

    if (input.programa === "confirmacion") {
      if (!input.responsable_nombre?.trim()) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          path: ["responsable_nombre"],
          message: "Ingresa el nombre del padre, madre o encargado.",
        });
      }

      if (input.estado_bautismo === "no-aplica") {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          path: ["estado_bautismo"],
          message: "Indica la situación del Bautismo.",
        });
      }

      if (input.estado_comunion === "no-aplica") {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          path: ["estado_comunion"],
          message: "Indica la situación de la Primera Comunión.",
        });
      }
    }
  });

export type CatequesisRegistrationInput = z.infer<typeof catequesisRegistrationSchema>;

export function nullableText(value?: string) {
  const normalized = value?.trim();
  return normalized ? normalized : null;
}