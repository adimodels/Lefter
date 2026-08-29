import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Gift, Clock, ShieldCheck } from "lucide-react";
import { MoldovaFlag } from "./MoldovaFlag";

const TRUST = [
  { icon: Gift, title: "100% Gratuit", sub: "Primele 5.000 de rapoarte" },
  { icon: Clock, title: "24h", sub: "Primești raportul pe email" },
  { icon: ShieldCheck, title: "Confidențial & Sigur", sub: "Datele tale sunt protejate" },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-indigo-50/40 to-white">
      <div className="pointer-events-none absolute -left-40 top-10 h-96 w-96 rounded-full bg-brand/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-0 h-96 w-96 rounded-full bg-violet/10 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1.15fr_1fr] lg:gap-10 lg:px-8 lg:py-20">
        <div>
          <span className="inline-flex items-center gap-2 rounded-md bg-brand/10 px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider text-brand">
            Inițiativă Națională Gratuită
            <MoldovaFlag className="h-3 w-[18px] rounded-[2px]" />
          </span>

          <h1 className="mt-6 text-[2.1rem] font-extrabold leading-[1.12] tracking-tight text-ink sm:text-5xl lg:text-[2.9rem] xl:text-[3.25rem]">
            Descoperă cine ești.
            <br />
            <span className="text-brand">Construiește-ți viitorul.</span>
          </h1>

          <p className="mt-6 max-w-lg text-[15px] leading-relaxed text-slate-600">
            Completează testul de autoevaluare și primește în 24 de ore un raport personalizat
            generat de AI — cu talente, recomandări de cărți, obiceiuri, cursuri și direcții de
            dezvoltare.
          </p>

          <dl className="mt-8 flex flex-wrap gap-x-8 gap-y-4">
            {TRUST.map((item) => (
              <div key={item.title} className="flex items-start gap-2.5">
                <item.icon className="mt-0.5 h-5 w-5 shrink-0 text-brand" strokeWidth={1.7} />
                <div>
                  <dt className="text-[13px] font-bold text-ink">{item.title}</dt>
                  <dd className="text-[11px] leading-tight text-slate-500">{item.sub}</dd>
                </div>
              </div>
            ))}
          </dl>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/test/tineri"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-brand to-violet px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-brand/25 transition-opacity hover:opacity-90"
            >
              Începe testul acum <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href="#initiativa"
              className="inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white px-7 py-3.5 text-sm font-semibold text-ink transition-colors hover:bg-slate-50"
            >
              Află mai multe
            </a>
          </div>

          <div className="mt-9 flex items-center gap-3">
            <div className="flex -space-x-2">
              {["from-brand to-violet", "from-violet to-violet-soft", "from-sky-400 to-brand"].map(
                (g, i) => (
                  <span
                    key={i}
                    className={`h-8 w-8 rounded-full bg-gradient-to-br ${g} ring-2 ring-white`}
                  />
                )
              )}
            </div>
            <p className="text-[12px] leading-snug text-slate-500">
              Alătură-te miilor de tineri și părinți din Moldova
              <br />
              care investesc în dezvoltarea personală.
            </p>
          </div>
        </div>

        {/* Imaginea include deja cardul „AI Report Personalizat" și grafica de fundal. */}
        <Image
          src="/hero-tineri.png"
          alt="Doi tineri cu raportul personalizat generat de AI, oferit de Adi Academy"
          width={1437}
          height={1094}
          priority
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="mx-auto h-auto w-full max-w-[620px]"
        />
      </div>
    </section>
  );
}
