import type { Metadata } from 'next';
import SiteHeader from '@/components/SiteHeader';
import FooterSitemap from '@/components/FooterSitemap';
import './globals.css';

export const metadata: Metadata = {
  title: 'b28-site',
  description:
    'Public GitHub Pages leaf for a proteomic tumor-versus-normal transfer evaluation. Not a published article.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col">
        <SiteHeader />
        <main className="w-full flex-1">{children}</main>
        <FooterSitemap />
      </body>
    </html>
  );
}
