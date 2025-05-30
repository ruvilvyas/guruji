import { NextResponse } from "next/server";
import connectDB from "@/lib/db";
import Testimonial from "@/models/Experience";

export async function GET() {
  await connectDB();
  const testimonials = await Testimonial.find();
  return NextResponse.json(testimonials);
}

export async function POST(req: Request) {
  await connectDB();
  const body = await req.json();

  try {
    const newTestimonial = await Testimonial.create(body);
    return NextResponse.json(newTestimonial, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Failed to create testimonial" }, { status: 400 });
  }
}
