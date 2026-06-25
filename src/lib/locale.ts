/**
 * Helpers de localización para Honduras (es-HN)
 * ───────────────────────────────────────────────
 * Centraliza formato de moneda, teléfono y fecha
 * para que componentes nunca manipulen strings crudos.
 *
 * @module lib/locale
 */

const LOCALE = "es-HN";
const TIMEZONE = "America/Tegucigalpa";

/**
 * Formatea un monto en Lempiras hondureños.
 * @example formatLempiras(50) → "L 50.00"
 * @example formatLempiras(1500) → "L 1,500.00"
 */
export function formatLempiras(amount: number): string {
  return new Intl.NumberFormat(LOCALE, {
    style: "currency",
    currency: "HNL",
    currencyDisplay: "narrowSymbol", // "L" en vez de "HNL"
    minimumFractionDigits: 2,
  }).format(amount);
}

/**
 * Formatea un número de teléfono hondureño para mostrar.
 * @example formatPhone("22240263") → "2224-0263"
 * @example formatPhone("95345899") → "9534-5899"
 */
export function formatPhone(raw: string): string {
  const digits = raw.replace(/\D/g, "");
  if (digits.length === 8) {
    return `${digits.slice(0, 4)}-${digits.slice(4)}`;
  }
  return raw;
}

/**
 * Genera href para llamada telefónica con prefijo +504.
 * @example phoneHref("22240263") → "tel:+50422240263"
 */
export function phoneHref(raw: string): string {
  const digits = raw.replace(/\D/g, "");
  return `tel:+504${digits}`;
}

/**
 * Genera enlace de WhatsApp con prefijo de Honduras.
 * @example waLink("95345899") → "https://wa.me/50495345899"
 * @example waLink("95345899", "Hola") → "https://wa.me/50495345899?text=Hola"
 */
export function waLink(phone: string, message?: string): string {
  const digits = phone.replace(/\D/g, "");
  const base = `https://wa.me/504${digits}`;
  if (!message) return base;
  return `${base}?text=${encodeURIComponent(message)}`;
}

/**
 * Formatea una fecha en formato largo hondureño.
 * @example formatDate(new Date()) → "25 de febrero de 2026"
 */
export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat(LOCALE, {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: TIMEZONE,
  }).format(date);
}

/**
 * Formatea hora en formato 12h con AM/PM (estándar en Honduras).
 * @example formatTime("19:00") → "7:00 PM"
 */
export function formatTime(time24: string): string {
  const [h, m] = time24.split(":").map(Number);
  const suffix = h >= 12 ? "PM" : "AM";
  const hour12 = h % 12 || 12;
  return `${hour12}:${m.toString().padStart(2, "0")} ${suffix}`;
}
