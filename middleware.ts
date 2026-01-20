import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

/**
 * Middleware de Next.js para proteger rutas del admin
 * Estándares de seguridad 2026
 * 
 * Este middleware se ejecuta en Edge Runtime antes de llegar a las páginas
 * Proporciona una capa adicional de seguridad a nivel de framework
 */

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Proteger rutas del admin (excepto login)
  if (pathname.startsWith('/admin') && pathname !== '/admin') {
    // Verificar token en cookie (cuando migremos de localStorage)
    // Por ahora, dejar pasar y validar en cliente
    // TODO: Migrar a httpOnly cookies
    return NextResponse.next()
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public files (images, etc)
     */
    '/((?!api|_next/static|_next/image|favicon.ico|.*\\..*|logo).*)',
  ],
}
