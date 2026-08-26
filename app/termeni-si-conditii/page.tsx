import type { Metadata } from "next";
import { CONTACT_INFO, FREE_REPORTS_LIMIT, SITE_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Termeni și Condiții — Adi Academy",
};

export default function TermsPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-3xl font-bold text-slate-900 mb-2">Termeni și Condiții</h1>
      <p className="text-sm text-slate-500 mb-10">Ultima actualizare: august 2026</p>

      <div className="space-y-8 text-slate-700 leading-relaxed">
        <section>
          <h2 className="text-xl font-bold text-slate-900 mb-2">1. Despre program</h2>
          <p>
            Programul Național de Autoevaluare și Dezvoltare Personală este o inițiativă gratuită a{" "}
            {SITE_NAME}, adresată tinerilor din Moldova (15–25 ani) și părinților acestora. Primele{" "}
            {FREE_REPORTS_LIMIT.toLocaleString("ro-RO")} rapoarte generate sunt complet gratuite.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-900 mb-2">2. Livrarea raportului</h2>
          <p>
            Raportul individual este generat manual de echipa {SITE_NAME}, asistată de inteligență
            artificială, și trimis pe adresa de email furnizată în formular, în maximum 24 de ore de
            la finalizarea testului. Nu se trimit confirmări automate prin SMS sau email — singura
            confirmare imediată este mesajul afișat pe ecran după trimiterea testului.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-900 mb-2">3. Consimțământ minor</h2>
          <p>
            Utilizatorii sub 16 ani pot completa testul doar cu acordul explicit al părintelui sau
            tutorelui legal, exprimat prin bifarea consimțământului dedicat din formular.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-900 mb-2">4. Limita de rapoarte gratuite</h2>
          <p>
            După atingerea numărului de {FREE_REPORTS_LIMIT.toLocaleString("ro-RO")} de rapoarte
            gratuite, formularul de test se dezactivează temporar, iar utilizatorii pot lăsa o adresă
            de email pentru a fi notificați despre viitoarele sesiuni.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-900 mb-2">5. Caracterul testului</h2>
          <p>
            Testul de autoevaluare este un instrument educațional și de dezvoltare personală, nu un
            instrument de diagnostic clinic sau psihologic. Rezultatele au caracter orientativ.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-900 mb-2">6. Contact</h2>
          <p>
            Pentru orice întrebare legată de acești termeni, ne poți scrie la{" "}
            <a href={`mailto:${CONTACT_INFO.email}`} className="text-amber-600 underline">
              {CONTACT_INFO.email}
            </a>
            .
          </p>
        </section>
      </div>
    </article>
  );
}
