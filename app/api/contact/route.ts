import { NextResponse } from "next/server";
import { z } from "zod";
import { db } from "@/lib/db";
import { sendContactEmail } from "@/lib/email";

const schema = z.object({
  name: z.string().min(2, "Zadejte jméno"),
  email: z.string().email("Zadejte platný email"),
  phone: z.string().optional(),
  topic: z.string().min(1, "Vyberte téma"),
  message: z.string().min(10, "Zpráva musí mít alespoň 10 znaků"),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = schema.safeParse(body);

    if (!parsed.success) {
      const firstError = parsed.error.issues[0]?.message || "Neplatná data";
      return NextResponse.json(
        { error: firstError },
        { status: 400 }
      );
    }

    const { name, email, phone, topic, message } = parsed.data;

    // Save to database
    try {
      await db.execute({
        sql: "INSERT INTO messages (name, email, phone, topic, message) VALUES (?, ?, ?, ?, ?)",
        args: [name, email, phone || null, topic, message],
      });
    } catch (dbError) {
      console.error("Database error:", dbError);
      return NextResponse.json(
        { error: "Nepodařilo se uložit zprávu" },
        { status: 500 }
      );
    }

    // Send email notification (don't fail if email fails)
    try {
      await sendContactEmail({ name, email, phone, topic, message });
    } catch (emailError) {
      console.error("Email sending failed:", emailError);
      // Continue — message is saved, email is optional
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Neplatný požadavek" },
      { status: 400 }
    );
  }
}
