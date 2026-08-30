import Link from "next/link";

// Briful cere două butoane CTA „vizual egale", identice în Hero și în CTA-ul
// final — de aceea trăiesc într-o singură componentă, nu duplicate în ambele.
export function AudienceCtaPair({ className = "" }: { className?: string }) {
  return (
    <div className={`flex flex-col gap-3 sm:flex-row ${className}`}>
      <Link
        href="/test/tineri"
        className="inline-flex items-center justify-center rounded-xl bg-brand px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-brand/30 transition-colors hover:bg-brand-dark"
      >
        Sunt tânăr (15–25)
      </Link>
      <Link
        href="/test/parinti"
        className="inline-flex items-center justify-center rounded-xl bg-violet px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-violet/30 transition-opacity hover:opacity-90"
      >
        Sunt părinte
      </Link>
    </div>
  );
}
