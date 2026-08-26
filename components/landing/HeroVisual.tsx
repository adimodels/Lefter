import { BarChart3, Star, Brain, Target, TrendingUp, Compass, Sparkles } from "lucide-react";

const CLUSTER = [
  { icon: Brain, label: "Profil" },
  { icon: Target, label: "Direcție" },
  { icon: TrendingUp, label: "Creștere" },
  { icon: Compass, label: "Vocație" },
];

/**
 * Compoziție ilustrativă pentru hero. Macheta de design folosește fotografie de
 * studio aici — până când Adi Academy furnizează pozele reale, păstrăm aceeași
 * siluetă (blob gradient + card AI flotant) construită din elemente grafice.
 */
export function HeroVisual() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[460px]">
      <div className="absolute inset-[7%] animate-blob bg-gradient-to-br from-brand via-violet to-violet-soft shadow-2xl shadow-violet/30" />
      <div className="absolute inset-[7%] animate-blob bg-gradient-to-tr from-white/25 via-transparent to-transparent" />

      <div className="absolute inset-[7%] flex items-center justify-center">
        <div className="grid grid-cols-2 gap-3.5">
          {CLUSTER.map((item) => (
            <div
              key={item.label}
              className="flex h-[4.6rem] w-[4.6rem] flex-col items-center justify-center gap-1.5 rounded-2xl bg-white/15 ring-1 ring-white/25 backdrop-blur-sm"
            >
              <item.icon className="h-6 w-6 text-white" strokeWidth={1.7} />
              <span className="text-[9.5px] font-semibold text-white/90">{item.label}</span>
            </div>
          ))}
        </div>
      </div>

      <FloatingChip className="left-0 top-[28%]" icon={Brain} />
      <FloatingChip className="right-[2%] top-[14%]" icon={Target} />
      <FloatingChip className="right-0 top-[48%]" icon={TrendingUp} />
      <Sparkles className="absolute left-[32%] top-[4%] h-5 w-5 text-brand/35" strokeWidth={1.5} />
      <Star className="absolute left-[7%] bottom-[27%] h-4 w-4 text-violet/35" strokeWidth={1.5} />

      <div className="absolute bottom-[4%] right-[-4%] w-[58%] max-w-[228px] rounded-2xl bg-white p-4 shadow-xl ring-1 ring-slate-900/5">
        <div className="flex items-center gap-2.5">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-brand to-violet">
            <BarChart3 className="h-5 w-5 text-white" strokeWidth={2} />
          </span>
          <p className="text-[13px] font-bold leading-tight text-ink">
            AI Report
            <br />
            Personalizat
          </p>
        </div>
        <div className="mt-3 flex gap-0.5">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} className="h-3.5 w-3.5 fill-violet text-violet" />
          ))}
        </div>
        <p className="mt-2 text-[11px] leading-snug text-slate-500">
          Recomandări pentru dezvoltarea ta
        </p>
      </div>
    </div>
  );
}

function FloatingChip({
  className,
  icon: Icon,
}: {
  className: string;
  icon: React.ComponentType<{ className?: string; strokeWidth?: number }>;
}) {
  return (
    <span
      className={`absolute flex h-10 w-10 items-center justify-center rounded-xl bg-white shadow-md ring-1 ring-slate-900/5 ${className}`}
    >
      <Icon className="h-5 w-5 text-brand" strokeWidth={1.7} />
    </span>
  );
}
