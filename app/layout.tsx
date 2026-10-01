import type { Metadata } from 'next';
import { Bricolage_Grotesque, DM_Sans } from 'next/font/google';
import { siteConfig } from '@/data/siteConfig';
import SiteHeader from '@/components/ui/SiteHeader';
import SiteFooter from '@/components/ui/SiteFooter';
import MotionProvider from '@/components/ui/MotionProvider';
import './globals.css';

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-dm-sans',
});

const bricolage = Bricolage_Grotesque({
  subsets: ['latin'],
  weight: ['600', '700', '800'],
  display: 'swap',
  variable: '--font-bricolage',
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} — Nettoyage professionnel à ${siteConfig.city}`,
    template: '%s',
  },
  description: `${siteConfig.slogan}. Services de nettoyage professionnel à ${siteConfig.city} et en ${siteConfig.department}.`,
  openGraph: {
    siteName: siteConfig.name,
    locale: 'fr_FR',
    type: 'website',
    images: [siteConfig.ogImage],
  },
  twitter: {
    card: 'summary_large_image',
    images: [siteConfig.ogImage],
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: 'P79JFzLGdRpooS6Nwo1PZ8Jx4DEvfLdZnrMfPs0qA24',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={`${dmSans.variable} ${bricolage.variable}`}>
      <body className="font-sans text-navy bg-white antialiased dark:bg-dark-bg dark:text-dark-text">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-proclean-blue focus:text-white focus:rounded-lg focus:text-sm focus:font-semibold"
        >
          Aller au contenu principal
        </a>
        <MotionProvider>
          <SiteHeader />
          <main id="main-content">{children}</main>
          <SiteFooter />
        </MotionProvider>
      </body>
    </html>
  );
}
