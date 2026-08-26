import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost" | "outline";
type Size = "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-brand disabled:opacity-50 disabled:pointer-events-none";

const variants: Record<Variant, string> = {
  primary: "bg-brand text-white hover:bg-brand-dark focus-visible:ring-offset-white",
  secondary: "bg-white text-ink hover:bg-slate-100 focus-visible:ring-offset-ink",
  // Pentru fundaluri închise (Hero, CTA final).
  ghost:
    "bg-transparent text-slate-100 border border-white/30 hover:bg-white/10 focus-visible:ring-offset-ink",
  // Pentru fundaluri deschise (ex. pașii wizard-ului de test).
  outline:
    "bg-transparent text-slate-700 border border-slate-300 hover:bg-slate-100 focus-visible:ring-offset-white",
};

const sizes: Record<Size, string> = {
  md: "px-5 py-2.5 text-sm",
  lg: "px-8 py-4 text-base",
};

function classesFor(variant: Variant, size: Size, className: string) {
  return `${base} ${variants[variant]} ${sizes[size]} ${className}`;
}

export function Button({
  variant = "primary",
  size = "md",
  children,
  className = "",
  ...buttonProps
}: {
  variant?: Variant;
  size?: Size;
  children: ReactNode;
  className?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button className={classesFor(variant, size, className)} {...buttonProps}>
      {children}
    </button>
  );
}

export function ButtonLink({
  variant = "primary",
  size = "md",
  children,
  className = "",
  href,
  target,
  rel,
}: {
  variant?: Variant;
  size?: Size;
  children: ReactNode;
  className?: string;
  href: string;
  target?: string;
  rel?: string;
}) {
  return (
    <Link href={href} target={target} rel={rel} className={classesFor(variant, size, className)}>
      {children}
    </Link>
  );
}
