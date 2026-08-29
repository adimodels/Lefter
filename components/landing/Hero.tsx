import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Gift, Clock, ShieldCheck } from "lucide-react";

const TRUST = [
  { icon: Gift, title: "100% Gratuit", sub: "Primele 5.000 de rapoarte" },
  { icon: Clock, title: "24h", sub: "Primești raportul pe email" },
  { icon: ShieldCheck, title: "Confidențial & Sigur", sub: "Datele tale sunt protejate" },
];

// Umbră de text mai puternică decât utilitarele standard `drop-shadow-*` ale
// Tailwind — necesară fiindcă fotografia de fundal are zone foarte deschise
// (apusul) fără niciun voal peste ea.
const TEXT_SHADOW = "drop-shadow-[0_2px_10px_rgba(0,0,0,0.7)]";

export function Hero() {
  return (
    <section className="relative isolate h-[50vh] min-h-[560px] overflow-hidden bg-ink">
      {/* Fotografie panoramică (~2.5:1) — la lățime completă, object-cover
          decupează foarte puțin din cadru, deci nu mai e nevoie de trucul
          cu blur/letterbox folosit pentru versiunea anterioară, mai îngustă. */}
      <Image
        src="/hero-bg.png"
        alt=""
        aria-hidden
        fill
        priority
        unoptimized
        sizes="100vw"
        className="-z-20 object-cover object-center"
      />

      <div className="absolute inset-0 mx-auto grid max-w-7xl items-center gap-8 px-4 sm:px-6 lg:grid-cols-[1.15fr_1fr] lg:gap-10 lg:px-8">
        <div>
          <h1
            className={`text-[1.9rem] font-extrabold leading-[1.12] tracking-tight text-white sm:text-4xl lg:text-[2.6rem] xl:text-[2.9rem] ${TEXT_SHADOW}`}
          >
            Descoperă cine ești.
            <br />
            <span className="text-sky-300">Construiește-ți viitorul.</span>
          </h1>

          <p
            className={`mt-4 max-w-lg text-[13.5px] leading-relaxed text-white sm:text-[15px] ${TEXT_SHADOW}`}
          >
            Completează testul de autoevaluare și primește în 24 de ore un raport personalizat
            generat de AI — cu talente, recomandări de cărți, obiceiuri, cursuri și direcții de
            dezvoltare.
          </p>

          <dl className="mt-5 hidden flex-wrap gap-x-8 gap-y-3 sm:flex">
            {TRUST.map((item) => (
              <div key={item.title} className={`flex items-start gap-2.5 ${TEXT_SHADOW}`}>
                <item.icon className="mt-0.5 h-5 w-5 shrink-0 text-sky-300" strokeWidth={1.7} />
                <div>
                  <dt className="text-[13px] font-bold text-white">{item.title}</dt>
                  <dd className="text-[11px] leading-tight text-white/90">{item.sub}</dd>
                </div>
              </div>
            ))}
          </dl>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/test/tineri"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-brand to-violet px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-brand/30 transition-opacity hover:opacity-90"
            >
              Începe testul acum <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href="#initiativa"
              className="inline-flex items-center justify-center rounded-xl bg-white px-6 py-3 text-sm font-semibold text-ink shadow-lg transition-colors hover:bg-slate-100"
            >
              Află mai multe
            </a>
          </div>
        </div>

        {/* Imaginea include deja cardul „AI Report Personalizat" și grafica de fundal. */}
        <Image
          src="/hero-tineri.png"
          alt="Doi tineri cu raportul personalizat generat de AI, oferit de Adi Academy"
          width={1437}
          height={1094}
          priority
          quality={100}
          sizes="(max-width: 1024px) 40vh, 50vw"
          className="mx-auto hidden h-full w-auto object-contain drop-shadow-2xl lg:block"
        />
      </div>
    </section>
  );
}
