import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import './globals.css';

import { GoogleTagManager, GoogleAnalytics } from '@next/third-parties/google';
import { KeyboardManagerProvider } from 'keyboard-manager-pro';
import { Toaster } from 'sonner';

import Footer from '@/components/sections/footer';
import Header from '@/components/sections/header';
import LD_JSON from '@/constants/site/ldJson';
import META_DATA from '@/constants/site/meta-data';
import { ThemeProvider } from '@/contexts/theme-context';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = META_DATA;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var savedTheme = localStorage.getItem('theme');
                  var systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
                  var theme = savedTheme ?? systemTheme;

                  if (theme === 'dark') {
                    document.documentElement.setAttribute('data-theme', 'dark');
                  }
                } catch (e) {
                  console.error('Error setting theme:', e);
                }
              })();
            `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(LD_JSON),
          }}
        />
      </head>
      <GoogleTagManager gtmId={process.env.GTM_ID!} />
      <GoogleAnalytics gaId={process.env.GA_ID!} />
      <body className={inter.className}>
        <ThemeProvider>
          <KeyboardManagerProvider>
            <main className="flex min-h-screen flex-col items-center justify-between">
              <Header />
              {children}
              <Footer />
            </main>
          </KeyboardManagerProvider>
        </ThemeProvider>
        <Toaster />
      </body>
    </html>
  );
}
