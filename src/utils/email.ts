import nodemailer from "nodemailer";

export const sendMail = async ({ subject, message, from }: { subject: string; message: string; from: string }) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS,
    },
  });

  await transporter.sendMail({
    from: from,
    to: process.env.MAIL_USER,
    subject: subject,
    text: message,
  });

  return true;
};
