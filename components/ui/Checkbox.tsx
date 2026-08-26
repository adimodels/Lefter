import type { ReactNode } from "react";

export function ConsentCheckbox({
  id,
  checked,
  onChange,
  children,
  required,
}: {
  id: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  children: ReactNode;
  required?: boolean;
}) {
  return (
    <label
      htmlFor={id}
      className="flex items-start gap-3 rounded-xl border border-slate-200 bg-white p-4 cursor-pointer hover:border-slate-300"
    >
      <input
        id={id}
        type="checkbox"
        checked={checked}
        required={required}
        onChange={(e) => onChange(e.target.checked)}
        className="mt-1 h-5 w-5 shrink-0 rounded border-slate-300 text-amber-500 focus:ring-amber-500"
      />
      <span className="text-sm leading-relaxed text-slate-700">{children}</span>
    </label>
  );
}
