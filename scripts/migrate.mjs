import { readFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import pg from "pg";

const { Pool } = pg;

if (!process.env.DATABASE_URL) {
  console.error("DATABASE_URL is required to run migrations.");
  process.exit(1);
}

const __dirname = dirname(fileURLToPath(import.meta.url));
const migrationPath = join(__dirname, "..", "db", "migrations", "001_mission_household_visits.sql");
const sql = await readFile(migrationPath, "utf8");

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: process.env.PGSSLMODE === "require" ? { rejectUnauthorized: false } : undefined,
});

try {
  await pool.query(sql);
  console.log("Migrations completed.");
} finally {
  await pool.end();
}