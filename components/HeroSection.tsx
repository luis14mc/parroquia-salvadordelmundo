'use client'

import { motion } from 'framer-motion'
import { Clock, MapPin } from 'lucide-react'
import { useEffect, useState } from 'react'

interface MassStatus {
  isLive: boolean
  nextMass: string
  timeUntil: string
}

export default function HeroSection() {
  const [massStatus, setMassStatus] = useState<MassStatus>({
    isLive: false,
    nextMass: 'Domingo 10:00 AM',
    timeUntil: '2 días, 5 horas'
  })

  useEffect(() => {
    // Lógica para determinar el estado de la misa
    const checkMassStatus = () => {
      const now = new Date()
      const day = now.getDay()
      const hour = now.getHours()
      const minute = now.getMinutes()

      // Horarios de misa (ejemplo)
      const massSchedule = [
        { day: 0, hour: 10, minute: 0 }, // Domingo 10:00 AM
        { day: 0, hour: 18, minute: 0 }, // Domingo 6:00 PM
        { day: 1, hour: 18, minute: 0 }, // Lunes 6:00 PM
        { day: 2, hour: 18, minute: 0 }, // Martes 6:00 PM
        { day: 3, hour: 18, minute: 0 }, // Miércoles 6:00 PM
        { day: 4, hour: 18, minute: 0 }, // Jueves 6:00 PM
        { day: 5, hour: 18, minute: 0 }, // Viernes 6:00 PM
        { day: 6, hour: 18, minute: 0 }, // Sábado 6:00 PM
      ]

      // Verificar si hay misa en curso (dentro de 1 hora después del inicio)
      const isLive = massSchedule.some(mass => 
        mass.day === day && 
        mass.hour === hour && 
        minute >= mass.minute && 
        minute < mass.minute + 60
      )

      setMassStatus(prev => ({ ...prev, isLive }))
    }

    checkMassStatus()
    const interval = setInterval(checkMassStatus, 60000) // Actualizar cada minuto

    return () => clearInterval(interval)
  }, [])

  return (
    <section id="inicio" className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <div 
          className="h-full w-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1438232992991-995b7058bbb3?q=80&w=2073')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full items-center justify-center px-4">
        <div className="max-w-5xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            {/* Live Status Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="mb-8 inline-flex items-center gap-2 rounded-full glass-dark px-6 py-3"
            >
              {massStatus.isLive ? (
                <>
                  <span className="relative flex h-3 w-3">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75"></span>
                    <span className="relative inline-flex h-3 w-3 rounded-full bg-accent"></span>
                  </span>
                  <span className="text-sm font-medium text-white">Misa en Curso</span>
                </>
              ) : (
                <>
                  <Clock className="h-4 w-4 text-accent" />
                  <span className="text-sm font-medium text-white">
                    Próxima misa: {massStatus.nextMass}
                  </span>
                </>
              )}
            </motion.div>

            {/* Main Title */}
            <h1 className="mb-6 text-5xl font-bold leading-tight text-white md:text-7xl lg:text-8xl">
              Parroquia
              <br />
              El Salvador del Mundo
            </h1>

            {/* Subtitle */}
            <p className="mb-8 text-xl text-white/90 md:text-2xl">
              Una comunidad de fe, esperanza y amor en el corazón de Tegucigalpa
            </p>

            {/* Location */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="inline-flex items-center gap-2 text-white/80"
            >
              <MapPin className="h-5 w-5 text-accent" />
              <span className="text-lg">Tegucigalpa, Honduras</span>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row"
            >
              <a href="#horarios">
                <button className="group relative overflow-hidden rounded-full bg-accent px-8 py-4 text-lg font-semibold text-secondary transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-accent/50">
                  <span className="relative z-10">Ver Horarios</span>
                  <div className="absolute inset-0 -z-0 bg-gradient-to-r from-accent to-yellow-400 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                </button>
              </a>
              <a href="#contacto">
                <button className="group rounded-full border-2 border-white/30 bg-white/10 px-8 py-4 text-lg font-semibold text-white backdrop-blur-md transition-all duration-300 hover:border-white/50 hover:bg-white/20">
                  Contactar
                </button>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-2"
        >
          <div className="h-12 w-6 rounded-full border-2 border-white/50 p-1">
            <motion.div
              animate={{ y: [0, 16, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
              className="h-2 w-2 rounded-full bg-white mx-auto"
            />
          </div>
          <span className="text-xs text-white/70">Desliza para más</span>
        </motion.div>
      </motion.div>
    </section>
  )
}
