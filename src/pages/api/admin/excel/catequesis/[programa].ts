import type { APIRoute } from "astro";
import ExcelJS from "exceljs";
import { query } from "../../../../../lib/db";

export const prerender = false;

const PROGRAMS: Record<string, { title: string; minAge: number }> = {
  adultos: { title: "Catequesis Adultos", minAge: 18 },
  "primera-comunion": { title: "Primera Comunión", minAge: 9 },
  confirmacion: { title: "Confirmación", minAge: 15 },
};

const BAPTISM_LABELS: Record<string, string> = {
  "tiene-fe": "Cuento con fe de Bautismo",
  "no-bautizado": "No bautizado",
};

const COMMUNION_LABELS: Record<string, string> = {
  "tiene-constancia": "Cuento con constancia",
  "no-comunion": "No recibido",
};

const STATUS_LABELS: Record<string, string> = {
  pendiente: "Pendiente",
  contactado: "Contactado",
  admitido: "Admitido",
  "no-admitido": "No admitido",
  retirado: "Retirado",
};

const HEADERS = [
  "ID",
  "Nombre completo",
  "Fecha de nacimiento",
  "Edad",
  "Teléfono",
  "Correo",
  "Sector",
  "Dirección",
  "Encargado",
  "Estado de Bautismo",
  "Estado de Comunión",
  "Sin sacramentos confirmado",
  "Estado",
  "Fecha de inscripción",
];

function calcAge(value: unknown) {
  if (typeof value !== "string" && !(value instanceof Date)) return "";
  const d = value instanceof Date ? value : new Date(`${value}T00:00:00`);
  if (Number.isNaN(d.getTime())) return "";
  const today = new Date();
  let age = today.getFullYear() - d.getFullYear();
  const monthDiff = today.getMonth() - d.getMonth();
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < d.getDate())) age -= 1;
  return age;
}

function formatDate(value: unknown) {
  if (value instanceof Date) return value.toISOString().split("T")[0];
  if (typeof value === "string") return value.split("T")[0];
  return "";
}

export const GET: APIRoute = async ({ params }) => {
  const programa = params.programa as string | undefined;
  const config = programa ? PROGRAMS[programa] : undefined;

  if (!config) {
    return new Response("Programa inválido.", { status: 400 });
  }

  try {
    const result = await query<Record<string, unknown>>(
      `SELECT
        id, program_type, participant_name, birth_date, contact_phone,
        email, address, sector, guardian_name, baptism_status,
        communion_status, no_sacraments_confirmed, status, created_at
      FROM catechesis_registrations
      WHERE program_type = $1
      ORDER BY created_at DESC`,
      [programa],
    );

    const workbook = new ExcelJS.Workbook();
    workbook.creator = "Parroquia El Salvador del Mundo";
    workbook.created = new Date();

    const sheet = workbook.addWorksheet(config.title, {
      views: [{ state: "frozen", ySplit: 1 }],
    });

    sheet.columns = HEADERS.map((header) => ({
      header,
      key: header,
      width: Math.max(15, header.length + 4),
    }));

    sheet.getRow(1).font = { bold: true, color: { argb: "FFFFFFFF" } };
    sheet.getRow(1).fill = {
      type: "pattern",
      pattern: "solid",
      fgColor: { argb: "FF61002D" },
    };
    sheet.getRow(1).alignment = { vertical: "middle", horizontal: "left" };
    sheet.getRow(1).height = 22;

    result.rows.forEach((row) => {
      sheet.addRow({
        ID: row.id,
        "Nombre completo": row.participant_name ?? "",
        "Fecha de nacimiento": formatDate(row.birth_date),
        Edad: calcAge(row.birth_date),
        Teléfono: row.contact_phone ?? "",
        Correo: row.email ?? "",
        Sector: row.sector ?? "",
        Dirección: row.address ?? "",
        Encargado: row.guardian_name ?? "",
        "Estado de Bautismo":
          BAPTISM_LABELS[String(row.baptism_status ?? "")] ?? row.baptism_status ?? "",
        "Estado de Comunión":
          COMMUNION_LABELS[String(row.communion_status ?? "")] ?? row.communion_status ?? "",
        "Sin sacramentos confirmado": row.no_sacraments_confirmed ? "Sí" : "No",
        Estado: STATUS_LABELS[String(row.status ?? "")] ?? row.status ?? "",
        "Fecha de inscripción": formatDate(row.created_at),
      });
    });

    sheet.eachRow({ includeEmpty: false }, (row) => {
      row.eachCell((cell) => {
        cell.border = {
          top: { style: "thin", color: { argb: "FFE0E0E0" } },
          left: { style: "thin", color: { argb: "FFE0E0E0" } },
          right: { style: "thin", color: { argb: "FFE0E0E0" } },
          bottom: { style: "thin", color: { argb: "FFE0E0E0" } },
        };
      });
    });

    const buffer = await workbook.xlsx.writeBuffer();

    return new Response(buffer, {
      status: 200,
      headers: {
        "Content-Type": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
        "Content-Disposition": `attachment; filename="${programa}-${new Date().toISOString().split("T")[0]}.xlsx"`,
        "Cache-Control": "no-store",
      },
    });
  } catch (error) {
    console.error("admin catechesis xlsx failed", error);
    return new Response("No se pudo generar el archivo.", { status: 500 });
  }
};