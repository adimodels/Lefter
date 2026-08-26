import { Section, SectionHeading } from "@/components/ui/Section";

const STATS = [
  "Distribuția intereselor vocaționale (ce domenii atrag tinerii moldoveni)",
  "Nivelul mediu de wellbeing (starea de bine a tinerilor pe regiuni)",
  "Stilurile parentale dominante în Moldova",
  "Principalele lipsuri identificate în educația practică",
  "Tendințe an de an (din 2026 în continuare)",
];

export function NationalInitiative() {
  return (
    <Section className="bg-slate-50">
      <SectionHeading eyebrow="Inițiativa Națională" title="De ce o facem" />
      <p className="max-w-3xl mx-auto text-center text-lg text-slate-600 leading-relaxed">
        Moldova nu a avut niciodată o imagine clară a propriei generații. Adi Academy lansează{" "}
        <strong className="text-slate-900">
          Raportul Național de Autoevaluare și Dezvoltare Personală
        </strong>{" "}
        — prima inițiativă de acest fel din Republica Moldova. Fiecare test completat contribuie,
        anonim, la construirea celui mai complet portret al tinerilor și părinților din Moldova —
        publicat anual ca statistică națională.
      </p>

      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 max-w-2xl mx-auto">
        {STATS.map((stat) => (
          <div key={stat} className="flex items-start gap-3">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-500" />
            <span className="text-slate-700 text-sm leading-relaxed">{stat}</span>
          </div>
        ))}
      </div>

      <div className="mt-12 mx-auto max-w-2xl rounded-2xl bg-slate-900 text-white p-6 text-center">
        <p className="font-medium">
          Datele personale rămân private. Ce rămâne în statistică e un număr dintr-un tablou
          național — fără nume, fără identificare.
        </p>
      </div>
    </Section>
  );
}
