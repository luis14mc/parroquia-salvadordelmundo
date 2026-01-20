import { format, formatDistanceToNow, addHours } from 'date-fns'
import { es } from 'date-fns/locale'

/**
 * Utilidades centralizadas para manejo de fechas y horas
 * Timezone: America/Tegucigalpa (UTC-6)
 * Estándares 2026 - Localización Honduras
 */

const HONDURAS_UTC_OFFSET = -6 // UTC-6

/**
 * Obtiene la fecha/hora actual en timezone de Honduras
 */
export function getHondurasDateTime(): Date {
  const now = new Date()
  const utc = now.getTime() + (now.getTimezoneOffset() * 60000)
  return new Date(utc + (3600000 * HONDURAS_UTC_OFFSET))
}

/**
 * Formatea fecha en español (Honduras)
 * @param date - Fecha a formatear
 * @param formatString - Formato (default: 'PPP' - ej: 20 de enero de 2026)
 */
export function formatDateHN(date: Date | string, formatString: string = 'PPP'): string {
  const dateObj = typeof date === 'string' ? new Date(date) : date
  return format(dateObj, formatString, { locale: es })
}

/**
 * Formatea hora en español (Honduras)
 * @param date - Fecha a formatear
 * @returns Hora formateada (ej: "10:00 AM")
 */
export function formatTimeHN(date: Date | string): string {
  const dateObj = typeof date === 'string' ? new Date(date) : date
  return format(dateObj, 'h:mm a', { locale: es })
}

/**
 * Formatea fecha y hora completa
 * @returns Formato: "20 de enero de 2026 a las 10:00 AM"
 */
export function formatDateTimeHN(date: Date | string): string {
  const dateObj = typeof date === 'string' ? new Date(date) : date
  return `${formatDateHN(dateObj)} a las ${formatTimeHN(dateObj)}`
}

/**
 * Retorna tiempo relativo (ej: "hace 2 horas", "en 3 días")
 */
export function formatRelativeTime(date: Date | string): string {
  const dateObj = typeof date === 'string' ? new Date(date) : date
  return formatDistanceToNow(dateObj, { addSuffix: true, locale: es })
}

/**
 * Verifica si una fecha es hoy (en timezone Honduras)
 */
export function isToday(date: Date | string): boolean {
  const dateObj = typeof date === 'string' ? new Date(date) : date
  const today = getHondurasDateTime()
  
  return dateObj.getDate() === today.getDate() &&
         dateObj.getMonth() === today.getMonth() &&
         dateObj.getFullYear() === today.getFullYear()
}

/**
 * Obtiene el día de la semana en español
 * @returns "lunes", "martes", etc.
 */
export function getDayOfWeekHN(date: Date | string = new Date()): string {
  const dateObj = typeof date === 'string' ? new Date(date) : date
  return format(dateObj, 'EEEE', { locale: es })
}

/**
 * Parsea hora en formato string (ej: "18:00", "6:00 PM") a objeto Date
 */
export function parseTimeString(timeStr: string): { hour: number; minute: number } {
  const timeRegex = /^(\d{1,2}):(\d{2})\s*(AM|PM|am|pm)?$/
  const match = timeStr.match(timeRegex)
  
  if (!match) {
    throw new Error(`Formato de hora inválido: ${timeStr}`)
  }
  
  let hour = parseInt(match[1], 10)
  const minute = parseInt(match[2], 10)
  const period = match[3]?.toUpperCase()
  
  // Convertir a formato 24 horas si hay AM/PM
  if (period === 'PM' && hour < 12) {
    hour += 12
  } else if (period === 'AM' && hour === 12) {
    hour = 0
  }
  
  return { hour, minute }
}

/**
 * Formatea moneda Lempiras (Honduras)
 * @param amount - Cantidad numérica
 * @returns Formato: "L 1,500.00"
 */
export function formatCurrencyHN(amount: number): string {
  return `L ${amount.toLocaleString('es-HN', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  })}`
}

/**
 * Convierte fecha UTC a Honduras timezone
 */
export function utcToHonduras(date: Date): Date {
  return addHours(date, HONDURAS_UTC_OFFSET)
}

/**
 * Obtiene datos de la fecha actual en Honduras
 */
export function getHondurasDateInfo() {
  const now = getHondurasDateTime()
  
  return {
    date: now,
    dayOfWeek: getDayOfWeekHN(now),
    dayOfWeekNumber: now.getDay(), // 0 = domingo, 1 = lunes, etc.
    hour: now.getHours(),
    minute: now.getMinutes(),
    formatted: formatDateTimeHN(now),
  }
}
