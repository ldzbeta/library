"use server";
import { users } from "@/database/schema";
import { eq } from "drizzle-orm";
import { db } from "@/database/drizzle";
import { hash } from "bcryptjs";
import { signIn } from "@/auth";
import { headers } from "next/headers";
import ratelimit from "../ratelimit";
import { redirect } from "next/navigation";
import { workFlowClient } from "../workflow";

// important for this- only called server side
export const signInWithCredentials = async (
  params: Pick<AuthCredentials, "email" | "password">
) => {
  const { email, password } = params;

  const ip = (await headers()).get("x-forwarded-for") || "127.0.0.1";
  const { success } = await ratelimit.limit(ip);

  if (!success) return redirect("/too-fast");

  try {
    const result = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (result?.error) {
      return { success: false, error: result.error };
    }

    return { success: true };
  } catch (error) {
    console.log(error, "Signin Error");
    return { success: false, error: "signin error" };
  }
};
//Pick<AuthCredentials> will selectively pick the only things mentioned
export const signUp = async (params: AuthCredentials) => {
  const { fullName, email, universityCard, password, universityId } = params;
  const ip = (await headers()).get("x-forwarded-for") || "127.0.0.1";
  const { success } = await ratelimit.limit(ip);

  if (!success) return redirect("/too-fast");
  //check if any user already exists
  const existingUser = await db
    .select()
    .from(users)
    .where(eq(users.email, email))
    .limit(1);

  if (existingUser.length > 0) {
    return { success: false, error: "User already exists" };
  }

  const hashedPassword = await hash(password, 10);

  try {
    await db.insert(users).values({
      fullName,
      email,
      universityId,
      password: hashedPassword,
      universityCard,
    });
    await workFlowClient.trigger({url:`${process.env.prodApiEndpoint}/api/workflows/onboarding`,body:{
      email,
      fullName,
    }})
    await signInWithCredentials({ email, password });
    return { success: true };
  } catch (error) {
    console.log(error, "Signup Error.");
    return { success: false, error: "Signup error" };
  }
};
