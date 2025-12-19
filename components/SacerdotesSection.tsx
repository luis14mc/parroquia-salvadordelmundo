'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, BookOpen, Heart } from 'lucide-react'

export default function SacerdotesSection() {
  const sacerdotes = [
    {
      nombre: 'P. Juan Carlos Martínez',
      cargo: 'Párroco',
      imagen: 'https://images.unsplash.com/photo-1542178243-bc20204b769f?q=80&w=500',
      descripcion:
        'Con más de 15 años de servicio sacerdotal, el Padre Juan Carlos ha dedicado su ministerio a la evangelización y el servicio a los más necesitados.',
      especialidades: ['Dirección Espiritual', 'Pastoral Juvenil', 'Evangelización'],
      contacto: 'parroco@parroquia.org',
      telefono: '+504 2212-3456',
    },
    {
      nombre: 'P. Miguel Ángel Rodríguez',
      cargo: 'Vicario Parroquial',
      imagen: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=500',
      descripcion:
        'El Padre Miguel se especializa en la formación catequética y acompaña los procesos sacramentales de la comunidad con dedicación y cariño.',
      especialidades: ['Catequesis', 'Sacramentos', 'Pastoral Familiar'],
      contacto: 'vicario@parroquia.org',
      telefono: '+504 2212-3457',
    },
    {
      nombre: 'P. Carlos Alberto Gómez',
      cargo: 'Colaborador Pastoral',
      imagen: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=500',
      descripcion:
        'Con un enfoque en la acción social, el Padre Carlos coordina programas de ayuda comunitaria y ministerios de caridad.',
      especialidades: ['Acción Social', 'Pastoral de la Caridad', 'Grupos Parroquiales'],
      contacto: 'pastoral@parroquia.org',
      telefono: '+504 2212-3458',
    },
  ]

  return (
    <section id="sacerdotes" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <Heart className="mx-auto mb-4 h-16 w-16 text-primary" />
          <h2 className="mb-4 font-serif text-4xl font-bold text-secondary md:text-5xl">
            Nuestros <span className="text-primary">Sacerdotes</span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            Conoce a los pastores que guían nuestra comunidad parroquial con dedicación y amor
          </p>
        </motion.div>

        {/* Sacerdotes */}
        <div className="space-y-12">
          {sacerdotes.map((sacerdote, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`flex flex-col gap-8 overflow-hidden rounded-3xl bg-gradient-to-br from-gray-50 to-white shadow-xl lg:flex-row ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Imagen */}
              <div className="relative h-96 w-full lg:h-auto lg:w-2/5">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url('${sacerdote.imagen}')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent lg:bg-gradient-to-r" />
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white lg:hidden">
                  <h3 className="mb-1 font-serif text-3xl font-bold">{sacerdote.nombre}</h3>
                  <p className="text-lg font-medium text-accent">{sacerdote.cargo}</p>
                </div>
              </div>

              {/* Contenido */}
              <div className="flex flex-1 flex-col justify-center p-8 lg:p-12">
                <div className="mb-6 hidden lg:block">
                  <h3 className="mb-2 font-serif text-4xl font-bold text-secondary">
                    {sacerdote.nombre}
                  </h3>
                  <p className="text-xl font-semibold text-primary">{sacerdote.cargo}</p>
                </div>

                <p className="mb-6 text-lg leading-relaxed text-gray-700">
                  {sacerdote.descripcion}
                </p>

                {/* Especialidades */}
                <div className="mb-6">
                  <div className="mb-3 flex items-center gap-2 font-semibold text-secondary">
                    <BookOpen className="h-5 w-5 text-primary" />
                    Áreas de Ministerio
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {sacerdote.especialidades.map((esp, idx) => (
                      <span
                        key={idx}
                        className="rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary"
                      >
                        {esp}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Contacto */}
                <div className="space-y-3 border-t border-gray-200 pt-6">
                  <div className="flex items-center gap-3 text-gray-700">
                    <Mail className="h-5 w-5 text-primary" />
                    <a
                      href={`mailto:${sacerdote.contacto}`}
                      className="font-medium transition-colors hover:text-primary"
                    >
                      {sacerdote.contacto}
                    </a>
                  </div>
                  <div className="flex items-center gap-3 text-gray-700">
                    <Phone className="h-5 w-5 text-primary" />
                    <a
                      href={`tel:${sacerdote.telefono}`}
                      className="font-medium transition-colors hover:text-primary"
                    >
                      {sacerdote.telefono}
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 rounded-3xl bg-gradient-to-br from-primary to-primary-dark p-12 text-center text-white shadow-2xl"
        >
          <h3 className="mb-4 font-serif text-3xl font-bold">
            ¿Necesitas Orientación Espiritual?
          </h3>
          <p className="mb-8 text-lg text-white/90">
            Nuestros sacerdotes están disponibles para acompañarte en tu camino de fe. Agenda una
            cita o visítanos en la oficina parroquial.
          </p>
          <a
            href="/#contacto"
            className="inline-block rounded-full bg-accent px-8 py-4 font-semibold text-secondary shadow-lg transition-shadow hover:shadow-xl"
          >
            Contactar a la Parroquia
          </a>
        </motion.div>
      </div>
    </section>
  )
}
