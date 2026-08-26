import { Star } from "lucide-react";

const TESTIMONIALS = [
  {
    quote: "Raportul m-a ajutat să înțeleg mai bine ce mi se potrivește și ce pași să fac.",
    name: "Andrei",
    role: "19 ani",
  },
  {
    quote: "Ca părinte, am primit claritate și idei practice pentru a-mi susține copilul.",
    name: "Maria",
    role: "mamă",
  },
  {
    quote: "Inițiativa aceasta e exact ce avea nevoie Moldova. Felicitări Adi Academy!",
    name: "Ion",
    role: "42 ani",
  },
];

export function Testimonials() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
      <h2 className="text-center text-2xl font-bold text-ink sm:text-[1.7rem]">
        Ce spun participanții
      </h2>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {TESTIMONIALS.map((item) => (
          <figure key={item.name} className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-900/5">
            <div className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <blockquote className="mt-4 text-[13px] leading-relaxed text-slate-700">
              „{item.quote}”
            </blockquote>
            <figcaption className="mt-5 text-[12px] text-slate-500">
              <span className="font-bold text-ink">{item.name}</span>, {item.role}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
