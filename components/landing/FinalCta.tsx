import { AudienceCtaButtons } from "./AudienceCtaButtons";

export function FinalCta() {
  return (
    <section className="bg-slate-950 text-white">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-20 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold">Raportul tău e gratuit.</h2>
        <p className="mt-4 text-lg text-slate-300">
          Durează 15 minute. Rezultatul durează o viață.
        </p>
        <div className="mt-10 flex justify-center">
          <AudienceCtaButtons />
        </div>
      </div>
    </section>
  );
}
