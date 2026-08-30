import Image from "next/image";
import { Gift, Clock, ShieldCheck } from "lucide-react";
import { AudienceCtaPair } from "./AudienceCtaPair";

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
      {/* Două cadraje ale aceleiași fotografii: panoramic pe desktop, vertical
          pe telefon — pe ecran îngust, cadrul panoramic ar fi decupat atât de
          agresiv încât s-ar pierde și apusul, și orașul. */}
      <Image
        src="/hero-bg-mobile.png"
        alt=""
        aria-hidden
        fill
        priority
        unoptimized
        sizes="100vw"
        className="-z-20 object-cover object-center lg:hidden"
      />
      <Image
        src="/hero-bg.png"
        alt=""
        aria-hidden
        fill
        priority
        unoptimized
        sizes="100vw"
        className="-z-20 hidden object-cover object-center lg:block"
      />

      <div className="absolute inset-0 mx-auto grid max-w-7xl items-center gap-8 px-4 sm:px-6 lg:grid-cols-[1.15fr_1fr] lg:gap-10 lg:px-8">
        <div>
          <h1
            className={`text-[1.7rem] font-extrabold leading-[1.14] tracking-tight text-white sm:text-[2rem] lg:text-[2.2rem] xl:text-[2.5rem] ${TEXT_SHADOW}`}
          >
            Program Național de Dezvoltare
            <br />
            și Autoevaluare
          </h1>

          {/* Alb, nu bleu: sloganul cade peste zona portocalie a apusului,
              unde un albastru deschis ar avea contrast prea slab. */}
          <p className={`mt-3 text-lg font-bold text-white sm:text-xl ${TEXT_SHADOW}`}>
            Descoperă-te. Gratuit. Acum.
          </p>

          <p
            className={`mt-5 max-w-xl text-[14px] leading-relaxed text-white sm:text-[15.5px] ${TEXT_SHADOW}`}
          >
            Completează testul de autoevaluare și primești în 24 de ore raportul tău personal —
            talente, direcție, recomandări concrete.
          </p>

          <dl className="mt-6 hidden flex-wrap gap-x-8 gap-y-3 sm:flex">
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

          <AudienceCtaPair className="mt-7" />
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
