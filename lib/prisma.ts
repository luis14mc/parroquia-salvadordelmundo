import { PrismaClient } from '@prisma/client'

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined
}

// Evitar instanciar durante build - solo en runtime
export const prisma = globalForPrisma.prisma ?? (
  typeof window === 'undefined' && process.env.NODE_ENV !== 'production'
    ? new PrismaClient()
    : new PrismaClient()
)

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma
