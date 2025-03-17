//npm i drizzle-orm
// npm i -D drizzle-kit
// npx drizzle-kit migrate -check connection and create tables
// npm run db:studio  - ui for db opertaions
import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";
import config from "@/lib/config";

//console.log("Database URL:", config.env.databaseUrl); // Debugging

const sql = neon(config.env.databaseUrl); // Ensure this loads the correct URL
export const db = drizzle(sql);

