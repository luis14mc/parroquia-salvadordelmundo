import { z } from 'zod'

/**
 * Schema de validación para crear/actualizar sacerdotes
 * Implementa validaciones estrictas según estándares 2026
 */
export const sacerdoteSchema = z.object({
  nombre: z
    .string()
    .min(3, 'El nombre debe tener al menos 3 caracteres')
    .max(100, 'El nombre no puede exceder 100 caracteres')
    .trim(),
  
  cargo: z
    .string()
    .min(3, 'El cargo debe tener al menos 3 caracteres')
    .max(100, 'El cargo no puede exceder 100 caracteres')
    .trim(),
  
  descripcion: z
    .string()
    .min(10, 'La descripción debe tener al menos 10 caracteres')
    .max(1000, 'La descripción no puede exceder 1000 caracteres')
    .trim(),
  
  imagen: z
    .string()
    .url('Debe ser una URL válida')
    .regex(/\.(jpg|jpeg|png|webp|gif)$/i, 'Debe ser una imagen válida (jpg, png, webp, gif)')
    .trim(),
  
  email: z
    .string()
    .email('Debe ser un email válido')
    .optional()
    .or(z.literal('')),
  
  telefono: z
    .string()
    .regex(/^[\d\s\-\+\(\)]+$/, 'Formato de teléfono inválido')
    .min(8, 'El teléfono debe tener al menos 8 dígitos')
    .max(20, 'El teléfono no puede exceder 20 caracteres')
    .optional()
    .or(z.literal('')),
  
  orden: z
    .number()
    .int()
    .min(0, 'El orden debe ser un número positivo')
    .optional(),
  
  activo: z
    .boolean()
    .optional()
    .default(true),
})

export type SacerdoteInput = z.infer<typeof sacerdoteSchema>

/**
 * Schema para actualización parcial
 */
export const sacerdoteUpdateSchema = sacerdoteSchema.partial()
