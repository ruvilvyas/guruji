import { NextResponse } from "next/server";
import connectDB from "@/lib/db";
import Experience from "@/models/Experience";

export async function GET() {
  await connectDB();
  const experiences = await Experience.find();
  return NextResponse.json(experiences);
}

export async function POST(req: Request) {
  await connectDB();
  const body = await req.json();

  try {
    const newExperience = await Experience.create(body);
    return NextResponse.json(newExperience, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: "Failed to create experience" }, { status: 400 });
  }
}
