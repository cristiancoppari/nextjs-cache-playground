import "dotenv/config";
import { unstable_cache } from "next/cache";
import { eq } from "drizzle-orm";
import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import * as schema from "./schema";

import { ENV_VARS } from "@/env/env";
const { SUPABASE_URL } = ENV_VARS;

export const client = postgres(SUPABASE_URL);
export const db = drizzle(client, { schema, logger: true });

export const getTodosFromDB = async () => db.select().from(schema.TodoTable);
export const getCachedTodosFromDB = unstable_cache(
  () => getTodosFromDB(),
  ["todos"],
  {
    tags: ["todos"],
  }
);

export const addTodoToDB = async (todo: string) =>
  db.insert(schema.TodoTable).values({ todo });

export const deleteTodoFromDB = async (id: number) =>
  db.delete(schema.TodoTable).where(eq(schema.TodoTable.id, id));
