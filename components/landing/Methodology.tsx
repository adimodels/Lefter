import { ShieldCheck, Lock, Check } from "lucide-react";

const INSTRUMENTS = ["Holland", "WHO-5", "Goleman", "VIA", "Baumrind", "Gottman"];

const SECURITY = [
  "Datele tale sunt criptate și stocate în siguranță",
  "Nu vom vinde niciodată datele tale",
  "Poți solicita ștergerea datelor oricând",
  "Respectăm GDPR și legislația din Moldova",
];

export function Methodology() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="grid gap-6 lg:grid-cols-2">
        <article className="rounded-2xl bg-white p-7 shadow-sm ring-1 ring-slate-900/5">
          <h2 className="text-lg font-bold text-ink">Bazat pe instrumente validate internațional</h2>
          <p className="mt-4 text-[12.5px] leading-relaxed text-slate-600">
            Testele sunt construite pe 11 framework-uri validate internațional de psihologie,
            educație și wellbeing, utilizate de instituții academice și organizații internaționale.
          </p>
          <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-3">
            {INSTRUMENTS.map((name) => (
              <span key={name} className="text-[12px] font-bold text-slate-500">
                {name}
              </span>
            ))}
            <span className="text-[11px] text-slate-400">și altele</span>
          </div>
        </article>

        <article className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-indigo-50 to-violet-50 p-7 ring-1 ring-slate-900/5">
          <div className="relative z-10 max-w-md">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-brand to-violet">
                <ShieldCheck className="h-5 w-5 text-white" strokeWidth={1.8} />
              </span>
              <h2 className="text-lg font-bold text-brand">Siguranță și confidențialitate</h2>
            </div>
            <ul className="mt-6 space-y-3">
              {SECURITY.map((item) => (
                <li key={item} className="flex gap-2.5 text-[12.5px] text-slate-700">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand" strokeWidth={2.5} />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <Lock
            aria-hidden
            className="pointer-events-none absolute -bottom-4 right-4 h-40 w-40 text-brand/10"
            strokeWidth={1}
          />
        </article>
      </div>
    </section>
  );
}
