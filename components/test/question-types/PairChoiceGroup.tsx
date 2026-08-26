import type { PairChoiceGroupQuestion } from "@/lib/questions/types";

export function PairChoiceGroup({
  question,
  value,
  onChange,
}: {
  question: PairChoiceGroupQuestion;
  value: Record<string, string> | undefined;
  onChange: (value: Record<string, string>) => void;
}) {
  const current = value ?? {};

  function select(pairId: string, option: "A" | "B") {
    onChange({ ...current, [pairId]: option });
  }

  return (
    <div className="space-y-5">
      {question.pairs.map((pair) => {
        const picked = current[pair.id];
        return (
          <div key={pair.id}>
            {pair.prompt && <p className="mb-2 text-sm font-medium text-slate-600">{pair.prompt}</p>}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {(["A", "B"] as const).map((option) => {
                const label = option === "A" ? pair.optionA : pair.optionB;
                const selected = picked === option;
                return (
                  <button
                    key={option}
                    type="button"
                    onClick={() => select(pair.id, option)}
                    aria-pressed={selected}
                    className={`rounded-xl border p-4 text-left transition-colors ${
                      selected
                        ? "border-amber-500 bg-amber-50 ring-1 ring-amber-500"
                        : "border-slate-200 bg-white hover:border-slate-300"
                    }`}
                  >
                    <span className="text-slate-800">{label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}
