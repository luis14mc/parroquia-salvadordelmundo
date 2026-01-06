'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Edit, Trash2, X, Save, ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import AdminHeader from '@/components/AdminHeader'

interface Sacerdote {
  id: number
  nombre: string
  cargo: string
  descripcion: string
  imagen: string
  email?: string
  telefono?: string
}

export default function SacerdotesAdmin() {
  const [sacerdotes, setSacerdotes] = useState<Sacerdote[]>([])
  const [loading, setLoading] = useState(true)
  const [showForm, setShowForm] = useState(false)
  const [editingId, setEditingId] = useState<number | null>(null)
  const [formData, setFormData] = useState({
    nombre: '',
    cargo: '',
    descripcion: '',
    imagen: '',
    email: '',
    telefono: ''
  })
  const router = useRouter()

  useEffect(() => {
    verifyAuth()
    fetchSacerdotes()
  }, [])

  const verifyAuth = () => {
    const token = localStorage.getItem('admin_token')
    if (!token) {
      router.push('/admin')
    }
  }

  const fetchSacerdotes = async () => {
    try {
      const res = await fetch('/api/sacerdotes')
      const data = await res.json()
      setSacerdotes(data)
    } catch (error) {
      console.error('Error al cargar sacerdotes:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    try {
      if (editingId) {
        // Actualizar
        const res = await fetch(`/api/sacerdotes/${editingId}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData)
        })
        
        if (res.ok) {
          await fetchSacerdotes()
          resetForm()
        }
      } else {
        // Crear
        const res = await fetch('/api/sacerdotes', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData)
        })
        
        if (res.ok) {
          await fetchSacerdotes()
          resetForm()
        }
      }
    } catch (error) {
      console.error('Error al guardar:', error)
    }
  }

  const handleEdit = (sacerdote: Sacerdote) => {
    setFormData({
      nombre: sacerdote.nombre,
      cargo: sacerdote.cargo,
      descripcion: sacerdote.descripcion,
      imagen: sacerdote.imagen,
      email: sacerdote.email || '',
      telefono: sacerdote.telefono || ''
    })
    setEditingId(sacerdote.id)
    setShowForm(true)
  }

  const handleDelete = async (id: number) => {
    if (!confirm('¿Estás seguro de eliminar este sacerdote?')) return
    
    try {
      const res = await fetch(`/api/sacerdotes/${id}`, {
        method: 'DELETE'
      })
      
      if (res.ok) {
        await fetchSacerdotes()
      }
    } catch (error) {
      console.error('Error al eliminar:', error)
    }
  }

  const resetForm = () => {
    setFormData({
      nombre: '',
      cargo: '',
      descripcion: '',
      imagen: '',
      email: '',
      telefono: ''
    })
    setEditingId(null)
    setShowForm(false)
  }

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="h-12 w-12 animate-spin rounded-full border-4 border-primary border-t-transparent" />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <AdminHeader />
      
      <div className="p-6">
        <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-8">
          <Link
            href="/admin/dashboard"
            className="mb-4 inline-flex items-center gap-2 text-gray-600 hover:text-primary"
          >
            <ArrowLeft className="h-5 w-5" />
            Volver al Dashboard
          </Link>
            <h1 className="text-3xl font-bold text-secondary">
              Gestión de Sacerdotes
            </h1>
            <p className="text-gray-600">
              {sacerdotes.length} sacerdote{sacerdotes.length !== 1 ? 's' : ''} registrado{sacerdotes.length !== 1 ? 's' : ''}
            </p>
          </div>
          
          <button
            onClick={() => setShowForm(true)}
            className="flex items-center gap-2 rounded-lg bg-primary px-6 py-3 font-semibold text-white shadow-lg hover:bg-primary-dark"
          >
            <Plus className="h-5 w-5" />
            Nuevo Sacerdote
          </button>
        </div>

        {/* Lista de Sacerdotes */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {sacerdotes.map((sacerdote) => (
            <motion.div
              key={sacerdote.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="rounded-lg bg-white p-6 shadow-md"
            >
              <div className="mb-4 flex items-start justify-between">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-secondary">
                    {sacerdote.nombre}
                  </h3>
                  <p className="text-primary">{sacerdote.cargo}</p>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => handleEdit(sacerdote)}
                    className="rounded-lg bg-blue-100 p-2 text-blue-600 hover:bg-blue-200"
                  >
                    <Edit className="h-4 w-4" />
                  </button>
                  <button
                    onClick={() => handleDelete(sacerdote.id)}
                    className="rounded-lg bg-red-100 p-2 text-red-600 hover:bg-red-200"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              </div>
              
              <p className="mb-4 text-sm text-gray-600 line-clamp-3">
                {sacerdote.descripcion}
              </p>
              
              {sacerdote.email && (
                <p className="text-sm text-gray-500">📧 {sacerdote.email}</p>
              )}
              {sacerdote.telefono && (
                <p className="text-sm text-gray-500">📞 {sacerdote.telefono}</p>
              )}
            </motion.div>
          ))}
        </div>

        {sacerdotes.length === 0 && (
          <div className="rounded-lg bg-white p-12 text-center shadow-md">
            <p className="text-gray-500">
              No hay sacerdotes registrados. Haz clic en "Nuevo Sacerdote" para agregar uno.
            </p>
          </div>
        )}
      </div>

      {/* Modal de Formulario */}
      <AnimatePresence>
        {showForm && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
            onClick={() => resetForm()}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="w-full max-w-2xl rounded-lg bg-white p-8 shadow-xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="mb-6 flex items-center justify-between">
                <h2 className="text-2xl font-bold text-secondary">
                  {editingId ? 'Editar Sacerdote' : 'Nuevo Sacerdote'}
                </h2>
                <button
                  onClick={resetForm}
                  className="rounded-lg p-2 hover:bg-gray-100"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="mb-1 block text-sm font-medium text-gray-700">
                    Nombre completo *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.nombre}
                    onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                    className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-primary focus:outline-none"
                    placeholder="Ej: P. Juan Pérez"
                  />
                </div>

                <div>
                  <label className="mb-1 block text-sm font-medium text-gray-700">
                    Cargo *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.cargo}
                    onChange={(e) => setFormData({ ...formData, cargo: e.target.value })}
                    className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-primary focus:outline-none"
                    placeholder="Ej: Párroco"
                  />
                </div>

                <div>
                  <label className="mb-1 block text-sm font-medium text-gray-700">
                    Descripción *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.descripcion}
                    onChange={(e) => setFormData({ ...formData, descripcion: e.target.value })}
                    className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-primary focus:outline-none"
                    placeholder="Breve descripción o biografía..."
                  />
                </div>

                <div>
                  <label className="mb-1 block text-sm font-medium text-gray-700">
                    URL de imagen *
                  </label>
                  <input
                    type="url"
                    required
                    value={formData.imagen}
                    onChange={(e) => setFormData({ ...formData, imagen: e.target.value })}
                    className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-primary focus:outline-none"
                    placeholder="https://ejemplo.com/imagen.jpg"
                  />
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="mb-1 block text-sm font-medium text-gray-700">
                      Email
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-primary focus:outline-none"
                      placeholder="correo@ejemplo.com"
                    />
                  </div>

                  <div>
                    <label className="mb-1 block text-sm font-medium text-gray-700">
                      Teléfono
                    </label>
                    <input
                      type="tel"
                      value={formData.telefono}
                      onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
                      className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-primary focus:outline-none"
                      placeholder="+504 1234-5678"
                    />
                  </div>
                </div>

                <div className="flex gap-4 pt-4">
                  <button
                    type="button"
                    onClick={resetForm}
                    className="flex-1 rounded-lg border border-gray-300 px-6 py-3 font-semibold text-gray-700 hover:bg-gray-50"
                  >
                    Cancelar
                  </button>
                  <button
                    type="submit"
                    className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 font-semibold text-white hover:bg-primary-dark"
                  >
                    <Save className="h-5 w-5" />
                    {editingId ? 'Actualizar' : 'Guardar'}
                  </button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
