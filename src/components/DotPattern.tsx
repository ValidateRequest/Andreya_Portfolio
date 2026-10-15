interface DotPatternProps {
  className?: string;
}

export function DotPattern({ className = '' }: DotPatternProps) {
  const cols = 9;
  const rows = 14;
  const gap = 14;

  return (
    <svg
      aria-hidden="true"
      className={className}
      width={cols * gap}
      height={rows * gap}
      viewBox={`0 0 ${cols * gap} ${rows * gap}`}>
      
      {Array.from({ length: rows }).map((_, r) =>
      Array.from({ length: cols }).map((__, c) => {
        // Fade the field out towards the bottom-right corner.
        const fade = 1 - r / rows * 0.6 - c / cols * 0.7;
        if (fade <= 0.05) return null;
        return (
          <circle
            key={`${r}-${c}`}
            cx={c * gap + gap / 2}
            cy={r * gap + gap / 2}
            r={1.6}
            fill="#2db3a3"
            opacity={fade} />);


      })
      )}
    </svg>);

}