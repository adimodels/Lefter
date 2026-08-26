import { randomUUID } from "node:crypto";
import { NextResponse } from "next/server";
import type { Prisma } from "@prisma/client";
import { prisma } from "@/lib/db";
import { submitPayloadSchema } from "@/lib/validation";
import { FREE_REPORTS_LIMIT } from "@/lib/constants";
import { sendTelegramNotification, sendToSheetsWebhook } from "@/lib/webhooks";
import { YOUTH_CATEGORIES } from "@/lib/questions/youth";
import { PARENT_CATEGORIES } from "@/lib/questions/parent";
import { findFirstUnanswered } from "@/lib/questions/validate";
import type { Answers } from "@/lib/questions/types";

export async function POST(request: Request) {
  const json = await request.json().catch(() => null);
  if (!json) {
    return NextResponse.json({ ok: false, message: "Corp de cerere invalid" }, { status: 400 });
  }

  const parsed = submitPayloadSchema.safeParse(json);
  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, message: "Date invalide", issues: parsed.error.flatten() },
      { status: 400 }
    );
  }

  const { audience, demographics, contact, consents, answers } = parsed.data;

  const categories = audience === "YOUTH" ? YOUTH_CATEGORIES : PARENT_CATEGORIES;
  const typedAnswers = answers as unknown as Answers;
  const missing = findFirstUnanswered(categories, typedAnswers);
  if (missing) {
    return NextResponse.json(
      { ok: false, message: `Răspuns lipsă sau invalid pentru întrebarea ${missing.questionId}` },
      { status: 400 }
    );
  }

  const existingCounter = await prisma.counter.findUnique({ where: { id: "main" } });
  if ((existingCounter?.count ?? 0) >= FREE_REPORTS_LIMIT) {
    return NextResponse.json(
      { ok: false, message: "Limita de rapoarte gratuite a fost atinsă" },
      { status: 409 }
    );
  }

  const submissionId = randomUUID();
  const now = new Date();

  const submission = await prisma.submission.create({
    data: {
      submissionId,
      audience,
      age: demographics.age,
      gender: demographics.gender,
      livingArea: demographics.livingArea,
      county: demographics.county,
      answers: answers as Prisma.InputJsonValue,
    },
  });

  try {
    await prisma.contact.create({
      data: {
        submissionId,
        audience,
        firstName: contact.firstName,
        lastName: contact.lastName,
        email: contact.email,
        phone: contact.phone,
        consentDataProcessingAt: now,
        consentStatisticsAt: now,
        marketingOptInAt: consents.marketingOptIn ? now : null,
        parentalConsentAt: consents.parentalConsent ? now : null,
      },
    });
  } catch (error) {
    console.error("Failed to create contact, rolling back submission", error);
    await prisma.submission.delete({ where: { id: submission.id } }).catch(() => null);
    return NextResponse.json(
      { ok: false, message: "Nu am putut salva datele de contact" },
      { status: 500 }
    );
  }

  await prisma.counter.upsert({
    where: { id: "main" },
    update: { count: { increment: 1 } },
    create: { id: "main", count: 1 },
  });

  await Promise.all([
    sendTelegramNotification({
      submissionId,
      audience,
      firstName: contact.firstName,
      lastName: contact.lastName,
      email: contact.email,
      phone: contact.phone,
    }),
    sendToSheetsWebhook({
      submissionId,
      audience,
      firstName: contact.firstName,
      lastName: contact.lastName,
      email: contact.email,
      phone: contact.phone,
      age: demographics.age,
      gender: demographics.gender,
      livingArea: demographics.livingArea,
      county: demographics.county ?? null,
      answers,
      createdAt: now.toISOString(),
    }),
  ]);

  return NextResponse.json({ ok: true });
}
