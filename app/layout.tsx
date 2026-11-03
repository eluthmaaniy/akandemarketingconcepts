import type { Metadata, Viewport } from 'next';
import { DM_Sans } from 'next/font/google';
import SiteShell from '@/components/layout/SiteShell';
import { createMetadata } from '@/lib/metadata';
import './globals.css';

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-dm-sans',
});

export const metadata: Metadata = createMetadata();

export const viewport: Viewport = {
  themeColor: '#0F5533',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://cdn.jsdelivr.net/npm/remixicon@4.3.0/fonts/remixicon.css"
          rel="stylesheet"
        />
      </head>
      <body className={`${dmSans.variable} font-sans`}>
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
