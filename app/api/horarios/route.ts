import { NextRequest } from 'next/server'
import { revalidateTag } from 'next/cache'
import { ZodError } from 'zod'
import { HorarioService } from '@/lib/services/horario.service'
import { horarioSchema } from '@/lib/validations/horario'
import { requireAdminRole, AuthenticatedRequest } from '@/lib/middleware/auth'
import {
  successResponse,
  errorResponse,
  validationErrorResponse,
  internalErrorResponse,
} from '@/lib/utils/api-response'

/**
 * GET /api/horarios
 * Obtener todos los horarios activos
 * Ruta pública - usa ISR con revalidación
 */
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const tipo = searchParams.get('tipo') || undefined
    
    const horarios = await HorarioService.getAll(tipo)
    return successResponse(horarios)
  } catch (error) {
    console.error('Error al obtener horarios:', error)
    return internalErrorResponse(error)
  }
}

// Configuración de caché optimizada
export const revalidate = 3600 // ISR: revalidar cada 1 hora

/**
 * POST /api/horarios
 * Crear nuevo horario
 * Requiere autenticación y rol admin
 */
export const POST = requireAdminRole(async (request: AuthenticatedRequest) => {
  try {
    const body = await request.json()
    
    // Validar con Zod
    const validatedData = horarioSchema.parse(body)
    
    // Crear usando servicio
    const nuevoHorario = await HorarioService.create(validatedData)
    
    // Revalidar cache
    revalidateTag('horarios')
    
    return successResponse(
      nuevoHorario,
      'Horario creado exitosamente',
      201
    )
  } catch (error) {
    if (error instanceof ZodError) {
      return validationErrorResponse(error)
    }
    
    if (error instanceof Error) {
      return errorResponse(error.message, 400)
    }
    
    return internalErrorResponse(error)
  }
})
