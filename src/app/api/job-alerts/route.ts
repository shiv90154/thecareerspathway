import dbConnect from "@/lib/db";
import JobAlert from "@/models/JobAlert";
import { NextResponse } from "next/server";

export async function GET() {
  await dbConnect();

  const alerts = await JobAlert.find().sort({ createdAt: -1 });

  return NextResponse.json({ alerts });
}
