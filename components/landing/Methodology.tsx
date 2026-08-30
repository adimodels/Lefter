import {
  Compass,
  Star,
  Brain,
  Heart,
  Users,
  Sparkles,
  Target,
  BookOpen,
  Globe,
  ShieldCheck,
  Lock,
  Check,
} from "lucide-react";

const INSTRUMENTS = [
  { icon: Compass, name: "Orientare Vocațională", source: "Holland RIASEC Model" },
  { icon: Star, name: "Forțe de Caracter", source: "VIA Character Strengths Survey" },
  { icon: Brain, name: "Inteligența Emoțională", source: "Goleman EQ Framework" },
  { icon: Heart, name: "Stare de Bine", source: "WHO-5 Wellbeing Index (OMS)" },
  { icon: Users, name: "Stiluri Parentale", source: "Baumrind Parenting Styles" },
  { icon: Sparkles, name: "Mindset de Creștere", source: "Dweck Growth Mindset Scale" },
  { icon: Target, name: "Autoeficacitate", source: "Bandura Self-Efficacy Scale" },
  { icon: BookOpen, name: "Stil de Învățare", source: "VARK Learning Styles" },
  { icon: Globe, name: "Sens & Scop", source: "Ikigai Framework" },
];

const SECURITY = [
  "Datele tale sunt criptate și stocate în siguranță",
  "Nu vom vinde niciodată datele tale",
  "Poți solicita ștergerea datelor oricând",
  "Respectăm legislația din Moldova (Legea nr. 133/2011)",
];

export function Methodology() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-2xl font-bold text-ink sm:text-[1.7rem]">
          Construit pe știință, nu pe intuiție
        </h2>
        <p className="mt-4 text-[13.5px] leading-relaxed text-slate-600">
          Testul e construit pe 11 instrumente validate internațional de psihologie, educație și
          wellbeing, utilizate de universități, clinici și organizații globale.
        </p>
      </div>

      <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3">
        {INSTRUMENTS.map((instrument) => (
          <article
            key={instrument.name}
            className="flex flex-col items-center rounded-2xl bg-white p-5 text-center shadow-sm ring-1 ring-slate-900/5"
          >
            <span className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-brand to-violet">
              <instrument.icon className="h-5 w-5 text-white" strokeWidth={1.8} />
            </span>
            <p className="text-[13px] font-bold leading-snug text-ink">{instrument.name}</p>
            <p className="mt-1 text-[10.5px] leading-snug text-slate-500">{instrument.source}</p>
          </article>
        ))}
      </div>

      <div className="mx-auto mt-10 max-w-3xl rounded-2xl bg-gradient-to-r from-brand to-violet p-6 text-center shadow-lg shadow-brand/20">
        <p className="text-[14px] font-bold leading-relaxed text-white">
          Dacă ai face aceste evaluări separat cu un specialist, costul total ar fi 500–800€. Tu le
          primești pe toate, combinate într-un singur raport personalizat. Gratuit.
        </p>
      </div>

      <div className="relative mt-6 overflow-hidden rounded-2xl bg-gradient-to-br from-indigo-50 to-violet-50 p-7 ring-1 ring-slate-900/5">
        <div className="relative z-10 max-w-2xl">
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-brand to-violet">
              <ShieldCheck className="h-5 w-5 text-white" strokeWidth={1.8} />
            </span>
            <h3 className="text-lg font-bold text-brand">Siguranță și confidențialitate</h3>
          </div>
          <ul className="mt-5 grid gap-3 sm:grid-cols-2">
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
      </div>
    </section>
  );
}
