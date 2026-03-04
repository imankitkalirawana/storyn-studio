import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

const smtpHost = process.env.SMTP_HOST;
const smtpPort = process.env.SMTP_PORT;
const smtpUser = process.env.SMTP_USER;
const smtpPass = process.env.SMTP_PASS;

const contactTo = process.env.CONTACT_TO || smtpUser;
const contactFrom = process.env.CONTACT_FROM || smtpUser;

export async function POST(request: NextRequest) {
  try {
    if (!smtpHost || !smtpPort || !smtpUser || !smtpPass || !contactTo) {
      return NextResponse.json(
        {
          success: false,
          message: "Email service is not configured.",
        },
        { status: 500 },
      );
    }

    const body = await request.json();
    const { name, email, phone, message } = body ?? {};

    if (!name || !email || !phone || !message) {
      return NextResponse.json(
        {
          success: false,
          message: "Missing required fields.",
        },
        { status: 400 },
      );
    }

    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: Number(smtpPort),
      secure: Number(smtpPort) === 465,
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    const mailText = `
New contact form submission:

Name: ${name}
Email: ${email}
Phone: ${phone}

Message:
${message}
`.trim();

    await transporter.sendMail({
      from: contactFrom,
      to: contactTo,
      replyTo: email,
      subject: `New contact from ${name}`,
      text: mailText,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error sending contact email:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong while sending your message.",
      },
      { status: 500 },
    );
  }
}
