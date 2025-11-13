import { NextResponse } from "next/server";
import dbConnect from "@/lib/db";
import Ebook from "@/models/Ebook";

export async function GET() {
  await dbConnect();
  const ebooks = await Ebook.find();
  return NextResponse.json({ ebooks });
}

export async function POST(req: Request) {
  await dbConnect();
  const data = await req.json();
  const ebook = await Ebook.create(data);
  return NextResponse.json({ ebook });
}
