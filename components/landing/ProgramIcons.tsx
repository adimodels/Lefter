// Ilustrații pentru cardurile de programe din secțiunea "Despre Adi Academy".
// Sunt desenate ca mici scene (nu iconițe simple) ca să comunice concret
// conținutul fiecărui curs: scenă cu reflector, microfon cu unde, creștere
// financiară.

type Props = { className?: string };

const BOX = "h-16 w-16 shrink-0";

export function ModellingBadge({ className = BOX }: Props) {
  return (
    <svg viewBox="0 0 80 80" fill="none" className={className} aria-hidden>
      <defs>
        <linearGradient id="mdl-bg" x1="0" y1="0" x2="80" y2="80">
          <stop offset="0%" stopColor="#c026d3" />
          <stop offset="50%" stopColor="#a855f7" />
          <stop offset="100%" stopColor="#6366f1" />
        </linearGradient>
        <linearGradient id="mdl-beam" x1="40" y1="8" x2="40" y2="62">
          <stop offset="0%" stopColor="#fef9c3" stopOpacity="0.95" />
          <stop offset="100%" stopColor="#fef9c3" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="mdl-stage" x1="0" y1="60" x2="80" y2="72">
          <stop offset="0%" stopColor="#fde68a" />
          <stop offset="100%" stopColor="#fbbf24" />
        </linearGradient>
      </defs>

      <rect width="80" height="80" rx="22" fill="url(#mdl-bg)" />

      {/* con de lumină, discret, ca să nu acopere silueta la dimensiuni mici */}
      <path d="M40 12 L58 58 H22 Z" fill="url(#mdl-beam)" opacity="0.45" />

      {/* siluetă — forme groase, lizibile la 64px */}
      <circle cx="40" cy="28" r="7" fill="white" />
      <path d="M40 37c-6.4 0-10 4.6-10.8 10.6L27 59h26l-2.2-11.4C50 41.6 46.4 37 40 37Z" fill="white" />

      {/* podium */}
      <rect x="15" y="59" width="50" height="7" rx="3.5" fill="url(#mdl-stage)" />

      {/* stea de „talent" */}
      <path d="M62 18l2.2 5.4 5.4 2.2-5.4 2.2L62 33.2l-2.2-5.4-5.4-2.2 5.4-2.2z" fill="#fde68a" />
      <circle cx="16" cy="30" r="2.6" fill="#fde68a" opacity="0.9" />
    </svg>
  );
}

export function CommunicationBadge({ className = BOX }: Props) {
  return (
    <svg viewBox="0 0 80 80" fill="none" className={className} aria-hidden>
      <defs>
        <linearGradient id="cmm-bg" x1="0" y1="0" x2="80" y2="80">
          <stop offset="0%" stopColor="#0ea5e9" />
          <stop offset="50%" stopColor="#4f46e5" />
          <stop offset="100%" stopColor="#7c3aed" />
        </linearGradient>
        <linearGradient id="cmm-mic" x1="40" y1="16" x2="40" y2="42">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="100%" stopColor="#dbeafe" />
        </linearGradient>
      </defs>

      <rect width="80" height="80" rx="22" fill="url(#cmm-bg)" />

      {/* microfon */}
      <rect x="34" y="16" width="12" height="24" rx="6" fill="url(#cmm-mic)" />
      <line x1="37" y1="22" x2="43" y2="22" stroke="#93c5fd" strokeWidth="1.4" strokeLinecap="round" />
      <line x1="37" y1="27" x2="43" y2="27" stroke="#93c5fd" strokeWidth="1.4" strokeLinecap="round" />
      <line x1="37" y1="32" x2="43" y2="32" stroke="#93c5fd" strokeWidth="1.4" strokeLinecap="round" />
      <path
        d="M27 37c0 7.2 5.8 13 13 13s13-5.8 13-13"
        stroke="white"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <line x1="40" y1="50" x2="40" y2="58" stroke="white" strokeWidth="3" strokeLinecap="round" />
      <line x1="32" y1="58" x2="48" y2="58" stroke="white" strokeWidth="3" strokeLinecap="round" />

      {/* unde sonore */}
      <path d="M58 26c3.2 4.2 3.2 12 0 16.4" stroke="#fde68a" strokeWidth="2.6" strokeLinecap="round" />
      <path d="M65 20c5.4 7 5.4 22 0 29" stroke="#fde68a" strokeWidth="2.6" strokeLinecap="round" opacity="0.6" />
      <path d="M22 26c-3.2 4.2-3.2 12 0 16.4" stroke="#fde68a" strokeWidth="2.6" strokeLinecap="round" />
      <path d="M15 20c-5.4 7-5.4 22 0 29" stroke="#fde68a" strokeWidth="2.6" strokeLinecap="round" opacity="0.6" />
    </svg>
  );
}

export function EntrepreneurshipBadge({ className = BOX }: Props) {
  return (
    <svg viewBox="0 0 80 80" fill="none" className={className} aria-hidden>
      <defs>
        <linearGradient id="ent-bg" x1="0" y1="0" x2="80" y2="80">
          <stop offset="0%" stopColor="#10b981" />
          <stop offset="50%" stopColor="#0d9488" />
          <stop offset="100%" stopColor="#0284c7" />
        </linearGradient>
        <linearGradient id="ent-bar" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="100%" stopColor="#bbf7d0" />
        </linearGradient>
      </defs>

      <rect width="80" height="80" rx="22" fill="url(#ent-bg)" />

      {/* bare de creștere */}
      <rect x="17" y="44" width="9" height="18" rx="3" fill="url(#ent-bar)" opacity="0.85" />
      <rect x="30" y="36" width="9" height="26" rx="3" fill="url(#ent-bar)" opacity="0.92" />
      <rect x="43" y="27" width="9" height="35" rx="3" fill="url(#ent-bar)" />

      {/* linie de trend + săgeată */}
      <path
        d="M18 40l12-9 10 6 15-16"
        stroke="#fde68a"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M47 21h9v9" stroke="#fde68a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />

      {/* monede */}
      <ellipse cx="61" cy="56" rx="8" ry="3.2" fill="#fbbf24" />
      <rect x="53" y="49" width="16" height="7" fill="#fbbf24" />
      <ellipse cx="61" cy="49" rx="8" ry="3.2" fill="#fde68a" />
      <ellipse cx="61" cy="49" rx="3" ry="1.2" fill="#f59e0b" opacity="0.55" />

      {/* bază */}
      <line x1="14" y1="66" x2="66" y2="66" stroke="white" strokeWidth="2.4" strokeLinecap="round" opacity="0.55" />
    </svg>
  );
}
