import { Suspense } from 'react'
import SacerdotesList from './SacerdotesList'

/**
 * Server Component para la sección de sacerdotes
 * Optimizado para rendimiento - No envía JS innecesario al cliente
 */

export default function SacerdotesSectionServer() {
  return (
    <section id="sacerdotes" className="bg-gradient-to-b from-secondary to-secondary-dark px-4 py-24">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold text-white md:text-5xl">
            Nuestros <span className="text-accent">Sacerdotes</span>
          </h2>
          <p className="text-lg text-white/90">
            Al servicio de la comunidad parroquial
          </p>
        </div>

        {/* Lista de Sacerdotes con Suspense */}
        <Suspense fallback={<LoadingSkeleton />}>
          <SacerdotesList />
        </Suspense>
      </div>
    </section>
  )
}

/**
 * Skeleton loader mientras cargan los datos
 */
function LoadingSkeleton() {
  return (
    <div className="grid gap-8 md:grid-cols-2">
      {[1, 2].map((i) => (
        <div
          key={i}
          className="animate-pulse rounded-3xl bg-white/10 p-8"
        >
          <div className="flex flex-col items-center">
            <div className="mb-6 h-48 w-48 rounded-full bg-white/20"></div>
            <div className="h-6 w-48 rounded bg-white/20 mb-2"></div>
            <div className="h-4 w-32 rounded bg-white/20 mb-4"></div>
            <div className="h-20 w-full rounded bg-white/20"></div>
          </div>
        </div>
      ))}
    </div>
  )
}
