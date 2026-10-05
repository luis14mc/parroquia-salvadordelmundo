import { z } from "zod";

export const GYMKANA_MIN_AGE = 14;
export const GYMKANA_ADULT_AGE = 18;
export const GYMKANA_EVENT_DATE = new Date('2026-10-25T00:00:00');

export const gymkanaSectors = [
  { value: "santa-cruz", label: "Sector Santa Cruz" },
  { value: "salvador-del-mundo", label: "Sector Salvador del Mundo (sede)" },
  { value: "santa-rosa-de-lima", label: "Sector Santa Rosa de Lima" },
  { value: "sagrado-corazon", label: "Sector Sagrado Corazón" },
] as const;

const phoneSchema = z
  .string()
  .trim()
  .min(8, "El número de contacto es obligatorio.")
  .max(20, "El número de contacto es demasiado largo.")
  .refine((value) => value.replace(/\D/g, "").length >= 8, "Ingresa un número de contacto válido.");

const dateSchema = z
  .string()
  .trim()
  .regex(/^\d{4}-\d{2}-\d{2}$/, "Ingresa una fecha de nacimiento válida.");

function calculateAgeAtEvent(dateValue: string) {
  const birth = new Date(`${dateValue}T00:00:00`);
  if (Number.isNaN(birth.getTime())) return Number.NaN;
  let age = GYMKANA_EVENT_DATE.getFullYear() - birth.getFullYear();
  const monthDifference = GYMKANA_EVENT_DATE.getMonth() - birth.getMonth();

  if (monthDifference < 0 || (monthDifference === 0 && GYMKANA_EVENT_DATE.getDate() < birth.getDate())) {
    age -= 1;
  }

  return age;
}

export const gymkanaRegistrationSchema = z
  .object({
    nombre_completo: z.string().trim().min(3, "Ingresa el nombre completo."),
    fecha_nacimiento: dateSchema,
    telefono_contacto: phoneSchema,
    correo: z.string().trim().email("Ingresa un correo válido.").optional().or(z.literal("")),
    sector: z.enum(
      ["santa-cruz", "salvador-del-mundo", "santa-rosa-de-lima", "sagrado-corazon"],
      { errorMap: () => ({ message: "Selecciona el sector al que perteneces." }) },
    ),
    alergias_medicas: z.string().trim().max(500).optional().or(z.literal("")),
    nombre_encargado: z.string().trim().max(200).optional().or(z.literal("")),
    privacidad_aceptada: z.literal(true, {
      error: "Debes aceptar el aviso de privacidad.",
    }),
    website: z.string().max(500).optional().or(z.literal("")),
  })
  .superRefine((input, ctx) => {
    const age = calculateAgeAtEvent(input.fecha_nacimiento);

    if (!Number.isFinite(age) || age < GYMKANA_MIN_AGE) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["fecha_nacimiento"],
        message: `La edad mínima para participar es de ${GYMKANA_MIN_AGE} años al 25 de octubre de 2026.`,
      });
    }

    if (age < GYMKANA_ADULT_AGE && !input.nombre_encargado?.trim()) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["nombre_encargado"],
        message: "Si eres menor de 18 años, indica el nombre de tu padre, madre o encargado.",
      });
    }
  });

export type GymkanaRegistrationInput = z.infer<typeof gymkanaRegistrationSchema>;

export function nullableText(value?: string) {
  const normalized = value?.trim();
  return normalized ? normalized : null;
}