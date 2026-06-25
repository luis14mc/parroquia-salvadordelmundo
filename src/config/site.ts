/**
 * Configuración central del sitio — Parroquia El Salvador del Mundo
 * ─────────────────────────────────────────────────────────────────
 * TODA la información institucional vive aquí.
 * En Fase 2 (CMS), este archivo será reemplazado por un endpoint de API
 * sin tocar ningún componente gracias a un adapter layer.
 *
 * @module config/site
 */

// ── Tipos ────────────────────────────────────────────────────────
export interface ContactInfo {
  telefono: string;
  telefonoDisplay: string;
  telefonoHref: string;
  whatsapp: string;
  whatsappDisplay: string;
  whatsappHref: string;
  whatsappLink: string;
  email: string;
}

export interface Address {
  street: string;
  locality: string;
  department: string;
  country: string;
  countryCode: string;
  googleMapsUrl: string;
  wazeUrl: string;
  lat: number;
  lng: number;
}

export interface SocialLink {
  name: string;
  icon: string;
  url: string;
}

export interface SiteConfig {
  name: string;
  shortName: string;
  slogan: string;
  description: string;
  url: string;
  locale: string;
  currency: string;
  currencySymbol: string;
  timezone: string;
  foundedYear: number;
  parroco: string;
  mision: string;
  vision: string;
  resenaHistorica: string;
  contact: ContactInfo;
  address: Address;
  social: SocialLink[];
  rtn: string;
  developerName: string;
  developerUrl: string;
}

// ── Configuración ────────────────────────────────────────────────
export const siteConfig: SiteConfig = {
  name: "Parroquia El Salvador del Mundo",
  shortName: "Salvador del Mundo",
  slogan: "Salvados por Cristo, enviados al mundo",
  description:
    "Sitio oficial de la Parroquia El Salvador del Mundo — Tegucigalpa, Honduras. Una comunidad de fe moderna y organizada.",
  url: "https://parroquiasalvadordelmundo.hn",
  locale: "es-HN",
  currency: "HNL",
  currencySymbol: "L",
  timezone: "America/Tegucigalpa",
  foundedYear: 1996,
  parroco: "Juan Enrique Mártinez Cerrato",

  mision:
    "Somos una parroquia en salida, enviados por Nuestro Señor Jesucristo para hacer discípulos a todas las Gentes.",
  vision:
    "Ser una comunidad parroquial evangelizada y evangelizadora, mostrando el Rostro del Salvador del Mundo a todos los creyentes y no creyentes.",
  resenaHistorica:
    "Fundada en 1996, la Parroquia El Salvador del Mundo es una comunidad de fieles de la Arquidiócesis de Tegucigalpa, conformada por diversos movimientos y apostolados para la misión cristiana. Actualmente está organizada en cuatro sectores: Santa Cruz, Salvador del Mundo, Santa Rosa de Lima y Sagrado Corazón de Jesús.",

  contact: {
    telefono: "22240263",
    telefonoDisplay: "2224-0263",
    telefonoHref: "tel:+50422240263",
    whatsapp: "95345899",
    whatsappDisplay: "9534-5899",
    whatsappHref: "https://wa.me/50495345899",
    whatsappLink: "https://wa.me/50495345899",
    email: "pelsalvadordelmundohn@gmail.com",
  },

  address: {
    street: "Colonia Cerro Grande Zona 4, calle principal",
    locality: "Comayagüela, Tegucigalpa",
    department: "Francisco Morazán",
    country: "Honduras",
    countryCode: "HN",
    googleMapsUrl:
      "https://www.google.com/maps/dir/?api=1&destination=14.1219,-87.2206",
    wazeUrl: "https://waze.com/ul?ll=14.1219,-87.2206&navigate=yes",
    lat: 14.1219,
    lng: -87.2206,
  },

  social: [
    { name: "Facebook", icon: "lucide:facebook", url: "#" },
    { name: "Instagram", icon: "lucide:instagram", url: "#" },
    { name: "TikTok", icon: "mdi:music-note", url: "#" },
  ],

  rtn: "0801-9003-123456",
  developerName: "Luis Parroquia",
  developerUrl: "#",
};

/**
 * Helper: genera un enlace de WhatsApp con mensaje pre-llenado.
 * Centraliza la lógica para que el CMS solo cambie el número.
 */
export function whatsappLink(message?: string): string {
  const base = siteConfig.contact.whatsappLink;
  if (!message) return base;
  return `${base}?text=${encodeURIComponent(message)}`;
}
