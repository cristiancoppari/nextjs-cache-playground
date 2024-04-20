import "dotenv/config";
import path from "path";
import postgres from "postgres";
import { drizzle } from "drizzle-orm/postgres-js";
import { migrate } from "drizzle-orm/postgres-js/migrator";

import { ENV_VARS } from "@/env/env";

const { NEON_DATABASE_URL } = ENV_VARS;

const migrationClient = postgres(NEON_DATABASE_URL, {
  max: 1,
});

const migrationsFolder = path.resolve(__dirname, "./migrations");

async function main() {
  await migrate(drizzle(migrationClient), {
    migrationsFolder,
  });
  await migrationClient.end();
}

main();
