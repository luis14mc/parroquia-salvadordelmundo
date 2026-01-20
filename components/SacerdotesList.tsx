import { Mail, Phone } from 'lucide-react'
import Image from 'next/image'
import { SacerdoteService } from '@/lib/services/sacerdote.service'

/**
 * Server Component optimizado para listar sacerdotes
 * No envía JavaScript al cliente - Solo HTML
 * Usa ISR con revalidación automática
 */

export default async function SacerdotesList() {
  const sacerdotes = await SacerdoteService.getAll()

  if (sacerdotes.length === 0) {
    return null
  }

  return (
    <div className="grid gap-8 md:grid-cols-2">
      {sacerdotes.map((sacerdote) => (
        <div
          key={sacerdote.id}
          className="group relative overflow-hidden rounded-3xl bg-white p-8 shadow-2xl transition-all duration-300 hover:shadow-accent/20"
        >
          <div className="flex flex-col items-center text-center">
            <div className="relative mb-6 h-48 w-48 overflow-hidden rounded-full shadow-lg transition-transform duration-300 group-hover:scale-105">
              <Image
                src={sacerdote.imagen}
                alt={sacerdote.nombre}
                fill
                sizes="(max-width: 768px) 100vw, 400px"
                className="object-cover"
                loading="lazy"
              />
            </div>

            <h3 className="mb-2 text-2xl font-bold text-secondary">
              {sacerdote.nombre}
            </h3>
            <p className="mb-4 font-semibold text-primary">
              {sacerdote.cargo}
            </p>
            <p className="mb-6 text-gray-600">
              {sacerdote.descripcion}
            </p>

            {/* Contacto */}
            {(sacerdote.email || sacerdote.telefono) && (
              <div className="w-full space-y-3 border-t border-gray-200 pt-6">
                {sacerdote.email && (
                  <a
                    href={`mailto:${sacerdote.email}`}
                    className="flex items-center justify-center gap-3 rounded-lg bg-primary/5 px-4 py-3 text-primary transition-colors hover:bg-primary/10"
                  >
                    <Mail className="h-5 w-5" />
                    <span className="text-sm font-medium">{sacerdote.email}</span>
                  </a>
                )}
                {sacerdote.telefono && (
                  <a
                    href={`tel:${sacerdote.telefono}`}
                    className="flex items-center justify-center gap-3 rounded-lg bg-accent/10 px-4 py-3 text-secondary transition-colors hover:bg-accent/20"
                  >
                    <Phone className="h-5 w-5" />
                    <span className="text-sm font-medium">{sacerdote.telefono}</span>
                  </a>
                )}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  )
}
