import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { waitlistPayloadSchema } from "@/lib/validation";

export async function POST(request: Request) {
  const json = await request.json().catch(() => null);
  const parsed = waitlistPayloadSchema.safeParse(json);
  if (!parsed.success) {
    return NextResponse.json({ ok: false, message: "Date invalide" }, { status: 400 });
  }

  await prisma.waitlistEntry.create({ data: parsed.data });

  return NextResponse.json({ ok: true });
}
