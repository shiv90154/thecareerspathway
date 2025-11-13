import dbConnect from "@/lib/db";
import JobAlert from "@/models/JobAlert";
import { NextResponse } from "next/server";

export async function GET(req: Request, { params }: any) {
  await dbConnect();
  const alert = await JobAlert.findById(params.id);
  return NextResponse.json({ alert });
}

export async function PUT(req: Request, { params }: any) {
  await dbConnect();
  const data = await req.json();

  const updated = await JobAlert.findByIdAndUpdate(params.id, data, {
    new: true,
  });

  return NextResponse.json({ success: true, updated });
}
