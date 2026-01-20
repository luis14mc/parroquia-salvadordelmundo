'use client'

import { useEffect } from 'react'
import { AlertTriangle } from 'lucide-react'

/**
 * Error boundary para dashboard admin
 */

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error('Error en dashboard admin:', error)
  }, [error])

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 text-center shadow-xl">
        <div className="mb-6 flex justify-center">
          <div className="rounded-full bg-red-100 p-4">
            <AlertTriangle className="h-10 w-10 text-red-600" />
          </div>
        </div>
        
        <h2 className="mb-2 text-xl font-bold text-secondary">
          Error en el Dashboard
        </h2>
        
        <p className="mb-6 text-sm text-gray-600">
          Ocurrió un error al cargar el panel de administración.
        </p>
        
        <div className="space-y-3">
          <button
            onClick={reset}
            className="w-full rounded-lg bg-primary px-6 py-3 font-semibold text-white transition-colors hover:bg-primary-dark"
          >
            Reintentar
          </button>
          
          <a
            href="/admin"
            className="block w-full rounded-lg border-2 border-gray-300 px-6 py-3 font-semibold text-secondary transition-colors hover:bg-gray-50"
          >
            Volver al login
          </a>
        </div>
      </div>
    </div>
  )
}
