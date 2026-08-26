// Siluetă aproximativă a Republicii Moldova, randată ca grilă de puncte:
// alungită NV–SE, cu bombarea estică (Transnistria) și vârful sudic spre
// Giurgiulești. Nu e o hartă geografică exactă — e un element decorativ.
const OUTLINE: [number, number][] = [
  [40, 4],
  [54, 10],
  [60, 20],
  [66, 32],
  [70, 46],
  [76, 58],
  [84, 70],
  [88, 84],
  [82, 98],
  [74, 110],
  [68, 124],
  [62, 138],
  [56, 152],
  [50, 166],
  [46, 184],
  [40, 172],
  [36, 156],
  [32, 142],
  [27, 128],
  [22, 114],
  [18, 100],
  [14, 84],
  [11, 68],
  [13, 52],
  [18, 38],
  [24, 24],
  [31, 12],
];

function isInside(x: number, y: number) {
  let inside = false;
  for (let i = 0, j = OUTLINE.length - 1; i < OUTLINE.length; j = i++) {
    const [xi, yi] = OUTLINE[i];
    const [xj, yj] = OUTLINE[j];
    const intersects = yi > y !== yj > y && x < ((xj - xi) * (y - yi)) / (yj - yi) + xi;
    if (intersects) inside = !inside;
  }
  return inside;
}

const STEP = 3.6;
const dots: { x: number; y: number; bright: boolean }[] = [];
for (let y = 2; y < 190; y += STEP) {
  for (let x = 2; x < 100; x += STEP) {
    if (isInside(x, y)) {
      // câteva puncte „aprinse" ca accente luminoase, distribuite determinist
      const bright = (Math.round(x * 7) + Math.round(y * 13)) % 53 < 5;
      dots.push({ x, y, bright });
    }
  }
}

export function MoldovaDotMap({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 190"
      role="img"
      aria-label="Harta stilizată a Republicii Moldova"
      className={className}
    >
      {dots.map((dot, i) => (
        <circle
          key={i}
          cx={dot.x}
          cy={dot.y}
          r={dot.bright ? 1.05 : 0.75}
          fill={dot.bright ? "#7dd3fc" : "#3b5bfd"}
          opacity={dot.bright ? 0.95 : 0.45}
        />
      ))}
    </svg>
  );
}
