import type { MultiSelectMaxQuestion } from "@/lib/questions/types";

export function MultiSelectMax({
  question,
  value,
  onChange,
}: {
  question: MultiSelectMaxQuestion;
  value: string[] | undefined;
  onChange: (value: string[]) => void;
}) {
  const selected = value ?? [];
  const limitReached = selected.length >= question.max;

  function toggle(optionValue: string) {
    if (selected.includes(optionValue)) {
      onChange(selected.filter((v) => v !== optionValue));
    } else if (!limitReached) {
      onChange([...selected, optionValue]);
    }
  }

  return (
    <div>
      <p className="mb-3 text-sm font-medium text-slate-500">
        {selected.length}/{question.max} selectate
      </p>
      <div className="space-y-3">
        {question.options.map((option) => {
          const isSelected = selected.includes(option.value);
          const disabled = !isSelected && limitReached;
          return (
            <button
              key={option.value}
              type="button"
              disabled={disabled}
              onClick={() => toggle(option.value)}
              aria-pressed={isSelected}
              className={`w-full flex items-center gap-4 rounded-xl border p-4 text-left transition-colors ${
                isSelected
                  ? "border-amber-500 bg-amber-50 ring-1 ring-amber-500"
                  : disabled
                    ? "border-slate-100 bg-slate-50 text-slate-400 cursor-not-allowed"
                    : "border-slate-200 bg-white hover:border-slate-300"
              }`}
            >
              <span
                className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-md border-2 ${
                  isSelected ? "border-amber-500 bg-amber-500" : "border-slate-300 bg-white"
                }`}
              >
                {isSelected && (
                  <svg viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4 text-slate-900">
                    <path
                      fillRule="evenodd"
                      d="M16.7 5.3a1 1 0 010 1.4l-7.4 7.4a1 1 0 01-1.4 0L3.3 9.5a1 1 0 111.4-1.4l3.6 3.6 6.7-6.7a1 1 0 011.4 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
              </span>
              <span className="text-slate-800 leading-relaxed">{option.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
