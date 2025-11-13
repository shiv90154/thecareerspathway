import { NextResponse } from "next/server";
import { sendMail } from "@/utils/email";

export async function POST(req: Request) {
  try {
    const { name, email, phone, course, message } = await req.json();

    await sendMail({
      subject: `New Enrollment Request`,
      from: email,
      message: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nCourse: ${course}\n\nMessage:\n${message}`,
    });

    return NextResponse.json({ success: true, msg: "Enrollment submitted" });
  } catch (error) {
    return NextResponse.json(
      { success: false, msg: "Failed to submit enrollment", error },
      { status: 500 }
    );
  }
}
