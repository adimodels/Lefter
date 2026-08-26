import Link from "next/link";
import { ArrowRight, Target, Lock } from "lucide-react";

export function FinalCta() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-brand via-violet to-violet-soft px-7 py-10 sm:px-12">
        <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-white/10 blur-2xl" />

        <div className="relative flex flex-col items-start gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex items-center gap-6">
            <span className="hidden h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-white/15 ring-1 ring-white/25 sm:flex">
              <Target className="h-8 w-8 text-white" strokeWidth={1.6} />
            </span>
            <div>
              <h2 className="text-2xl font-bold leading-snug text-white">
                Ești gata să descoperi cine ești?
              </h2>
              <p className="mt-2 text-[13px] text-white/80">
                Primii 5.000 de participanți primesc raportul gratuit.
              </p>
            </div>
          </div>

          <div className="w-full lg:w-auto">
            <Link
              href="/test/tineri"
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-white px-8 py-4 text-sm font-bold text-brand shadow-lg transition-colors hover:bg-slate-50 lg:w-auto"
            >
              Începe testul acum <ArrowRight className="h-4 w-4" />
            </Link>
            <p className="mt-3 flex items-center justify-center gap-1.5 text-[11px] text-white/80">
              <Lock className="h-3 w-3" /> 100% gratuit · Durează ~15 minute · Raport în 24h
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
