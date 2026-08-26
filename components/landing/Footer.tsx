import Link from "next/link";
import { CONTACT_INFO, SITE_NAME, SOCIAL_LINKS } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="bg-white border-t border-slate-200">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col sm:flex-row justify-between gap-8">
          <div>
            <p className="text-lg font-bold text-slate-900">{SITE_NAME}</p>
            <p className="mt-1 text-sm text-slate-500 max-w-xs">
              O generație de succes ce va mișca Moldova.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-8 text-sm">
            <div className="flex flex-col gap-2">
              <Link href="/politica-de-confidentialitate" className="text-slate-600 hover:text-slate-900">
                Politica de Confidențialitate
              </Link>
              <Link href="/termeni-si-conditii" className="text-slate-600 hover:text-slate-900">
                Termeni și Condiții
              </Link>
              <Link href="/contact" className="text-slate-600 hover:text-slate-900">
                Contact
              </Link>
            </div>
            <div className="flex flex-col gap-2">
              <a href={`mailto:${CONTACT_INFO.email}`} className="text-slate-600 hover:text-slate-900">
                {CONTACT_INFO.email}
              </a>
              <a
                href={SOCIAL_LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-600 hover:text-slate-900"
              >
                Instagram
              </a>
            </div>
          </div>
        </div>

        <p className="mt-10 text-xs text-slate-400 max-w-2xl">
          Date protejate conform legislației moldovenești în vigoare (Legea nr. 133/2011,
          actualizată 2026).
        </p>
      </div>
    </footer>
  );
}
