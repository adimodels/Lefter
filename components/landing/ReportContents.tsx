import { UserCircle, Award, Compass, BookOpen, ListChecks, Zap } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/Section";

const CARDS = [
  {
    icon: UserCircle,
    title: "Profilul tău",
    description: "Cine ești, cum funcționezi, ce te energizează.",
  },
  {
    icon: Award,
    title: "Forțele tale",
    description: "Talentele și valorile de caracter dominante.",
  },
  {
    icon: Compass,
    title: "Direcția ta",
    description: "3–5 direcții de carieră potrivite profilului tău.",
  },
  {
    icon: BookOpen,
    title: "Cărți recomandate",
    description: "3 cărți alese specific pentru profilul tău.",
  },
  {
    icon: ListChecks,
    title: "Obiceiuri",
    description: "3 obiceiuri concrete, simple, adaptate stilului tău de viață.",
  },
  {
    icon: Zap,
    title: "Cursuri potrivite",
    description: "Ce tip de programe ar accelera cel mai mult creșterea ta.",
  },
];

export function ReportContents() {
  return (
    <Section className="bg-slate-50">
      <SectionHeading eyebrow="Raportul tău" title="Ce conține raportul" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {CARDS.map((card) => (
          <div key={card.title} className="rounded-2xl bg-white border border-slate-200 p-6">
            <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
              <card.icon className="h-6 w-6" strokeWidth={1.75} />
            </div>
            <h3 className="text-base font-bold text-slate-900">{card.title}</h3>
            <p className="mt-2 text-sm text-slate-600 leading-relaxed">{card.description}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
