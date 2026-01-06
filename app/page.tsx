'use client'

import { motion } from 'framer-motion'
import { Construction, Calendar, Mail, Church } from 'lucide-react'
import Image from 'next/image'

export default function MantenimientoPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary via-primary-dark to-secondary flex items-center justify-center px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl w-full text-center"
      >
        {/* Logo oficial */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          className="mb-8 flex justify-center"
        >
          <div className="bg-white rounded-full p-6 shadow-2xl">
            <Image 
              src="/logo/logo_original.png" 
              alt="Parroquia El Salvador del Mundo"
              width={120}
              height={120}
              className="object-contain"
            />
          </div>
        </motion.div>

        {/* Título */}
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-4xl md:text-6xl font-bold text-white mb-4"
        >
          Parroquia El Salvador del Mundo
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-2xl md:text-3xl font-semibold text-white/90 mb-8"
        >
          Sitio en Construcción
        </motion.h2>

        {/* Mensaje */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-lg md:text-xl text-white/80 mb-12 max-w-2xl mx-auto"
        >
          Estamos trabajando en nuestro nuevo sitio web para servirle mejor.
          Pronto podrá encontrar información sobre nuestros horarios de misas,
          sacramentos, grupos parroquiales y mucho más.
        </motion.p>

        {/* Info Cards */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="grid md:grid-cols-3 gap-4 mb-12"
        >
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all">
            <Calendar className="h-10 w-10 text-white mb-3 mx-auto" />
            <h3 className="text-white font-semibold mb-2 text-lg">Próximamente</h3>
            <p className="text-white/80 text-sm">
              Nuevo sitio web disponible muy pronto
            </p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all">
            <Mail className="h-10 w-10 text-white mb-3 mx-auto" />
            <h3 className="text-white font-semibold mb-2 text-lg">Contáctanos</h3>
            <p className="text-white/80 text-sm break-all">
              <a href="mailto:pelsalavadordelmundohn@gmail.com" className="underline hover:text-white transition-colors">
                pelsalavadordelmundohn@gmail.com
              </a>
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all">
            <Construction className="h-10 w-10 text-white mb-3 mx-auto" />
            <h3 className="text-white font-semibold mb-2 text-lg">En Desarrollo</h3>
            <p className="text-white/80 text-sm">
              Mejorando nuestra presencia digital
            </p>
          </div>
        </motion.div>

        {/* Ubicación */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 mb-8"
        >
          <h3 className="text-white font-semibold mb-3 text-xl">Visítanos</h3>
          <p className="text-white/90 mb-2">Tegucigalpa, Honduras</p>
          <p className="text-white/70 text-sm">
            Mientras tanto, lo invitamos a visitarnos en persona.<br />
            ¡Siempre es un placer recibirlo!
          </p>
        </motion.div>

        {/* Footer */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="text-white/50 text-sm"
        >
          © {new Date().getFullYear()} Parroquia El Salvador del Mundo • Tegucigalpa, Honduras
        </motion.p>
      </motion.div>
    </div>
  )
}
