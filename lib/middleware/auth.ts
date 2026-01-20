import { NextRequest, NextResponse } from 'next/server'
import jwt from 'jsonwebtoken'

/**
 * Middleware de autenticación para proteger API routes
 * Estándares de seguridad 2026
 */

export interface AuthenticatedRequest extends NextRequest {
  user?: {
    username: string
    role: string
  }
}

/**
 * Verifica el token JWT del header Authorization
 * @returns Usuario autenticado o null si token inválido
 */
export function verifyAuthToken(request: NextRequest): { user: any } | null {
  try {
    const authHeader = request.headers.get('authorization')
    
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return null
    }

    const token = authHeader.substring(7)
    const jwtSecret = process.env.JWT_SECRET

    if (!jwtSecret) {
      console.error('JWT_SECRET no configurado')
      return null
    }

    const decoded = jwt.verify(token, jwtSecret)
    return { user: decoded }
  } catch (error) {
    console.error('Error verificando token:', error)
    return null
  }
}

/**
 * Middleware que requiere autenticación
 * Retorna 401 si no hay token válido
 * Soporta rutas simples y rutas con parámetros dinámicos
 */
export function requireAuth<T extends any[]>(
  handler: (req: AuthenticatedRequest, ...args: T) => Promise<NextResponse>
) {
  return async (request: NextRequest, ...args: T) => {
    const auth = verifyAuthToken(request)
    
    if (!auth) {
      return NextResponse.json(
        { error: 'No autorizado. Token inválido o expirado.' },
        { status: 401 }
      )
    }

    // Agregar usuario al request
    const authenticatedRequest = request as AuthenticatedRequest
    authenticatedRequest.user = auth.user

    return handler(authenticatedRequest, ...args)
  }
}

/**
 * Verifica rol de administrador
 */
export function requireAdmin(request: AuthenticatedRequest): boolean {
  return request.user?.role === 'admin'
}

/**
 * Wrapper para handlers que requieren rol admin
 * Soporta rutas simples y rutas con parámetros dinámicos
 */
export function requireAdminRole<T extends any[]>(
  handler: (req: AuthenticatedRequest, ...args: T) => Promise<NextResponse>
) {
  return requireAuth(async (request: AuthenticatedRequest, ...args: T) => {
    if (!requireAdmin(request)) {
      return NextResponse.json(
        { error: 'Acceso denegado. Se requiere rol de administrador.' },
        { status: 403 }
      )
    }
    
    return handler(request, ...args)
  })
}
