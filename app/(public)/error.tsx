'use client'

import { useEffect } from 'react'
import { AlertTriangle } from 'lucide-react'

/**
 * Error boundary para rutas públicas
 * Maneja errores de forma elegante
 */

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error('Error en página pública:', error)
  }, [error])

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-b from-white to-gray-50 px-4">
      <div className="w-full max-w-md text-center">
        <div className="mb-6 flex justify-center">
          <div className="rounded-full bg-red-100 p-4">
            <AlertTriangle className="h-12 w-12 text-red-600" />
          </div>
        </div>
        
        <h2 className="mb-2 text-2xl font-bold text-secondary">
          Algo salió mal
        </h2>
        
        <p className="mb-6 text-gray-600">
          Lo sentimos, ocurrió un error al cargar esta página.
        </p>
        
        <div className="space-y-3">
          <button
            onClick={reset}
            className="w-full rounded-lg bg-primary px-6 py-3 font-semibold text-white transition-colors hover:bg-primary-dark"
          >
            Intentar de nuevo
          </button>
          
          <a
            href="/"
            className="block w-full rounded-lg border-2 border-gray-300 px-6 py-3 font-semibold text-secondary transition-colors hover:bg-gray-50"
          >
            Volver al inicio
          </a>
        </div>
        
        {process.env.NODE_ENV === 'development' && (
          <details className="mt-6 rounded-lg bg-gray-100 p-4 text-left">
            <summary className="cursor-pointer font-semibold text-red-600">
              Detalles del error (desarrollo)
            </summary>
            <pre className="mt-2 overflow-auto text-xs text-gray-700">
              {error.message}
            </pre>
          </details>
        )}
      </div>
    </div>
  )
}
