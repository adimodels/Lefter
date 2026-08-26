import { ConsentCheckbox } from "@/components/ui/Checkbox";
import type { ContactInfo, Consents } from "@/lib/validation";

export type PartialContact = Partial<ContactInfo>;

export function ContactConsentStep({
  isMinor,
  contact,
  onContactChange,
  phoneLocalPart,
  onPhoneLocalPartChange,
  consents,
  onConsentsChange,
}: {
  isMinor: boolean;
  contact: PartialContact;
  onContactChange: (value: PartialContact) => void;
  phoneLocalPart: string;
  onPhoneLocalPartChange: (value: string) => void;
  consents: Consents;
  onConsentsChange: (value: Consents) => void;
}) {
  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="firstName" className="block text-sm font-medium text-slate-700 mb-2">
            Prenume
          </label>
          <input
            id="firstName"
            type="text"
            value={contact.firstName ?? ""}
            onChange={(e) => onContactChange({ ...contact, firstName: e.target.value })}
            className="w-full rounded-xl border border-slate-300 px-4 py-3 text-slate-900 focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500"
          />
        </div>
        <div>
          <label htmlFor="lastName" className="block text-sm font-medium text-slate-700 mb-2">
            Nume
          </label>
          <input
            id="lastName"
            type="text"
            value={contact.lastName ?? ""}
            onChange={(e) => onContactChange({ ...contact, lastName: e.target.value })}
            className="w-full rounded-xl border border-slate-300 px-4 py-3 text-slate-900 focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500"
          />
        </div>
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
          Email
        </label>
        <input
          id="email"
          type="email"
          value={contact.email ?? ""}
          onChange={(e) => onContactChange({ ...contact, email: e.target.value })}
          className="w-full rounded-xl border border-slate-300 px-4 py-3 text-slate-900 focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500"
        />
        <p className="mt-1 text-xs text-slate-400">Aici vei primi raportul, în maxim 24 de ore.</p>
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">
          Telefon
        </label>
        <div className="flex">
          <span className="inline-flex items-center rounded-l-xl border border-r-0 border-slate-300 bg-slate-50 px-4 text-slate-500">
            +373
          </span>
          <input
            id="phone"
            type="tel"
            inputMode="numeric"
            maxLength={8}
            value={phoneLocalPart}
            onChange={(e) => onPhoneLocalPartChange(e.target.value.replace(/\D/g, "").slice(0, 8))}
            placeholder="XXXXXXXX"
            className="w-full rounded-r-xl border border-slate-300 px-4 py-3 text-slate-900 focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500"
          />
        </div>
      </div>

      <div className="space-y-3 pt-2">
        <ConsentCheckbox
          id="consent-data-processing"
          checked={consents.dataProcessing}
          onChange={(checked) => onConsentsChange({ ...consents, dataProcessing: checked })}
          required
        >
          Am citit și înțeleg că: răspunsurile mele vor fi folosite pentru generarea raportului meu
          individual de autoevaluare; datele mele (prenume, email, telefon) vor fi stocate securizat
          și folosite exclusiv pentru livrarea raportului și comunicări legate de acest program; sunt
          de acord cu prelucrarea datelor mele cu caracter personal în scopurile descrise mai sus,
          conform Legii nr. 133/2011 privind protecția datelor cu caracter personal și actelor
          normative în vigoare.
        </ConsentCheckbox>

        <ConsentCheckbox
          id="consent-statistics"
          checked={consents.statistics}
          onChange={(checked) => onConsentsChange({ ...consents, statistics: checked })}
          required
        >
          Sunt de acord ca răspunsurile mele, în formă complet anonimizată (fără nicio informație de
          identificare), să fie incluse în Statistica Națională Anuală a Tinerilor și Părinților din
          Moldova, publicată de Adi Academy.
        </ConsentCheckbox>

        <ConsentCheckbox
          id="consent-marketing"
          checked={consents.marketingOptIn}
          onChange={(checked) => onConsentsChange({ ...consents, marketingOptIn: checked })}
        >
          Doresc să primesc pe email și telefon informații despre inițiative educaționale similare,
          resurse de dezvoltare personală și noutăți de la Adi Academy. Pot retrage acest
          consimțământ oricând.
        </ConsentCheckbox>

        {isMinor && (
          <ConsentCheckbox
            id="consent-parental"
            checked={consents.parentalConsent}
            onChange={(checked) => onConsentsChange({ ...consents, parentalConsent: checked })}
            required
          >
            Confirm că sunt părintele sau tutorele legal al acestei persoane și îmi exprim acordul
            explicit pentru colectarea și prelucrarea datelor sale cu caracter personal conform
            termenilor descriși mai sus.
          </ConsentCheckbox>
        )}
      </div>
    </div>
  );
}

export function isContactComplete(contact: PartialContact): contact is ContactInfo {
  return (
    !!contact.firstName?.trim() &&
    !!contact.lastName?.trim() &&
    !!contact.email?.trim() &&
    /^\+373\d{8}$/.test(contact.phone ?? "")
  );
}
