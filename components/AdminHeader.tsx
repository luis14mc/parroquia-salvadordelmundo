'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { LayoutDashboard, LogOut, Home } from 'lucide-react'

export default function AdminHeader() {
  const router = useRouter()

  const handleLogout = () => {
    localStorage.removeItem('admin_token')
    router.push('/admin')
  }

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
        <div className="flex items-center gap-6">
          <Link href="/admin/dashboard" className="flex items-center gap-3 hover:opacity-80">
            <LayoutDashboard className="h-8 w-8 text-primary" />
            <div>
              <h1 className="text-xl font-bold text-secondary">
                Panel de Administración
              </h1>
              <p className="text-xs text-gray-600">
                Parroquia El Salvador del Mundo
              </p>
            </div>
          </Link>
        </div>
        
        <div className="flex items-center gap-3">
          <Link
            href="/"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-gray-100 p-2 text-gray-700 transition-colors hover:bg-gray-200"
            title="Ver sitio web"
          >
            <Home className="h-5 w-5" />
          </Link>
          
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
  )
}
