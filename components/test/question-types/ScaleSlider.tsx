import type { ScaleSliderQuestion } from "@/lib/questions/types";

export function ScaleSlider({
  question,
  value,
  onChange,
}: {
  question: ScaleSliderQuestion;
  value: number | undefined;
  onChange: (value: number) => void;
}) {
  const hasValue = typeof value === "number";
  const displayValue = hasValue ? value : Math.round((question.min + question.max) / 2);
  const marks = Array.from(
    { length: question.max - question.min + 1 },
    (_, i) => question.min + i
  );

  return (
    <div className="pt-2">
      <input
        type="range"
        min={question.min}
        max={question.max}
        step={1}
        value={displayValue}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full accent-amber-500"
      />
      <div className="mt-2 flex justify-between text-xs text-slate-400">
        {marks.map((mark) => (
          <span key={mark}>{mark}</span>
        ))}
      </div>
      <div className="mt-4 flex items-center justify-between text-sm text-slate-600">
        <span className="max-w-[45%]">{question.minLabel}</span>
        <span className="max-w-[45%] text-right">{question.maxLabel}</span>
      </div>
      {!hasValue && (
        <p className="mt-4 text-sm text-amber-600">
          Mișcă cursorul pentru a înregistra un răspuns.
        </p>
      )}
    </div>
  );
}
