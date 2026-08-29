import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Check, User, Users } from "lucide-react";

const CARDS = [
  {
    icon: User,
    title: "Test pentru\nTineri (15–25 ani)",
    href: "/test/tineri",
    cta: "Sunt tânăr și vreau să încep testul",
    surface: "from-sky-50 to-indigo-50",
    accent: "bg-brand",
    panel: "from-brand to-violet",
    button: "bg-brand hover:bg-brand-dark",
    asset: "/tineri-asset.png",
    assetAlt: "Tânăr cu rucsac și laptop",
    assetWidth: 1165,
    assetHeight: 1350,
    points: [
      "39 de întrebări",
      "8 categorii de dezvoltare",
      "Durată: ~15 minute",
      "Raport personalizat în 24h",
    ],
  },
  {
    icon: Users,
    title: "Test pentru\nPărinți",
    href: "/test/parinti",
    cta: "Sunt părinte și vreau să încep testul",
    surface: "from-violet-50 to-fuchsia-50",
    accent: "bg-violet",
    panel: "from-violet to-violet-soft",
    button: "bg-violet hover:bg-violet/90",
    asset: "/parinti-asset.png",
    assetAlt: "Mamă îmbrățișându-și copilul",
    assetWidth: 1180,
    assetHeight: 1333,
    points: [
      "32 de întrebări + profil copil",
      "6 categorii de dezvoltare",
      "Durată: ~15 minute",
      "Raport personalizat în 24h",
    ],
  },
];

export function AudienceCards() {
  return (
    <section className="mx-auto max-w-7xl px-4 pt-10 pb-4 sm:pt-14 sm:px-6 lg:px-8">
      <div className="grid gap-6 lg:grid-cols-2">
        {CARDS.map((card) => (
          <article
            key={card.href}
            className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${card.surface} ring-1 ring-slate-900/5`}
          >
            <div
              aria-hidden
              className={`absolute inset-y-0 right-0 hidden w-[42%] overflow-hidden bg-gradient-to-br ${card.panel} sm:block`}
              style={{ borderRadius: "45% 0 0 45% / 50% 0 0 50%" }}
            >
              <Image
                src={card.asset}
                alt={card.assetAlt}
                width={card.assetWidth}
                height={card.assetHeight}
                sizes="(max-width: 1024px) 30vw, 20vw"
                className="absolute bottom-0 left-1/2 h-full w-auto max-w-none -translate-x-1/2 object-contain object-bottom"
              />
            </div>

            <div className="relative z-10 p-7 sm:max-w-[62%]">
              <div className="flex items-start gap-4">
                <span
                  className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${card.accent}`}
                >
                  <card.icon className="h-6 w-6 text-white" strokeWidth={1.8} />
                </span>
                <h2 className="whitespace-pre-line text-xl font-bold leading-snug text-ink">
                  {card.title}
                </h2>
              </div>

              <ul className="mt-6 space-y-2.5">
                {card.points.map((point) => (
                  <li key={point} className="flex items-center gap-2.5 text-[13px] text-slate-700">
                    <Check className="h-4 w-4 shrink-0 text-brand" strokeWidth={2.5} />
                    {point}
                  </li>
                ))}
              </ul>

              <Link
                href={card.href}
                className={`mt-7 inline-flex items-center gap-2 rounded-lg ${card.button} px-5 py-2.5 text-[13px] font-semibold text-white transition-colors`}
              >
                {card.cta} <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
