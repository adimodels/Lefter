import { UserCircle, Award, Compass, BookOpen, ListChecks, Zap } from "lucide-react";

const CARDS = [
  {
    icon: UserCircle,
    accent: "bg-brand",
    title: "Profilul tău",
    description: "Cine ești, cum funcționezi, ce te energizează.",
  },
  {
    icon: Award,
    accent: "bg-violet",
    title: "Forțele tale",
    description: "Talentele și valorile de caracter dominante.",
  },
  {
    icon: Compass,
    accent: "bg-sky-500",
    title: "Direcția ta",
    description: "3–5 direcții de carieră potrivite profilului tău.",
  },
  {
    icon: BookOpen,
    accent: "bg-emerald-600",
    title: "Cărți recomandate",
    description: "3 cărți alese specific pentru profilul tău.",
  },
  {
    icon: ListChecks,
    accent: "bg-amber-500",
    title: "Obiceiuri",
    description: "3 obiceiuri concrete, simple, adaptate stilului tău de viață.",
  },
  {
    icon: Zap,
    accent: "bg-pink-500",
    title: "Cursuri potrivite",
    description: "Ce tip de programe ar accelera cel mai mult creșterea ta.",
  },
];

export function ReportContents() {
  return (
    <section className="bg-slate-50/70 py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-2xl font-bold text-ink sm:text-[1.7rem]">
          Ce conține raportul
        </h2>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {CARDS.map((card) => (
            <article
              key={card.title}
              className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-900/5"
            >
              <span
                className={`flex h-11 w-11 items-center justify-center rounded-xl ${card.accent}`}
              >
                <card.icon className="h-5 w-5 text-white" strokeWidth={1.8} />
              </span>
              <h3 className="mt-5 text-[15px] font-bold text-ink">{card.title}</h3>
              <p className="mt-2 text-[12.5px] leading-relaxed text-slate-600">{card.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
