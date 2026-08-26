export function ProgressBar({
  value,
  label,
}: {
  /** 0–100 */
  value: number;
  label: string;
}) {
  const clamped = Math.max(0, Math.min(100, value));
  return (
    <div>
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm font-medium text-slate-600">{label}</span>
        <span className="text-sm font-medium text-slate-400">{Math.round(clamped)}%</span>
      </div>
      <div className="h-2 w-full rounded-full bg-slate-200 overflow-hidden">
        <div
          className="h-full rounded-full bg-amber-500 transition-all duration-300 ease-out"
          style={{ width: `${clamped}%` }}
        />
      </div>
    </div>
  );
}
