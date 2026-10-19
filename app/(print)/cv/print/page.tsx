import type { Metadata } from 'next';
import PrintCV from '@/app/PrintCV';

export const metadata: Metadata = {
  title: 'Arif Tariq — CV 2026 (Print)',
  description: 'Two-page A4 printable CV of Arif Tariq, multidisciplinary designer.',
  openGraph: {
    title: 'Arif Tariq — CV 2026 (Print)',
    description: 'Two-page A4 printable CV of Arif Tariq.',
    type: 'website',
  },
  twitter: { card: 'summary_large_image' },
  icons: { icon: { url: '/favicon.svg', type: 'image/svg+xml' } },
};

export default function Page() {
  return <PrintCV />;
}
