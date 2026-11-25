import type { Metadata, Viewport } from 'next';
import Script from 'next/script';
import { Analytics } from '@vercel/analytics/next';
import { CustomCursor } from '@/app/components/CustomCursor';
import { Root } from '@/app/Root';
import { OG_IMAGE, SITE_NAME, SITE_URL } from '@/app/seo';
import '@/styles/index.css';

const TITLE = 'VISUALRIF — Arif Tariq, Digital & UX/UI Designer in Shrewsbury';
const DESCRIPTION = 'Portfolio of Arif Tariq (VISUALRIF), a multidisciplinary Digital & UX/UI Designer based in Shrewsbury, Shropshire. Freelance, permanent and remote work across the UK.';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  applicationName: SITE_NAME,
  authors: [{ name: 'Arif Tariq', url: SITE_URL }],
  creator: 'Arif Tariq',
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    type: 'website',
    url: '/',
    siteName: SITE_NAME,
    locale: 'en_GB',
    images: [OG_IMAGE],
  },
  twitter: { card: 'summary_large_image', title: TITLE, description: DESCRIPTION, images: [OG_IMAGE] },
  icons: { icon: { url: '/favicon.svg', type: 'image/svg+xml' } },
};

export const viewport: Viewport = {
  themeColor: '#020404',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-GB" suppressHydrationWarning>
      <head>
        {/* Fonts are self-hosted (src/styles/fonts.css); preload the faces most first screens paint with. */}
        <link rel="preload" href="/fonts/barlow-semi-condensed-500-latin.woff2" as="font" type="font/woff2" crossOrigin="" />
        <link rel="preload" href="/fonts/rajdhani-600-latin.woff2" as="font" type="font/woff2" crossOrigin="" />
        <link rel="preload" href="/fonts/lato-300-latin.woff2" as="font" type="font/woff2" crossOrigin="" />
        <link rel="preload" href="/fonts/barlow-500-latin.woff2" as="font" type="font/woff2" crossOrigin="" />
      </head>
      <body>
        {/* Must run before hydration so the browser never applies its own saved scroll position. */}
        <Script id="scroll-restoration" strategy="beforeInteractive">{"history.scrollRestoration = 'manual';"}</Script>
        {/* Hides the server-rendered cookie banner before first paint once a choice has been stored. */}
        <script dangerouslySetInnerHTML={{ __html: "try{var c=localStorage.getItem('cookieConsent');if(c)document.documentElement.dataset.consent=c}catch(e){}" }} />
        <CustomCursor />
        <Root>{children}</Root>
        <Analytics />
      </body>
    </html>
  );
}
