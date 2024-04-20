ALTER TABLE "hola" RENAME TO "hola10";--> statement-breakpoint
ALTER TABLE "hola10" DROP CONSTRAINT "hola_email_unique";--> statement-breakpoint
ALTER TABLE "hola10" ADD CONSTRAINT "hola10_email_unique" UNIQUE("email");