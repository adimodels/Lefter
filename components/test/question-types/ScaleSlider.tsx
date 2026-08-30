import type { ScaleSliderQuestion } from "@/lib/questions/types";

/**
 * Scală cu butoane, nu slider tras cu mouse-ul.
 *
 * Un `<input type="range">` pornește vizual pe o valoare pe care nu a ales-o
 * nimeni: dacă răspunsul real e chiar acela, utilizatorul nu are ce mișca, iar
 * răspunsul nu se înregistrează niciodată. În plus, tragerea e imprecisă pe
 * telefon, unde vine majoritatea traficului. Butoanele rezolvă ambele: fiecare
 * treaptă e o țintă clară, iar starea „neatins" e vizibil diferită de orice
 * alegere.
 */
export function ScaleSlider({
  question,
  value,
  onChange,
}: {
  question: ScaleSliderQuestion;
  value: number | undefined;
  onChange: (value: number) => void;
}) {
  const steps = Array.from(
    { length: question.max - question.min + 1 },
    (_, i) => question.min + i
  );

  return (
    <div className="pt-2">
      <div role="radiogroup" aria-label={question.prompt} className="flex flex-wrap gap-2">
        {steps.map((step) => {
          const selected = value === step;
          return (
            <button
              key={step}
              type="button"
              role="radio"
              aria-checked={selected}
              onClick={() => onChange(step)}
              className={`h-12 flex-1 min-w-12 rounded-xl border text-base font-semibold transition-colors ${
                selected
                  ? "border-brand bg-brand text-white ring-1 ring-brand"
                  : "border-slate-200 bg-white text-slate-600 hover:border-brand hover:text-brand"
              }`}
            >
              {step}
            </button>
          );
        })}
      </div>

      <div className="mt-3 flex items-start justify-between gap-4 text-xs text-slate-500">
        <span className="max-w-[45%]">{question.minLabel}</span>
        <span className="max-w-[45%] text-right">{question.maxLabel}</span>
      </div>
    </div>
  );
}
