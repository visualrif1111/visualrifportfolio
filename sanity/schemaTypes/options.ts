// Every presentation option offered in the Studio mirrors a prop union on an
// existing case-study component. Editors choose from these; no CSS or code is
// ever entered through Sanity.

type Option = { title: string; value: string };
const opts = (...values: string[]): Option[] => values.map(value => ({ title: value, value }));

/** components/case-study/Section.tsx */
export const SECTION_WIDTHS = opts('default', 'narrow', 'wide', 'bleed');
export const SECTION_PADS = opts('default', 'tight', 'loose', 'none');
export const SECTION_BORDERS = opts('none', 'top', 'bottom');

/** components/case-study/SectionHeader.tsx */
export const HEADER_ALIGNS = opts('left', 'center');
export const HEADER_TONES = opts('teal', 'white');

/** components/case-study/Figure.tsx */
export const ROUNDED = opts('none', 'lg', '2xl', '3xl', 'pill');

/** components/case-study/EditorialSplit.tsx */
export const SPLIT_RATIOS = opts('4/8', '5/7', '6/6', '7/5');
export const SPLIT_ALIGNS = opts('start', 'center', 'stretch');

/** components/case-study/ImageGrid.tsx and StatGrid.tsx */
export const GRID_COLUMNS = [2, 3, 4].map(n => ({ title: String(n), value: n }));
/** components/case-study/DeliverablesList.tsx */
export const LIST_COLUMNS = [1, 2, 3].map(n => ({ title: String(n), value: n }));

/** components/case-study/PullQuote.tsx */
export const QUOTE_VARIANTS = opts('default', 'panel');

/** components/case-study/Hero.tsx */
export const HERO_ALIGNS = opts('center', 'bottom-left');

/** Device frames drawn in code around screenshots (BrowserFrame / PhoneFrame in the case studies). */
export const DEVICE_FRAMES = [
  { title: 'None', value: 'none' },
  { title: 'Browser window', value: 'browser' },
  { title: 'Phone', value: 'phone' },
];

/**
 * Image framing presets. Each maps to a fixed set of classes in code; the
 * list is extended in Phase 2B as each case study's existing sizes are mapped.
 */
export const IMAGE_FRAMES = [
  { title: 'Natural height', value: 'natural' },
  { title: 'Feature (min 300 / 500px)', value: 'feature' },
  { title: 'Supporting (min 200 / 400px)', value: 'supporting' },
  { title: 'Sheet (min 280 / 420px)', value: 'sheet' },
];
export const IMAGE_FITS = opts('cover', 'contain');
export const IMAGE_POSITIONS = opts('center', 'top', 'bottom', 'left', 'right');

/** YouTube presentation modes used today. */
export const VIDEO_PRESENTATIONS = [
  { title: 'Embedded player', value: 'embed' },
  { title: 'Interactive player (custom controls)', value: 'interactive' },
  { title: 'Background loop (muted, no controls)', value: 'background' },
];
export const VIDEO_ASPECTS = opts('16/9', '9/16', '4/3', '1/1');

/** Homepage project-card layouts (Home.tsx ProjectCategory). */
export const CARD_LAYOUTS = opts('full', 'half', 'tall', 'quarter');
export const THEMES = opts('dark', 'light');

/** What a case-study section is about; lets cards, SEO and structured data reuse copy without duplicating it. */
export const SECTION_ROLES = [
  { title: 'Introduction', value: 'introduction' },
  { title: 'Challenge', value: 'challenge' },
  { title: 'Approach', value: 'approach' },
  { title: 'Solution', value: 'solution' },
  { title: 'Outcome', value: 'outcome' },
  { title: 'Reflection', value: 'reflection' },
  { title: 'Other', value: 'other' },
];

/**
 * Bespoke, code-built modules a case study can place by key. Their content and
 * interaction stay in code; adding a key here requires a matching component.
 */
export const CUSTOM_MODULES = [
  { title: 'INVESTINUK — Challenge themes', value: 'investinuk-challenge' },
  { title: 'INVESTINUK — Site architecture', value: 'investinuk-architecture' },
  { title: 'INVESTINUK — Investor journey', value: 'investinuk-journey' },
  { title: 'Swiftrooms — Storyboard', value: 'swiftrooms-storyboard' },
  { title: 'Swiftrooms — Design intentions', value: 'swiftrooms-intentions' },
  { title: 'Swiftrooms — Content ecosystem', value: 'swiftrooms-ecosystem' },
  { title: 'Swiftrooms — Product categories', value: 'swiftrooms-categories' },
  { title: 'Swiftrooms — Visual influences', value: 'swiftrooms-influences' },
];

export const SOCIAL_PLATFORMS = [
  { title: 'Instagram', value: 'instagram' },
  { title: 'LinkedIn', value: 'linkedin' },
];

/** Homepage sections the sidebar scrolls to; ids are fixed in code. */
export const NAV_TARGETS = [
  { title: 'Home', value: 'home' },
  { title: 'About', value: 'about' },
  { title: 'All Projects', value: 'projects' },
  { title: 'Contact', value: 'contact' },
];

export const STRUCTURED_DATA_TYPES = [
  { title: 'None', value: 'none' },
  { title: 'Person', value: 'Person' },
  { title: 'WebSite', value: 'WebSite' },
  { title: 'ProfessionalService', value: 'ProfessionalService' },
  { title: 'CreativeWork', value: 'CreativeWork' },
  { title: 'BreadcrumbList', value: 'BreadcrumbList' },
];
