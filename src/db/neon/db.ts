import { ENV_VARS } from "@/env/env";

const { NEON_DATABASE_URL } = ENV_VARS;

import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";

export const sql = neon(NEON_DATABASE_URL);
export const db = drizzle(sql, { logger: true });

export const getTodosFromDB = async (): Promise<
  { id: string; todo: string }[]
> => db.select().from("todo");
