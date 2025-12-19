'use client'

import { motion } from 'framer-motion'
import { Heart, Users, Book, Music, Handshake, GraduationCap, ArrowRight } from 'lucide-react'
import Image from 'next/image'

const communityGroups = [
  {
    id: 1,
    name: 'Coro Parroquial',
    icon: Music,
    members: 25,
    description: 'Ministerio de música y alabanza',
    schedule: 'Ensayos: Jueves 7:00 PM',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400',
    color: 'from-primary to-primary-dark'
  },
  {
    id: 2,
    name: 'Grupo Juvenil',
    icon: Users,
    members: 40,
    description: 'Jóvenes en fe y servicio',
    schedule: 'Reuniones: Sábado 5:00 PM',
    image: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=400',
    color: 'from-blue-500 to-blue-700'
  },
  {
    id: 3,
    name: 'Caritas Parroquial',
    icon: Heart,
    members: 18,
    description: 'Servicio social y caridad',
    schedule: 'Actividades: Miércoles 3:00 PM',
    image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=400',
    color: 'from-accent to-yellow-600'
  },
  {
    id: 4,
    name: 'Catequistas',
    icon: Book,
    members: 30,
    description: 'Formación en la fe',
    schedule: 'Formación: Martes 6:00 PM',
    image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400',
    color: 'from-green-500 to-green-700'
  },
  {
    id: 5,
    name: 'Matrimonios',
    icon: Handshake,
    members: 22,
    description: 'Fortalecimiento familiar',
    schedule: 'Encuentros: 1er Viernes 7:00 PM',
    image: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=400',
    color: 'from-purple-500 to-purple-700'
  },
  {
    id: 6,
    name: 'Lectores y Acólitos',
    icon: GraduationCap,
    members: 15,
    description: 'Servicio litúrgico',
    schedule: 'Formación: Sábado 4:00 PM',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400',
    color: 'from-red-500 to-red-700'
  },
]

const news = [
  {
    id: 1,
    title: 'Peregrinación a Suyapa',
    date: '25 de Diciembre, 2024',
    excerpt: 'Invitamos a toda la comunidad a participar en nuestra peregrinación anual a la Basílica de Suyapa.',
    image: 'https://images.unsplash.com/photo-1544168190-79c17527004f?w=600',
    category: 'Evento'
  },
  {
    id: 2,
    title: 'Nueva Capilla de Adoración',
    date: '15 de Diciembre, 2024',
    excerpt: 'Con gran alegría anunciamos la inauguración de nuestra nueva capilla del Santísimo Sacramento.',
    image: 'https://images.unsplash.com/photo-1449034446853-66c86144b0ad?w=600',
    category: 'Noticia'
  },
  {
    id: 3,
    title: 'Taller de Formación Catequética',
    date: '10 de Enero, 2025',
    excerpt: 'Inscripciones abiertas para el taller de formación de nuevos catequistas.',
    image: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=600',
    category: 'Formación'
  },
]

export default function ComunidadSection() {
  return (
    <section id="comunidad" className="bg-white px-4 py-24">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-4xl font-bold text-secondary md:text-5xl">
            Nuestra <span className="text-primary">Comunidad</span>
          </h2>
          <p className="text-lg text-gray-600">
            Unidos en la fe, creciendo juntos en el amor de Cristo
          </p>
        </motion.div>

        {/* Community Groups */}
        <div className="mb-24">
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="mb-8 text-2xl font-bold text-secondary"
          >
            Grupos Parroquiales
          </motion.h3>
          
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {communityGroups.map((group, index) => {
              const Icon = group.icon
              return (
                <motion.div
                  key={group.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -8, transition: { duration: 0.3 } }}
                  className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-50 to-white shadow-lg transition-all duration-300 hover:shadow-2xl"
                >
                  {/* Icon */}
                  <div className="p-6">
                    <div className={`mb-4 inline-flex rounded-2xl bg-gradient-to-br ${group.color} p-4 shadow-md transition-transform duration-300 group-hover:scale-110`}>
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    
                    <h4 className="mb-2 text-xl font-bold text-secondary">
                      {group.name}
                    </h4>
                    
                    <p className="mb-3 text-sm text-gray-600">
                      {group.description}
                    </p>
                    
                    <div className="mb-4 space-y-2 text-sm">
                      <div className="flex items-center gap-2 text-gray-700">
                        <Users className="h-4 w-4 text-primary" />
                        <span>{group.members} miembros</span>
                      </div>
                      <div className="text-gray-600">
                        {group.schedule}
                      </div>
                    </div>
                    
                    <motion.button
                      whileHover={{ x: 5 }}
                      className="flex items-center gap-2 font-semibold text-primary transition-colors hover:text-primary-dark"
                    >
                      Unirse al grupo
                      <ArrowRight className="h-4 w-4" />
                    </motion.button>
                  </div>

                  {/* Decorative gradient */}
                  <div className={`absolute -right-16 -top-16 h-32 w-32 rounded-full bg-gradient-to-br ${group.color} opacity-10 blur-2xl transition-opacity duration-300 group-hover:opacity-20`} />
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* News Section */}
        <div>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="mb-8 flex items-center justify-between"
          >
            <h3 className="text-2xl font-bold text-secondary">
              Noticias y Eventos
            </h3>
            <motion.button
              whileHover={{ x: 5 }}
              className="flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-primary-dark"
            >
              Ver todas
              <ArrowRight className="h-4 w-4" />
            </motion.button>
          </motion.div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {news.map((item, index) => (
              <motion.article
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="group cursor-pointer overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-300 hover:shadow-2xl"
              >
                {/* Image */}
                <div className="relative h-48 w-full overflow-hidden bg-gray-200">
                  <div
                    className="h-full w-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                    style={{ backgroundImage: `url('${item.image}')` }}
                  />
                  <div className="absolute left-4 top-4 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-white shadow-md">
                    {item.category}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="mb-2 text-xs text-gray-500">
                    {item.date}
                  </div>
                  <h4 className="mb-3 text-xl font-bold text-secondary transition-colors group-hover:text-primary">
                    {item.title}
                  </h4>
                  <p className="mb-4 text-sm text-gray-600 line-clamp-2">
                    {item.excerpt}
                  </p>
                  <motion.div
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-2 font-semibold text-primary"
                  >
                    Leer más
                    <ArrowRight className="h-4 w-4" />
                  </motion.div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-24 rounded-3xl bg-gradient-to-br from-primary to-primary-dark p-12 text-center shadow-2xl"
        >
          <h3 className="mb-4 text-3xl font-bold text-white md:text-4xl">
            ¿Quieres ser parte de nuestra comunidad?
          </h3>
          <p className="mb-8 text-lg text-white/90">
            Te invitamos a conocer nuestros grupos y actividades
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="rounded-full bg-accent px-8 py-4 text-lg font-semibold text-secondary shadow-lg transition-shadow hover:shadow-xl hover:shadow-accent/50"
          >
            Contáctanos
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
