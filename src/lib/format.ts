const MONTHS_LONG = [
  "január", "február", "március", "április", "május", "június",
  "július", "augusztus", "szeptember", "október", "november", "december",
];
const MONTHS_SHORT = [
  "jan.", "febr.", "márc.", "ápr.", "máj.", "jún.",
  "júl.", "aug.", "szept.", "okt.", "nov.", "dec.",
];

function parse(iso: string) {
  const m = /^(\d{4})-(\d{2})-(\d{2})/.exec(iso ?? "");
  if (!m) return null;
  return { y: Number(m[1]), mo: Number(m[2]) - 1, d: Number(m[3]) };
}

/** "2026. október 14." */
export function formatDateLong(iso: string) {
  const p = parse(iso);
  return p ? `${p.y}. ${MONTHS_LONG[p.mo]} ${p.d}.` : iso;
}

/** "okt. 14." */
export function formatDateShort(iso: string) {
  const p = parse(iso);
  return p ? `${MONTHS_SHORT[p.mo]} ${p.d}.` : iso;
}

/** "2026. szept." */
export function formatMonth(iso: string) {
  const p = parse(iso);
  return p ? `${p.y}. ${MONTHS_SHORT[p.mo]}` : iso;
}

export function readingMinutes(text: string) {
  const words = text.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 220));
}
