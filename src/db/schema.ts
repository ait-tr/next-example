import { integer, varchar } from "drizzle-orm/pg-core";
import { pgTable } from "drizzle-orm/pg-core";

export const sportsTable = pgTable("sports", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  title: varchar({ length: 255 }).notNull().unique(),
  image: varchar({ length: 255 }).notNull(),
  description: varchar({ length: 255 }).notNull(),
});

// npx drizzle-kit push
// sequelize
// supabase postgres

// создаешь таблицу/изменения -> generate (сгенирует файлы миграций) -> migrate (изменить)
// npm run generate

export const eventsTable = pgTable("events", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  name: varchar({ length: 100 }).notNull(),
  description: varchar({ length: 255 }).notNull(),
});