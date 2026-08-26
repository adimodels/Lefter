import { ArrowRight, Check, Sparkles, MessageCircle, Briefcase } from "lucide-react";

const PROGRAMS = [
  {
    icon: Sparkles,
    accent: "bg-brand",
    title: "Modelling &\nDezvoltare Personală",
    points: [
      "Prezență scenică, imagine, actorie, public speaking",
      "Branding personal, fotopozare, etichetă, fashion",
      "Include: TV Day (Moldova 1), sesiune foto profesională, portofoliu",
    ],
    tag: "Pentru tineri 13–25 ani",
    tagColor: "text-brand",
  },
  {
    icon: MessageCircle,
    accent: "bg-violet",
    title: "Comunicare\nși Imagine",
    points: [
      "Public speaking, voce & dicție, prezență media",
      "Arta improvizației, protocol, stil vestimentar",
      "Include: TV Day (Moldova 1), podcast propriu, interviu VOX",
    ],
    tag: "Pentru tineri și adulți",
    tagColor: "text-violet",
  },
  {
    icon: Briefcase,
    accent: "bg-emerald-600",
    title: "Antreprenoriat\nși Bani",
    points: [
      "Antreprenoriat, educație financiară, leadership",
      "Branding & marketing, AI, planificare",
      "Include: Founder Talks, pitch final cu juriu, proiect testat online",
    ],
    tag: "Pentru tineri și adulți",
    tagColor: "text-emerald-600",
  },
];

export function AboutAcademy() {
  return (
    <section id="despre" className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
      <div className="grid gap-10 lg:grid-cols-[1fr_2fr] lg:gap-12">
        <div>
          <span className="inline-flex rounded-md bg-brand/10 px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider text-brand">
            Despre Adi Academy
          </span>
          <h2 className="mt-6 text-2xl font-bold leading-snug text-ink sm:text-[1.7rem]">
            Creștem o generație
            <br />
            de succes ce va mișca Moldova.
          </h2>
          <p className="mt-5 text-[13px] leading-relaxed text-slate-600">
            Fondat în 2020 de Adrian Lefter, Adi Academy este un hub educațional care a format peste
            1.000 de cursanți din Chișinău și din toată Moldova prin programe practice, intensive și
            axate pe rezultate reale.
          </p>

          <div className="mt-8 flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-brand to-violet text-sm font-bold text-white">
              AL
            </span>
            <div>
              <p className="text-[13px] font-bold text-ink">Adrian Lefter</p>
              <p className="text-[11px] text-slate-500">Fondator Adi Academy</p>
            </div>
          </div>

          <a
            href="#cum-functioneaza"
            className="mt-8 inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-2.5 text-[13px] font-semibold text-ink transition-colors hover:bg-slate-50"
          >
            Află mai multe despre noi <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        <div className="grid gap-5 sm:grid-cols-3">
          {PROGRAMS.map((program) => (
            <article
              key={program.title}
              className="flex flex-col rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-900/5"
            >
              <span
                className={`flex h-11 w-11 items-center justify-center rounded-xl ${program.accent}`}
              >
                <program.icon className="h-5 w-5 text-white" strokeWidth={1.8} />
              </span>
              <h3 className="mt-5 whitespace-pre-line text-[15px] font-bold leading-snug text-ink">
                {program.title}
              </h3>
              <ul className="mt-4 flex-1 space-y-2.5">
                {program.points.map((point) => (
                  <li key={point} className="flex gap-2 text-[11.5px] leading-snug text-slate-600">
                    <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-brand" strokeWidth={2.5} />
                    {point}
                  </li>
                ))}
              </ul>
              <p className={`mt-5 text-[11px] font-semibold ${program.tagColor}`}>{program.tag}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
