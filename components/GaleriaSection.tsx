'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'

const galleryImages = [
  {
    id: 1,
    url: 'https://images.unsplash.com/photo-1438232992991-995b7058bbb3?w=800',
    title: 'Templo Principal',
    category: 'Instalaciones'
  },
  {
    id: 2,
    url: 'https://images.unsplash.com/photo-1544168190-79c17527004f?w=800',
    title: 'Celebración Eucarística',
    category: 'Liturgia'
  },
  {
    id: 3,
    url: 'https://images.unsplash.com/photo-1449034446853-66c86144b0ad?w=800',
    title: 'Interior del Templo',
    category: 'Instalaciones'
  },
  {
    id: 4,
    url: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=800',
    title: 'Grupo Juvenil',
    category: 'Comunidad'
  },
  {
    id: 5,
    url: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800',
    title: 'Servicio Social',
    category: 'Comunidad'
  },
  {
    id: 6,
    url: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800',
    title: 'Catequesis',
    category: 'Formación'
  },
  {
    id: 7,
    url: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800',
    title: 'Matrimonio',
    category: 'Sacramentos'
  },
  {
    id: 8,
    url: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800',
    title: 'Confirmación',
    category: 'Sacramentos'
  },
]

const categories = ['Todas', 'Instalaciones', 'Liturgia', 'Comunidad', 'Formación', 'Sacramentos']

export default function GaleriaSection() {
  const [selectedCategory, setSelectedCategory] = useState('Todas')
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const filteredImages = selectedCategory === 'Todas' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory)

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index)
    setLightboxOpen(true)
  }

  const closeLightbox = () => {
    setLightboxOpen(false)
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % filteredImages.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + filteredImages.length) % filteredImages.length)
  }

  return (
    <section id="galeria" className="bg-white px-4 py-24">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-4xl font-bold text-secondary md:text-5xl">
            Galería <span className="text-primary">Fotográfica</span>
          </h2>
          <p className="text-lg text-gray-600">
            Momentos especiales de nuestra comunidad parroquial
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12 flex flex-wrap justify-center gap-3"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setSelectedCategory(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`rounded-full px-6 py-2 font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-primary to-primary-dark text-white shadow-lg'
                  : 'bg-gray-100 text-secondary hover:bg-gray-200'
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {filteredImages.map((image, index) => (
            <motion.div
              key={image.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4 }}
              whileHover={{ y: -8 }}
              className="group relative cursor-pointer overflow-hidden rounded-2xl shadow-lg"
              onClick={() => openLightbox(index)}
            >
              <div className="aspect-square w-full">
                <div
                  className="h-full w-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                  style={{ backgroundImage: `url('${image.url}')` }}
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 via-secondary/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="mb-1 text-xs font-semibold text-accent">{image.category}</p>
                  <h3 className="font-serif text-xl font-bold text-white">{image.title}</h3>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Lightbox */}
        {lightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4"
            onClick={closeLightbox}
          >
            <button
              onClick={closeLightbox}
              className="absolute right-4 top-4 rounded-full bg-white/10 p-2 backdrop-blur-sm transition-colors hover:bg-white/20"
            >
              <X className="h-6 w-6 text-white" />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation()
                prevImage()
              }}
              className="absolute left-4 rounded-full bg-white/10 p-2 backdrop-blur-sm transition-colors hover:bg-white/20"
            >
              <ChevronLeft className="h-6 w-6 text-white" />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation()
                nextImage()
              }}
              className="absolute right-4 rounded-full bg-white/10 p-2 backdrop-blur-sm transition-colors hover:bg-white/20"
            >
              <ChevronRight className="h-6 w-6 text-white" />
            </button>

            <div
              className="relative max-h-[90vh] max-w-5xl"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={filteredImages[currentImageIndex].url}
                alt={filteredImages[currentImageIndex].title}
                className="h-full w-full rounded-lg object-contain"
              />
              <div className="mt-4 text-center">
                <p className="text-sm text-accent">{filteredImages[currentImageIndex].category}</p>
                <h3 className="text-xl font-bold text-white">{filteredImages[currentImageIndex].title}</h3>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  )
}
