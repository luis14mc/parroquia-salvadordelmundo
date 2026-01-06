'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Clock, Send, Facebook, Instagram, Youtube } from 'lucide-react'
import { useState } from 'react'

export default function ContactoSection() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    asunto: '',
    mensaje: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Aquí iría la lógica de envío
    console.log('Formulario enviado:', formData)
  }

  const contactInfo = [
    {
      icon: Phone,
      title: 'Teléfono',
      info: '+504 2222-3333',
      link: 'tel:+50422223333'
    },
    {
      icon: Mail,
      title: 'Email',
      info: 'info@salvadordelmundo.hn',
      link: 'mailto:info@salvadordelmundo.hn'
    },
    {
      icon: MapPin,
      title: 'Dirección',
      info: 'Col. El Salvador, Tegucigalpa, Francisco Morazán',
      link: 'https://maps.google.com'
    },
    {
      icon: Clock,
      title: 'Horario de Oficina',
      info: 'Lunes a Viernes: 9:00 AM - 5:00 PM',
      link: null
    }
  ]

  const socialMedia = [
    { icon: Facebook, name: 'Facebook', link: 'https://facebook.com' },
    { icon: Instagram, name: 'Instagram', link: 'https://instagram.com' },
    { icon: Youtube, name: 'YouTube', link: 'https://youtube.com' }
  ]

  return (
    <section id="contacto" className="relative overflow-hidden bg-gradient-to-b from-white to-gray-50 px-4 py-24">
      {/* Background decorative elements */}
      <div className="absolute left-0 top-0 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-96 w-96 translate-x-1/2 translate-y-1/2 rounded-full bg-accent/5 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-4xl font-bold text-secondary md:text-5xl">
            Contáctanos
          </h2>
          <p className="text-lg text-gray-600">
            Estamos aquí para servirte. No dudes en comunicarte con nosotros
          </p>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="mb-8 text-2xl font-bold text-secondary">
              Información de Contacto
            </h3>

            <div className="space-y-6">
              {contactInfo.map((item, index) => {
                const Icon = item.icon
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="group"
                  >
                    {item.link ? (
                      <a
                        href={item.link}
                        target={item.link.startsWith('http') ? '_blank' : undefined}
                        rel={item.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="flex items-start gap-4 rounded-2xl bg-white p-6 shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                      >
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-primary-dark shadow-lg">
                          <Icon className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <h4 className="mb-1 font-semibold text-secondary">{item.title}</h4>
                          <p className="text-gray-600">{item.info}</p>
                        </div>
                      </a>
                    ) : (
                      <div className="flex items-start gap-4 rounded-2xl bg-white p-6 shadow-md">
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-primary-dark shadow-lg">
                          <Icon className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <h4 className="mb-1 font-semibold text-secondary">{item.title}</h4>
                          <p className="text-gray-600">{item.info}</p>
                        </div>
                      </div>
                    )}
                  </motion.div>
                )
              })}
            </div>

            {/* Social Media */}
            <div className="mt-8">
              <h4 className="mb-4 font-semibold text-secondary">Síguenos en Redes Sociales</h4>
              <div className="flex gap-4">
                {socialMedia.map((social, index) => {
                  const Icon = social.icon
                  return (
                    <motion.a
                      key={index}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Visitar nuestra página de ${social.name}`}
                      whileHover={{ scale: 1.1, y: -4 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-primary to-primary-dark shadow-lg transition-shadow hover:shadow-xl"
                    >
                      <Icon className="h-5 w-5 text-white" aria-hidden="true" />
                    </motion.a>
                  )
                })}
              </div>
            </div>

            {/* Map placeholder */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-8 overflow-hidden rounded-2xl shadow-xl"
            >
              <div className="h-64 w-full bg-gradient-to-br from-gray-200 to-gray-300">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3869.8123456789!2d-87.2068!3d14.0723!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTTCsDA0JzIwLjMiTiA4N8KwMTInMjQuNSJX!5e0!3m2!1ses!2shn!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Ubicación Parroquia El Salvador del Mundo"
                />
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="rounded-3xl bg-white p-8 shadow-xl">
              <h3 className="mb-6 text-2xl font-bold text-secondary">
                Envíanos un Mensaje
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6" aria-label="Formulario de contacto">
                <div>
                  <label htmlFor="nombre" className="mb-2 block text-sm font-medium text-secondary">
                    Nombre Completo *
                  </label>
                  <input
                    type="text"
                    id="nombre"
                    name="nombre"
                    required
                    autoComplete="name"
                    value={formData.nombre}
                    onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                    className="w-full rounded-xl border border-gray-300 px-4 py-3 text-secondary transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                    placeholder="Tu nombre"
                  />
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <label htmlFor="email" className="mb-2 block text-sm font-medium text-secondary">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      autoComplete="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full rounded-xl border border-gray-300 px-4 py-3 text-secondary transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                      placeholder="tu@email.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="telefono" className="mb-2 block text-sm font-medium text-secondary">
                      Teléfono
                    </label>
                    <input
                      type="tel"
                      id="telefono"
                      name="telefono"
                      autoComplete="tel"
                      value={formData.telefono}
                      onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
                      className="w-full rounded-xl border border-gray-300 px-4 py-3 text-secondary transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                      placeholder="+504 0000-0000"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="asunto" className="mb-2 block text-sm font-medium text-secondary">
                    Asunto *
                  </label>
                  <select
                    id="asunto"
                    required
                    value={formData.asunto}
                    onChange={(e) => setFormData({ ...formData, asunto: e.target.value })}
                    className="w-full rounded-xl border border-gray-300 px-4 py-3 text-secondary transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                  >
                    <option value="">Selecciona un asunto</option>
                    <option value="bautismo">Bautismo</option>
                    <option value="primera-comunion">Primera Comunión</option>
                    <option value="confirmacion">Confirmación</option>
                    <option value="matrimonio">Matrimonio</option>
                    <option value="uncion">Unción de Enfermos</option>
                    <option value="grupos">Grupos Parroquiales</option>
                    <option value="otro">Otro</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="mensaje" className="mb-2 block text-sm font-medium text-secondary">
                    Mensaje *
                  </label>
                  <textarea
                    id="mensaje"
                    required
                    rows={5}
                    value={formData.mensaje}
                    onChange={(e) => setFormData({ ...formData, mensaje: e.target.value })}
                    className="w-full rounded-xl border border-gray-300 px-4 py-3 text-secondary transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                    placeholder="Escribe tu mensaje aquí..."
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  aria-label="Enviar formulario de contacto"
                  className="flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-primary to-primary-dark px-8 py-4 font-semibold text-white shadow-lg transition-shadow hover:shadow-xl"
                >
                  <Send className="h-5 w-5" aria-hidden="true" />
                  Enviar Mensaje
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
