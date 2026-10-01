import imgInvestInUK from '../../imports/investinuk/home-hero.jpg';
import imgJMACustoms from '@/assets/ca63ed581481fb71ce8ea5aa4a172c9308bf5287.png';
import imgSwiftrooms from '../../imports/image-1.png';
import imgDiversionAudio from '@/assets/7318cbcbc665ca9297d05fb200d7af16fdef3bf0.png';
import imgMoncks from '@/assets/d5ac170d299f945386206acf5b59d5034d41882d.png';
import imgHairyBastard from '@/assets/8a22210a8aa201f9f77f445f757aafe16d8c0beb.png';
import imgSunilGavaskar from '../../imports/image-2.png';
import imgTrend from '@/assets/07fbe3dd7476f28eb4d5db9c9c73edf85ff9c04c.png';
import imgDilchad from '@/assets/78c1f2dac665555e9b580bf39c80dfc07b09595f.png';
import imgEpiphanies from '@/assets/61ed1cb628286e3a99aaaf636c61867b91992a4b.png';

export type Category = 'digital' | 'immersive' | 'branding' | '3d';

export const CATEGORY_LABELS: Record<Category, string> = {
  digital: 'UX / UI, Web Design',
  immersive: 'Immersive Brand & Digital Experience',
  branding: 'Branding & Marketing',
  '3d': '3D Design',
};

export interface Project {
  title: string;
  to: string;
  category: Category;
  discipline: string;
  year: string;
  statement: string;
  img: string;
}

export interface UpcomingProject {
  title: string;
  category: Category;
  img: string;
}

/** Curated browsing order — drives the homepage sequence and the Next Project loop. */
export const PROJECTS: Project[] = [
  {
    title: 'INVESTINUK',
    to: '/projects/investinuk',
    category: 'digital',
    discipline: 'UX / UI · Web Design · Build',
    year: '2026',
    statement: 'A complex property-investment proposition turned into a structured, premium digital experience.',
    img: imgInvestInUK,
  },
  {
    title: 'JMA Customs',
    to: '/projects/jma-customs',
    category: 'immersive',
    discipline: 'Creative Direction · Brand · 3D Assets',
    year: '2025',
    statement: 'A luxury creative business built inside GTA V — brand, assets and a community around them.',
    img: imgJMACustoms,
  },
  {
    title: 'Swiftrooms',
    to: '/projects/swiftrooms',
    category: 'digital',
    discipline: 'UX / UI · Web Platform',
    year: '2026',
    statement: 'From a lead-generation landing page to a full architectural glazing platform for Dubai.',
    img: imgSwiftrooms,
  },
  {
    title: 'Diversion Audio',
    to: '/projects/diversion-audio',
    category: 'branding',
    discipline: 'Brand Identity',
    year: '2024',
    statement: 'The first visual identity for a Drum & Bass collective — later seen at Boomtown.',
    img: imgDiversionAudio,
  },
  {
    title: 'Moncks of Dover Street',
    to: '/projects/moncks-of-dover-street',
    category: 'digital',
    discipline: 'UX / UI · Web Design',
    year: '2019',
    statement: 'A luxury brasserie website for Mayfair, designed and delivered in one month.',
    img: imgMoncks,
  },
  {
    title: 'The Hairy Bastard',
    to: '/projects/the-hairy-bastard',
    category: 'branding',
    discipline: 'Brand Identity · Print',
    year: '2018',
    statement: 'A Brick Lane barbershop identity, finished in spot UV on matte charcoal.',
    img: imgHairyBastard,
  },
  {
    title: 'The Sunil Gavaskar Project',
    to: '/projects/sunil-gavaskar',
    category: 'digital',
    discipline: 'UX / UI · Web3 Campaign',
    year: '2022',
    statement: 'A Web3 campaign and NFT gallery celebrating a cricket legend.',
    img: imgSunilGavaskar,
  },
];

export const UPCOMING: UpcomingProject[] = [
  { title: 'Trend', category: 'branding', img: imgTrend },
  { title: 'Dilchad', category: 'branding', img: imgDilchad },
  { title: 'The Epiphanies', category: '3d', img: imgEpiphanies },
];

export function nextProject(pathname: string): Project {
  const i = PROJECTS.findIndex(p => pathname.startsWith(p.to));
  return PROJECTS[(i + 1) % PROJECTS.length];
}
