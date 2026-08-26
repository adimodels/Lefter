import { Compass, Star, Brain, HeartPulse, Users, Sparkles, Target, BookOpen, Globe } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/Section";

const INSTRUMENTS = [
  { icon: Compass, name: "Orientare Vocațională", source: "Holland RIASEC Model" },
  { icon: Star, name: "Forțe de Caracter", source: "VIA Character Strengths Survey" },
  { icon: Brain, name: "Inteligența Emoțională", source: "Goleman EQ Framework" },
  { icon: HeartPulse, name: "Stare de Bine", source: "WHO-5 Wellbeing Index (OMS)" },
  { icon: Users, name: "Stiluri Parentale", source: "Baumrind Parenting Styles" },
  { icon: Sparkles, name: "Mindset de Creștere", source: "Dweck Growth Mindset Scale" },
  { icon: Target, name: "Autoeficacitate", source: "Bandura Self-Efficacy Scale" },
  { icon: BookOpen, name: "Stil de Învățare", source: "VARK Learning Styles" },
  { icon: Globe, name: "Sens & Scop", source: "Ikigai Framework" },
];

export function Methodology() {
  return (
    <Section className="bg-white">
      <SectionHeading
        eyebrow="Metodologie"
        title="Construit pe știință, nu pe intuiție"
        subtitle="Testul e construit pe 11 instrumente validate internațional de psihologie, educație și wellbeing, utilizate de universități, clinici și organizații globale."
      />
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {INSTRUMENTS.map((instrument) => (
          <div
            key={instrument.name}
            className="rounded-2xl border border-slate-200 p-5 text-center flex flex-col items-center"
          >
            <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-amber-100 text-amber-600">
              <instrument.icon className="h-6 w-6" strokeWidth={1.75} />
            </div>
            <p className="text-sm font-bold text-slate-900">{instrument.name}</p>
            <p className="mt-1 text-xs text-slate-500">{instrument.source}</p>
          </div>
        ))}
      </div>

      <div className="mt-12 mx-auto max-w-2xl rounded-2xl bg-amber-50 border border-amber-200 p-6 text-center">
        <p className="font-semibold text-slate-900">
          Dacă ai face aceste evaluări separat cu un specialist, costul total ar fi{" "}
          <span className="text-amber-700">500–800€</span>. Tu le primești pe toate, combinate
          într-un singur raport personalizat. Gratuit.
        </p>
      </div>
    </Section>
  );
}
