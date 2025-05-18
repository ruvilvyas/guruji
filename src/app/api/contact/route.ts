import { NextResponse } from "next/server";
import connectDB from "@/lib/db";
import Contact from "@/models/Contact";

// Type for the incoming request body
type ContactData = {
  email: string;
  phone: string;
  address: string;
  github: string;
};

export async function POST(req: Request) {
  try {
    await connectDB();

    const body: ContactData = await req.json();
    const { email, phone, address, github } = body;

    if (!email || !phone || !address || !github) {
      return NextResponse.json(
        { error: "All fields (email, phone, address, github) are required." },
        { status: 400 }
      );
    }

    // Replace old contact info
    await Contact.deleteMany({});
    const contact = await Contact.create({ email, phone, address, github });

    return NextResponse.json(contact, { status: 201 });
  } catch (err) {
  const errorMessage = err instanceof Error ? err.message : "Failed to fetch contact info";
  return NextResponse.json({ error: errorMessage }, { status: 500 });
}

}

export async function GET() {
  try {
    await connectDB();

    const contact = await Contact.findOne();
    if (!contact) {
      return NextResponse.json(
        { error: "No contact info found" },
        { status: 404 }
      );
    }

    return NextResponse.json(contact, { status: 200 });
  } catch (err) {
  const errorMessage = err instanceof Error ? err.message : "Failed to fetch contact info";
  return NextResponse.json({ error: errorMessage }, { status: 500 });
}

}
