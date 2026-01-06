import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

// GET - Obtener todos los sacerdotes
export async function GET() {
  try {
    const sacerdotes = await prisma.sacerdote.findMany({
      orderBy: { createdAt: 'desc' },
    })
    return NextResponse.json(sacerdotes)
  } catch (error) {
    return NextResponse.json([], { status: 200 })
  }
}

// POST - Crear nuevo sacerdote
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    const nuevoSacerdote = await prisma.sacerdote.create({
      data: {
        nombre: body.nombre,
        cargo: body.cargo,
        descripcion: body.descripcion,
        imagen: body.imagen,
        email: body.email,
        telefono: body.telefono,
      },
    })
    
    return NextResponse.json(nuevoSacerdote, { status: 201 })
  } catch (error) {
    return NextResponse.json(
      { error: 'Error al crear sacerdote' }, 
      { status: 500 }
    )
  }
}
}
