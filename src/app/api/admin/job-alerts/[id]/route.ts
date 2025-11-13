import { NextResponse } from "next/server";
import dbConnect from "@/lib/db";
import JobAlert from "@/models/JobAlert";

export async function DELETE(req: Request, { params }: any) {
  await dbConnect();
  const deleted = await JobAlert.findByIdAndDelete(params.id);

  if (!deleted) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  return NextResponse.json({ success: true });
}

export async function PUT(req: Request, { params }: any) {
  await dbConnect();
  const data = await req.json();

  const updated = await JobAlert.findByIdAndUpdate(
    params.id,
    data,
    { new: true }
  );

  return NextResponse.json({ success: true, updated });
}
