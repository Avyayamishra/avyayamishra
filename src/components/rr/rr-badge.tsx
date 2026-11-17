export function RRBadge({
  className,
  strokeWidth = 1.5,
}: {
  className?: string;
  strokeWidth?: number;
}) {
  return (
    <svg
      viewBox="0 0 44 60"
      fill="none"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <rect
        x="0.75"
        y="0.75"
        width="42.5"
        height="58.5"
        stroke="currentColor"
        strokeWidth={strokeWidth}
      />
      <text
        x="18"
        y="39.5"
        textAnchor="middle"
        fontFamily="var(--font-cormorant), Georgia, 'Times New Roman', serif"
        fontSize="31"
        fill="currentColor"
      >
        R
      </text>
      <text
        x="26.5"
        y="39.5"
        textAnchor="middle"
        fontFamily="var(--font-cormorant), Georgia, 'Times New Roman', serif"
        fontSize="31"
        fill="currentColor"
      >
        R
      </text>
    </svg>
  );
}
