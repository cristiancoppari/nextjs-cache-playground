ALTER TABLE "hola101" RENAME TO "todo";--> statement-breakpoint
ALTER TABLE "todo" DROP CONSTRAINT "hola101_email_unique";--> statement-breakpoint
ALTER TABLE "todo" DROP COLUMN IF EXISTS "email";