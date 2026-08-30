import Link from "next/link";
import { prisma } from "@/lib/db";
import type { ReportStatus } from "@prisma/client";
import { updateReportStatusAction } from "../actions";

export const dynamic = "force-dynamic";

const STATUS_LABELS: Record<ReportStatus, string> = {
  NOT_PROCESSED: "Neprocesat",
  IN_PROGRESS: "În lucru",
  SENT: "Trimis",
};

const STATUS_OPTIONS: ReportStatus[] = ["NOT_PROCESSED", "IN_PROGRESS", "SENT"];

export default async function AdminSubmissionsPage({
  searchParams,
}: {
  searchParams: Promise<{ status?: string }>;
}) {
  const { status } = await searchParams;
  const filter = STATUS_OPTIONS.includes(status as ReportStatus) ? (status as ReportStatus) : undefined;

  const contacts = await prisma.contact.findMany({
    where: filter ? { reportStatus: filter } : undefined,
    orderBy: { createdAt: "desc" },
    take: 200,
  });

  return (
    <div>
      <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
        <h1 className="text-2xl font-bold text-slate-900">Submisii</h1>
        <a
          href="/api/admin/export"
          className="rounded-full bg-slate-900 px-5 py-2 text-sm font-semibold text-white hover:bg-slate-800"
        >
          Export CSV (anonimizat)
        </a>
      </div>

      <div className="flex gap-2 mb-6">
        <Link
          href="/admin/submissions"
          className={`rounded-full px-4 py-1.5 text-sm font-medium ${
            !filter ? "bg-slate-900 text-white" : "bg-white border border-slate-200 text-slate-600"
          }`}
        >
          Toate
        </Link>
        {STATUS_OPTIONS.map((option) => (
          <Link
            key={option}
            href={`/admin/submissions?status=${option}`}
            className={`rounded-full px-4 py-1.5 text-sm font-medium ${
              filter === option ? "bg-slate-900 text-white" : "bg-white border border-slate-200 text-slate-600"
            }`}
          >
            {STATUS_LABELS[option]}
          </Link>
        ))}
      </div>

      <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-slate-200 text-left text-slate-500">
              <th className="px-4 py-3 font-medium">Data</th>
              <th className="px-4 py-3 font-medium">Nume</th>
              <th className="px-4 py-3 font-medium">Audiență</th>
              <th className="px-4 py-3 font-medium">Contact</th>
              <th className="px-4 py-3 font-medium">Status</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact) => (
              <tr key={contact.id} className="border-b border-slate-100 last:border-0">
                <td className="px-4 py-3 whitespace-nowrap text-slate-500">
                  {contact.createdAt.toLocaleString("ro-RO", { timeZone: "Europe/Chisinau" })}
                </td>
                <td className="px-4 py-3 whitespace-nowrap font-medium">
                  <Link
                    href={`/admin/submissions/${contact.submissionId}`}
                    className="text-slate-900 underline decoration-slate-300 underline-offset-2 hover:text-brand hover:decoration-brand"
                  >
                    {contact.firstName} {contact.lastName}
                  </Link>
                </td>
                <td className="px-4 py-3 whitespace-nowrap text-slate-600">
                  {contact.audience === "YOUTH" ? "Tânăr" : "Părinte"}
                </td>
                <td className="px-4 py-3 whitespace-nowrap text-slate-600">
                  <div>{contact.email}</div>
                  <div className="text-xs text-slate-400">{contact.phone}</div>
                </td>
                <td className="px-4 py-3 whitespace-nowrap">
                  <form action={updateReportStatusAction} className="flex items-center gap-2">
                    <input type="hidden" name="submissionId" value={contact.submissionId} />
                    <select
                      name="status"
                      defaultValue={contact.reportStatus}
                      className="rounded-lg border border-slate-300 px-2 py-1 text-sm"
                    >
                      {STATUS_OPTIONS.map((option) => (
                        <option key={option} value={option}>
                          {STATUS_LABELS[option]}
                        </option>
                      ))}
                    </select>
                    <button
                      type="submit"
                      className="rounded-lg bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700 hover:bg-slate-200"
                    >
                      Salvează
                    </button>
                  </form>
                </td>
              </tr>
            ))}
            {contacts.length === 0 && (
              <tr>
                <td colSpan={5} className="px-4 py-10 text-center text-slate-400">
                  Nicio submisie găsită.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
