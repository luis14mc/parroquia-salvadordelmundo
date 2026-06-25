import pg from "pg";

const { Pool } = pg;

const connectionString = process.env.DATABASE_URL;

export const hasDatabase = Boolean(connectionString);

export const pool = connectionString
  ? new Pool({
      connectionString,
      ssl: process.env.PGSSLMODE === "require" ? { rejectUnauthorized: false } : undefined,
    })
  : null;

export async function query<T = unknown>(text: string, params: unknown[] = []) {
  if (!pool) {
    throw new Error("DATABASE_URL is not configured");
  }

  return pool.query<T>(text, params);
}