import TermsAndConditions from '@/app/pages/Terms';
import { pageMetadata } from '@/app/seo';

export const metadata = pageMetadata({
  title: 'Terms & Conditions | VISUALRIF',
  description: 'Terms and conditions for using visualrif.com.',
  path: '/terms-and-conditions',
});

export default function Page() {
  return <TermsAndConditions />;
}
