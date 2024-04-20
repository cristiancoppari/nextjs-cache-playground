import "dotenv/config";
import { defineConfig } from "drizzle-kit";

import { ENV_VARS } from "@/env/env";

const { SUPABASE_URL } = ENV_VARS;

// SUPABASE
export default defineConfig({
  schema: "./src/db/schema.ts",
  out: "./drizzle",
  driver: "pg",
  dbCredentials: {
    connectionString: SUPABASE_URL,
  },
  verbose: true,
  strict: true,
});
