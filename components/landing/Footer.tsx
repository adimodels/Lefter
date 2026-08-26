import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import { CONTACT_INFO, SOCIAL_LINKS } from "@/lib/constants";
import { Logo } from "./Logo";
import { NewsletterForm } from "./NewsletterForm";
import {
  FacebookIcon,
  InstagramIcon,
  YoutubeIcon,
  TiktokIcon,
  LinkedinIcon,
} from "./BrandIcons";

const COLUMNS = [
  {
    title: "Inițiativa Națională",
    links: [
      { label: "Despre inițiativă", href: "/#initiativa" },
      { label: "Cum funcționează", href: "/#cum-functioneaza" },
      { label: "Statistici Naționale", href: "/#statistici" },
      { label: "Întrebări frecvente", href: "/#intrebari" },
      { label: "Termeni și condiții", href: "/termeni-si-conditii" },
      { label: "Confidențialitate", href: "/politica-de-confidentialitate" },
    ],
  },
  {
    title: "Despre Adi Academy",
    links: [
      { label: "Cursurile noastre", href: "/#despre" },
      { label: "Despre noi", href: "/#despre" },
      { label: "Contact", href: "/contact" },
    ],
  },
];

// PLACEHOLDER — toate trimit deocamdată la Instagram, singurul link social
// confirmat de Adi Academy. De înlocuit când primim celelalte conturi.
const SOCIALS = [
  { icon: FacebookIcon, label: "Facebook", href: SOCIAL_LINKS.instagram },
  { icon: InstagramIcon, label: "Instagram", href: SOCIAL_LINKS.instagram },
  { icon: YoutubeIcon, label: "YouTube", href: SOCIAL_LINKS.instagram },
  { icon: TiktokIcon, label: "TikTok", href: SOCIAL_LINKS.instagram },
  { icon: LinkedinIcon, label: "LinkedIn", href: SOCIAL_LINKS.instagram },
];

export function Footer() {
  return (
    <footer className="bg-ink">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-4">
          <div>
            <Logo />
            <p className="mt-5 max-w-xs text-[12px] leading-relaxed text-slate-400">
              Mai mult decât o școală — un mediu în care tinerii din Moldova descoperă cine sunt și
              ce pot face.
            </p>
            <div className="mt-6 flex gap-2">
              {SOCIALS.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/[0.07] text-slate-300 transition-colors hover:bg-white/15 hover:text-white"
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {COLUMNS.map((column) => (
            <div key={column.title}>
              <h3 className="text-[13px] font-bold text-white">{column.title}</h3>
              <ul className="mt-5 space-y-2.5">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-[12px] text-slate-400 transition-colors hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h3 className="text-[13px] font-bold text-white">Contact</h3>
            <ul className="mt-5 space-y-2.5 text-[12px] text-slate-400">
              <li className="flex items-center gap-2">
                <Phone className="h-3.5 w-3.5 shrink-0" strokeWidth={1.7} />
                {CONTACT_INFO.phone}
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-3.5 w-3.5 shrink-0" strokeWidth={1.7} />
                {CONTACT_INFO.email}
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-3.5 w-3.5 shrink-0" strokeWidth={1.7} />
                Chișinău, Moldova
              </li>
            </ul>

            <h3 className="mt-7 text-[13px] font-bold text-white">Abonează-te la noutăți</h3>
            <div className="mt-4">
              <NewsletterForm />
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-5 text-[11px] text-slate-500 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <p>© 2026 Adi Academy. Toate drepturile rezervate.</p>
          <p>Inițiativa Națională · Lansare 1 Septembrie 2026</p>
        </div>
      </div>
    </footer>
  );
}
