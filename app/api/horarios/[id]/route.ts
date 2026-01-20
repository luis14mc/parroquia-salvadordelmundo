import { NextRequest } from 'next/server'
import { revalidateTag } from 'next/cache'
import { ZodError } from 'zod'
import { HorarioService } from '@/lib/services/horario.service'
import { horarioUpdateSchema } from '@/lib/validations/horario'
import { requireAdminRole, AuthenticatedRequest } from '@/lib/middleware/auth'
import {
  successResponse,
  errorResponse,
  validationErrorResponse,
  internalErrorResponse,
  notFoundResponse,
} from '@/lib/utils/api-response'

/**
 * PUT /api/horarios/[id]
 * Actualizar horario existente
 * Requiere autenticación y rol admin
 */
export const PUT = requireAdminRole(async (
  request: AuthenticatedRequest,
  context: { params: Promise<{ id: string }> }
) => {
  try {
    const { id } = await context.params
    const body = await request.json()
    
    // Validar con Zod (parcial para updates)
    const validatedData = horarioUpdateSchema.parse(body)
    
    // Actualizar usando servicio
    const horario = await HorarioService.update(id, validatedData)
    
    // Revalidar cache
    revalidateTag('horarios')
    
    return successResponse(horario, 'Horario actualizado exitosamente')
  } catch (error) {
    if (error instanceof ZodError) {
      return validationErrorResponse(error)
    }
    
    if (error instanceof Error) {
      if (error.message.includes('no encontrado')) {
        return notFoundResponse(error.message)
      }
      return errorResponse(error.message, 400)
    }
    
    return internalErrorResponse(error)
  }
})

/**
 * DELETE /api/horarios/[id]
 * Eliminar horario
 * Requiere autenticación y rol admin
 */
export const DELETE = requireAdminRole(async (
  request: AuthenticatedRequest,
  context: { params: Promise<{ id: string }> }
) => {
  try {
    const { id } = await context.params
    
    // Eliminar usando servicio
    await HorarioService.delete(id)
    
    // Revalidar cache
    revalidateTag('horarios')
    
    return successResponse(null, 'Horario eliminado exitosamente')
  } catch (error) {
    if (error instanceof Error) {
      return errorResponse(error.message, 400)
    }
    
    return internalErrorResponse(error)
  }
})
