import type { APIRoute } from "astro";
import ExcelJS from "exceljs";
import { query } from "../../../../lib/db";
import { gymkanaSectors } from "../../../../lib/gymkanaSchema";

export const prerender = false;

const SECTOR_LABELS: Record<string, string> = Object.fromEntries(
  gymkanaSectors.map((s) => [s.value, s.label]),
);

const STATUS_LABELS: Record<string, string> = {
  pendiente: "Pendiente",
  contactado: "Contactado",
  confirmado: "Confirmado",
  "no-asistio": "No asistió",
};

const HEADERS = [
  "ID",
  "Nombre completo",
  "Fecha de nacimiento",
  "Edad al evento",
  "Teléfono",
  "Correo",
  "Sector",
  "Alergias / condiciones",
  "Encargado",
  "Estado",
  "Fecha de inscripción",
];

const EVENT_DATE = new Date("2026-10-25T00:00:00");

function calcAge(value: unknown) {
  if (typeof value !== "string" && !(value instanceof Date)) return "";
  const d = value instanceof Date ? value : new Date(`${value}T00:00:00`);
  if (Number.isNaN(d.getTime())) return "";
  let age = EVENT_DATE.getFullYear() - d.getFullYear();
  const monthDiff = EVENT_DATE.getMonth() - d.getMonth();
  if (monthDiff < 0 || (monthDiff === 0 && EVENT_DATE.getDate() < d.getDate())) age -= 1;
  return age;
}

function formatDate(value: unknown) {
  if (value instanceof Date) return value.toISOString().split("T")[0];
  if (typeof value === "string") return value.split("T")[0];
  return "";
}

export const GET: APIRoute = async () => {
  try {
    const result = await query<Record<string, unknown>>(
      `SELECT
        id, participant_name, birth_date, contact_phone, email,
        sector, allergies_medical, guardian_name, status, created_at
      FROM gymkana_registrations
      ORDER BY created_at DESC`,
    );

    const workbook = new ExcelJS.Workbook();
    workbook.creator = "Parroquia El Salvador del Mundo";
    workbook.created = new Date();

    const sheet = workbook.addWorksheet("Gymkana 2026", {
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
        "Edad al evento": calcAge(row.birth_date),
        Teléfono: row.contact_phone ?? "",
        Correo: row.email ?? "",
        Sector: SECTOR_LABELS[String(row.sector ?? "")] ?? row.sector ?? "",
        "Alergias / condiciones": row.allergies_medical ?? "",
        Encargado: row.guardian_name ?? "",
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
        "Content-Disposition": `attachment; filename="gymkana-2026-${new Date().toISOString().split("T")[0]}.xlsx"`,
        "Cache-Control": "no-store",
      },
    });
  } catch (error) {
    console.error("admin gymkana xlsx failed", error);
    return new Response("No se pudo generar el archivo.", { status: 500 });
  }
};