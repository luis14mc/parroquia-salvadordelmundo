'use client'

import NextImage from 'next/image'
import { Mail, Phone, MapPin, Heart, Facebook, Instagram, Youtube } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { name: 'Inicio', href: '/' },
    { name: 'Nuestra Parroquia', href: '/nuestra-parroquia' },
    { name: 'Sacramentos', href: '/sacramentos' },
    { name: 'Contacto', href: '/#contacto' },
    { name: 'Donaciones', href: '/#donaciones' },
  ]

  const sacramentos = [
    { name: 'Bautismo', href: '/sacramentos/bautismo' },
    { name: 'Primera Comunión', href: '/sacramentos/primera-comunion' },
    { name: 'Confirmación', href: '/sacramentos/confirmacion' },
    { name: 'Matrimonio', href: '/sacramentos/matrimonio' },
    { name: 'Reconciliación', href: '/sacramentos/reconciliacion' },
  ]

  const socialMedia = [
    { icon: Facebook, name: 'Facebook', link: 'https://facebook.com' },
    { icon: Instagram, name: 'Instagram', link: 'https://instagram.com' },
    { icon: Youtube, name: 'YouTube', link: 'https://youtube.com' },
  ]

  return (
    <footer className="bg-gradient-to-b from-secondary to-secondary/95 text-white">
      {/* Main Footer Content */}
      <div className="mx-auto max-w-7xl px-4 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* About Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-6">
              <div className="relative h-16 w-44 sm:h-20 sm:w-52 md:h-24 md:w-60">
                <NextImage
                  src="/logo/logo_original.png"
                  alt="Parroquia El Salvador del Mundo - Tegucigalpa, Honduras"
                  fill
                  className="object-contain object-left"
                />
              </div>
            </div>
            <p className="mb-6 text-sm text-gray-300">
              Una comunidad católica comprometida con la fe, la esperanza y el amor en el corazón de Tegucigalpa.
            </p>
            <div className="flex gap-3">
              {socialMedia.map((social, index) => {
                const Icon = social.icon
                return (
                  <motion.a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm transition-colors hover:bg-primary"
                    aria-label={social.name}
                  >
                    <Icon className="h-5 w-5" />
                  </motion.a>
                )
              })}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="mb-6 text-lg font-bold">Enlaces Rápidos</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="group flex items-center text-sm text-gray-300 transition-colors hover:text-accent"
                  >
                    <span className="mr-2 h-1 w-1 rounded-full bg-accent opacity-0 transition-opacity group-hover:opacity-100" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Sacramentos */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="mb-6 text-lg font-bold">Sacramentos</h4>
            <ul className="space-y-3">
              {sacramentos.map((sacramento, index) => (
                <li key={index}>
                  <a
                    href={sacramento.href}
                    className="group flex items-center text-sm text-gray-300 transition-colors hover:text-accent"
                  >
                    <span className="mr-2 h-1 w-1 rounded-full bg-accent opacity-0 transition-opacity group-hover:opacity-100" />
                    {sacramento.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h4 className="mb-6 text-lg font-bold">Contacto</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:+50422223333"
                  className="flex items-start gap-3 text-sm text-gray-300 transition-colors hover:text-accent"
                >
                  <Phone className="mt-0.5 h-4 w-4 shrink-0" />
                  <span>+504 2222-3333</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@salvadordelmundo.hn"
                  className="flex items-start gap-3 text-sm text-gray-300 transition-colors hover:text-accent"
                >
                  <Mail className="mt-0.5 h-4 w-4 shrink-0" />
                  <span>info@salvadordelmundo.hn</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-gray-300">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
                <span>Col. El Salvador, Tegucigalpa, Francisco Morazán, Honduras</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-6">
          <div className="flex flex-col items-center justify-between gap-4 text-sm text-gray-400 md:flex-row">
            <p className="text-center md:text-left">
              © {currentYear} Parroquia El Salvador del Mundo. Todos los derechos reservados.
            </p>
            <p className="flex items-center gap-2">
              Hecho con <Heart className="h-4 w-4 fill-primary text-primary" /> para nuestra comunidad
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
