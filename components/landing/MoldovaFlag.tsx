// Windows nu randează emoji-urile de tip steag, așa că folosim un SVG.
export function MoldovaFlag({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 9 6" aria-label="Republica Moldova" role="img" className={className}>
      <rect width="3" height="6" x="0" fill="#0046AE" />
      <rect width="3" height="6" x="3" fill="#FFD200" />
      <rect width="3" height="6" x="6" fill="#CC092F" />
    </svg>
  );
}
