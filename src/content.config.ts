/**
 * Astro Content Collections — Definición de esquemas con Zod
 * ──────────────────────────────────────────────────────────
 * PUNTO CLAVE para Fase 2: cuando llegue el CMS, solo hay que
 * cambiar el `loader` de `glob()`/`file()` a un loader custom
 * que consuma la API del CMS. Los esquemas Zod se mantienen
 * idénticos, validando la data en build-time sin importar el origen.
 *
 * @see https://docs.astro.build/en/guides/content-collections/
 */
import { defineCollection, z } from "astro:content";
import { glob, file } from "astro/loaders";

// ── Schema: Sacramento ───────────────────────────────────────────
const sacramentoSchema = z.object({
  nombre: z.string(),
  slug: z.string(),
  icono: z.string().describe("Nombre del icono de astro-icon (e.g. lucide:droplets)"),
  color: z.string().describe("Clases Tailwind de gradiente para la card del index"),
  heroGradient: z.string().describe("Clases de gradiente para el hero individual"),
  descripcionCorta: z.string().describe("Para listado en /sacramentos"),
  descripcionLarga: z.string().describe("Párrafos para la página individual"),
  pilares: z.array(
    z.object({
      titulo: z.string(),
      descripcion: z.string(),
      icono: z.string(),
    })
  ).describe("3 cards bajo el bloque '¿Qué es?'"),
  requisitos: z.array(z.string()),
  pasos: z.array(
    z.object({
      titulo: z.string(),
      descripcion: z.string(),
    })
  ).optional(),
  inscripciones: z.string().optional().describe("Cuándo inscribirse"),
  ofrenda: z.number().optional().describe("Monto en Lempiras"),
  ctaTitulo: z.string(),
  ctaTexto: z.string(),
  whatsappMessage: z.string().describe("Mensaje pre-llenado para WhatsApp"),
  /** Secciones extra opcionales — flexibilidad para CMS */
  seccionesExtra: z.array(
    z.object({
      tipo: z.enum(["texto", "lista", "dones", "padrino", "curso"]),
      titulo: z.string(),
      subtitulo: z.string().optional(),
      contenido: z.any().optional(),
    })
  ).optional(),
});

// ── Schema: Sacerdote ────────────────────────────────────────────
const sacerdoteSchema = z.object({
  nombre: z.string(),
  cargo: z.string(),
  descripcion: z.string(),
  imagen: z.string().url(),
  orden: z.number().default(0),
});

// ── Schema: Horario ──────────────────────────────────────────────
const horarioSchema = z.object({
  tipo: z.enum(["eucaristia", "confesion", "secretaria"]),
  items: z.array(
    z.object({
      dias: z.string(),
      horas: z.string(),
    })
  ),
  nota: z.string().optional(),
});

// ── Schema: FAQ ──────────────────────────────────────────────────
const faqSchema = z.object({
  question: z.string(),
  answer: z.string(),
  orden: z.number().default(0),
  seccion: z.enum(["general", "sacramentos", "oficina", "donaciones"]).default("general"),
});

// ── Schema: Cuenta Bancaria ──────────────────────────────────────
const cuentaBancariaSchema = z.object({
  banco: z.string(),
  numero: z.string(),
  tipo: z.string(),
  orden: z.number().default(0),
});

// ── Schema: Sector Parroquial ────────────────────────────────────
const sectorSchema = z.object({
  nombre: z.string(),
  descripcion: z.string(),
  imagen: z.string().url(),
  orden: z.number().default(0),
});

// ── Schema: Grupo/Movimiento ─────────────────────────────────────
const grupoSchema = z.object({
  nombre: z.string(),
  icono: z.string(),
  descripcion: z.string().optional(),
  orden: z.number().default(0),
});

// ── Colecciones ──────────────────────────────────────────────────
/**
 * TRANSICIÓN FASE 2:
 * - Reemplazar `glob()` / `file()` por un loader custom que 
 *   consuma su CMS API.
 * - Los schemas permanecen = cero deuda técnica.
 *
 * Ejemplo futuro:
 *   loader: cmsLoader({ endpoint: '/api/sacramentos' })
 */

const sacramentos = defineCollection({
  loader: glob({ pattern: "**/*.json", base: "./src/content/sacramentos" }),
  schema: sacramentoSchema,
});

const sacerdotes = defineCollection({
  loader: file("./src/content/data/sacerdotes.json"),
  schema: sacerdoteSchema,
});

const horarios = defineCollection({
  loader: file("./src/content/data/horarios.json"),
  schema: horarioSchema,
});

const faqs = defineCollection({
  loader: file("./src/content/data/faqs.json"),
  schema: faqSchema,
});

const cuentasBancarias = defineCollection({
  loader: file("./src/content/data/cuentas-bancarias.json"),
  schema: cuentaBancariaSchema,
});

const sectores = defineCollection({
  loader: file("./src/content/data/sectores.json"),
  schema: sectorSchema,
});

const grupos = defineCollection({
  loader: file("./src/content/data/grupos.json"),
  schema: grupoSchema,
});

// ── Exportar ─────────────────────────────────────────────────────
export const collections = {
  sacramentos,
  sacerdotes,
  horarios,
  faqs,
  cuentasBancarias,
  sectores,
  grupos,
};
