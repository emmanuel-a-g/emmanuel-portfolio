import nodemailer from "nodemailer";
import { NextRequest, NextResponse } from "next/server";

// Type for request body
interface ContactRequestBody {
  name?: string;
  email?: string;
  message?: string;
  subject?: string;
}

// Generate HTML email
function getHtmlMessage(
  email: string = "none",
  name: string = "Visitor",
  message: string = "",
  realSubject: string = ""
) {
  return `
    <h3>Hi Mr. Garcia, you received a message from ${name}.</h3>
    <div style="text-align:center;">
      <p>Subject: ${realSubject}</p>
      <p>Their email is: ${email}</p>
      <p>Their message: ${message}</p>
    </div>
  `;
}

export async function POST(req: NextRequest) {
  try {
    const body: ContactRequestBody = await req.json();
    const { name, email, message, subject: realSubject } = body;

    if (!name || !email || !message || !realSubject) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "Gmail",
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.MAIL_USERNAME,
        pass: process.env.GMAIL_NODEMAILER_APP_PASSWORD, // Use app password
      },
    });

    const mailOptions = {
      from: `EmmanuelDev <${process.env.MAIL_USERNAME}>`,
      to: process.env.MAIL_USERNAME,
      subject: `Message for Emmanuel from Portfolio "${realSubject}"`,
      html: getHtmlMessage(email, name, message, realSubject),
    };

    await transporter.sendMail(mailOptions);
    return NextResponse.json({ message: "Email sent successfully!" });
  } catch (err: unknown) {
    console.error("Email sending error:", err);
    const errorMessage =
      typeof err === "object" && err !== null && "message" in err
        ? (err as { message?: string }).message
        : "Failed to send email";
    return NextResponse.json(
      { error: errorMessage || "Failed to send email" },
      { status: 500 }
    );
  }
}
