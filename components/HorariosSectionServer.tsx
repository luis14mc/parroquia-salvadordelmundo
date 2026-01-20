import { Suspense } from 'react'
import HorariosList from './HorariosList'

/**
 * Server Component para la sección de horarios
 * Renderiza datos directamente desde el servidor
 */

export default function HorariosSectionServer() {
  return (
    <section id="horarios" className="bg-gray-50 px-4 py-24">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold text-secondary md:text-5xl">
            Horarios de <span className="text-primary">Misas</span>
          </h2>
          <p className="text-lg text-gray-600">
            Te esperamos en nuestras celebraciones
          </p>
        </div>

        {/* Lista de Horarios con Suspense */}
        <Suspense fallback={<LoadingSkeleton />}>
          <HorariosList />
        </Suspense>
      </div>
    </section>
  )
}

/**
 * Skeleton loader
 */
function LoadingSkeleton() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {[1, 2, 3, 4].map((i) => (
        <div
          key={i}
          className="animate-pulse rounded-2xl bg-gray-200 p-6"
        >
          <div className="mb-4 flex items-center gap-3">
            <div className="h-12 w-12 rounded-xl bg-gray-300"></div>
            <div className="flex-1">
              <div className="h-5 w-32 rounded bg-gray-300 mb-2"></div>
              <div className="h-4 w-24 rounded bg-gray-300"></div>
            </div>
          </div>
          <div className="space-y-2">
            <div className="h-8 w-24 rounded bg-gray-300"></div>
            <div className="h-4 w-40 rounded bg-gray-300"></div>
          </div>
        </div>
      ))}
    </div>
  )
}
