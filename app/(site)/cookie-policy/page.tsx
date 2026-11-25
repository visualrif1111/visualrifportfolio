import CookiePolicy from '@/app/pages/CookiePolicy';
import { pageMetadata } from '@/app/seo';

export const metadata = pageMetadata({
  title: 'Cookie Policy | VISUALRIF',
  description: 'How visualrif.com uses cookies and similar technologies.',
  path: '/cookie-policy',
});

export default function Page() {
  return <CookiePolicy />;
}
