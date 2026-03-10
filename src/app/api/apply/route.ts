import { NextResponse } from "next/server";

import { sendApplicationEmail } from "@/lib/mailer";
import { applicationSchema } from "@/lib/validation";

export async function POST(request: Request) {
  const formData = await request.formData();
  const candidate = Object.fromEntries(formData.entries());
  const parsed = applicationSchema.safeParse(candidate);

  if (!parsed.success) {
    return NextResponse.json(
      {
        ok: false,
        message: "The application is incomplete or invalid.",
      },
      { status: 400 },
    );
  }

  const payload = parsed.data;

  if (payload.trap) {
    return NextResponse.json({ ok: true });
  }

  if (Date.now() - payload.startedAt < 2500) {
    return NextResponse.json({ ok: true });
  }

  await sendApplicationEmail(payload);

  return NextResponse.json({ ok: true });
}
