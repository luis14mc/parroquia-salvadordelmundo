'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Baby, BookOpen, Cross, Heart, Droplet, HandHeart, Church } from 'lucide-react'

const sacramentos = [
  {
    id: 'bautismo',
    nombre: 'Bautismo',
    icon: Droplet,
    descripcion: 'Primer sacramento de iniciación cristiana que nos hace hijos de Dios',
    color: 'from-blue-500 to-blue-700',
    imagen: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800'
  },
  {
    id: 'primera-comunion',
    nombre: 'Primera Comunión',
    icon: Church,
    descripcion: 'Sacramento de la Eucaristía donde recibimos por primera vez el Cuerpo de Cristo',
    color: 'from-accent to-yellow-600',
    imagen: 'https://images.unsplash.com/photo-1464207687429-7505649dae38?w=800'
  },
  {
    id: 'confirmacion',
    nombre: 'Confirmación',
    icon: Cross,
    descripcion: 'Sacramento que fortalece los dones del Espíritu Santo recibidos en el Bautismo',
    color: 'from-red-500 to-red-700',
    imagen: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800'
  },
  {
    id: 'matrimonio',
    nombre: 'Matrimonio',
    icon: Heart,
    descripcion: 'Sacramento que une a un hombre y una mujer en una alianza de amor fiel',
    color: 'from-pink-500 to-pink-700',
    imagen: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800'
  },
  {
    id: 'reconciliacion',
    nombre: 'Reconciliación',
    icon: HandHeart,
    descripcion: 'Sacramento del perdón donde recibimos la misericordia de Dios',
    color: 'from-purple-500 to-purple-700',
    imagen: 'https://images.unsplash.com/photo-1507692049790-de58290a4334?w=800'
  },
  {
    id: 'uncion-enfermos',
    nombre: 'Unción de Enfermos',
    icon: Baby,
    descripcion: 'Sacramento de sanación espiritual y fortaleza para los enfermos',
    color: 'from-green-500 to-green-700',
    imagen: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800'
  },
]

export default function SacramentosPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary to-primary-dark px-4 py-24">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }} />
        </div>
        
        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="mb-6 font-serif text-5xl font-bold text-white md:text-6xl">
              Sacramentos
            </h1>
            <p className="text-xl text-white/90 md:text-2xl">
              Signos visibles del amor de Dios que nos acompañan en nuestro caminar cristiano
            </p>
          </motion.div>
        </div>
      </section>

      {/* Sacramentos Grid */}
      <section className="px-4 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {sacramentos.map((sacramento, index) => {
              const Icon = sacramento.icon
              return (
                <motion.div
                  key={sacramento.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Link href={`/sacramentos/${sacramento.id}`}>
                    <motion.div
                      whileHover={{ y: -8 }}
                      className="group relative h-full overflow-hidden rounded-3xl bg-white shadow-xl transition-all duration-300 hover:shadow-2xl"
                    >
                      {/* Image */}
                      <div className="relative h-64 w-full overflow-hidden">
                        <div
                          className="h-full w-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                          style={{ backgroundImage: `url('${sacramento.imagen}')` }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 via-secondary/40 to-transparent" />
                        
                        {/* Icon */}
                        <div className={`absolute left-6 top-6 rounded-2xl bg-gradient-to-br ${sacramento.color} p-4 shadow-lg`}>
                          <Icon className="h-8 w-8 text-white" />
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-8">
                        <h3 className="mb-3 font-serif text-2xl font-bold text-secondary">
                          {sacramento.nombre}
                        </h3>
                        <p className="mb-6 text-gray-600">
                          {sacramento.descripcion}
                        </p>
                        
                        <motion.div
                          whileHover={{ x: 5 }}
                          className={`inline-flex items-center gap-2 font-semibold bg-gradient-to-r ${sacramento.color} bg-clip-text text-transparent`}
                        >
                          Ver requisitos y detalles
                          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </motion.div>
                      </div>

                      {/* Hover Effect */}
                      <div className={`absolute bottom-0 left-0 h-1 w-full origin-left scale-x-0 bg-gradient-to-r ${sacramento.color} transition-transform duration-300 group-hover:scale-x-100`} />
                    </motion.div>
                  </Link>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 py-24">
        <div className="mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl bg-gradient-to-br from-primary to-primary-dark p-12 text-center shadow-2xl"
          >
            <h3 className="mb-4 font-serif text-3xl font-bold text-white md:text-4xl">
              ¿Necesitas más información?
            </h3>
            <p className="mb-8 text-lg text-white/90">
              Estamos aquí para ayudarte en tu camino de fe. Contáctanos para cualquier consulta sobre los sacramentos.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link href="/#contacto">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="rounded-full bg-accent px-8 py-4 font-semibold text-secondary shadow-lg transition-shadow hover:shadow-xl"
                >
                  Contactar Oficina Parroquial
                </motion.button>
              </Link>
              <Link href="/">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="rounded-full border-2 border-white/30 bg-white/10 px-8 py-4 font-semibold text-white backdrop-blur-md transition-all hover:bg-white/20"
                >
                  Volver al Inicio
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
