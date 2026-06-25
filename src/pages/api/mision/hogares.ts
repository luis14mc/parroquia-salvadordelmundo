import type { APIRoute } from "astro";
import { query } from "../../../lib/db";
import {
  missionVisitSchema,
  normalizeList,
  nullableNumber,
  nullableString,
} from "../../../lib/missionVisitSchema";

export const prerender = false;

function json(data: unknown, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { "content-type": "application/json; charset=utf-8" },
  });
}

export const POST: APIRoute = async ({ request }) => {
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return json({ ok: false, error: "El cuerpo de la solicitud debe ser JSON." }, 400);
  }

  const parsed = missionVisitSchema.safeParse(body);

  if (!parsed.success) {
    return json(
      {
        ok: false,
        error: "Hay campos requeridos incompletos.",
        issues: parsed.error.issues.map((issue) => ({ path: issue.path.join("."), message: issue.message })),
      },
      400,
    );
  }

  const input = parsed.data;

  try {
    const result = await query<{ id: string }>(
      `INSERT INTO mission_household_visits (
        address_reference,
        visit_date,
        visit_time,
        missionary_name,
        sector_zone,
        total_people,
        adults,
        children,
        predominant_religion,
        kerigma_response,
        followup_accepted,
        followup_types,
        detected_needs,
        has_risks,
        next_visit_date,
        responsible_name,
        responsible_phone,
        coordinator_name,
        zonal_delivery_date,
        privacy_accepted,
        payload
      ) VALUES (
        $1, $2, NULLIF($3, '')::time, $4, $5,
        $6, $7, $8, $9, $10, $11, $12, $13, $14,
        NULLIF($15, '')::date, $16, $17, $18, NULLIF($19, '')::date, $20, $21::jsonb
      ) RETURNING id`,
      [
        input.direccion_referencia,
        input.fecha_visita,
        nullableString(input.hora_visita) ?? "",
        input.misionero_nombre,
        nullableString(input.sector_zona),
        nullableNumber(input.total_personas),
        nullableNumber(input.adultos),
        nullableNumber(input.ninos),
        nullableString(input.religion_predominante),
        nullableString(input.respuesta_anuncio),
        nullableString(input.acepta_seguimiento),
        normalizeList(input.tipo_seguimiento),
        normalizeList(input.necesidades),
        nullableString(input.tiene_riesgos),
        nullableString(input.fecha_proxima_visita) ?? "",
        nullableString(input.responsable_proxima_visita),
        nullableString(input.telefono_responsable),
        nullableString(input.coordinador_grupo),
        nullableString(input.fecha_entrega_zonal) ?? "",
        input.privacidad_aceptada === "Sí",
        JSON.stringify(input),
      ],
    );

    return json({ ok: true, id: result.rows[0]?.id });
  } catch (error) {
    console.error("mission_household_visits insert failed", error);
    return json(
      {
        ok: false,
        error: "No se pudo guardar el registro. Verifique DATABASE_URL y que la migración esté aplicada.",
      },
      500,
    );
  }
};