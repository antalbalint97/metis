type Tone = "light" | "dark";

const TONES: Record<Tone, { ink: string; accent: string }> = {
  // On the light page: charcoal halves, teal overlap.
  light: { ink: "#1C1917", accent: "#2A7E6E" },
  // On the dark footer / monitor: off-white halves, bright teal overlap.
  dark: { ink: "#F5F0EB", accent: "#3DBDA8" },
};

/**
 * The Metis sign: a striped left half-circle and a solid right half-circle,
 * offset vertically, overlapping in the accent colour. `id` must be unique
 * on the page because the SVG defines a clip path and a pattern.
 */
export function MetisMark({
  id,
  tone = "light",
  width = 26,
  className,
}: {
  id: string;
  tone?: Tone;
  width?: number;
  className?: string;
}) {
  const { ink, accent } = TONES[tone];
  return (
    <svg
      viewBox="40 24 120 152"
      width={width}
      height={Math.round((width * 152) / 120)}
      className={className}
      aria-hidden="true"
      style={{ display: "block", flex: "none" }}
    >
      <defs>
        <clipPath id={`${id}-l`}>
          <path d="M108 32 A60 60 0 0 0 108 152 Z" />
        </clipPath>
        <pattern id={`${id}-s`} width="200" height="9" patternUnits="userSpaceOnUse">
          <rect width="200" height="3.2" fill={ink} />
        </pattern>
      </defs>
      <path d="M108 32 A60 60 0 0 0 108 152 Z" fill={`url(#${id}-s)`} />
      <path d="M92 48 A60 60 0 0 1 92 168 Z" fill={ink} />
      <path d="M92 48 A60 60 0 0 1 92 168 Z" fill={accent} clipPath={`url(#${id}-l)`} />
    </svg>
  );
}

/**
 * The sign as a large, faint background motif in page heads: fine beige
 * stripes, a warm solid half and a mint overlap.
 */
export function GhostMark({ id, className }: { id: string; className?: string }) {
  return (
    <svg viewBox="40 24 120 152" className={className} aria-hidden="true">
      <defs>
        <clipPath id={`${id}-l`}>
          <path d="M108 32 A60 60 0 0 0 108 152 Z" />
        </clipPath>
        <pattern id={`${id}-s`} width="200" height="4" patternUnits="userSpaceOnUse">
          <rect width="200" height="1.3" fill="#D4CCC3" />
        </pattern>
      </defs>
      <path d="M108 32 A60 60 0 0 0 108 152 Z" fill={`url(#${id}-s)`} />
      <path d="M92 48 A60 60 0 0 1 92 168 Z" fill="#EDE7DF" />
      <path d="M92 48 A60 60 0 0 1 92 168 Z" fill="#E8F4F1" clipPath={`url(#${id}-l)`} />
    </svg>
  );
}

/** Only the striped half of the sign, used as a lighter motif on inner pages. */
export function GhostStripes({ id, className }: { id: string; className?: string }) {
  return (
    <svg viewBox="40 24 120 152" className={className} aria-hidden="true">
      <defs>
        <pattern id={`${id}-s`} width="200" height="4" patternUnits="userSpaceOnUse">
          <rect width="200" height="1.3" fill="#D4CCC3" />
        </pattern>
      </defs>
      <path d="M108 32 A60 60 0 0 0 108 152 Z" fill={`url(#${id}-s)`} />
    </svg>
  );
}
