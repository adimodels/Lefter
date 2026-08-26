import { Section, SectionHeading } from "@/components/ui/Section";

const PROGRAMS = [
  {
    title: "Modelling & Dezvoltare Personală",
    description:
      "Prezență scenică, imagine, actorie, public speaking, branding personal, fotopozare, etichetă, fashion. Include TV Day (Moldova 1), sesiune foto profesională, portofoliu.",
    tag: "13–25 ani",
  },
  {
    title: "Comunicare și Imagine",
    description:
      "Public speaking, voce & dicție, prezență media, arta improvizației, protocol, stil vestimentar, comunicare & interviu. Include TV Day (Moldova 1), podcast propriu, interviu VOX.",
    tag: "Tineri și adulți",
  },
  {
    title: "Antreprenoriat și Bani",
    description:
      "Antreprenoriat, educație financiară, leadership, branding & marketing, AI, planificare, public speaking & negocieri. Include Founder Talks și pitch final cu juriu.",
    tag: "Proiect testat online",
  },
];

export function AboutAcademy() {
  return (
    <Section className="bg-white">
      <SectionHeading eyebrow="Despre Adi Academy" title="Cine stă în spatele acestui program" />
      <p className="max-w-3xl mx-auto text-center text-lg text-slate-600 leading-relaxed">
        Adi Academy este mai mult decât o școală — e un mediu în care tinerii din Moldova descoperă
        cine sunt și ce pot face. Fondat în 2020 de <strong className="text-slate-900">Adrian
        Lefter</strong>, hub-ul educațional a format peste <strong className="text-slate-900">1.000
        de cursanți</strong> care astăzi vorbesc în fața publicului, conduc afaceri și se prezintă cu
        încredere în orice context.
      </p>
      <p className="mt-4 max-w-3xl mx-auto text-center text-lg font-medium text-slate-800">
        Misiunea noastră: să creștem o generație de succes ce va mișca Moldova.
      </p>

      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
        {PROGRAMS.map((program) => (
          <div key={program.title} className="rounded-2xl border border-slate-200 p-6">
            <span className="inline-block text-xs font-semibold uppercase tracking-wide text-amber-600 mb-3">
              {program.tag}
            </span>
            <h3 className="text-lg font-bold text-slate-900">{program.title}</h3>
            <p className="mt-2 text-sm text-slate-600 leading-relaxed">{program.description}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
