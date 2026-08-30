import { ClipboardList, BrainCircuit, MailCheck } from "lucide-react";

const STEPS = [
  {
    icon: ClipboardList,
    title: "Completezi testul",
    sub: "15 minute, 100% online, pe telefon sau laptop",
  },
  {
    icon: BrainCircuit,
    title: "Profilul tău e analizat",
    sub: "Pe baza a 11 instrumente validate internațional",
  },
  {
    icon: MailCheck,
    title: "Primești raportul în 24h",
    sub: "Pe email, PDF personalizat, gratuit",
  },
];

export function HowItWorks() {
  return (
    <section id="cum-functioneaza" className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
      <h2 className="text-center text-2xl font-bold text-ink sm:text-[1.7rem]">Cum funcționează</h2>

      <ol className="mt-12 grid gap-10 sm:grid-cols-3 sm:gap-6">
        {STEPS.map((step, index) => (
          <li key={step.title} className="relative flex flex-col items-center text-center">
            {index < STEPS.length - 1 && (
              <span
                aria-hidden
                className="absolute left-1/2 top-10 hidden h-px w-full border-t-2 border-dashed border-slate-300 sm:block"
              />
            )}
            <span className="relative z-10 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-brand to-violet shadow-lg shadow-brand/25">
              <step.icon className="h-8 w-8 text-white" strokeWidth={1.6} />
            </span>
            <p className="mt-5 text-[11px] font-bold uppercase tracking-wider text-brand">
              Pasul {index + 1}
            </p>
            <h3 className="mt-1.5 text-[15px] font-bold leading-snug text-ink">{step.title}</h3>
            <p className="mt-2 max-w-[15rem] text-[12px] leading-snug text-slate-500">{step.sub}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
