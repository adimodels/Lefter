import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { FREE_REPORTS_LIMIT } from "@/lib/constants";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const counter = await prisma.counter.findUnique({ where: { id: "main" } });
    const full = (counter?.count ?? 0) >= FREE_REPORTS_LIMIT;
    return NextResponse.json({ full });
  } catch (error) {
    console.error("Capacity check failed", error);
    // Eșec grațios: nu blocăm utilizatorii dacă baza de date e temporar indisponibilă.
    return NextResponse.json({ full: false });
  }
}
