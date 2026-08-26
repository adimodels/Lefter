import { prisma } from "@/lib/db";
import { FREE_REPORTS_LIMIT } from "@/lib/constants";

export const dynamic = "force-dynamic";

function StatCard({ label, value }: { label: string; value: string | number }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6">
      <p className="text-sm font-medium text-slate-500">{label}</p>
      <p className="mt-2 text-3xl font-bold text-slate-900">{value}</p>
    </div>
  );
}

export default async function AdminDashboardPage() {
  const [counter, totalSubmissions, youthCount, parentCount, sentCount] = await Promise.all([
    prisma.counter.findUnique({ where: { id: "main" } }),
    prisma.submission.count(),
    prisma.submission.count({ where: { audience: "YOUTH" } }),
    prisma.submission.count({ where: { audience: "PARENT" } }),
    prisma.contact.count({ where: { reportStatus: "SENT" } }),
  ]);

  const used = counter?.count ?? 0;
  const remaining = Math.max(0, FREE_REPORTS_LIMIT - used);

  return (
    <div>
      <h1 className="text-2xl font-bold text-slate-900 mb-8">Dashboard</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard label="Total submisii" value={totalSubmissions} />
        <StatCard label="Locuri rămase din 5.000" value={remaining.toLocaleString("ro-RO")} />
        <StatCard label="Tineri" value={youthCount} />
        <StatCard label="Părinți" value={parentCount} />
      </div>
      <div className="mt-6">
        <StatCard label="Rapoarte trimise" value={sentCount} />
      </div>
    </div>
  );
}
