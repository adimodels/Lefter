import { AudienceCtaButtons } from "./AudienceCtaButtons";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-slate-950 text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-amber-500/20 blur-3xl" />
        <div className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-indigo-500/30 blur-3xl" />
      </div>
      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-28 sm:py-36 text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-amber-400 mb-6">
          Adi Academy · Inițiativă Națională · Moldova
        </p>
        <h1 className="text-4xl sm:text-6xl font-bold tracking-tight">
          Descoperă-te. <span className="text-amber-400">Gratuit.</span> Acum.
        </h1>
        <p className="mt-6 max-w-2xl mx-auto text-lg sm:text-xl text-slate-300 leading-relaxed">
          Completează testul de autoevaluare și primești în 24 de ore raportul tău personal —
          talente, direcție, recomandări concrete.
        </p>
        <div className="mt-10 flex justify-center">
          <AudienceCtaButtons />
        </div>
        <p className="mt-6 text-sm text-slate-400">
          Primele 5.000 de rapoarte sunt complet gratuite.
        </p>
      </div>
    </section>
  );
}
