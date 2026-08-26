import type { Metadata } from "next";
import { CONTACT_INFO, LEGAL_INFO, SITE_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Politica de Confidențialitate — Adi Academy",
};

export default function PrivacyPolicyPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16 prose-slate">
      <h1 className="text-3xl font-bold text-slate-900 mb-2">Politica de Confidențialitate</h1>
      <p className="text-sm text-slate-500 mb-10">Ultima actualizare: august 2026</p>

      <div className="space-y-8 text-slate-700 leading-relaxed">
        <section>
          <h2 className="text-xl font-bold text-slate-900 mb-2">1. Cine este operatorul de date</h2>
          <p>
            Operatorul de date cu caracter personal este <strong>{LEGAL_INFO.operatorName}</strong>{" "}
            ({SITE_NAME}), în calitate de organizator al Programului Național de Autoevaluare și
            Dezvoltare Personală. Pentru orice întrebare legată de datele tale, ne poți scrie la{" "}
            <a href={`mailto:${CONTACT_INFO.email}`} className="text-brand underline">
              {CONTACT_INFO.email}
            </a>
            .
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-900 mb-2">2. Ce date colectăm</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>Date de identificare și contact: prenume, nume, email, telefon.</li>
            <li>Date demografice: vârstă, gen, mediu de viață, județ/raion.</li>
            <li>Răspunsurile tale la testul de autoevaluare.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-900 mb-2">3. De ce colectăm aceste date</h2>
          <p>
            Datele de contact sunt folosite exclusiv pentru generarea și livrarea raportului tău
            individual de autoevaluare și pentru comunicări legate de acest program. Răspunsurile
            tale, în formă complet anonimizată, sunt incluse în Statistica Națională Anuală a
            Tinerilor și Părinților din Moldova, publicată de {SITE_NAME}, doar dacă ți-ai dat acordul
            explicit pentru acest lucru.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-900 mb-2">4. Separarea datelor</h2>
          <p>
            Datele tale de contact (nume, email, telefon) sunt stocate separat de răspunsurile
            anonimizate folosite pentru statistică. Legătura dintre cele două seturi de date este un
            identificator intern, nu informații de identificare.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-900 mb-2">5. Cât timp păstrăm datele</h2>
          <p>
            Datele tale cu caracter personal sunt păstrate pentru o perioadă de maximum{" "}
            {LEGAL_INFO.dataRetentionYears} ani, după care sunt anonimizate complet sau șterse.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-900 mb-2">6. Drepturile tale</h2>
          <p>
            Ai dreptul de acces, rectificare, ștergere și opoziție cu privire la datele tale cu
            caracter personal, conform Legii nr. 133/2011 privind protecția datelor cu caracter
            personal. Pentru a solicita ștergerea datelor tale, scrie-ne la{" "}
            <a href={`mailto:${CONTACT_INFO.email}`} className="text-brand underline">
              {CONTACT_INFO.email}
            </a>
            . Vei primi o confirmare, iar datele vor fi șterse în maximum{" "}
            {LEGAL_INFO.deletionRequestDays} zile lucrătoare.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-900 mb-2">7. Opt-in marketing</h2>
          <p>
            Dacă ai bifat consimțământul pentru comunicări de marketing, poți retrage acest acord
            oricând, printr-un link de dezabonare inclus în fiecare comunicare sau printr-un email
            către adresa de contact de mai sus.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-900 mb-2">8. Securitate</h2>
          <p>
            Toate datele sunt transmise printr-o conexiune securizată (HTTPS) și stocate într-o bază
            de date cu acces restricționat echipei {SITE_NAME}.
          </p>
        </section>
      </div>
    </article>
  );
}
