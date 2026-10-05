import type { APIRoute } from "astro";
import { query } from "../../../lib/db";
import {
  gymkanaRegistrationSchema,
  nullableText,
} from "../../../lib/gymkanaSchema";

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

  const parsed = gymkanaRegistrationSchema.safeParse(body);

  if (!parsed.success) {
    return json(
      {
        ok: false,
        error: "Revisa los campos marcados antes de enviar tu inscripción.",
        issues: parsed.error.issues.map((issue) => ({
          path: issue.path.join("."),
          message: issue.message,
        })),
      },
      400,
    );
  }

  const input = parsed.data;

  if (input.website) {
    return json({ ok: true });
  }

  try {
    const result = await query<{ id: string }>(
      `INSERT INTO gymkana_registrations (
        participant_name,
        birth_date,
        contact_phone,
        email,
        sector,
        allergies_medical,
        guardian_name,
        privacy_accepted,
        payload
      ) VALUES (
        $1, $2::date, $3, $4, $5, $6, $7, $8, $9::jsonb
      ) RETURNING id`,
      [
        input.nombre_completo,
        input.fecha_nacimiento,
        input.telefono_contacto,
        nullableText(input.correo),
        input.sector,
        nullableText(input.alergias_medicas),
        nullableText(input.nombre_encargado),
        input.privacidad_aceptada,
        JSON.stringify(input),
      ],
    );

    return json({ ok: true, id: result.rows[0]?.id });
  } catch (error) {
    console.error("gymkana_registrations insert failed", error);
    return json(
      {
        ok: false,
        error: "No se pudo guardar la inscripción. Inténtalo nuevamente o comunícate con la oficina parroquial.",
      },
      500,
    );
  }
};