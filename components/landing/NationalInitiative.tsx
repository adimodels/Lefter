import { Compass, HeartPulse, Users, GraduationCap, TrendingUp, ShieldCheck } from "lucide-react";
import { MoldovaDotMap } from "./MoldovaDotMap";

const STATS = [
  { icon: Compass, title: "Interese vocaționale", sub: "Ce domenii atrag tinerii moldoveni" },
  { icon: HeartPulse, title: "Wellbeing", sub: "Nivelul mediu de stare de bine pe regiuni" },
  { icon: Users, title: "Stiluri parentale", sub: "Stilurile dominante în Moldova" },
  { icon: GraduationCap, title: "Lipsuri în educație", sub: "Principalele lipsuri identificate" },
  { icon: TrendingUp, title: "Tendințe anuale", sub: "Evoluția de la an la an (din 2026)" },
];

export function NationalInitiative() {
  return (
    <section id="statistici" className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="relative overflow-hidden rounded-3xl bg-ink px-7 py-12 sm:px-12">
        <div className="pointer-events-none absolute right-0 top-0 hidden h-full w-1/2 opacity-70 lg:block">
          <MoldovaDotMap className="ml-auto h-full w-auto" />
        </div>
        <div className="pointer-events-none absolute -left-20 bottom-0 h-72 w-72 rounded-full bg-brand/20 blur-3xl" />

        <div className="relative max-w-2xl">
          <h2 className="text-2xl font-bold leading-snug text-white sm:text-[1.7rem]">
            Construim împreună
            <br />
            portretul național al tinerilor și părinților din Moldova
          </h2>
          <p className="mt-4 max-w-xl text-[13px] leading-relaxed text-slate-300">
            Fiecare test completat contribuie, anonim, la cea mai completă statistică națională
            anuală, publicată de Adi Academy. Datele tale rămân private.
          </p>
        </div>

        <dl className="relative mt-12 grid max-w-3xl grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-3 lg:grid-cols-5">
          {STATS.map((stat) => (
            <div key={stat.title}>
              <stat.icon className="h-6 w-6 text-violet-soft" strokeWidth={1.6} />
              <dt className="mt-3 text-[12px] font-bold text-white">{stat.title}</dt>
              <dd className="mt-1 text-[10px] leading-snug text-slate-400">{stat.sub}</dd>
            </div>
          ))}
        </dl>

        <div className="relative mt-10 flex max-w-3xl items-start gap-3 rounded-xl bg-white/[0.07] px-5 py-4 ring-1 ring-white/10">
          <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-violet-soft" strokeWidth={1.7} />
          <p className="text-[12px] leading-relaxed text-slate-200">
            Datele personale rămân private. Ce rămâne în statistică e un număr dintr-un tablou
            național — fără nume, fără identificare.
          </p>
        </div>
      </div>
    </section>
  );
}
