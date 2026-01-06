'use client'

import { motion } from 'framer-motion'
import { Church, Heart, Users, BookOpen, Cross, MapPin } from 'lucide-react'
import NextImage from 'next/image'
import GaleriaSection from '@/components/GaleriaSection'
import Footer from '@/components/Footer'

export default function NuestraParroquiaPage() {
  const valores = [
    {
      icon: Heart,
      title: 'Amor',
      description: 'Vivimos el amor de Cristo en cada acción y servicio a nuestra comunidad.',
    },
    {
      icon: Users,
      title: 'Comunidad',
      description: 'Somos una familia unida en la fe, la esperanza y el servicio mutuo.',
    },
    {
      icon: BookOpen,
      title: 'Formación',
      description: 'Promovemos el crecimiento espiritual a través del estudio de la Palabra.',
    },
    {
      icon: Cross,
      title: 'Fe',
      description: 'Fortalecemos nuestra relación con Dios a través de los sacramentos.',
    },
  ]

  const historia = [
    {
      year: '1960',
      title: 'Fundación',
      description: 'Nuestra parroquia fue fundada con el objetivo de servir a la comunidad católica de Tegucigalpa.',
    },
    {
      year: '1975',
      title: 'Expansión',
      description: 'Se construyó el edificio principal que conocemos hoy, expandiendo nuestros servicios pastorales.',
    },
    {
      year: '1990',
      title: 'Renovación',
      description: 'Renovación completa del templo y creación de nuevos espacios para la formación.',
    },
    {
      year: '2020',
      title: 'Modernización',
      description: 'Implementación de nuevas tecnologías para transmisiones en vivo y alcance digital.',
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px] bg-gradient-to-br from-primary to-primary-dark">
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 flex h-full items-center justify-center text-center">
          <div className="max-w-4xl px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Church className="mx-auto mb-6 h-16 w-16 text-white" />
              <h1 className="mb-6  text-5xl font-bold text-white md:text-6xl">
                Nuestra Parroquia
              </h1>
              <p className="text-xl text-white/90 md:text-2xl">
                Una comunidad de fe, esperanza y amor en el corazón de Tegucigalpa
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Misión y Visión */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-3xl bg-gradient-to-br from-primary/5 to-primary/10 p-8 md:p-12"
            >
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-white">
                <Church className="h-8 w-8" />
              </div>
              <h2 className="mb-4  text-3xl font-bold text-secondary">Nuestra Misión</h2>
              <p className="text-lg leading-relaxed text-gray-700">
                Ser una comunidad parroquial que anuncia el Evangelio de Jesucristo, celebra los
                sacramentos con devoción y sirve a los más necesitados, promoviendo la
                transformación personal y social desde la fe católica.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-3xl bg-gradient-to-br from-accent/10 to-accent/20 p-8 md:p-12"
            >
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-accent text-secondary">
                <Heart className="h-8 w-8" />
              </div>
              <h2 className="mb-4  text-3xl font-bold text-secondary">Nuestra Visión</h2>
              <p className="text-lg leading-relaxed text-gray-700">
                Ser una parroquia modelo en Honduras, reconocida por su vitalidad evangelizadora,
                su compromiso con la justicia social y su capacidad de formar discípulos
                misioneros que transformen la sociedad con los valores del Evangelio.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16 text-center"
          >
            <h2 className="mb-4  text-4xl font-bold text-secondary md:text-5xl">
              Nuestros Valores
            </h2>
            <p className="text-lg text-gray-600">
              Los principios que guían nuestra vida comunitaria
            </p>
          </motion.div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {valores.map((valor, index) => {
              const Icon = valor.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="rounded-2xl bg-white p-8 text-center shadow-lg transition-shadow hover:shadow-xl"
                >
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-primary to-primary-dark">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="mb-3  text-xl font-bold text-secondary">
                    {valor.title}
                  </h3>
                  <p className="text-gray-600">{valor.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Historia */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16 text-center"
          >
            <h2 className="mb-4  text-4xl font-bold text-secondary md:text-5xl">
              Nuestra Historia
            </h2>
            <p className="text-lg text-gray-600">
              Más de 60 años sirviendo a la comunidad católica
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 top-0 hidden h-full w-0.5 -translate-x-1/2 bg-primary/20 md:block" />

            <div className="space-y-12">
              {historia.map((evento, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className={`flex flex-col gap-8 md:flex-row md:items-center ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Content */}
                  <div className="flex-1">
                    <div
                      className={`rounded-2xl bg-white p-8 shadow-lg ${
                        index % 2 === 0 ? 'md:text-right' : 'md:text-left'
                      }`}
                    >
                      <div className="mb-2 text-3xl font-bold text-primary">{evento.year}</div>
                      <h3 className="mb-3  text-2xl font-bold text-secondary">
                        {evento.title}
                      </h3>
                      <p className="text-gray-600">{evento.description}</p>
                    </div>
                  </div>

                  {/* Timeline dot */}
                  <div className="hidden md:block">
                    <div className="h-4 w-4 rounded-full bg-primary shadow-lg" />
                  </div>

                  {/* Spacer */}
                  <div className="hidden flex-1 md:block" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Ubicación */}
      <section className="bg-gradient-to-br from-primary to-primary-dark py-20 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <MapPin className="mx-auto mb-6 h-16 w-16 text-accent" />
            <h2 className="mb-4  text-3xl font-bold md:text-4xl">Encuéntranos</h2>
            <p className="mb-8 text-xl text-white/90">
              Tegucigalpa, Francisco Morazán, Honduras
            </p>
            <a
              href="/#contacto"
              className="inline-block rounded-full bg-accent px-8 py-4 font-semibold text-secondary shadow-lg transition-shadow hover:shadow-xl"
            >
              Ver Información de Contacto
            </a>
          </motion.div>
        </div>
      </section>

      {/* Galería */}
      <GaleriaSection />

      <Footer />
    </div>
  )
}
