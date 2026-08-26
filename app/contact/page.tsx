import type { Metadata } from "next";
import { CONTACT_INFO, SOCIAL_LINKS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact — Adi Academy",
};

export default function ContactPage() {
  return (
    <article className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 py-16 text-center">
      <h1 className="text-3xl font-bold text-slate-900 mb-4">Contact</h1>
      <p className="text-slate-600 leading-relaxed">
        Ai o întrebare despre program, despre raportul tău sau despre datele tale? Scrie-ne — îți
        răspundem cât mai curând posibil.
      </p>

      <div className="mt-10 space-y-4">
        <a
          href={`mailto:${CONTACT_INFO.email}`}
          className="block text-lg font-semibold text-amber-600 hover:text-amber-700"
        >
          {CONTACT_INFO.email}
        </a>
        <a
          href={`tel:${CONTACT_INFO.phone.replace(/\s/g, "")}`}
          className="block text-lg font-semibold text-slate-700 hover:text-slate-900"
        >
          {CONTACT_INFO.phone}
        </a>
        <a
          href={SOCIAL_LINKS.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="block text-lg font-semibold text-slate-700 hover:text-slate-900"
        >
          Instagram — @AdiAcademy
        </a>
      </div>
    </article>
  );
}
