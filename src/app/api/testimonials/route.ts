// app/api/testimonials/route.ts
import { NextResponse } from "next/server";
import connectDB from "@/lib/db";
import Testimonial from "@/models/testimonial";

export async function GET() {
  try {
    await connectDB();
    const testimonials = await Testimonial.find();
    return NextResponse.json(testimonials, { status: 200 });
  } catch (err) {
    console.error("API Error:", err);
    return NextResponse.json({ error: "Failed to fetch testimonials" }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    await connectDB();
    let data;
    try {
      data = await req.json();
    } catch {
      return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
    }

    const { name, company, review } = data;

    if (!name || !company || !review) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const newTestimonial = await Testimonial.create({ name, company, review });
    return NextResponse.json(newTestimonial, { status: 201 });
  } catch (error) {
    console.error("POST error:", error);
    return NextResponse.json({ error: "Failed to create testimonial" }, { status: 500 });
  }
}





