import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'VISUALRIF — Multidisciplinary Designer',
  robots: { index: false },
};

// Unmatched URLs are served with a 404 status, then sent home as the Vite SPA's catch-all did.
export default function GlobalNotFound() {
  return (
    <html lang="en">
      <head>
        <meta httpEquiv="refresh" content="0;url=/" />
      </head>
      <body style={{ margin: 0, background: '#020404' }} />
    </html>
  );
}
