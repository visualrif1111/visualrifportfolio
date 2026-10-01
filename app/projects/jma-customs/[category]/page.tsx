import JMACustomsCategoryPage from '@/app/JMACustomsCategoryPage';
import { CATEGORIES } from '@/app/data/jmaCategories';

export function generateStaticParams() {
  return Object.keys(CATEGORIES).map(category => ({ category }));
}

export default function Page() {
  return <JMACustomsCategoryPage />;
}
