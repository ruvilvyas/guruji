import { NextResponse } from "next/server";
import connectDB from "@/lib/db"; // Adjust path if needed
import Testimonial from "@/models/testimonial"; // Adjust path if needed

export async function GET() {
  try {
    await connectDB();
    const testimonials = await Testimonial.find().sort({ createdAt: -1 });
    return NextResponse.json(testimonials);
  } catch (error) {
    console.error("GET error:", error);
    return NextResponse.json({ error: "Failed to fetch testimonials" }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    await connectDB();
    const { name, company, review } = await req.json();

    if (!name || !company || !review) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const newTestimonial = await Testimonial.create({ name, company, review });
    return NextResponse.json(newTestimonial);
  } catch (error) {
    console.error("POST error:", error);
    return NextResponse.json({ error: "Failed to create testimonial" }, { status: 500 });
  }
}
