import type { APIRoute } from "astro";
import { query } from "../../../lib/db";

export const prerender = false;

function json(data: unknown, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { "content-type": "application/json; charset=utf-8" },
  });
}

export const GET: APIRoute = async () => {
  try {
    const result = await query<Record<string, unknown>>(
      `SELECT
        id,
        participant_name,
        birth_date,
        contact_phone,
        email,
        sector,
        allergies_medical,
        guardian_name,
        status,
        created_at
      FROM gymkana_registrations
      ORDER BY created_at DESC`,
    );

    return json({ ok: true, total: result.rows.length, records: result.rows });
  } catch (error) {
    console.error("admin gymkana list failed", error);
    return json({ ok: false, error: "No se pudo obtener el listado." }, 500);
  }
};