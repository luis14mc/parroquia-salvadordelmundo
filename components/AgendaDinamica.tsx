'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { Calendar, Clock, MapPin, Users } from 'lucide-react'
import { useState } from 'react'

const daysOfWeek = ['Todos', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo']

interface Event {
  id: number
  title: string
  day: string
  time: string
  location: string
  description: string
  category: 'misa' | 'reunion' | 'actividad' | 'sacramento'
  attendees?: number
}

const events: Event[] = [
  {
    id: 1,
    title: 'Santa Misa',
    day: 'Lunes',
    time: '6:00 PM',
    location: 'Templo Principal',
    description: 'Celebración eucarística diaria',
    category: 'misa',
    attendees: 80
  },
  {
    id: 2,
    title: 'Grupo de Oración',
    day: 'Martes',
    time: '7:00 PM',
    location: 'Salón Parroquial',
    description: 'Reunión de oración y alabanza',
    category: 'reunion',
    attendees: 45
  },
  {
    id: 3,
    title: 'Catequesis Infantil',
    day: 'Miércoles',
    time: '4:00 PM',
    location: 'Aulas de Catequesis',
    description: 'Preparación para Primera Comunión',
    category: 'actividad',
    attendees: 60
  },
  {
    id: 4,
    title: 'Adoración Eucarística',
    day: 'Jueves',
    time: '5:00 PM - 6:00 PM',
    location: 'Capilla del Santísimo',
    description: 'Hora de adoración y meditación',
    category: 'actividad',
    attendees: 30
  },
  {
    id: 5,
    title: 'Vía Crucis',
    day: 'Viernes',
    time: '5:30 PM',
    location: 'Templo Principal',
    description: 'Meditación de la Pasión de Cristo',
    category: 'actividad',
    attendees: 70
  },
  {
    id: 6,
    title: 'Confesiones',
    day: 'Sábado',
    time: '4:00 PM - 5:30 PM',
    location: 'Confesionarios',
    description: 'Sacramento de la Reconciliación',
    category: 'sacramento',
    attendees: 25
  },
  {
    id: 7,
    title: 'Santa Misa Dominical',
    day: 'Domingo',
    time: '10:00 AM',
    location: 'Templo Principal',
    description: 'Misa solemne con coro parroquial',
    category: 'misa',
    attendees: 250
  },
  {
    id: 8,
    title: 'Misa Vespertina',
    day: 'Domingo',
    time: '6:00 PM',
    location: 'Templo Principal',
    description: 'Celebración eucarística vespertina',
    category: 'misa',
    attendees: 180
  },
]

const categoryColors = {
  misa: 'from-primary to-primary-dark',
  reunion: 'from-accent to-yellow-500',
  actividad: 'from-blue-500 to-blue-700',
  sacramento: 'from-purple-500 to-purple-700',
}

const categoryLabels = {
  misa: 'Misa',
  reunion: 'Reunión',
  actividad: 'Actividad',
  sacramento: 'Sacramento',
}

export default function AgendaDinamica() {
  const [selectedDay, setSelectedDay] = useState('Todos')

  const filteredEvents = selectedDay === 'Todos' 
    ? events 
    : events.filter(event => event.day === selectedDay)

  return (
    <section id="agenda" className="bg-gradient-to-b from-gray-50 to-white px-4 py-24">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="mb-4 text-4xl font-bold text-secondary md:text-5xl">
            Agenda <span className="text-primary">Semanal</span>
          </h2>
          <p className="text-lg text-gray-600">
            Únete a nuestras actividades y celebraciones
          </p>
        </motion.div>

        {/* Day Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12 overflow-x-auto pb-4"
        >
          <div className="flex gap-3 justify-center min-w-max px-4">
            {daysOfWeek.map((day) => (
              <motion.button
                key={day}
                onClick={() => setSelectedDay(day)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`rounded-full px-6 py-3 font-semibold transition-all duration-300 ${
                  selectedDay === day
                    ? 'bg-gradient-to-r from-primary to-primary-dark text-white shadow-lg shadow-primary/30'
                    : 'bg-white text-secondary shadow-md hover:shadow-lg'
                }`}
              >
                {day}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Events Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedDay}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
          >
            {filteredEvents.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="group relative overflow-hidden rounded-2xl bg-white p-6 shadow-lg transition-all duration-300 hover:shadow-2xl"
              >
                {/* Category Badge */}
                <div className={`absolute right-4 top-4 rounded-full bg-gradient-to-r ${categoryColors[event.category]} px-3 py-1 text-xs font-semibold text-white shadow-md`}>
                  {categoryLabels[event.category]}
                </div>

                {/* Event Content */}
                <div className="mb-4">
                  <h3 className="mb-3 pr-20 text-xl font-bold text-secondary">
                    {event.title}
                  </h3>
                  <p className="mb-4 text-sm text-gray-600">
                    {event.description}
                  </p>
                </div>

                {/* Event Details */}
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm text-gray-700">
                    <Calendar className="h-4 w-4 text-primary" />
                    <span className="font-medium">{event.day}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-700">
                    <Clock className="h-4 w-4 text-primary" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-700">
                    <MapPin className="h-4 w-4 text-primary" />
                    <span>{event.location}</span>
                  </div>
                  {event.attendees && (
                    <div className="flex items-center gap-2 text-sm text-gray-700">
                      <Users className="h-4 w-4 text-primary" />
                      <span>{event.attendees} asistentes promedio</span>
                    </div>
                  )}
                </div>

                {/* Hover Effect */}
                <div className="absolute bottom-0 left-0 h-1 w-full origin-left scale-x-0 bg-gradient-to-r from-primary to-accent transition-transform duration-300 group-hover:scale-x-100" />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* No Events Message */}
        {filteredEvents.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="py-16 text-center"
          >
            <Calendar className="mx-auto mb-4 h-16 w-16 text-gray-300" />
            <p className="text-xl text-gray-500">
              No hay eventos programados para este día
            </p>
          </motion.div>
        )}

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="rounded-full bg-gradient-to-r from-accent to-yellow-500 px-8 py-4 text-lg font-semibold text-secondary shadow-lg transition-shadow hover:shadow-xl hover:shadow-accent/30"
          >
            Descargar Calendario Completo
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
