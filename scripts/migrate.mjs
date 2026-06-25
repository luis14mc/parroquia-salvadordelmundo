import { readFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
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

if (!connectionString) {
  console.warn("Skipping database migrations: DATABASE_URL or PG* variables are not configured on this service.");
  process.exit(0);
}

const __dirname = dirname(fileURLToPath(import.meta.url));
const migrationPath = join(__dirname, "..", "db", "migrations", "001_mission_household_visits.sql");
const sql = await readFile(migrationPath, "utf8");

const pool = new Pool({
  connectionString,
  ssl: process.env.PGSSLMODE === "require" ? { rejectUnauthorized: false } : undefined,
});

try {
  await pool.query(sql);
  console.log("Migrations completed.");
} finally {
  await pool.end();
}