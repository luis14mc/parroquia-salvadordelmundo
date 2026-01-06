'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { FileText, Clock, Phone, ArrowLeft, CheckCircle, Droplet, Church, Cross, Heart, HandHeart, Baby } from 'lucide-react'
import { sacramentosData } from '@/lib/sacramentosData'

const iconMap: { [key: string]: any } = {
  blue: Droplet,
  yellow: Church,
  red: Cross,
  pink: Heart,
  purple: HandHeart,
  green: Baby,
}

const colorClasses: { [key: string]: any } = {
  blue: { bg: 'bg-blue-100', text: 'text-blue-600', from: 'from-blue-600', to: 'to-blue-800', light: 'from-blue-50' },
  yellow: { bg: 'bg-yellow-100', text: 'text-yellow-600', from: 'from-accent', to: 'to-yellow-600', light: 'from-yellow-50' },
  red: { bg: 'bg-red-100', text: 'text-red-600', from: 'from-red-600', to: 'to-red-800', light: 'from-red-50' },
  pink: { bg: 'bg-pink-100', text: 'text-pink-600', from: 'from-pink-600', to: 'to-pink-800', light: 'from-pink-50' },
  purple: { bg: 'bg-purple-100', text: 'text-purple-600', from: 'from-purple-600', to: 'to-purple-800', light: 'from-purple-50' },
  green: { bg: 'bg-green-100', text: 'text-green-600', from: 'from-green-600', to: 'to-green-800', light: 'from-green-50' },
}

export default function SacramentoTemplate({ slug }: { slug: string }) {
  const data = sacramentosData[slug as keyof typeof sacramentosData]
  
  if (!data) {
    return <div>Sacramento no encontrado</div>
  }

  const Icon = iconMap[data.color]
  const colors = colorClasses[data.color]

  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className={`relative overflow-hidden bg-gradient-to-br ${colors.from} ${colors.to} px-4 py-24`}>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }} />
        </div>

        <div className="relative z-10 mx-auto max-w-4xl">
          <Link href="/sacramentos" className="mb-8 inline-flex items-center gap-2 text-white/80 transition-colors hover:text-white">
            <ArrowLeft className="h-5 w-5" />
            Volver a Sacramentos
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-6 inline-flex rounded-2xl bg-white/10 p-6 backdrop-blur-sm">
              <Icon className="h-12 w-12 text-white" />
            </div>
            <h1 className="mb-6  text-5xl font-bold text-white md:text-6xl">
              {data.nombre}
            </h1>
            <p className="text-xl text-white/90 md:text-2xl">
              {data.descripcion}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="px-4 py-24">
        <div className="mx-auto max-w-5xl">
          {/* Introducción */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="mb-6  text-3xl font-bold text-secondary">
              ¿Qué es {data.nombre === 'Reconciliación (Confesión)' ? 'la ' : 'el '}{data.nombre}?
            </h2>
            <div className="prose prose-lg max-w-none text-gray-600">
              <p>{data.queEs}</p>
            </div>
          </motion.div>

          {/* Requisitos */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="mb-8 flex items-center gap-3">
              <div className={`rounded-xl ${colors.bg} p-3`}>
                <FileText className={`h-6 w-6 ${colors.text}`} />
              </div>
              <h2 className=" text-3xl font-bold text-secondary">
                Requisitos
              </h2>
            </div>

            <div className="grid gap-4">
              {data.requisitos.map((requisito, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-4 rounded-2xl bg-gray-50 p-6 transition-all hover:bg-gray-100"
                >
                  <CheckCircle className={`h-6 w-6 shrink-0 ${colors.text}`} />
                  <p className="text-lg text-gray-700">{requisito}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Horarios */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`mb-16 rounded-3xl bg-gradient-to-br ${colors.from} ${colors.to} p-12 text-white shadow-2xl`}
          >
            <div className="mb-6 flex items-center gap-3">
              <div className="rounded-xl bg-white/10 p-3 backdrop-blur-sm">
                <Clock className="h-6 w-6" />
              </div>
              <h2 className=" text-3xl font-bold">
                Horarios
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {data.horarios.map((horario, index) => (
                <div key={index} className="rounded-2xl bg-white/10 p-6 backdrop-blur-sm">
                  <h3 className="mb-2 text-xl font-semibold">{horario.dia}</h3>
                  <p className="text-lg text-white/80">{horario.hora}</p>
                </div>
              ))}
            </div>

            <p className="mt-6 text-white/80">
              * Es necesario coordinar con anticipación en la oficina parroquial
            </p>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`rounded-3xl border-2 ${colors.bg} bg-gradient-to-br ${colors.light} to-white p-12 text-center`}
          >
            <h3 className="mb-4  text-3xl font-bold text-secondary">
              ¿Necesitas más información?
            </h3>
            <p className="mb-8 text-lg text-gray-600">
              Visita nuestra oficina parroquial o contáctanos para iniciar el proceso
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link href="/#contacto">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`inline-flex items-center gap-2 rounded-full bg-gradient-to-r ${colors.from} ${colors.to} px-8 py-4 font-semibold text-white shadow-lg transition-shadow hover:shadow-xl`}
                >
                  <Phone className="h-5 w-5" />
                  Contactar
                </motion.button>
              </Link>
              <Link href="/sacramentos">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`rounded-full border-2 ${colors.text} border-current px-8 py-4 font-semibold transition-all hover:bg-gray-50`}
                >
                  Ver otros sacramentos
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
