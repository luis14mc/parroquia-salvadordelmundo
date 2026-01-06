'use client'

import { motion } from 'framer-motion'
import { Clock, MapPin, Calendar } from 'lucide-react'

const horariosData = [
  {
    id: 1,
    type: 'misa',
    title: 'Misas Dominicales',
    day: 'Domingos',
    times: ['7:00 AM', '9:00 AM', '11:00 AM', '5:00 PM'],
    location: 'Templo Principal',
  },
  {
    id: 2,
    type: 'misa',
    title: 'Misas Entre Semana',
    day: 'Lunes a Sábado',
    times: ['6:00 AM', '6:00 PM'],
    location: 'Capilla Lateral',
  },
  {
    id: 3,
    type: 'servicio',
    title: 'Confesiones',
    day: 'Sábados',
    times: ['4:00 PM - 5:30 PM'],
    location: 'Confesionarios',
  },
  {
    id: 4,
    type: 'servicio',
    title: 'Adoración al Santísimo',
    day: 'Jueves',
    times: ['7:00 PM - 8:00 PM'],
    location: 'Capilla de Adoración',
  },
]

export default function HorariosSection() {
  const misas = horariosData.filter(h => h.type === 'misa')
  const otrosServicios = horariosData.filter(h => h.type !== 'misa')

  return (
    <section id="horarios" className="bg-gray-50 px-4 py-24">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-4xl font-bold text-secondary md:text-5xl">
            Horarios de <span className="text-primary">Misas</span>
          </h2>
          <p className="text-lg text-gray-600">
            Te esperamos en nuestras celebraciones
          </p>
        </motion.div>

        {/* Misas */}
        <div className="mb-12">
          <h3 className="mb-6 text-2xl font-bold text-secondary">
            Celebraciones Eucarísticas
          </h3>
          <div className="grid gap-6 md:grid-cols-2">
            {misas.map((horario, index) => (
              <motion.div
                key={horario.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group overflow-hidden rounded-2xl bg-white p-6 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="mb-4 flex items-center gap-3">
                  <div className="rounded-xl bg-gradient-to-br from-primary to-primary-dark p-3 shadow-md">
                    <Calendar className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-secondary">{horario.title}</h4>
                    <p className="text-sm text-gray-600">{horario.day}</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <Clock className="mt-1 h-5 w-5 text-primary" />
                    <div className="flex flex-wrap gap-2">
                      {horario.times.map((time, idx) => (
                        <span
                          key={idx}
                          className="rounded-lg bg-primary/10 px-3 py-1 text-sm font-medium text-primary"
                        >
                          {time}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-gray-600">
                    <MapPin className="h-5 w-5 text-accent" />
                    <span className="text-sm">{horario.location}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Otros Servicios */}
        <div>
          <h3 className="mb-6 text-2xl font-bold text-secondary">
            Otros Servicios Parroquiales
          </h3>
          <div className="grid gap-6 md:grid-cols-2">
            {otrosServicios.map((servicio, index) => (
              <motion.div
                key={servicio.id}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="overflow-hidden rounded-2xl border-2 border-gray-200 bg-white p-6 transition-all duration-300 hover:border-accent hover:shadow-lg"
              >
                <div className="mb-4 flex items-center gap-3">
                  <div className="rounded-xl bg-gradient-to-br from-accent to-yellow-600 p-3 shadow-md">
                    <Clock className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-secondary">{servicio.title}</h4>
                    <p className="text-sm text-gray-600">{servicio.day}</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <Clock className="mt-1 h-5 w-5 text-accent" />
                    <div className="flex flex-wrap gap-2">
                      {servicio.times.map((time, idx) => (
                        <span
                          key={idx}
                          className="rounded-lg bg-accent/10 px-3 py-1 text-sm font-medium text-accent"
                        >
                          {time}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-gray-600">
                    <MapPin className="h-5 w-5 text-primary" />
                    <span className="text-sm">{servicio.location}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
