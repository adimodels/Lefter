import type { ReactNode } from "react";

export function Section({
  id,
  className = "",
  containerClassName = "",
  children,
}: {
  id?: string;
  className?: string;
  containerClassName?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className={`py-16 sm:py-24 ${className}`}>
      <div className={`mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 ${containerClassName}`}>
        {children}
      </div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
}) {
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left";
  return (
    <div className={`max-w-3xl ${alignClass} mb-12`}>
      {eyebrow && (
        <p className="text-sm font-semibold uppercase tracking-wider text-amber-600 mb-3">
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">{title}</h2>
      {subtitle && <p className="mt-4 text-lg text-slate-600">{subtitle}</p>}
    </div>
  );
}
