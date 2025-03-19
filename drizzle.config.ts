//npm i dotenv --legacy-peer-deps

import { config } from "dotenv";
config({ path: ".env.local" });
import { defineConfig } from "drizzle-kit";

//console.log("DATABASE_URL:", process.env.DATABASE_URL);

export default defineConfig({
  schema: "./database/schema.ts",
  out: "./migrations",
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
});

//npx drizzle-kit generate - for visual generation or exact pg codes for this table or db

// npx drizzle-kit migrate - for run the migrations