import dbConnect from "@/lib/db";
import JobAlert from "@/models/JobAlert";
import { NextResponse } from "next/server";

export async function GET() {
  await dbConnect();
  const alerts = await JobAlert.find().sort({ createdAt: -1 });
  return NextResponse.json({ success: true, alerts });
}

export async function POST(req: Request) {
  await dbConnect();

  const { title, slug, description } = await req.json();

  if (!title || !slug || !description) {
    return NextResponse.json(
      { success: false, error: "All fields required!" },
      { status: 400 }
    );
  }

  const alert = await JobAlert.create({
    title,
    slug,
    description,
  });

  return NextResponse.json({ success: true, alert });
}
