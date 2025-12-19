'use client'

import { motion } from 'framer-motion'
import { Clock, Church, FileText, Calendar, User, Heart, BookOpen } from 'lucide-react'

const bentoItems = [
  {
    id: 1,
    title: 'Horarios de Misa',
    icon: Church,
    gradient: 'from-primary to-primary-dark',
    size: 'large',
    content: {
      weekdays: [
        { day: 'Lunes - Viernes', time: '6:00 PM' },
        { day: 'Sábado', time: '6:00 PM' },
        { day: 'Domingo', time: '10:00 AM, 6:00 PM' },
      ]
    }
  },
  {
    id: 2,
    title: 'Confesiones',
    icon: Heart,
    gradient: 'from-accent to-yellow-500',
    size: 'medium',
    content: {
      schedule: [
        { day: 'Sábado', time: '4:00 PM - 5:30 PM' },
        { day: 'Domingo', time: '9:00 AM - 9:45 AM' },
      ]
    }
  },
  {
    id: 3,
    title: 'Despacho Parroquial',
    icon: Clock,
    gradient: 'from-secondary to-gray-700',
    size: 'medium',
    content: {
      hours: [
        { day: 'Lunes - Viernes', time: '9:00 AM - 12:00 PM' },
        { day: '', time: '2:00 PM - 5:00 PM' },
      ]
    }
  },
  {
    id: 4,
    title: 'Requisitos de Sacramentos',
    icon: BookOpen,
    gradient: 'from-primary-light to-primary',
    size: 'large',
    content: {
      sacraments: [
        { name: 'Bautismo', requirement: 'Acta de nacimiento, Certificado de padrinos' },
        { name: 'Primera Comunión', requirement: 'Certificado de bautismo, Catequesis' },
        { name: 'Confirmación', requirement: 'Certificado de bautismo y comunión' },
        { name: 'Matrimonio', requirement: 'Curso prematrimonial, Documentos civiles' },
      ]
    }
  }
]

export default function BentoGrid() {
  return (
    <section id="horarios" className="bg-gradient-to-b from-white to-gray-50 px-4 py-24">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-4xl font-bold text-secondary md:text-5xl">
            Información <span className="text-primary">Parroquial</span>
          </h2>
          <p className="text-lg text-gray-600">
            Todo lo que necesitas saber para participar en nuestra comunidad
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {bentoItems.map((item, index) => {
            const Icon = item.icon
            const isLarge = item.size === 'large'
            
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className={`group relative overflow-hidden rounded-3xl bg-white p-8 shadow-lg transition-all duration-300 hover:shadow-2xl ${
                  isLarge ? 'md:col-span-2 lg:col-span-2' : 'md:col-span-1'
                }`}
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 transition-opacity duration-300 group-hover:opacity-5`} />
                
                {/* Content */}
                <div className="relative z-10">
                  {/* Icon & Title */}
                  <div className="mb-6 flex items-start justify-between">
                    <div>
                      <div className={`mb-4 inline-flex rounded-2xl bg-gradient-to-br ${item.gradient} p-3 shadow-md`}>
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-secondary">
                        {item.title}
                      </h3>
                    </div>
                  </div>

                  {/* Dynamic Content */}
                  <div className="space-y-4">
                    {item.id === 1 && item.content.weekdays && (
                      <div className="space-y-3">
                        {item.content.weekdays.map((schedule, idx) => (
                          <div key={idx} className="flex items-center justify-between rounded-xl bg-gray-50 p-4 transition-colors hover:bg-gray-100">
                            <span className="font-medium text-secondary">{schedule.day}</span>
                            <span className="text-primary font-semibold">{schedule.time}</span>
                          </div>
                        ))}
                      </div>
                    )}

                    {item.id === 2 && item.content.schedule && (
                      <div className="space-y-3">
                        {item.content.schedule.map((conf, idx) => (
                          <div key={idx} className="rounded-xl bg-gradient-to-r from-accent/10 to-yellow-100/50 p-4">
                            <div className="font-semibold text-secondary">{conf.day}</div>
                            <div className="text-sm text-gray-600">{conf.time}</div>
                          </div>
                        ))}
                        <p className="text-sm text-gray-500 italic mt-4">
                          También disponible con cita previa
                        </p>
                      </div>
                    )}

                    {item.id === 3 && item.content.hours && (
                      <div className="space-y-3">
                        {item.content.hours.map((hour, idx) => (
                          <div key={idx} className="flex items-start gap-3 rounded-xl bg-gray-50 p-4">
                            <Calendar className="h-5 w-5 text-primary mt-0.5" />
                            <div>
                              {hour.day && <div className="font-medium text-secondary">{hour.day}</div>}
                              <div className="text-sm text-gray-600">{hour.time}</div>
                            </div>
                          </div>
                        ))}
                        <div className="mt-4 rounded-xl border-2 border-primary/20 bg-primary/5 p-4">
                          <p className="text-sm text-secondary font-medium">
                            📞 Contacto: +504 2222-3333
                          </p>
                        </div>
                      </div>
                    )}

                    {item.id === 4 && item.content.sacraments && (
                      <div className="grid gap-3 md:grid-cols-2">
                        {item.content.sacraments.map((sac, idx) => (
                          <div key={idx} className="rounded-xl border border-primary/20 bg-gradient-to-br from-white to-primary/5 p-4 transition-all hover:border-primary/40 hover:shadow-md">
                            <h4 className="mb-2 font-semibold text-primary">{sac.name}</h4>
                            <p className="text-sm text-gray-600">{sac.requirement}</p>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Action Button */}
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`mt-6 w-full rounded-full bg-gradient-to-r ${item.gradient} px-6 py-3 font-semibold text-white shadow-md transition-shadow hover:shadow-lg`}
                  >
                    Ver más detalles
                  </motion.button>
                </div>

                {/* Decorative Element */}
                <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gradient-to-br from-primary/5 to-transparent blur-3xl" />
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
