'use client'

import { motion } from 'framer-motion'
import { Clock, Calendar, MapPin } from 'lucide-react'

export default function HorariosSection() {
  const horariosMisa = [
    {
      dia: 'Lunes a Viernes',
      horarios: ['6:00 AM', '12:00 PM', '6:00 PM'],
      especial: null,
    },
    {
      dia: 'Sábado',
      horarios: ['7:00 AM', '6:00 PM (Misa Vespertina)'],
      especial: 'Confesiones: 5:00 PM - 5:45 PM',
    },
    {
      dia: 'Domingo',
      horarios: ['7:00 AM', '9:00 AM', '11:00 AM', '5:00 PM'],
      especial: 'Misa de 11:00 AM con coro',
    },
  ]

  const otrosServicios = [
    {
      servicio: 'Adoración al Santísimo',
      dia: 'Jueves',
      horario: '7:00 PM - 8:30 PM',
      lugar: 'Capilla del Santísimo',
    },
    {
      servicio: 'Santo Rosario',
      dia: 'Todos los días',
      horario: '5:30 PM',
      lugar: 'Templo Principal',
    },
    {
      servicio: 'Confesiones',
      dia: 'Sábado',
      horario: '5:00 PM - 5:45 PM',
      lugar: 'Confesionarios',
    },
    {
      servicio: 'Oficina Parroquial',
      dia: 'Lunes a Viernes',
      horario: '9:00 AM - 5:00 PM',
      lugar: 'Edificio Administrativo',
    },
  ]

  return (
    <section id="horarios" className="bg-gradient-to-b from-gray-50 to-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <Clock className="mx-auto mb-4 h-16 w-16 text-primary" />
          <h2 className="mb-4 font-serif text-4xl font-bold text-secondary md:text-5xl">
            Horarios de <span className="text-primary">Celebraciones</span>
          </h2>
          <p className="text-lg text-gray-600">
            Únete a nosotros en nuestras celebraciones eucarísticas y servicios litúrgicos
          </p>
        </motion.div>

        {/* Horarios de Misa */}
        <div className="mb-16 grid gap-6 md:grid-cols-3">
          {horariosMisa.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="rounded-2xl bg-white p-8 shadow-lg transition-shadow hover:shadow-xl"
            >
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-primary to-primary-dark">
                  <Calendar className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-secondary">{item.dia}</h3>
              </div>
              <div className="mb-4 space-y-3">
                {item.horarios.map((horario, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2 rounded-lg bg-gray-50 px-4 py-3"
                  >
                    <Clock className="h-5 w-5 text-primary" />
                    <span className="font-semibold text-secondary">{horario}</span>
                  </div>
                ))}
              </div>
              {item.especial && (
                <div className="rounded-lg bg-accent/10 px-4 py-3 text-sm font-medium text-secondary">
                  ℹ️ {item.especial}
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Otros Servicios */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h3 className="mb-4 font-serif text-3xl font-bold text-secondary">
            Otros Servicios Parroquiales
          </h3>
          <p className="text-gray-600">Actividades y servicios disponibles durante la semana</p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2">
          {otrosServicios.map((servicio, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="rounded-xl bg-white p-6 shadow-md transition-shadow hover:shadow-lg"
            >
              <h4 className="mb-4 font-serif text-xl font-bold text-primary">
                {servicio.servicio}
              </h4>
              <div className="space-y-2 text-gray-700">
                <div className="flex items-start gap-2">
                  <Calendar className="mt-0.5 h-5 w-5 text-primary" />
                  <div>
                    <span className="font-medium">Día:</span> {servicio.dia}
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <Clock className="mt-0.5 h-5 w-5 text-primary" />
                  <div>
                    <span className="font-medium">Horario:</span> {servicio.horario}
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <MapPin className="mt-0.5 h-5 w-5 text-primary" />
                  <div>
                    <span className="font-medium">Lugar:</span> {servicio.lugar}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Nota importante */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 rounded-2xl bg-gradient-to-r from-primary/5 to-accent/5 p-8 text-center"
        >
          <p className="text-lg text-gray-700">
            <strong>Nota:</strong> Los horarios pueden variar durante festividades especiales y
            celebraciones litúrgicas. Para confirmar horarios específicos, contacta la oficina
            parroquial.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
