import { NextRequest, NextResponse } from 'next/server'
import fs from 'fs/promises'
import path from 'path'

const dataPath = path.join(process.cwd(), 'data', 'sacerdotes.json')

// GET - Obtener todos los sacerdotes
export async function GET() {
  try {
    const data = await fs.readFile(dataPath, 'utf-8')
    const sacerdotes = JSON.parse(data)
    return NextResponse.json(sacerdotes)
  } catch (error) {
    return NextResponse.json([], { status: 200 })
  }
}

// POST - Crear nuevo sacerdote
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // Leer datos actuales
    let sacerdotes = []
    try {
      const data = await fs.readFile(dataPath, 'utf-8')
      sacerdotes = JSON.parse(data)
    } catch {
      sacerdotes = []
    }
    
    // Crear nuevo sacerdote con ID
    const nuevoSacerdote = {
      id: Date.now(),
      ...body,
      createdAt: new Date().toISOString()
    }
    
    sacerdotes.push(nuevoSacerdote)
    
    // Guardar
    await fs.writeFile(dataPath, JSON.stringify(sacerdotes, null, 2))
    
    return NextResponse.json(nuevoSacerdote, { status: 201 })
  } catch (error) {
    return NextResponse.json(
      { error: 'Error al crear sacerdote' }, 
      { status: 500 }
    )
  }
}
