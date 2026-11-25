import type { Metadata } from 'next';
import { PROJECTS, type Project } from './data/projects';

export const SITE_URL = 'https://visualrif.com';
export const SITE_NAME = 'VISUALRIF';
export const OG_IMAGE = { url: '/og-image.png', width: 1200, height: 630, alt: 'Arif Tariq — VISUALRIF, multidisciplinary Digital & UX/UI Designer based in Shrewsbury' };
export const POSITIONING =
  'Multidisciplinary Digital & UX/UI Designer based in Shrewsbury, available for freelance, permanent and remote opportunities across the UK.';

export const PERSON = {
  '@type': 'Person',
  '@id': `${SITE_URL}/#person`,
  name: 'Arif Tariq',
  alternateName: 'Rif',
  url: SITE_URL,
  jobTitle: 'Multidisciplinary Digital & UX/UI Designer',
  email: 'mailto:hello@visualrif.com',
  telephone: '+447598078923',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Shrewsbury',
    addressRegion: 'Shropshire',
    addressCountry: 'GB',
  },
  areaServed: ['Shrewsbury', 'Shropshire', 'Birmingham', 'West Midlands', 'United Kingdom'],
  knowsAbout: [
    'UX/UI design', 'Digital design', 'Website design and development', 'Brand identity',
    'Motion graphics', 'Creative development', 'CMS integration', '3D design',
  ],
  sameAs: ['https://www.instagram.com/visualrif', 'https://www.linkedin.com/in/ariftariq/'],
} as const;

export function pageMetadata({ title, description, path, type = 'website', image }: {
  title: string;
  description: string;
  path: string;
  type?: 'website' | 'article' | 'profile';
  image?: string;
}): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      type,
      url: path,
      siteName: SITE_NAME,
      locale: 'en_GB',
      images: [image ?? OG_IMAGE],
    },
    twitter: { card: 'summary_large_image', title, description, images: [image ?? OG_IMAGE] },
  };
}

export function getProject(path: string): Project {
  const project = PROJECTS.find(p => p.to === path);
  if (!project) throw new Error(`Unknown project ${path}`);
  return project;
}

export function projectMetadata(path: string, overrides?: { title?: string; description?: string }): Metadata {
  const p = getProject(path);
  return pageMetadata({
    title: overrides?.title ?? `${p.title.toUpperCase()} — ${p.discipline} Case Study | VISUALRIF`,
    description: overrides?.description ?? `${p.statement} ${p.discipline} by Arif Tariq, Digital & UX/UI Designer.`,
    path,
    type: 'article',
    image: p.img,
  });
}

export function projectJsonLd(path: string, name?: string, description?: string) {
  const p = getProject(path);
  const url = `${SITE_URL}${path}`;
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'CreativeWork',
        '@id': `${url}#work`,
        name: name ?? p.title,
        description: description ?? p.statement,
        url,
        image: new URL(p.img, SITE_URL).toString(),
        dateCreated: p.year,
        genre: p.discipline,
        creator: { '@type': 'Person', '@id': PERSON['@id'], name: PERSON.name, url: SITE_URL },
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
          { '@type': 'ListItem', position: 2, name: name ?? p.title, item: url },
        ],
      },
    ],
  };
}
