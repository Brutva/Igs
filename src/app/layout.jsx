import { Inter } from 'next/font/google';
import { Analytics } from '@vercel/analytics/next';
import SiteHeader from '@/components/Header/Header';
import './globals.css';

const inter = Inter({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-inter',
});

export const metadata = {
  title: 'Страхование простыми словами',
  description: 'Интерактивный гид для подростков о страховании: риски, страховые случаи, выплаты — объяснено просто и понятно.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body className={`${inter.variable} font-sans antialiased`}>
        <SiteHeader />
        <div className="pt-[72px] sm:pt-20">{children}</div>
        <Analytics />
      </body>
    </html>
  );
}
