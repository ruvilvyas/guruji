import { NextResponse } from "next/server";
import connectDB from "@/lib/db";
import Contact from "@/models/Contact";
// POST route - /api/contact/route.ts
export async function POST(req: Request) {
  try {
    await connectDB();
    const body = await req.json();

    console.log("📥 Received Contact Data:", body);

    // Validate required fields
    const requiredFields = ["email", "phone", "address", "github"];
    for (const field of requiredFields) {
      if (!body[field]) {
        throw new Error(`Missing field: ${field}`);
      }
    }

    // Ensure only one contact entry
    await Contact.deleteMany({});
    const contact = await Contact.create(body);

    return NextResponse.json(contact);
  } catch (error: any) {
    console.error("❌ Contact API Error:", error.message || error);
    return NextResponse.json(
      { error: error.message || "Failed to save contact info" },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    await connectDB();

    const contact = await Contact.findOne(); // fetch latest or only contact

    if (!contact) {
      return NextResponse.json({ error: "No contact info found" }, { status: 404 });
    }

    return NextResponse.json(contact, { status: 200 });
  } catch (error) {
    console.error("GET /api/contact error:", error);
    return NextResponse.json({ error: "Failed to fetch contact info" }, { status: 500 });
  }
}