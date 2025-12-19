'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import NextImage from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { name: 'Inicio', href: '/' },
  { name: 'Nuestra Parroquia', href: '/#nuestra-parroquia' },
  { name: 'Sacramentos', href: '/sacramentos' },
  { name: 'Contacto', href: '/#contacto' },
  { name: 'Donaciones', href: '/#donaciones' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <nav
        className={`fixed top-0 z-50 w-full transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-lg shadow-lg' 
            : 'bg-white/80 backdrop-blur-md'
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-3"
            >
              <Link href="/" className="flex items-center">
                <div className="relative h-12 w-32 sm:h-14 sm:w-40 md:h-16 md:w-48">
                  <NextImage
                    src="/logo/logo_negro.png"
                    alt="Parroquia El Salvador del Mundo - Tegucigalpa, Honduras"
                    fill
                    className="object-contain object-left"
                    priority
                  />
                </div>
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex md:items-center md:gap-1">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Link
                    href={link.href}
                    className="group relative px-4 py-2 text-sm font-medium text-secondary transition-colors hover:text-primary"
                  >
                    {link.name}
                    <motion.div
                      className="absolute bottom-0 left-0 h-0.5 w-full origin-left scale-x-0 bg-gradient-to-r from-primary to-accent transition-transform duration-300 group-hover:scale-x-100"
                    />
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* CTA Button Desktop */}
            <motion.button
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="hidden rounded-full bg-gradient-to-r from-primary to-primary-dark px-6 py-2.5 text-sm font-semibold text-white shadow-lg transition-shadow hover:shadow-xl hover:shadow-primary/30 md:block"
            >
              Donar
            </motion.button>

            {/* Mobile Menu Button */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsOpen(!isOpen)}
              className="rounded-lg p-2 text-secondary transition-colors hover:bg-gray-100 md:hidden"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={false}
          animate={{
            height: isOpen ? 'auto' : 0,
            opacity: isOpen ? 1 : 0,
          }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          className="overflow-hidden border-t border-gray-200 bg-white md:hidden"
        >
          <div className="space-y-1 px-4 pb-4 pt-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-3 rounded-lg px-4 py-3 text-base font-medium text-secondary transition-colors hover:bg-primary/10 hover:text-primary"
              >
                {link.name}
              </Link>
            ))}
            <motion.button
              whileTap={{ scale: 0.95 }}
              className="mt-4 w-full rounded-full bg-gradient-to-r from-primary to-primary-dark px-6 py-3 text-base font-semibold text-white shadow-lg"
            >
              Donar
            </motion.button>
          </div>
        </motion.div>
      </nav>

      {/* Spacer to prevent content from going under fixed navbar */}
      <div className="h-20" />
    </>
  )
}
