import { NextResponse } from "next/server";
import { sendMail } from "@/utils/email";

export async function POST(req: Request) {
  try {
    const { name, email, phone, message } = await req.json();

    await sendMail({
      subject: `New Contact Form Submission`,
      from: email,
      message: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n\nMessage:\n${message}`,
    });

    return NextResponse.json({ success: true, msg: "Message sent successfully" });
  } catch (error) {
    return NextResponse.json(
      { success: false, msg: "Something went wrong", error },
      { status: 500 }
    );
  }
}
