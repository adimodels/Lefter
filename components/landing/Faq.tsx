const FAQS = [
  {
    q: "Cât costă testul?",
    a: "Nimic. Primele 5.000 de rapoarte sunt complet gratuite, iar testul nu îți cere date de plată în nicio etapă.",
  },
  {
    q: "Cât durează până primesc raportul?",
    a: "Maximum 24 de ore de la trimiterea testului. Raportul ajunge pe adresa de email pe care o completezi la final — verifică și folderul Spam.",
  },
  {
    q: "Cine poate completa testul?",
    a: "Tinerii între 15 și 25 de ani completează testul pentru Tineri, iar părinții — indiferent de vârstă — pe cel pentru Părinți. Sub 16 ani este nevoie de acordul unui părinte sau tutore legal.",
  },
  {
    q: "Ce se întâmplă cu datele mele?",
    a: "Datele de contact sunt folosite exclusiv pentru livrarea raportului. Răspunsurile intră în statistica națională doar complet anonimizate, fără nume, email sau telefon.",
  },
  {
    q: "Pot să mă opresc și să continui mai târziu?",
    a: "Da. Progresul se salvează automat în browserul tău, așa că poți relua testul de unde ai rămas.",
  },
];

export function Faq() {
  return (
    <section id="intrebari" className="mx-auto max-w-4xl px-4 py-14 sm:px-6 lg:px-8">
      <h2 className="text-center text-2xl font-bold text-ink sm:text-[1.7rem]">
        Întrebări frecvente
      </h2>

      <div className="mt-10 space-y-3">
        {FAQS.map((faq) => (
          <details
            key={faq.q}
            className="group rounded-xl bg-white p-5 shadow-sm ring-1 ring-slate-900/5"
          >
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-[13.5px] font-semibold text-ink">
              {faq.q}
              <span
                aria-hidden
                className="shrink-0 text-xl leading-none text-brand transition-transform group-open:rotate-45"
              >
                +
              </span>
            </summary>
            <p className="mt-3 text-[12.5px] leading-relaxed text-slate-600">{faq.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
