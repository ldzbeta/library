import { neon } from "@neondatabase/serverless";
import dotenv from "dotenv";

dotenv.config({ path: ".env.local" });

const sql = neon(process.env.DATABASE_URL!);

(async () => {
  try {
    const result = await sql`SELECT 1+1 AS result`;
    console.log("Database connection successful:", result);
  } catch (error) {
    console.error("Database connection error:", error);
  }
})();
