import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { prisma } from "@/lib/db";
import { DeleteSubmissionButton } from "@/components/admin/DeleteSubmissionButton";
import { formatAnswers } from "@/lib/questions/format";
import { YOUTH_CATEGORIES } from "@/lib/questions/youth";
import { PARENT_CATEGORIES } from "@/lib/questions/parent";
import type { Answers } from "@/lib/questions/types";

export const dynamic = "force-dynamic";

const STATUS_LABELS = {
  NOT_PROCESSED: "Neprocesat",
  IN_PROGRESS: "În lucru",
  SENT: "Trimis",
} as const;

const LIVING_AREA_LABELS = {
  URBAN: "Urban",
  RURAL: "Rural",
  SMALL_TOWN: "Localitate mică",
} as const;

function Field({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="text-[11px] font-medium uppercase tracking-wide text-slate-400">{label}</dt>
      <dd className="mt-1 text-[13px] text-slate-900">{value}</dd>
    </div>
  );
}

export default async function SubmissionDetailPage({
  params,
}: {
  params: Promise<{ submissionId: string }>;
}) {
  const { submissionId } = await params;

  // Datele de contact și răspunsurile stau în colecții separate, legate doar
  // prin submissionId — le împerechem aici, în admin, nu printr-o relație.
  const [contact, submission] = await Promise.all([
    prisma.contact.findUnique({ where: { submissionId } }),
    prisma.submission.findUnique({ where: { submissionId } }),
  ]);

  if (!contact || !submission) notFound();

  const categories = submission.audience === "YOUTH" ? YOUTH_CATEGORIES : PARENT_CATEGORIES;
  const formatted = formatAnswers(categories, submission.answers as unknown as Answers);
  const answeredCount = formatted.reduce(
    (n, c) => n + c.answers.filter((a) => a.answered).length,
    0
  );
  const totalCount = formatted.reduce((n, c) => n + c.answers.length, 0);

  return (
    <div>
      <div className="flex items-center justify-between">
        <Link
          href="/admin/submissions"
          className="inline-flex items-center gap-1.5 text-[13px] font-medium text-slate-500 hover:text-slate-900"
        >
          <ArrowLeft className="h-4 w-4" /> Înapoi la submisii
        </Link>
        <DeleteSubmissionButton
          submissionId={submissionId}
          name={`${contact.firstName} ${contact.lastName}`}
          variant="labeled"
          redirectToList
        />
      </div>

      <h1 className="mt-4 text-2xl font-bold text-slate-900">
        {contact.firstName} {contact.lastName}
      </h1>
      <p className="mt-1 text-[13px] text-slate-500">
        {submission.audience === "YOUTH" ? "Tânăr" : "Părinte"} · {answeredCount}/{totalCount}{" "}
        răspunsuri · status: {STATUS_LABELS[contact.reportStatus]}
      </p>

      <section className="mt-6 rounded-2xl border border-slate-200 bg-white p-6">
        <h2 className="mb-4 text-[13px] font-bold text-slate-900">Date de contact și demografice</h2>
        <dl className="grid grid-cols-2 gap-x-6 gap-y-4 sm:grid-cols-4">
          <Field label="Email" value={contact.email} />
          <Field label="Telefon" value={contact.phone} />
          <Field label="Vârstă" value={String(submission.age)} />
          <Field label="Gen" value={submission.gender} />
          <Field
            label="Mediu"
            value={LIVING_AREA_LABELS[submission.livingArea] ?? submission.livingArea}
          />
          <Field label="Raion" value={submission.county ?? "—"} />
          <Field
            label="Trimis la"
            value={contact.createdAt.toLocaleString("ro-RO", { timeZone: "Europe/Chisinau" })}
          />
          <Field label="Marketing" value={contact.marketingOptInAt ? "Da" : "Nu"} />
        </dl>
      </section>

      <div className="mt-6 space-y-5">
        {formatted.map((category) => (
          <section key={category.id} className="rounded-2xl border border-slate-200 bg-white p-6">
            <h2 className="mb-4 text-[13px] font-bold text-slate-900">{category.title}</h2>
            <ol className="space-y-4">
              {category.answers.map((answer) => (
                <li key={answer.questionId} className="border-b border-slate-100 pb-4 last:border-0 last:pb-0">
                  <p className="text-[12.5px] font-medium text-slate-700">
                    <span className="mr-1.5 text-slate-400">{answer.questionId}</span>
                    {answer.prompt}
                  </p>
                  <div
                    className={`mt-1.5 space-y-0.5 text-[13px] ${
                      answer.answered ? "text-brand" : "text-slate-400 italic"
                    }`}
                  >
                    {answer.lines.map((line, i) => (
                      <p key={i}>{line}</p>
                    ))}
                  </div>
                </li>
              ))}
            </ol>
          </section>
        ))}
      </div>
    </div>
  );
}
