import { NextResponse } from 'next/server'
import { ZodError } from 'zod'

/**
 * Utilidades para respuestas consistentes de API
 * Estándares 2026
 */

export interface ApiResponse<T = any> {
  success: boolean
  data?: T
  error?: string
  errors?: Array<{ field: string; message: string }>
  message?: string
}

/**
 * Respuesta exitosa
 */
export function successResponse<T>(data: T, message?: string, status: number = 200) {
  return NextResponse.json(
    {
      success: true,
      data,
      ...(message && { message }),
    } as ApiResponse<T>,
    { status }
  )
}

/**
 * Respuesta de error
 */
export function errorResponse(error: string, status: number = 400) {
  return NextResponse.json(
    {
      success: false,
      error,
    } as ApiResponse,
    { status }
  )
}

/**
 * Respuesta de errores de validación (Zod)
 */
export function validationErrorResponse(error: ZodError) {
  const errors = error.issues.map((err) => ({
    field: err.path.join('.'),
    message: err.message,
  }))

  return NextResponse.json(
    {
      success: false,
      error: 'Errores de validación',
      errors,
    } as ApiResponse,
    { status: 400 }
  )
}

/**
 * Respuesta de error interno del servidor
 */
export function internalErrorResponse(error?: any) {
  console.error('Internal Server Error:', error)
  
  return NextResponse.json(
    {
      success: false,
      error: 'Error interno del servidor',
    } as ApiResponse,
    { status: 500 }
  )
}

/**
 * Respuesta de no autorizado
 */
export function unauthorizedResponse(message: string = 'No autorizado') {
  return NextResponse.json(
    {
      success: false,
      error: message,
    } as ApiResponse,
    { status: 401 }
  )
}

/**
 * Respuesta de prohibido (sin permisos)
 */
export function forbiddenResponse(message: string = 'Acceso denegado') {
  return NextResponse.json(
    {
      success: false,
      error: message,
    } as ApiResponse,
    { status: 403 }
  )
}

/**
 * Respuesta de no encontrado
 */
export function notFoundResponse(message: string = 'Recurso no encontrado') {
  return NextResponse.json(
    {
      success: false,
      error: message,
    } as ApiResponse,
    { status: 404 }
  )
}
