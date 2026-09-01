import Image from "next/image";
import { ArrowRight, Check } from "lucide-react";
import { ModellingBadge, CommunicationBadge, EntrepreneurshipBadge } from "./ProgramIcons";

type Program = {
  Badge: typeof ModellingBadge;
  title: string;
  meta: string;
  disciplines: string[];
  practice: string[];
  skills: string[];
  accent: "brand" | "violet" | "emerald";
};

const ACCENT_PILL: Record<Program["accent"], string> = {
  brand: "bg-brand/10 text-brand-dark",
  violet: "bg-violet/10 text-violet",
  emerald: "bg-emerald-600/10 text-emerald-700",
};

const PROGRAMS: Program[] = [
  {
    Badge: ModellingBadge,
    title: "Modelling &\nDezvoltare Personală",
    meta: "5–25 ani · 8 luni · 2×/săptămână",
    accent: "brand",
    disciplines: [
      "Podium",
      "Public Speaking",
      "Fotopozare",
      "Actorie",
      "Fashion Styling",
      "Etichetă",
      "Make-up & Skincare",
      "Yoga (copii)",
      "Psihologie (adolescenți)",
      "Content & AI (adolescenți)",
    ],
    practice: [
      "2–3 ședințe foto profesioniste incluse în pachet",
      "Acces la proiecte naționale și internaționale ale agenției",
      "Castinguri și oferte de joburi plătite după absolvire",
      "Promovare pe rețelele Adi Academy",
      "Certificat de absolvire",
    ],
    skills: [
      "Încredere",
      "Prezență scenică",
      "Exprimare nonverbală",
      "Gestionare emoțională",
      "Brand personal",
      "Control corporal",
    ],
  },
  {
    Badge: CommunicationBadge,
    title: "Comunicare\nși Imagine",
    meta: "11–20 ani · 8 luni · 2×/săptămână",
    accent: "violet",
    disciplines: [
      "Public Speaking",
      "Voce & Dicție",
      "Comunicare & Interviu",
      "Actorie & Prezență",
      "Arta Improvizației",
      "Prezență Media",
      "Cercetare & Creare",
      "Mers & Ținută",
      "Protocol Media",
      "Stil Vestimentar",
    ],
    practice: [
      "TV Day la Moldova 1 — filmare în studio real",
      "Episod de podcast propriu, filmat",
      "Interviu VOX pe cameră, fără scenariu pregătit",
      "Portofoliu video: primul vs. ultimul interviu, alăturate",
      "Certificat de absolvire",
    ],
    skills: [
      "Comunicare sub presiune",
      "Improvizație",
      "Prezență media",
      "Argumentare",
      "Control vocal",
      "Reacție pe loc",
    ],
  },
  {
    Badge: EntrepreneurshipBadge,
    title: "Antreprenoriat\nși Bani",
    meta: "14–22 ani · 8 luni · 2×/săptămână",
    accent: "emerald",
    disciplines: [
      "Antreprenoriat",
      "Educație Financiară",
      "Branding & Marketing",
      "Public Speaking & Negocieri",
      "Leadership & Management",
      "AI aplicat în business",
      "Planificare",
      "Mindset",
      "Protocol & Prezență",
    ],
    practice: [
      "Produs sau serviciu real, lansat și testat online cu cifre reale",
      "Pitch final în fața unui juriu real",
      "2 Founder Talks cu antreprenori reali + sesiune deschisă de întrebări",
      "Brand și pagină online funcțional, construite de echipă",
      "Certificat de absolvire",
    ],
    skills: [
      "Gândire antreprenorială",
      "Educație financiară aplicată",
      "Negociere",
      "Leadership",
      "Utilizare AI",
      "Lucru în echipă",
    ],
  },
];

function PillList({ items, className }: { items: string[]; className: string }) {
  return (
    <div className="flex flex-wrap gap-1.5">
      {items.map((item) => (
        <span key={item} className={`rounded-full px-2.5 py-1 text-[11px] font-medium ${className}`}>
          {item}
        </span>
      ))}
    </div>
  );
}

export function AboutAcademy() {
  return (
    <section id="despre" className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl text-center">
        <span className="inline-flex rounded-md bg-brand/10 px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider text-brand">
          Despre Adi Academy
        </span>
        <h2 className="mt-6 text-2xl font-bold leading-snug text-ink sm:text-[1.7rem]">
          Cine stă în spatele acestui program
        </h2>
        <p className="mt-5 text-[13px] leading-relaxed text-slate-600">
          Adi Academy este un hub educațional fondat de Adrian Lefter în 2020 cu un scop clar: să
          crească o generație de succes ce va mișca Moldova. De la lansare, Academy a format peste
          1.000 de cursanți din Chișinău și din toată Moldova.
        </p>
        <p className="mt-4 text-[13px] leading-relaxed text-slate-600">
          Adi Academy este mai mult decât o școală — e un mediu în care tinerii din Moldova
          descoperă cine sunt și ce pot face. Cursanții noștri astăzi vorbesc în fața publicului,
          conduc afaceri și se prezintă cu încredere în orice context.
        </p>
        <p className="mt-4 text-[13px] font-semibold leading-relaxed text-ink">
          Misiunea noastră: să creștem o generație de succes ce va mișca Moldova.
        </p>

        <div className="mt-8 flex items-center justify-center gap-3">
          <Image
            src="/adrian-lefter.png"
            alt="Adrian Lefter, fondatorul Adi Academy"
            width={640}
            height={640}
            sizes="44px"
            className="h-11 w-11 rounded-full object-cover ring-2 ring-white"
          />
          <div className="text-left">
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

      <div className="mt-14 grid gap-6 lg:grid-cols-3">
        {PROGRAMS.map((program) => (
          <article
            key={program.title}
            className="flex flex-col rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-900/5"
          >
            <program.Badge />
            <h3 className="mt-5 whitespace-pre-line text-[17px] font-bold leading-snug text-ink">
              {program.title}
            </h3>
            <p className="mt-1.5 text-[11.5px] font-medium text-slate-500">{program.meta}</p>

            <div className="mt-5">
              <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                Discipline
              </p>
              <div className="mt-2">
                <PillList items={program.disciplines} className="bg-slate-100 text-slate-600" />
              </div>
            </div>

            <div className="mt-5">
              <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                Practică & Oportunități
              </p>
              <ul className="mt-2 space-y-2">
                {program.practice.map((item) => (
                  <li key={item} className="flex gap-2 text-[12px] leading-snug text-slate-600">
                    <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-brand" strokeWidth={2.5} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-5">
              <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                Skills dezvoltate
              </p>
              <div className="mt-2">
                <PillList items={program.skills} className={ACCENT_PILL[program.accent]} />
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
