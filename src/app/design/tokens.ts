/**
 * VISUALRIF type scale and motion language. Tailwind class strings live here
 * (not in CSS) so every page draws from one hierarchy.
 */
export const TYPE = {
  /** Opening-spread display type — hero and closing statements. */
  display: "font-['Barlow_Semi_Condensed',sans-serif] font-medium uppercase text-[16vw] md:text-[9.5vw] leading-[0.86] tracking-[-0.005em]",
  /** Project names on previews, next-project and case-study heroes. */
  title: "font-['Barlow_Semi_Condensed',sans-serif] font-medium uppercase text-[40px] md:text-[64px] lg:text-[76px] leading-[0.94] tracking-[0.02em]",
  /** Section headings inside a page. */
  heading: "font-['Barlow',sans-serif] font-medium uppercase text-[22px] md:text-[32px] leading-[1.1] tracking-[0.16em]",
  /** Small teal kicker / section number. */
  label: "font-['Rajdhani',sans-serif] font-semibold uppercase text-[11px] md:text-[12px] tracking-[0.38em] text-[#50C1BA]",
  /** Discipline, year, role — quiet supporting facts. */
  meta: "font-['Rajdhani',sans-serif] font-medium uppercase text-[12px] md:text-[13px] tracking-[0.24em] text-gray-400",
  /** Standfirst — one or two sentences that set up a section. */
  lead: "font-['Lato',sans-serif] font-light text-[19px] md:text-[23px] leading-[1.45] tracking-[0.01em] text-gray-200",
  body: "font-['Lato',sans-serif] font-light text-[16px] md:text-[17px] leading-[1.65] tracking-[0.02em] text-gray-300",
  caption: "font-['Rajdhani',sans-serif] font-medium uppercase text-[11px] md:text-[12px] tracking-[0.28em] text-gray-500",
  cta: "font-['Rajdhani',sans-serif] font-bold uppercase text-[12px] tracking-[0.35em]",
} as const;

export const EASE = {
  /** Reveals — fast start, long settle. */
  out: [0.16, 1, 0.3, 1],
  /** Wipes and clip-path masks. */
  inOut: [0.76, 0, 0.24, 1],
  /** Fades and small UI shifts. */
  soft: [0.25, 0.46, 0.45, 0.94],
} as const;

export const DURATION = {
  fast: 0.35,
  base: 0.6,
  reveal: 0.9,
  wipe: 1.1,
} as const;

/** Seconds between items in a staggered reveal. */
export const STAGGER = {
  tight: 0.035,
  base: 0.06,
} as const;
