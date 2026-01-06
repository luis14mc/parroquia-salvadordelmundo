import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

// PUT - Actualizar sacerdote
export async function PUT(
  request: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await context.params
    const body = await request.json()
    
    const sacerdote = await prisma.sacerdote.update({
      where: { id },
      data: {
        nombre: body.nombre,
        cargo: body.cargo,
        descripcion: body.descripcion,
        imagen: body.imagen,
        email: body.email,
        telefono: body.telefono,
      },
    })
    
    return NextResponse.json(sacerdote)
  } catch (error) {
    return NextResponse.json(
      { error: 'Error al actualizar sacerdote' },
      { status: 500 }
    )
  }
}

// DELETE - Eliminar sacerdote
export async function DELETE(
  request: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await context.params
    
    await prisma.sacerdote.delete({
      where: { id },
    })
    
    return NextResponse.json({ message: 'Sacerdote eliminado' })
  } catch (error) {
    return NextResponse.json(
      { error: 'Error al eliminar sacerdote' },
      { status: 500 }
    )
  }
}
