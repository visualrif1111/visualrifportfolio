import type { Metadata } from 'next';
import CV from '@/app/CV';

export const metadata: Metadata = {
  title: 'Arif Tariq — Multidisciplinary Designer | CV 2026',
  description: 'Interactive CV of Arif Tariq: UX/UI, brand identity, web development and 3D. Shrewsbury / Remote.',
  openGraph: {
    title: 'Arif Tariq — Multidisciplinary Designer',
    description: 'Interactive CV: UX/UI, brand identity, web development and 3D.',
    type: 'profile',
    url: 'https://visualrif.com/cv',
  },
  twitter: { card: 'summary_large_image' },
};

export default function Page() {
  return <CV />;
}
