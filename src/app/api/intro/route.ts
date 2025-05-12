import { NextResponse } from "next/server";
import connectDB from "@/lib/db";
import Intro from "@/models/Intro";

export async function GET() {
  await connectDB();
  const data = await Intro.findOne(); // ✅
  if (!data) {
    return NextResponse.json({ error: "No intro found" }, { status: 404 });
  }
  return NextResponse.json(data); // ✅
}

export async function POST(req: Request) {
  await connectDB();
  const body = await req.json();
  await Intro.deleteMany(); // to allow only 1 record
  const intro = await Intro.create(body);
  return NextResponse.json(intro);
}
