import pg from "pg";

const { Pool } = pg;

function getConnectionString() {
  if (process.env.DATABASE_URL) return process.env.DATABASE_URL;
  if (process.env.DATABASE_PUBLIC_URL) return process.env.DATABASE_PUBLIC_URL;

  const {
    PGHOST,
    PGPORT = "5432",
    PGUSER = process.env.POSTGRES_USER,
    PGPASSWORD = process.env.POSTGRES_PASSWORD,
    PGDATABASE = process.env.POSTGRES_DB,
  } = process.env;
  if (!PGHOST || !PGUSER || !PGPASSWORD || !PGDATABASE) return null;

  const user = encodeURIComponent(PGUSER);
  const password = encodeURIComponent(PGPASSWORD);
  const database = encodeURIComponent(PGDATABASE);
  return `postgresql://${user}:${password}@${PGHOST}:${PGPORT}/${database}`;
}

const connectionString = getConnectionString();

export const hasDatabase = Boolean(connectionString);

export const pool = connectionString
  ? new Pool({
      connectionString,
      ssl: process.env.PGSSLMODE === "require" ? { rejectUnauthorized: false } : undefined,
    })
  : null;

export async function query<T = unknown>(text: string, params: unknown[] = []) {
  if (!pool) {
    throw new Error("Database connection is not configured. Set DATABASE_URL or PG* variables on the Railway web service.");
  }

  return pool.query<T>(text, params);
}