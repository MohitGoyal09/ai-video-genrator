import { db } from "@/configs/db";
import { VIDEO_RAW_TABLE } from "@/configs/schema";
import { NextResponse } from "next/server";
import { eq } from "drizzle-orm";

export async function POST(req: Request) {
  const { videoId, userEmail } = await req.json();
  try {
    const result = await db
      .insert(VIDEO_RAW_TABLE)
      .values({
        videoId,
        createdBy: userEmail,
      })
      .returning();
    console.log("Insert new video successful. Result:", result);
    return NextResponse.json(result[0], { status: 201 });
  } catch (error) {
    console.error("Error in POST /api/video:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function PUT(req: Request) {
  const { videoId, videoData } = await req.json();

  console.log("Received videoId:", videoId);
  console.log("Received videoData:", videoData);

  try {
    const videoDataForDb = {
      videoData: videoData,
    };

    console.log("videoDataForDb:", videoDataForDb);

    const result = await db
      .update(VIDEO_RAW_TABLE)
      .set(videoDataForDb)
      .where(eq(VIDEO_RAW_TABLE.videoId, videoId))
      .returning();

    if (result.length > 0) {
      console.log("Update video successful. Result:", result);
      return NextResponse.json(result[0], { status: 200 });
    } else {
      console.log("Update video failed. No video found");
      return NextResponse.json(
        { error: "Failed to update video" },
        { status: 404 }
      );
    }
  } catch (error) {
    console.error("Error updating video:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function GET(req: Request) {
  const {searchParams} = new URL(req.url);
  const videoId = searchParams.get("videoId");
  if (!videoId) {
    return NextResponse.json({ error: "VideoId is required" }, { status: 400 });
  }
  try {
    const result = await db
      .select()
      .from(VIDEO_RAW_TABLE)
      .where(eq(VIDEO_RAW_TABLE.videoId, videoId))
      .execute();

    if (result.length > 0) {
      console.log("Get video successful. Result:", result);
      return NextResponse.json(result[0], { status: 200 });
    } else {
      console.log("Get video failed. No video found");
      return NextResponse.json(
        { error: "Failed to get video" },
        { status: 404 }
      );
    }
  } catch (error) {
    console.error("Error getting video:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}