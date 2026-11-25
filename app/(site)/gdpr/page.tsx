import GDPR from '@/app/pages/GDPR';
import { pageMetadata } from '@/app/seo';

export const metadata = pageMetadata({
  title: 'GDPR & Data Usage | VISUALRIF',
  description: 'Your data rights under UK GDPR and how VISUALRIF handles personal data.',
  path: '/gdpr',
});

export default function Page() {
  return <GDPR />;
}
