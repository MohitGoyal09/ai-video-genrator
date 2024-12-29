import { NextResponse } from "next/server";
import { db } from "@/configs/db";
import { USER_TABLE } from "@/configs/schema";
import { eq } from "drizzle-orm";

export async function POST(req: Request, res: Response) {
  const user = await req.json();

  const existingUser = await db
    .select()
    .from(USER_TABLE)
    .where(eq(USER_TABLE.email, user?.primaryEmailAddress.emailAddress));
  if (existingUser) {
    return NextResponse.json({
      error: "User already exists",
      status: 400,
    });
  }
  const newUser = await db.insert(USER_TABLE).values({
    name: user.fullName,
    email: user.primaryEmailAddress.emailAddress,
  });

  if (newUser) {
    return NextResponse.json({
      message: "User created",
      status: 201,
    });
  }
}
