import {
  UserSearch,
  ClipboardList,
  ListChecks,
  Contact,
  ShieldCheck,
  MailCheck,
  FileText,
} from "lucide-react";

const STEPS = [
  { icon: UserSearch, title: "Alegi audiența", sub: "Tânăr sau Părinte" },
  { icon: ClipboardList, title: "Completezi datele demografice", sub: "Vârstă, Gen, Regiune" },
  { icon: ListChecks, title: "Răspunzi la test", sub: "8 categorii / 6 categorii + profil copil" },
  { icon: Contact, title: "Completezi datele de contact", sub: "Prenume, Email, Telefon" },
  {
    icon: ShieldCheck,
    title: "Consimțământ + Opt-in",
    sub: "Acord pentru prelucrarea datelor și comunicări",
  },
  { icon: MailCheck, title: "Primești confirmarea", sub: "Email imediat cu detaliile și estimarea (24h)" },
  { icon: FileText, title: "Primești raportul", sub: "Raport personalizat pe email în 24h" },
];

export function HowItWorks() {
  return (
    <section id="cum-functioneaza" className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
      <h2 className="text-center text-2xl font-bold text-ink sm:text-[1.7rem]">Cum funcționează</h2>

      <ol className="mt-12 grid grid-cols-2 gap-x-4 gap-y-10 sm:grid-cols-4 lg:grid-cols-7 lg:gap-x-2">
        {STEPS.map((step, index) => (
          <li key={step.title} className="relative flex flex-col items-center text-center">
            {index < STEPS.length - 1 && (
              <span
                aria-hidden
                className="absolute left-1/2 top-8 hidden h-px w-full border-t-2 border-dashed border-slate-300 lg:block"
              />
            )}
            <span className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full bg-white ring-1 ring-slate-200">
              <step.icon className="h-6 w-6 text-brand" strokeWidth={1.6} />
            </span>
            <h3 className="mt-4 text-[12px] font-bold leading-snug text-ink">{step.title}</h3>
            <p className="mt-1 text-[10.5px] leading-snug text-slate-500">{step.sub}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
