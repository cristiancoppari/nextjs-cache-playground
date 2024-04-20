ALTER TABLE "hola10" RENAME TO "hola101";--> statement-breakpoint
ALTER TABLE "hola101" DROP CONSTRAINT "hola10_email_unique";--> statement-breakpoint
ALTER TABLE "hola101" ADD CONSTRAINT "hola101_email_unique" UNIQUE("email");