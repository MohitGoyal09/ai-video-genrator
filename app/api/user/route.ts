import { NextResponse } from "next/server";
import { db } from "@/configs/db";
import { USER_TABLE } from "@/configs/schema";
import { eq } from "drizzle-orm";

export async function POST(req: Request) {
  try {
    const user = await req.json();

    let existingUsers;
    try {
      existingUsers = await db
        .select()
        .from(USER_TABLE)
        .where(eq(USER_TABLE.email, user?.primaryEmailAddress?.emailAddress));
    } catch (dbError) {
      console.error("Error selecting existing users:", dbError);
      return NextResponse.json({ error: "Database error" }, { status: 500 });
    }

    if (existingUsers.length > 0) {
      console.log("User already exists.");
      return NextResponse.json(existingUsers[0], { status: 200 });
    }

    let insertedUsers;
    try {
      insertedUsers = await db
        .insert(USER_TABLE)
        .values({
          name: user.fullName,
          email: user.primaryEmailAddress.emailAddress,
        })
        .returning();
      console.log("Insert new user successful. Result:", insertedUsers);
    } catch (dbError) {
      console.error("Error inserting new user:", dbError);
      return NextResponse.json({ error: "Database error" }, { status: 500 });
    }

    if (insertedUsers.length > 0) {
      return NextResponse.json(insertedUsers[0], { status: 201 });
    } else {
      return NextResponse.json(
        { error: "Failed to create user" },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error("General error in POST /api/user:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
