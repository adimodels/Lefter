import type { ChoiceOption } from "@/lib/questions/types";

/**
 * Alegere prin numerotare manuală (variantă la drag-and-drop): utilizatorul
 * atinge itemii în ordinea dorită și primesc automat rangul 1, 2, 3...
 * Folosit atât pentru ranking complet (toate itemii), cât și pentru "alege
 * primele N, în ordine" (target < items.length).
 */
export function OrderedPicker({
  items,
  value,
  onChange,
  target,
  helperText,
}: {
  items: ChoiceOption[];
  value: string[] | undefined;
  onChange: (value: string[]) => void;
  target: number;
  helperText?: string;
}) {
  const order = value ?? [];

  function toggle(itemValue: string) {
    if (order.includes(itemValue)) {
      onChange(order.filter((v) => v !== itemValue));
    } else if (order.length < target) {
      onChange([...order, itemValue]);
    }
  }

  return (
    <div>
      <div className="mb-3 flex items-center justify-between">
        <p className="text-sm font-medium text-slate-500">
          {helperText ?? `Alege ${target}, în ordine (1 = prima alegere)`}
        </p>
        {order.length > 0 && (
          <button
            type="button"
            onClick={() => onChange([])}
            className="text-sm font-medium text-slate-400 hover:text-slate-600"
          >
            Resetează
          </button>
        )}
      </div>
      <div className="space-y-3">
        {items.map((item) => {
          const rank = order.indexOf(item.value);
          const isRanked = rank !== -1;
          const disabled = !isRanked && order.length >= target;
          return (
            <button
              key={item.value}
              type="button"
              disabled={disabled}
              onClick={() => toggle(item.value)}
              aria-pressed={isRanked}
              className={`w-full flex items-center gap-4 rounded-xl border p-4 text-left transition-colors ${
                isRanked
                  ? "border-brand bg-indigo-50 ring-1 ring-brand"
                  : disabled
                    ? "border-slate-100 bg-slate-50 text-slate-400 cursor-not-allowed"
                    : "border-slate-200 bg-white hover:border-slate-300"
              }`}
            >
              <span
                className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-sm font-semibold ${
                  isRanked ? "bg-brand text-white" : "bg-slate-100 text-slate-400"
                }`}
              >
                {isRanked ? rank + 1 : ""}
              </span>
              <span className="text-slate-800 leading-relaxed">{item.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
