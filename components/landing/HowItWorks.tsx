import { ClipboardList, BrainCircuit, Mail } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/Section";

const STEPS = [
  {
    icon: ClipboardList,
    title: "Completezi testul",
    description: "15 minute, 100% online, pe telefon sau laptop.",
  },
  {
    icon: BrainCircuit,
    title: "Profilul tău e analizat",
    description: "Pe baza a 11 instrumente validate internațional.",
  },
  {
    icon: Mail,
    title: "Primești raportul în 24h",
    description: "Pe email, PDF personalizat, gratuit.",
  },
];

export function HowItWorks() {
  return (
    <Section className="bg-white">
      <SectionHeading eyebrow="Procesul" title="Cum funcționează" />
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
        {STEPS.map((step, index) => (
          <div key={step.title} className="text-center">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-amber-100 text-amber-600">
              <step.icon className="h-8 w-8" strokeWidth={1.75} />
            </div>
            <p className="text-sm font-semibold text-amber-600 mb-1">Pas {index + 1}</p>
            <h3 className="text-lg font-bold text-slate-900">{step.title}</h3>
            <p className="mt-2 text-sm text-slate-600">{step.description}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
