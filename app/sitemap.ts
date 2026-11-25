import type { MetadataRoute } from 'next';
import { CATEGORIES } from '@/app/data/jmaCategories';
import { PROJECTS } from '@/app/data/projects';
import { SITE_URL } from '@/app/seo';

export default function sitemap(): MetadataRoute.Sitemap {
  const entry = (path: string, priority: number): MetadataRoute.Sitemap[number] => ({ url: `${SITE_URL}${path}`, priority });
  return [
    entry('/', 1),
    entry('/cv', 0.9),
    ...PROJECTS.map(p => entry(p.to, 0.8)),
    ...Object.keys(CATEGORIES).map(c => entry(`/projects/jma-customs/${c}`, 0.5)),
    ...['/privacy-policy', '/terms-and-conditions', '/gdpr', '/cookie-policy'].map(p => entry(p, 0.2)),
  ];
}
