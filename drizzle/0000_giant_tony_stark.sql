CREATE TABLE IF NOT EXISTS "hola" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar NOT NULL,
	"email" varchar NOT NULL,
	CONSTRAINT "hola_email_unique" UNIQUE("email")
);
