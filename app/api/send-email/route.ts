import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const {
      title,
      firstName,
      lastName,
      email,
      designation,
      organization,
      contactNumber,
      country,
      address,
      productInterest,
      quantity,
      requirements,
    } = body;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    const htmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background-color: #dc2626; padding: 20px; text-align: center;">
          <h1 style="color: white; margin: 0;">New Inquiry - E-SPIN NANOTECH</h1>
        </div>
        <div style="padding: 20px; border: 1px solid #e5e7eb;">
          <h2 style="color: #333; border-bottom: 2px solid #dc2626; padding-bottom: 10px;">Contact Details</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 8px; font-weight: bold; color: #555;">Name:</td><td style="padding: 8px;">${title} ${firstName} ${lastName}</td></tr>
            <tr style="background: #f9fafb;"><td style="padding: 8px; font-weight: bold; color: #555;">Email:</td><td style="padding: 8px;"><a href="mailto:${email}">${email}</a></td></tr>
            <tr><td style="padding: 8px; font-weight: bold; color: #555;">Designation:</td><td style="padding: 8px;">${designation}</td></tr>
            <tr style="background: #f9fafb;"><td style="padding: 8px; font-weight: bold; color: #555;">Organization:</td><td style="padding: 8px;">${organization}</td></tr>
            <tr><td style="padding: 8px; font-weight: bold; color: #555;">Contact Number:</td><td style="padding: 8px;">${contactNumber}</td></tr>
            <tr style="background: #f9fafb;"><td style="padding: 8px; font-weight: bold; color: #555;">Country:</td><td style="padding: 8px;">${country}</td></tr>
            <tr><td style="padding: 8px; font-weight: bold; color: #555;">Address:</td><td style="padding: 8px;">${address}</td></tr>
          </table>
          
          ${productInterest || quantity ? `
          <h2 style="color: #333; border-bottom: 2px solid #dc2626; padding-bottom: 10px; margin-top: 20px;">Product Information</h2>
          <table style="width: 100%; border-collapse: collapse;">
            ${productInterest ? `<tr><td style="padding: 8px; font-weight: bold; color: #555;">Product Interest:</td><td style="padding: 8px;">${productInterest}</td></tr>` : ""}
            ${quantity ? `<tr style="background: #f9fafb;"><td style="padding: 8px; font-weight: bold; color: #555;">Estimated Quantity:</td><td style="padding: 8px;">${quantity}</td></tr>` : ""}
          </table>
          ` : ""}
          
          <h2 style="color: #333; border-bottom: 2px solid #dc2626; padding-bottom: 10px; margin-top: 20px;">Requirements</h2>
          <p style="padding: 10px; background: #f9fafb; border-radius: 6px; line-height: 1.6;">${requirements}</p>
        </div>
        <div style="background-color: #f3f4f6; padding: 15px; text-align: center; font-size: 12px; color: #6b7280;">
          This inquiry was submitted via the E-SPIN NANOTECH website.
        </div>
      </div>
    `;

    await transporter.sendMail({
      from: `"E-SPIN NANOTECH Website" <${process.env.GMAIL_USER}>`,
      to: "espininternal@gmail.com",
      replyTo: email,
      subject: `New Inquiry from ${title} ${firstName} ${lastName} - ${organization}`,
      html: htmlContent,
    });

    return NextResponse.json({ success: true, message: "Email sent successfully" });
  } catch (error: any) {
    console.error("Email sending failed:", error);
    return NextResponse.json(
      { success: false, message: "Failed to send email" },
      { status: 500 }
    );
  }
}
