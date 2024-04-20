import "dotenv/config";
import path from "path";
import postgres from "postgres";
import { drizzle } from "drizzle-orm/postgres-js";
import { migrate } from "drizzle-orm/postgres-js/migrator";

const migrationClient = postgres(process.env.SUPABASE_URL as string, {
  max: 1,
});

const migrationsFolder = path.resolve(__dirname, "../../drizzle");

async function main() {
  await migrate(drizzle(migrationClient), {
    migrationsFolder,
  });

  await migrationClient.end();
}

main();
