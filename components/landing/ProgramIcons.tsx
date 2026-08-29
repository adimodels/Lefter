// Ilustrații colorate, desenate manual, pentru cardurile de programe din
// secțiunea "Despre Adi Academy" — mai expresive decât o singură iconiță
// lucide monocromă pe un pătrat de culoare solidă.

export function ModellingBadge({ className = "h-14 w-14" }: { className?: string }) {
  return (
    <svg viewBox="0 0 56 56" fill="none" className={className}>
      <defs>
        <linearGradient id="modelling-bg" x1="0" y1="0" x2="56" y2="56">
          <stop offset="0%" stopColor="#818cf8" />
          <stop offset="55%" stopColor="#a855f7" />
          <stop offset="100%" stopColor="#ec4899" />
        </linearGradient>
      </defs>
      <rect width="56" height="56" rx="16" fill="url(#modelling-bg)" />
      {/* raze de spot-light */}
      <path d="M28 12 L32 22 L28 20 L24 22 Z" fill="#fde68a" opacity="0.9" />
      <circle cx="28" cy="32" r="10" stroke="white" strokeWidth="2.2" opacity="0.9" />
      <circle cx="28" cy="32" r="4.5" fill="#fde68a" />
      <circle cx="40" cy="18" r="2.4" fill="#fde68a" />
      <circle cx="16" cy="40" r="1.8" fill="white" opacity="0.85" />
    </svg>
  );
}

export function CommunicationBadge({ className = "h-14 w-14" }: { className?: string }) {
  return (
    <svg viewBox="0 0 56 56" fill="none" className={className}>
      <defs>
        <linearGradient id="comm-bg" x1="0" y1="0" x2="56" y2="56">
          <stop offset="0%" stopColor="#38bdf8" />
          <stop offset="55%" stopColor="#6366f1" />
          <stop offset="100%" stopColor="#a855f7" />
        </linearGradient>
      </defs>
      <rect width="56" height="56" rx="16" fill="url(#comm-bg)" />
      {/* microfon */}
      <rect x="24.5" y="14" width="7" height="14" rx="3.5" fill="white" />
      <path
        d="M18 26c0 6 4.5 10 10 10s10-4 10-10"
        stroke="white"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
      <line x1="28" y1="36" x2="28" y2="41" stroke="white" strokeWidth="2.4" strokeLinecap="round" />
      {/* unde de sunet */}
      <path d="M40 20c2 2.5 2 6.5 0 9" stroke="#fde68a" strokeWidth="2" strokeLinecap="round" />
      <path d="M44 17c3.5 4 3.5 12 0 16" stroke="#fde68a" strokeWidth="2" strokeLinecap="round" opacity="0.7" />
    </svg>
  );
}

export function EntrepreneurshipBadge({ className = "h-14 w-14" }: { className?: string }) {
  return (
    <svg viewBox="0 0 56 56" fill="none" className={className}>
      <defs>
        <linearGradient id="ent-bg" x1="0" y1="0" x2="56" y2="56">
          <stop offset="0%" stopColor="#34d399" />
          <stop offset="55%" stopColor="#10b981" />
          <stop offset="100%" stopColor="#0ea5e9" />
        </linearGradient>
      </defs>
      <rect width="56" height="56" rx="16" fill="url(#ent-bg)" />
      {/* grafic de creștere */}
      <path
        d="M15 34l7-7 6 5 11-13"
        stroke="white"
        strokeWidth="2.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M32 17h7v7" stroke="#fde68a" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="15" cy="34" r="2" fill="#fde68a" />
      <circle cx="22" cy="27" r="2" fill="white" />
      <circle cx="28" cy="32" r="2" fill="white" />
      <line x1="13" y1="41" x2="43" y2="41" stroke="white" strokeWidth="2" strokeLinecap="round" opacity="0.5" />
    </svg>
  );
}
