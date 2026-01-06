'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { 
  Users, Calendar, Image as ImageIcon, UsersRound, 
  Newspaper, LogOut, LayoutDashboard, Settings 
} from 'lucide-react'
import Link from 'next/link'

export default function AdminDashboard() {
  const [loading, setLoading] = useState(true)
  const [user, setUser] = useState<any>(null)
  const router = useRouter()

  useEffect(() => {
    verifyAuth()
  }, [])

  const verifyAuth = async () => {
    const token = localStorage.getItem('admin_token')
    
    if (!token) {
      router.push('/admin')
      return
    }

    try {
      const res = await fetch('/api/admin/auth/verify', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })

      if (res.ok) {
        const data = await res.json()
        setUser(data.user)
      } else {
        localStorage.removeItem('admin_token')
        router.push('/admin')
      }
    } catch (error) {
      router.push('/admin')
    } finally {
      setLoading(false)
    }
  }

  const handleLogout = () => {
    localStorage.removeItem('admin_token')
    router.push('/admin')
  }

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="h-12 w-12 animate-spin rounded-full border-4 border-primary border-t-transparent" />
      </div>
    )
  }

  const menuItems = [
    {
      title: 'Sacerdotes',
      description: 'Gestionar información del clero',
      icon: Users,
      href: '/admin/sacerdotes',
      color: 'from-blue-500 to-blue-700'
    },
    {
      title: 'Horarios',
      description: 'Misas y servicios parroquiales',
      icon: Calendar,
      href: '/admin/horarios',
      color: 'from-green-500 to-green-700'
    },
    {
      title: 'Galería',
      description: 'Imágenes de la parroquia',
      icon: ImageIcon,
      href: '/admin/galeria',
      color: 'from-purple-500 to-purple-700'
    },
    {
      title: 'Grupos',
      description: 'Grupos parroquiales',
      icon: UsersRound,
      href: '/admin/grupos',
      color: 'from-orange-500 to-orange-700'
    },
    {
      title: 'Noticias',
      description: 'Eventos y anuncios',
      icon: Newspaper,
      href: '/admin/noticias',
      color: 'from-red-500 to-red-700'
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
          <div className="flex items-center gap-3">
            <LayoutDashboard className="h-8 w-8 text-primary" />
            <div>
              <h1 className="text-xl font-bold text-secondary">
                Panel de Administración
              </h1>
              <p className="text-sm text-gray-600">
                Parroquia El Salvador del Mundo
              </p>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="text-right">
              <p className="text-sm font-medium text-secondary">
                {user?.username}
              </p>
              <p className="text-xs text-gray-500">Administrador</p>
            </div>
            <button
              onClick={handleLogout}
              className="rounded-lg bg-red-50 p-2 text-red-600 transition-colors hover:bg-red-100"
              title="Cerrar sesión"
            >
              <LogOut className="h-5 w-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="mx-auto max-w-7xl p-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <h2 className="mb-2 text-2xl font-bold text-secondary">
            Bienvenido al Panel de Administración
          </h2>
          <p className="text-gray-600">
            Selecciona una sección para gestionar el contenido del sitio web
          </p>
        </motion.div>

        {/* Menu Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {menuItems.map((item, index) => {
            const Icon = item.icon
            return (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <Link
                  href={item.href}
                  className="group block h-full overflow-hidden rounded-2xl bg-white p-6 shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                >
                  <div className={`mb-4 inline-flex rounded-xl bg-gradient-to-br ${item.color} p-3 shadow-lg`}>
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  
                  <h3 className="mb-2 text-xl font-bold text-secondary group-hover:text-primary">
                    {item.title}
                  </h3>
                  
                  <p className="text-sm text-gray-600">
                    {item.description}
                  </p>
                </Link>
              </motion.div>
            )
          })}
        </div>

        {/* Quick Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-8 rounded-2xl bg-white p-6 shadow-md"
        >
          <h3 className="mb-4 flex items-center gap-2 text-lg font-bold text-secondary">
            <Settings className="h-5 w-5" />
            Acciones Rápidas
          </h3>
          
          <div className="grid gap-4 sm:grid-cols-2">
            <a
              href="/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border-2 border-gray-200 p-4 text-center transition-colors hover:border-primary hover:bg-primary/5"
            >
              <p className="font-semibold text-secondary">Ver Sitio Web</p>
              <p className="text-sm text-gray-600">Abrir en nueva pestaña</p>
            </a>
            
            <button
              onClick={() => window.location.reload()}
              className="rounded-lg border-2 border-gray-200 p-4 text-center transition-colors hover:border-primary hover:bg-primary/5"
            >
              <p className="font-semibold text-secondary">Recargar Panel</p>
              <p className="text-sm text-gray-600">Actualizar información</p>
            </button>
          </div>
        </motion.div>
      </main>
    </div>
  )
}
