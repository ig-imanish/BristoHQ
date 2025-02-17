import { NextResponse } from "next/server";

const DISCORD_WEBHOOK_URL = process.env.DISCORD_WEBHOOK_URL;

export async function GET(req: Request) {
  return NextResponse.json({ message: "Hello, world!" }, { status: 200 });
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, message } = body;

    if (!DISCORD_WEBHOOK_URL) {
      return NextResponse.json(
        { error: "Discord webhook URL not configured" },
        { status: 500 }
      );
    }

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email and message are required" },
        { status: 400 }
      );
    }

    const discordMessage = {
      username: "BristoHQ",
      embeds: [
        {
          title: "New Contact Form Submission",
          description: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
          color: 0x5865f2,
          footer: {
            text: "Bristo HQ",
            icon_url: "https://bristohq-ten.vercel.app/logo.webp",
          },
          timestamp: new Date().toISOString(),
          thumbnail: {
            url: "https://bristohq-ten.vercel.app/logo.webp",
          },
        },
      ],
    };

    const response = await fetch(DISCORD_WEBHOOK_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(discordMessage),
    });

    if (!response.ok) {
      throw new Error("Failed to send message to Discord");
    }

    return NextResponse.json(
      { message: "Message sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending message:", error);
    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 500 }
    );
  }
}
