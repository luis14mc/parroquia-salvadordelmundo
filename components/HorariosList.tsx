import { Clock, MapPin, Calendar } from 'lucide-react'
import { HorarioService } from '@/lib/services/horario.service'

/**
 * Server Component optimizado para listar horarios
 * Obtiene datos directamente de la base de datos
 */

export default async function HorariosList() {
  const horariosGrouped = await HorarioService.getGroupedByType()
  
  const misas = horariosGrouped['misa'] || []
  const otrosServicios = Object.entries(horariosGrouped)
    .filter(([tipo]) => tipo !== 'misa')
    .flatMap(([_, horarios]) => horarios)

  return (
    <>
      {/* Misas */}
      {misas.length > 0 && (
        <div className="mb-12">
          <h3 className="mb-6 text-2xl font-bold text-secondary">
            Celebraciones Eucarísticas
          </h3>
          <div className="grid gap-6 md:grid-cols-2">
            {misas.map((horario) => (
              <div
                key={horario.id}
                className="group overflow-hidden rounded-2xl bg-white p-6 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="mb-4 flex items-center gap-3">
                  <div className="rounded-xl bg-gradient-to-br from-primary to-primary-dark p-3 shadow-md">
                    <Calendar className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-secondary">{horario.dia}</h4>
                    {horario.descripcion && (
                      <p className="text-sm text-gray-600">{horario.descripcion}</p>
                    )}
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <Clock className="mt-1 h-5 w-5 text-primary" />
                    <span className="rounded-lg bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                      {horario.hora}
                    </span>
                  </div>

                  {horario.lugar && (
                    <div className="flex items-center gap-2 text-gray-600">
                      <MapPin className="h-5 w-5 text-accent" />
                      <span className="text-sm">{horario.lugar}</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Otros Servicios */}
      {otrosServicios.length > 0 && (
        <div>
          <h3 className="mb-6 text-2xl font-bold text-secondary">
            Otros Servicios Parroquiales
          </h3>
          <div className="grid gap-6 md:grid-cols-2">
            {otrosServicios.map((servicio) => (
              <div
                key={servicio.id}
                className="overflow-hidden rounded-2xl border-2 border-gray-200 bg-white p-6 transition-all duration-300 hover:border-accent hover:shadow-lg"
              >
                <div className="mb-4 flex items-center gap-3">
                  <div className="rounded-xl bg-gradient-to-br from-accent to-yellow-600 p-3 shadow-md">
                    <Clock className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-secondary capitalize">{servicio.tipo}</h4>
                    <p className="text-sm text-gray-600">{servicio.dia}</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <Clock className="mt-1 h-5 w-5 text-accent" />
                    <span className="rounded-lg bg-accent/10 px-3 py-1 text-sm font-medium text-accent">
                      {servicio.hora}
                    </span>
                  </div>

                  {servicio.lugar && (
                    <div className="flex items-center gap-2 text-gray-600">
                      <MapPin className="h-5 w-5 text-primary" />
                      <span className="text-sm">{servicio.lugar}</span>
                    </div>
                  )}
                  
                  {servicio.descripcion && (
                    <p className="text-sm text-gray-600 mt-2">{servicio.descripcion}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  )
}
