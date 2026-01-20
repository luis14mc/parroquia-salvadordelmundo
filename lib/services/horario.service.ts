import { prisma } from '@/lib/prisma'
import { HorarioInput } from '@/lib/validations/horario'

/**
 * Servicio de lógica de negocio para Horarios
 */

export class HorarioService {
  /**
   * Obtiene todos los horarios activos
   */
  static async getAll(tipo?: string) {
    return prisma.horario.findMany({
      where: {
        activo: true,
        ...(tipo && { tipo }),
      },
      orderBy: [
        { orden: 'asc' },
        { createdAt: 'desc' }
      ],
    })
  }

  /**
   * Obtiene horarios de misas únicamente
   */
  static async getMisas() {
    return this.getAll('misa')
  }

  /**
   * Obtiene horarios por día específico
   */
  static async getByDay(dia: string) {
    return prisma.horario.findMany({
      where: {
        activo: true,
        dia: {
          contains: dia,
          mode: 'insensitive',
        },
      },
      orderBy: { orden: 'asc' },
    })
  }

  /**
   * Obtiene un horario por ID
   */
  static async getById(id: string) {
    return prisma.horario.findUnique({
      where: { id },
    })
  }

  /**
   * Crea un nuevo horario
   */
  static async create(data: HorarioInput) {
    return prisma.horario.create({
      data: {
        tipo: data.tipo,
        dia: data.dia,
        hora: data.hora,
        lugar: data.lugar || null,
        descripcion: data.descripcion || null,
        orden: data.orden ?? 0,
        activo: data.activo ?? true,
      },
    })
  }

  /**
   * Actualiza un horario
   */
  static async update(id: string, data: Partial<HorarioInput>) {
    const existing = await this.getById(id)
    if (!existing) {
      throw new Error('Horario no encontrado')
    }

    return prisma.horario.update({
      where: { id },
      data: {
        ...(data.tipo && { tipo: data.tipo }),
        ...(data.dia && { dia: data.dia }),
        ...(data.hora && { hora: data.hora }),
        ...(data.lugar !== undefined && { lugar: data.lugar || null }),
        ...(data.descripcion !== undefined && { descripcion: data.descripcion || null }),
        ...(data.orden !== undefined && { orden: data.orden }),
        ...(data.activo !== undefined && { activo: data.activo }),
      },
    })
  }

  /**
   * Elimina un horario
   */
  static async delete(id: string) {
    return prisma.horario.delete({
      where: { id },
    })
  }

  /**
   * Agrupa horarios por tipo
   */
  static async getGroupedByType() {
    const horarios = await this.getAll()
    
    return horarios.reduce((acc, horario) => {
      if (!acc[horario.tipo]) {
        acc[horario.tipo] = []
      }
      acc[horario.tipo].push(horario)
      return acc
    }, {} as Record<string, typeof horarios>)
  }
}
