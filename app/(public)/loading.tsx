/**
 * Loading UI para rutas públicas
 * Implementa Streaming SSR de Next.js 15
 */

export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-b from-white to-gray-50">
      <div className="text-center">
        {/* Logo animado */}
        <div className="mb-8 flex justify-center">
          <div className="relative h-20 w-20">
            <div className="absolute inset-0 animate-spin rounded-full border-4 border-primary border-t-transparent"></div>
            <div className="absolute inset-2 animate-pulse rounded-full bg-primary/10"></div>
          </div>
        </div>
        
        {/* Texto */}
        <h2 className="mb-2 text-xl font-semibold text-secondary">
          Cargando
        </h2>
        <p className="text-sm text-gray-600">
          Parroquia El Salvador del Mundo
        </p>
      </div>
    </div>
  )
}
