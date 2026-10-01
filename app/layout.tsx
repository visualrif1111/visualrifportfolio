import type { Metadata, Viewport } from 'next';
import Script from 'next/script';
import { Analytics } from '@vercel/analytics/next';
import { CustomCursor } from '@/app/components/CustomCursor';
import { Root } from '@/app/Root';
import '@/styles/index.css';

const TITLE = 'VISUALRIF — Multidisciplinary Designer';

export const metadata: Metadata = {
  metadataBase: new URL('https://visualrif.com'),
  title: TITLE,
  description: 'VISUALRIF — Portfolio of Arif Tariq, a multidisciplinary designer specialising in UX/UI, branding, and 3D design. Based in Brighton & Hove.',
  openGraph: {
    title: TITLE,
    description: 'Portfolio of Arif Tariq, a multidisciplinary designer specialising in UX/UI, branding, and 3D design.',
    type: 'website',
    url: 'https://visualrif.com',
    images: ['https://visualrif.com/og-image.png'],
  },
  icons: { icon: { url: '/favicon.svg', type: 'image/svg+xml' } },
};

export const viewport: Viewport = {
  themeColor: '#020404',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font -- kept verbatim from the Vite build; font family names are referenced literally across the codebase, which next/font's generated names would break */}
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Barlow+Semi+Condensed:ital,wght@0,400;0,500;0,600;0,700&family=Barlow:ital,wght@0,400;0,500;0,600;0,700&family=Inter:wght@400;500;600;700&family=Lato:wght@300;400;700&family=Rajdhani:wght@400;500;600;700&display=swap" />
      </head>
      <body>
        {/* Must run before hydration so the browser never applies its own saved scroll position. */}
        <Script id="scroll-restoration" strategy="beforeInteractive">{"history.scrollRestoration = 'manual';"}</Script>
        <CustomCursor />
        <Root>{children}</Root>
        <Analytics />
      </body>
    </html>
  );
}
