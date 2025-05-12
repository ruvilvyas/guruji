// app/api/about/route.ts
import { NextResponse } from "next/server";

let aboutContent = { content: "Initial about me text" }; // temp store

export async function GET() {
  return NextResponse.json(aboutContent);
}

export async function POST(req: Request) {
  aboutContent = await req.json();
  return NextResponse.json({ message: "Updated successfully" });
}
