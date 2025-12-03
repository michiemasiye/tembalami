import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const { name, email, subject, message } = await request.json()

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 })
    }

    // Create mailto link data for client-side email
    // In production, you would integrate with an email service like SendGrid, Resend, etc.
    const mailtoData = {
      to: "bookings@tembalami.com",
      subject: `Website Contact: ${subject}`,
      body: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    }

    return NextResponse.json({
      success: true,
      message: "Message received successfully",
      mailto: mailtoData,
    })
  } catch (error) {
    console.error("Contact form error:", error)
    return NextResponse.json({ error: "Failed to process message" }, { status: 500 })
  }
}
