//for schema - which defines the shapes of our form
import { z } from "zod";
export const signUpSchema = z.object({
  fullName: z.string().min(3),
  email: z.string().email(),
  universityId: z.coerce.number(),
  universityCard: z.string().nonempty("University Card is required"),
  password: z.string().min(8),
});

export const signInSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

export const bookSchema = z.object({
  title: z.string().trim().min(2).max(100),
  description: z.string().trim().min(10).max(1000),
  author: z.string().trim().min(2).max(100),
  genre: z.string().trim().min(2).max(50),
  rating: z.number().min(2).max(50),
  totalCopies: z.coerce.number().int().positive().lte(10000),
  // coerece is used to  get a number made it to positive and less than 10000
  coverUrl: z.string().nonempty(),
  coverColor: z
    .string()
    .trim()
    .regex(/^[0-9A-F]{6}$/i),
  //regex to make the string to  a color with characters 0-9 A-F with 6 char
  videoUrl: z.string().nonempty(),
  summary: z.string().trim().min(10),
});
