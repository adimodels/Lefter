import type { SingleChoiceQuestion } from "@/lib/questions/types";

export function SingleChoice({
  question,
  value,
  onChange,
}: {
  question: SingleChoiceQuestion;
  value: string | undefined;
  onChange: (value: string) => void;
}) {
  return (
    <div className="space-y-3">
      {question.options.map((option) => {
        const selected = value === option.value;
        return (
          <button
            key={option.value}
            type="button"
            onClick={() => onChange(option.value)}
            aria-pressed={selected}
            className={`w-full flex items-start gap-4 rounded-xl border p-4 text-left transition-colors ${
              selected
                ? "border-brand bg-indigo-50 ring-1 ring-brand"
                : "border-slate-200 bg-white hover:border-slate-300"
            }`}
          >
            <span
              className={`mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-sm font-semibold ${
                selected ? "bg-brand text-white" : "bg-slate-100 text-slate-500"
              }`}
            >
              {option.value}
            </span>
            <span className="text-slate-800 leading-relaxed">{option.label}</span>
          </button>
        );
      })}
    </div>
  );
}
