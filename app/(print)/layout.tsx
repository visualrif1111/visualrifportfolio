import { IBM_Plex_Mono, Inter, Space_Grotesk } from 'next/font/google';
import '@/styles/tailwind.css';

const display = Space_Grotesk({ subsets: ['latin'], variable: '--font-cv-display' });
const sans = Inter({ subsets: ['latin'], variable: '--font-cv-sans' });
const mono = IBM_Plex_Mono({ subsets: ['latin'], weight: ['400', '500'], variable: '--font-cv-mono' });

// Separate root layout: the A4 CV gets none of the site shell (dark background, cursor, page wipe or cookie banner).
export default function PrintLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable} ${mono.variable}`}>
      <head>
        <style>{'@page { size: A4; margin: 0; }'}</style>
      </head>
      <body className="bg-[#E6E6E3] antialiased [print-color-adjust:exact] print:bg-[#F7F7F5]">{children}</body>
    </html>
  );
}
