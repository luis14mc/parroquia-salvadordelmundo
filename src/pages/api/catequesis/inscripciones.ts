import type { APIRoute } from "astro";
import { query } from "../../../lib/db";
import { catequesisRegistrationSchema, nullableText } from "../../../lib/catequesisSchema";

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

  const parsed = catequesisRegistrationSchema.safeParse(body);

  if (!parsed.success) {
    return json(
      {
        ok: false,
        error: "Revisa los campos marcados antes de enviar la inscripción.",
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
      `INSERT INTO catechesis_registrations (
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
        privacy_accepted,
        payload
      ) VALUES (
        $1, $2, $3::date, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13::jsonb
      ) RETURNING id`,
      [
        input.programa,
        input.nombre_completo,
        input.fecha_nacimiento,
        input.telefono_contacto,
        nullableText(input.correo),
        nullableText(input.direccion),
        nullableText(input.sector),
        nullableText(input.responsable_nombre),
        input.estado_bautismo === "no-aplica" ? null : input.estado_bautismo,
        input.estado_comunion === "no-aplica" ? null : input.estado_comunion,
        input.sin_sacramentos_confirmado,
        input.privacidad_aceptada,
        JSON.stringify(input),
      ],
    );

    return json({ ok: true, id: result.rows[0]?.id });
  } catch (error) {
    console.error("catechesis_registrations insert failed", error);
    return json(
      {
        ok: false,
        error: "No se pudo guardar la inscripción. Inténtalo nuevamente o comunícate con la oficina parroquial.",
      },
      500,
    );
  }
};