import { prisma } from '@/lib/prisma'
import { SacerdoteInput } from '@/lib/validations/sacerdote'

/**
 * Servicio de lógica de negocio para Sacerdotes
 * Separa la lógica de negocio de las API routes
 * Siguiendo principios SOLID y Clean Architecture
 */

export class SacerdoteService {
  /**
   * Obtiene todos los sacerdotes activos ordenados
   */
  static async getAll(includeInactive: boolean = false) {
    return prisma.sacerdote.findMany({
      where: includeInactive ? undefined : { activo: true },
      orderBy: [
        { orden: 'asc' },
        { createdAt: 'desc' }
      ],
    })
  }

  /**
   * Obtiene un sacerdote por ID
   */
  static async getById(id: string) {
    return prisma.sacerdote.findUnique({
      where: { id },
    })
  }

  /**
   * Crea un nuevo sacerdote
   */
  static async create(data: SacerdoteInput) {
    // Lógica de negocio adicional puede ir aquí
    // Por ejemplo: validar que no exista sacerdote con mismo email
    
    if (data.email) {
      const existing = await prisma.sacerdote.findFirst({
        where: { email: data.email },
      })
      
      if (existing) {
        throw new Error('Ya existe un sacerdote con ese email')
      }
    }

    return prisma.sacerdote.create({
      data: {
        nombre: data.nombre,
        cargo: data.cargo,
        descripcion: data.descripcion,
        imagen: data.imagen,
        email: data.email || null,
        telefono: data.telefono || null,
        orden: data.orden ?? 0,
        activo: data.activo ?? true,
      },
    })
  }

  /**
   * Actualiza un sacerdote existente
   */
  static async update(id: string, data: Partial<SacerdoteInput>) {
    // Verificar que existe
    const existing = await this.getById(id)
    if (!existing) {
      throw new Error('Sacerdote no encontrado')
    }

    // Validar email único si se está actualizando
    if (data.email && data.email !== existing.email) {
      const emailExists = await prisma.sacerdote.findFirst({
        where: { 
          email: data.email,
          id: { not: id }
        },
      })
      
      if (emailExists) {
        throw new Error('Ya existe un sacerdote con ese email')
      }
    }

    return prisma.sacerdote.update({
      where: { id },
      data: {
        ...(data.nombre && { nombre: data.nombre }),
        ...(data.cargo && { cargo: data.cargo }),
        ...(data.descripcion && { descripcion: data.descripcion }),
        ...(data.imagen && { imagen: data.imagen }),
        ...(data.email !== undefined && { email: data.email || null }),
        ...(data.telefono !== undefined && { telefono: data.telefono || null }),
        ...(data.orden !== undefined && { orden: data.orden }),
        ...(data.activo !== undefined && { activo: data.activo }),
      },
    })
  }

  /**
   * Elimina un sacerdote (soft delete - marca como inactivo)
   */
  static async softDelete(id: string) {
    return prisma.sacerdote.update({
      where: { id },
      data: { activo: false },
    })
  }

  /**
   * Elimina permanentemente un sacerdote
   */
  static async delete(id: string) {
    return prisma.sacerdote.delete({
      where: { id },
    })
  }

  /**
   * Reordena sacerdotes
   */
  static async reorder(orders: Array<{ id: string; orden: number }>) {
    const updates = orders.map(({ id, orden }) =>
      prisma.sacerdote.update({
        where: { id },
        data: { orden },
      })
    )

    return prisma.$transaction(updates)
  }
}
