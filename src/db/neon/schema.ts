import { pgTable, serial, varchar } from "drizzle-orm/pg-core";

export const TodoTable = pgTable("todo", {
  id: serial("id").primaryKey(),
  todo: varchar("todo").notNull(),
});
