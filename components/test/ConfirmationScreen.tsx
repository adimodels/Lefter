import { ButtonLink } from "@/components/ui/Button";
import { SOCIAL_LINKS } from "@/lib/constants";

export function ConfirmationScreen({ firstName, email }: { firstName: string; email: string }) {
  return (
    <div className="text-center py-12">
      <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-indigo-100">
        <svg viewBox="0 0 24 24" fill="none" className="h-8 w-8 text-brand">
          <path
            d="M5 13l4 4L19 7"
            stroke="currentColor"
            strokeWidth={2.5}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <h2 className="text-2xl font-bold text-slate-900">Mulțumim, {firstName}!</h2>
      <p className="mt-4 max-w-md mx-auto text-slate-600 leading-relaxed">
        Testul tău a fost primit. Raportul tău personalizat e în procesare și îl vei primi pe{" "}
        <span className="font-medium text-slate-800">{email}</span> în maxim 24 de ore. Verifică și
        folderul Spam când apare.
      </p>
      <div className="mt-8">
        <ButtonLink href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer">
          Urmărește-ne pe Instagram →
        </ButtonLink>
      </div>
    </div>
  );
}
