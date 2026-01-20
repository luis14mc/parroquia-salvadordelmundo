import { z } from 'zod'

/**
 * Schema de validación para horarios de misas y servicios
 */
export const horarioSchema = z.object({
  tipo: z
    .enum(['misa', 'confesion', 'adoracion', 'despacho', 'catequesis', 'otro'])
    .describe('Tipo de servicio parroquial'),
  
  dia: z
    .string()
    .min(3, 'El día debe especificarse')
    .max(50, 'El día no puede exceder 50 caracteres')
    .trim(),
  
  hora: z
    .string()
    .regex(/^([01]?\d|2[0-3]):[0-5]\d( (AM|PM|am|pm))?$/, 'Formato de hora inválido (ej: 6:00 AM, 18:00)')
    .trim(),
  
  lugar: z
    .string()
    .max(200, 'El lugar no puede exceder 200 caracteres')
    .optional()
    .or(z.literal('')),
  
  descripcion: z
    .string()
    .max(500, 'La descripción no puede exceder 500 caracteres')
    .optional()
    .or(z.literal('')),
  
  orden: z
    .number()
    .int()
    .min(0)
    .optional()
    .default(0),
  
  activo: z
    .boolean()
    .optional()
    .default(true),
})

export type HorarioInput = z.infer<typeof horarioSchema>
export const horarioUpdateSchema = horarioSchema.partial()
