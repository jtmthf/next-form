"use server";

import { redirect } from "next/navigation";
import { z } from "zod";

const schema = z.object({
  email: z.string().trim().email(),
  password: z.string().trim().min(1),
});

export type Result = {
  errors: {
    email?: string[];
    password?: string[];
  };
};

export async function login(
  _previousState: Result,
  data: FormData
): Promise<Result> {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const parseResult = schema.safeParse(Object.fromEntries(data.entries()));

  if (!parseResult.success) {
    return { errors: parseResult.error.flatten().fieldErrors };
  }

  const { email, password } = parseResult.data;

  if (email !== "admin@example.com") {
    return { errors: { email: ["Invalid email"] } };
  }

  if (password !== "admin") {
    return { errors: { password: ["Invalid password"] } };
  }

  redirect("/dashboard");
}
