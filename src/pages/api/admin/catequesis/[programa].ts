import type { APIRoute } from "astro";
import { query } from "../../../../lib/db";

export const prerender = false;

const PROGRAMS = ["adultos", "primera-comunion", "confirmacion"] as const;
type Program = (typeof PROGRAMS)[number];

function json(data: unknown, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { "content-type": "application/json; charset=utf-8" },
  });
}

export const GET: APIRoute = async ({ params }) => {
  const programa = params.programa as string | undefined;

  if (!programa || !PROGRAMS.includes(programa as Program)) {
    return json({ ok: false, error: "Programa de catequesis inválido." }, 400);
  }

  try {
    const result = await query<Record<string, unknown>>(
      `SELECT
        id,
        program_type,
        participant_name,
        birth_date,
        contact_phone,
        email,
        address,
        sector,
        guardian_name,
        baptism_status,
        communion_status,
        no_sacraments_confirmed,
        status,
        created_at
      FROM catechesis_registrations
      WHERE program_type = $1
      ORDER BY created_at DESC`,
      [programa],
    );

    return json({ ok: true, programa, total: result.rows.length, records: result.rows });
  } catch (error) {
    console.error("admin catechesis list failed", error);
    return json({ ok: false, error: "No se pudo obtener el listado." }, 500);
  }
};