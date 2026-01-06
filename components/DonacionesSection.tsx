'use client'

import { motion } from 'framer-motion'
import { Heart, DollarSign, CreditCard, Building2, Phone, Mail } from 'lucide-react'

export default function DonacionesSection() {
  const metodosDonacion = [
    {
      icon: Building2,
      title: 'Transferencia Bancaria',
      details: [
        { label: 'Banco', value: 'Banco Atlántida' },
        { label: 'Cuenta', value: '1234-5678-9012' },
        { label: 'A nombre de', value: 'Parroquia El Salvador del Mundo' },
      ],
    },
    {
      icon: CreditCard,
      title: 'Depósito en Efectivo',
      details: [
        { label: 'Banco', value: 'Cualquier sucursal Banco Atlántida' },
        { label: 'Cuenta', value: '1234-5678-9012' },
        { label: 'Referencia', value: 'Donación Parroquial' },
      ],
    },
    {
      icon: Heart,
      title: 'En Persona',
      details: [
        { label: 'Ubicación', value: 'Oficina Parroquial' },
        { label: 'Horario', value: 'Lunes a Viernes, 9:00 AM - 5:00 PM' },
        { label: 'Sábados', value: '9:00 AM - 12:00 PM' },
      ],
    },
  ]

  const proyectos = [
    {
      title: 'Mantenimiento del Templo',
      description: 'Conservación y mejoras de las instalaciones de la iglesia.',
      icon: '⛪',
    },
    {
      title: 'Programas Sociales',
      description: 'Apoyo a familias necesitadas y programas comunitarios.',
      icon: '🤝',
    },
    {
      title: 'Formación Catequética',
      description: 'Materiales y recursos para la educación en la fe.',
      icon: '📚',
    },
    {
      title: 'Pastoral Juvenil',
      description: 'Actividades y retiros para jóvenes de la parroquia.',
      icon: '✨',
    },
  ]

  return (
    <section id="donaciones" className="bg-gradient-to-b from-white to-gray-50 py-20">
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
          <h2 className="mb-4 text-4xl font-bold text-secondary md:text-5xl">
            Apoya Nuestra Misión
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            Tu generosidad ayuda a mantener viva nuestra comunidad parroquial y sus múltiples obras
            de fe y servicio
          </p>
        </motion.div>

        {/* Métodos de Donación */}
        <div className="mb-20 grid gap-8 md:grid-cols-3">
          {metodosDonacion.map((metodo, index) => {
            const Icon = metodo.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="rounded-2xl bg-white p-8 shadow-lg transition-shadow hover:shadow-xl"
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-primary to-primary-dark">
                  <Icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="mb-6 text-2xl font-bold text-secondary">
                  {metodo.title}
                </h3>
                <div className="space-y-3">
                  {metodo.details.map((detail, idx) => (
                    <div key={idx} className="border-b border-gray-100 pb-3 last:border-0">
                      <div className="text-sm font-medium text-gray-500">{detail.label}</div>
                      <div className="text-base font-semibold text-secondary">{detail.value}</div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* ¿Para qué se usan las donaciones? */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h3 className="mb-4 text-3xl font-bold text-secondary">
            ¿Cómo se usan tus donaciones?
          </h3>
          <p className="mx-auto max-w-2xl text-gray-600">
            Cada aporte contribuye directamente a estas áreas de nuestra misión parroquial
          </p>
        </motion.div>

        <div className="mb-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {proyectos.map((proyecto, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="rounded-xl bg-white p-6 text-center shadow-md transition-shadow hover:shadow-lg"
            >
              <div className="mb-3 text-4xl">{proyecto.icon}</div>
              <h4 className="mb-2 text-lg font-bold text-secondary">
                {proyecto.title}
              </h4>
              <p className="text-sm text-gray-600">{proyecto.description}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl bg-gradient-to-br from-primary to-primary-dark p-12 text-center text-white shadow-2xl"
        >
          <DollarSign className="mx-auto mb-4 h-16 w-16 text-accent" />
          <h3 className="mb-4 text-3xl font-bold">¿Tienes preguntas sobre donaciones?</h3>
          <p className="mb-8 text-lg text-white/90">
            Contáctanos para más información sobre cómo apoyar nuestra parroquia
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="tel:+50422123456"
              className="flex items-center gap-2 rounded-full bg-accent px-6 py-3 font-semibold text-secondary shadow-lg transition-shadow hover:shadow-xl"
            >
              <Phone className="h-5 w-5" />
              +504 2212-3456
            </a>
            <a
              href="mailto:donaciones@parroquia.org"
              className="flex items-center gap-2 rounded-full border-2 border-white/30 bg-white/10 px-6 py-3 font-semibold text-white backdrop-blur-md transition-all hover:bg-white/20"
            >
              <Mail className="h-5 w-5" />
              donaciones@parroquia.org
            </a>
          </div>
        </motion.div>

        {/* Nota de transparencia */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 text-center text-sm text-gray-500"
        >
          <p>
            La Parroquia El Salvador del Mundo es una organización sin fines de lucro. Todas las
            donaciones son utilizadas exclusivamente para la obra pastoral y social de la parroquia.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
