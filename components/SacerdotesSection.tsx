'use client'

import { motion } from 'framer-motion'
import { Mail, Phone } from 'lucide-react'
import Image from 'next/image'
import { useEffect, useState } from 'react'

interface Sacerdote {
  id: number
  nombre: string
  cargo: string
  imagen: string
  descripcion: string
  email?: string
  telefono?: string
}

export default function SacerdotesSection() {
  const [sacerdotes, setSacerdotes] = useState<Sacerdote[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchSacerdotes()
  }, [])

  const fetchSacerdotes = async () => {
    try {
      const res = await fetch('/api/sacerdotes')
      const data = await res.json()
      setSacerdotes(data)
    } catch (error) {
      console.error('Error al cargar sacerdotes:', error)
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <section id="sacerdotes" className="bg-gradient-to-b from-secondary to-secondary-dark px-4 py-24">
        <div className="flex items-center justify-center">
          <div className="h-12 w-12 animate-spin rounded-full border-4 border-white border-t-transparent" />
        </div>
      </section>
    )
  }

  if (sacerdotes.length === 0) {
    return null
  }

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
          {sacerdotes.map((sacerdote, index) => (
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
                    src={sacerdote.imagen}
                    alt={sacerdote.nombre}
                    fill
                    sizes="(max-width: 768px) 100vw, 400px"
                    className="object-cover"
                  />
                </motion.div>

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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
