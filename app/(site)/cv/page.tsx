import CV from '@/app/CV';
import { pageMetadata } from '@/app/seo';

export const metadata = pageMetadata({
  title: 'Arif Tariq — Digital & UX/UI Designer, Shrewsbury | CV 2026',
  description: 'CV of Arif Tariq: UX/UI, digital design, brand identity, web development and 3D. Based in Shrewsbury, Shropshire, open to freelance, permanent and remote roles across the UK.',
  path: '/cv',
  type: 'profile',
});

export default function Page() {
  return <CV />;
}
