'use client'

import { motion } from 'framer-motion'
import { Construction, Calendar, Mail } from 'lucide-react'

export default function MantenimientoPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary via-secondary to-accent flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-2xl w-full text-center"
      >
        {/* Icono */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          className="mb-8 flex justify-center"
        >
          <div className="bg-white rounded-full p-8 shadow-2xl">
            <Construction className="h-24 w-24 text-primary" />
          </div>
        </motion.div>

        {/* Título */}
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-5xl md:text-6xl font-bold text-white mb-6"
        >
          Sitio en Construcción
        </motion.h1>

        {/* Mensaje */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-xl md:text-2xl text-white/90 mb-8"
        >
          Estamos trabajando en algo especial para nuestra comunidad parroquial
        </motion.p>

        {/* Info Cards */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="grid md:grid-cols-2 gap-4 mb-12"
        >
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
            <Calendar className="h-8 w-8 text-white mb-3 mx-auto" />
            <h3 className="text-white font-semibold mb-2">Próximamente</h3>
            <p className="text-white/80 text-sm">
              Nuestro nuevo sitio web estará disponible muy pronto
            </p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
            <Mail className="h-8 w-8 text-white mb-3 mx-auto" />
            <h3 className="text-white font-semibold mb-2">Contáctanos</h3>
            <p className="text-white/80 text-sm">
              Para información, escríbenos a<br />
              <a href="mailto:info@parroquiasalvadordelmundo.org" className="underline">
                info@parroquiasalvadordelmundo.org
              </a>
            </p>
          </div>
        </motion.div>

        {/* Footer */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="text-white/60 text-sm"
        >
          © {new Date().getFullYear()} Parroquia El Salvador del Mundo • Tegucigalpa, Honduras
        </motion.p>
      </motion.div>
    </div>
  )
}
