import { PrismaClient } from '@prisma/client'
import { PrismaLibSQL } from '@prisma/adapter-libsql'
import { createClient } from '@libsql/client'
import bcrypt from 'bcryptjs'

const libsql = createClient({
  url: 'file:./prisma/dev.db'
})

const adapter = new PrismaLibSQL(libsql)
const prisma = new PrismaClient({ adapter })

async function main() {
  console.log('🌱 Iniciando seed de la base de datos...')

  // Crear usuario admin
  const hashedPassword = await bcrypt.hash('ParroquiaSalvador2026!', 10)
  
  const admin = await prisma.user.upsert({
    where: { username: 'admin' },
    update: {},
    create: {
      username: 'admin',
      password: hashedPassword,
      email: 'admin@parroquiasalvador.org',
      role: 'admin',
    },
  })

  console.log('✅ Usuario admin creado:', admin.username)

  // Crear configuraciones de formularios
  const formConfigs = [
    {
      nombre: 'contacto',
      habilitado: true,
      emailDestino: 'contacto@parroquiasalvador.org',
      mensajeExito: 'Gracias por contactarnos. Te responderemos pronto.',
      mensajeError: 'Hubo un error al enviar el mensaje. Intenta nuevamente.',
    },
    {
      nombre: 'donaciones',
      habilitado: true,
      emailDestino: 'donaciones@parroquiasalvador.org',
      mensajeExito: 'Gracias por tu generosidad. Dios te bendiga.',
      mensajeError: 'Hubo un error al procesar tu donación.',
    },
  ]

  for (const config of formConfigs) {
    await prisma.formConfig.upsert({
      where: { nombre: config.nombre },
      update: {},
      create: config,
    })
  }

  console.log('✅ Configuraciones de formularios creadas')

  console.log('🎉 Seed completado exitosamente!')
}

main()
  .catch((e) => {
    console.error('❌ Error en seed:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
