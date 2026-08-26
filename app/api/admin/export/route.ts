import { prisma } from "@/lib/db";

function csvEscape(value: unknown): string {
  const str = value === null || value === undefined ? "" : String(value);
  if (/[",\n]/.test(str)) {
    return `"${str.replace(/"/g, '""')}"`;
  }
  return str;
}

export async function GET() {
  const submissions = await prisma.submission.findMany({ orderBy: { createdAt: "desc" } });

  const header = [
    "submissionId",
    "audience",
    "age",
    "gender",
    "livingArea",
    "county",
    "createdAt",
    "answers",
  ];

  const rows = submissions.map((s) =>
    [
      s.submissionId,
      s.audience,
      s.age,
      s.gender,
      s.livingArea,
      s.county ?? "",
      s.createdAt.toISOString(),
      JSON.stringify(s.answers),
    ]
      .map(csvEscape)
      .join(",")
  );

  const csv = [header.join(","), ...rows].join("\n");

  return new Response(csv, {
    headers: {
      "Content-Type": "text/csv; charset=utf-8",
      "Content-Disposition": `attachment; filename="adi-academy-submisii-${new Date().toISOString().slice(0, 10)}.csv"`,
    },
  });
}
