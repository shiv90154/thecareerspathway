import dbConnect from "@/lib/db";
import JobAlert from "@/models/JobAlert";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    await dbConnect();
    const body = await req.json();

    const { title, slug, description } = body;

    if (!title || !slug || !description) {
      return NextResponse.json(
        { success: false, message: "All fields required" },
        { status: 400 }
      );
    }

    await JobAlert.create({ title, slug, description });

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: "Server Error" },
      { status: 500 }
    );
  }
}
