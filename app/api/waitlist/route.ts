import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { Resend } from "resend";
import { z } from "zod";

// PrismaClient singleton
const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

const prisma = globalForPrisma.prisma ?? new PrismaClient();

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

const resend = new Resend(process.env.RESEND_API_KEY);

// Rate limiting setup with proper typing
type RateLimitData = {
  count: number;
  timestamp: number;
};

const RATE_LIMIT_DURATION = 60 * 60 * 1000; // 1 hour
const MAX_REQUESTS = 5;
const ipRequests = new Map<string, RateLimitData>();

// Validation schema
const waitlistSchema = z.object({
  email: z.string().email(),
  name: z.string().min(2),
  company: z.string().optional(),
  role: z.string().min(2),
  interest: z.string().min(2),
});

export async function POST(req: Request) {
  try {
    // Rate limiting check
    const ip = req.headers.get("x-forwarded-for") || "unknown";
    const now = Date.now();
    const ipData = ipRequests.get(ip);

    if (ipData) {
      if (now - ipData.timestamp < RATE_LIMIT_DURATION) {
        if (ipData.count >= MAX_REQUESTS) {
          return NextResponse.json(
            { message: "Too many requests. Please try again later." },
            { status: 429 }
          );
        }
        ipRequests.set(ip, {
          count: ipData.count + 1,
          timestamp: ipData.timestamp,
        });
      } else {
        ipRequests.set(ip, { count: 1, timestamp: now });
      }
    } else {
      ipRequests.set(ip, { count: 1, timestamp: now });
    }

    // Parse and validate request body
    const body = await req.json();
    const validatedData = waitlistSchema.parse(body);

    // Check for existing email
    const existingEntry = await prisma.waitlistEntry.findUnique({
      where: { email: validatedData.email },
    });

    if (existingEntry) {
      return NextResponse.json(
        { message: "This email is already on the waitlist." },
        { status: 400 }
      );
    }

    // Create waitlist entry
    await prisma.waitlistEntry.create({
      data: validatedData,
    });

    // Send confirmation email
    try {
      await resend.emails.send({
        from: "Kairo <noreply@kairo.finance>",
        to: validatedData.email,
        subject: "Welcome to the Kairo Waitlist!",
        html: `
          <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
            <h1 style="color: #333;">Welcome to Kairo, ${validatedData.name}!</h1>
            <p>Thank you for joining our waitlist. We're excited to have you on board!</p>
            <p>We'll keep you updated on our progress and let you know when you can access the platform.</p>
            <br/>
            <p>Best regards,</p>
            <p>The Kairo Team</p>
          </div>
        `,
      });

      // Send notification to team
      await resend.emails.send({
        from: "Kairo Waitlist <noreply@kairo.finance>",
        to: process.env.TEAM_EMAIL || "team@kairo.finance",
        subject: "New Waitlist Signup",
        html: `
          <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #333;">New Waitlist Entry</h2>
            <p><strong>Name:</strong> ${validatedData.name}</p>
            <p><strong>Email:</strong> ${validatedData.email}</p>
            <p><strong>Company:</strong> ${validatedData.company || "N/A"}</p>
            <p><strong>Role:</strong> ${validatedData.role}</p>
            <p><strong>Interest:</strong> ${validatedData.interest}</p>
          </div>
        `,
      });
    } catch (emailError) {
      console.error("Email sending error:", emailError);
      // Continue even if email fails
    }

    return NextResponse.json(
      { message: "Successfully joined the waitlist!" },
      { status: 201 }
    );
  } catch (error) {
    console.error("Waitlist submission error:", error);

    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { message: "Invalid form data.", errors: error.errors },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { message: "Failed to process waitlist submission." },
      { status: 500 }
    );
  }
}
