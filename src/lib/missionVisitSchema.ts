import { z } from "zod";

const optionalText = z.union([z.string(), z.array(z.string())]).optional();

export const missionVisitSchema = z.object({
  direccion_referencia: z.string().trim().min(3, "La dirección o referencia es obligatoria."),
  misionero_nombre: z.string().trim().min(2, "El nombre del misionero es obligatorio."),
  fecha_visita: z.string().trim().min(1, "La fecha de visita es obligatoria."),
  hora_visita: optionalText,
  duracion_minutos: optionalText,
  sector_zona: optionalText,
  total_personas: optionalText,
  adultos: optionalText,
  ninos: optionalText,
  condiciones_salud: optionalText,
  observacion_salud: optionalText,
  religion_predominante: optionalText,
  religion_otra: optionalText,
  desea_ingresar_iglesia: optionalText,
  ingreso_detalles: optionalText,
  respuesta_anuncio: optionalText,
  comentario_kerigma: optionalText,
  acepta_seguimiento: optionalText,
  tipo_seguimiento: optionalText,
  seguimiento_otro: optionalText,
  interes_grupo: optionalText,
  interes_grupo_detalle: optionalText,
  necesidades: optionalText,
  necesidades_otro: optionalText,
  necesidades_detalle: optionalText,
  tiene_riesgos: optionalText,
  riesgos_descripcion: optionalText,
  medidas_seguridad: optionalText,
  fecha_proxima_visita: optionalText,
  hora_proxima_visita: optionalText,
  responsable_proxima_visita: optionalText,
  telefono_responsable: optionalText,
  observaciones_siguiente: optionalText,
  coordinador_grupo: optionalText,
  fecha_entrega_zonal: optionalText,
  privacidad_aceptada: z.literal("Sí", {
    error: "Debe aceptar el uso pastoral de los datos.",
  }),
}).catchall(optionalText);

export type MissionVisitInput = z.infer<typeof missionVisitSchema>;

export function normalizeList(value: unknown): string[] {
  if (Array.isArray(value)) return value.map(String).filter(Boolean);
  if (typeof value === "string" && value.trim()) return [value.trim()];
  return [];
}

export function nullableString(value: unknown): string | null {
  if (Array.isArray(value)) return value.filter(Boolean).join(", ") || null;
  if (typeof value === "string" && value.trim()) return value.trim();
  return null;
}

export function nullableNumber(value: unknown): number | null {
  const raw = Array.isArray(value) ? value[0] : value;
  if (raw === undefined || raw === null || raw === "") return null;
  const parsed = Number(raw);
  return Number.isFinite(parsed) ? parsed : null;
}