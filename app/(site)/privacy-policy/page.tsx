import PrivacyPolicy from '@/app/pages/PrivacyPolicy';
import { pageMetadata } from '@/app/seo';

export const metadata = pageMetadata({
  title: 'Privacy Policy | VISUALRIF',
  description: 'How VISUALRIF collects, uses and protects personal information.',
  path: '/privacy-policy',
});

export default function Page() {
  return <PrivacyPolicy />;
}
