import { AudienceCtaPair } from "./AudienceCtaPair";

export function FinalCta() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="relative overflow-hidden rounded-3xl bg-ink px-7 py-14 text-center sm:px-12">
        <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-violet/25 blur-3xl" />
        <div className="pointer-events-none absolute -left-16 -bottom-16 h-64 w-64 rounded-full bg-brand/25 blur-3xl" />

        <div className="relative">
          <h2 className="text-2xl font-bold text-white sm:text-[1.9rem]">Raportul tău e gratuit.</h2>
          <p className="mt-3 text-[14px] text-slate-300 sm:text-[15px]">
            Durează 15 minute. Rezultatul durează o viață.
          </p>

          <AudienceCtaPair className="mt-8 justify-center" />
        </div>
      </div>
    </section>
  );
}
