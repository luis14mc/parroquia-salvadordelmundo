'use client'

import { motion } from 'framer-motion'
import { Mail, Phone } from 'lucide-react'
import Image from 'next/image'

const sacerdotesData = [
  {
    id: 1,
    name: 'P. Juan Carlos Martínez',
    title: 'Párroco',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400',
    bio: 'Con más de 15 años de servicio sacerdotal, dedicado a la evangelización y el servicio.',
    email: 'parroco@salvadordelmundo.hn',
    phone: '+504 2212-3456',
  },
  {
    id: 2,
    name: 'P. Roberto Sánchez',
    title: 'Vicario Parroquial',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400',
    bio: 'Especialista en pastoral juvenil y acompañamiento espiritual.',
    email: 'vicario@salvadordelmundo.hn',
    phone: '+504 2212-3457',
  },
]

export default function SacerdotesSection() {
  return (
    <section id="sacerdotes" className="bg-gradient-to-b from-secondary to-secondary-dark px-4 py-24">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-4xl font-bold text-white md:text-5xl">
            Nuestros <span className="text-accent">Sacerdotes</span>
          </h2>
          <p className="text-lg text-white/90">
            Al servicio de la comunidad parroquial
          </p>
        </motion.div>

        {/* Sacerdotes Grid */}
        <div className="grid gap-8 md:grid-cols-2">
          {sacerdotesData.map((sacerdote, index) => (
            <motion.div
              key={sacerdote.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group relative overflow-hidden rounded-3xl bg-white p-8 shadow-2xl transition-all duration-300 hover:shadow-accent/20"
            >
              <div className="flex flex-col items-center text-center">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  className="relative mb-6 h-48 w-48 overflow-hidden rounded-full shadow-lg"
                >
                  <Image
                    src={sacerdote.image}
                    alt={sacerdote.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 400px"
                    className="object-cover"
                  />
                </motion.div>

                <h3 className="mb-2 text-2xl font-bold text-secondary">
                  {sacerdote.name}
                </h3>
                <p className="mb-4 font-semibold text-primary">
                  {sacerdote.title}
                </p>
                <p className="mb-6 text-gray-600">
                  {sacerdote.bio}
                </p>

                {/* Contacto */}
                <div className="w-full space-y-3 border-t border-gray-200 pt-6">
                  <a
                    href={`mailto:${sacerdote.email}`}
                    className="flex items-center justify-center gap-2 text-sm text-gray-600 transition-colors hover:text-primary"
                  >
                    <Mail className="h-4 w-4" />
                    {sacerdote.email}
                  </a>
                  <a
                    href={`tel:${sacerdote.phone}`}
                    className="flex items-center justify-center gap-2 text-sm text-gray-600 transition-colors hover:text-primary"
                  >
                    <Phone className="h-4 w-4" />
                    {sacerdote.phone}
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
