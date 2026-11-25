import type { Metadata } from 'next';
import JMACustomsCategoryPage from '@/app/JMACustomsCategoryPage';
import { CATEGORIES } from '@/app/data/jmaCategories';
import { getProject, pageMetadata } from '@/app/seo';

export function generateStaticParams() {
  return Object.keys(CATEGORIES).map(category => ({ category }));
}

export async function generateMetadata({ params }: { params: Promise<{ category: string }> }): Promise<Metadata> {
  const { category } = await params;
  const c = CATEGORIES[category];
  if (!c) return {};
  return pageMetadata({
    title: `${c.title} — JMA Customs | VISUALRIF`,
    description: c.desc,
    path: `/projects/jma-customs/${category}`,
    type: 'article',
    image: c.images?.[0] ?? getProject('/projects/jma-customs').img,
  });
}

export default function Page() {
  return <JMACustomsCategoryPage />;
}
