import { NextRequest, NextResponse } from 'next/server'
import fs from 'fs/promises'
import path from 'path'

const dataPath = path.join(process.cwd(), 'data', 'sacerdotes.json')

// PUT - Actualizar sacerdote
export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const body = await request.json()
    const id = parseInt(params.id)
    
    const data = await fs.readFile(dataPath, 'utf-8')
    let sacerdotes = JSON.parse(data)
    
    const index = sacerdotes.findIndex((s: any) => s.id === id)
    
    if (index === -1) {
      return NextResponse.json(
        { error: 'Sacerdote no encontrado' },
        { status: 404 }
      )
    }
    
    sacerdotes[index] = {
      ...sacerdotes[index],
      ...body,
      id,
      updatedAt: new Date().toISOString()
    }
    
    await fs.writeFile(dataPath, JSON.stringify(sacerdotes, null, 2))
    
    return NextResponse.json(sacerdotes[index])
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
  { params }: { params: { id: string } }
) {
  try {
    const id = parseInt(params.id)
    
    const data = await fs.readFile(dataPath, 'utf-8')
    let sacerdotes = JSON.parse(data)
    
    sacerdotes = sacerdotes.filter((s: any) => s.id !== id)
    
    await fs.writeFile(dataPath, JSON.stringify(sacerdotes, null, 2))
    
    return NextResponse.json({ message: 'Sacerdote eliminado' })
  } catch (error) {
    return NextResponse.json(
      { error: 'Error al eliminar sacerdote' },
      { status: 500 }
    )
  }
}
