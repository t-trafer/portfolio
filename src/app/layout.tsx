import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/organisms/Header';
// import { ThemeScript } from '@/components/ThemeScript';
import { ThemeProvider } from '@/contexts/ThemeContext';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Nilesh Jha - Software Engineer & Web Developer',
  description:
    'Software Engineer specializing in performance optimization and scalable architecture for modern web applications.',
  keywords: [
    'Software Engineer',
    'Web Developer',
    'UI/UX Designer',
    'React',
    'Next.js',
  ],
  authors: [{ name: 'Nilesh' }],
  openGraph: {
    title: 'Nilesh - Software Engineer & Web Developer',
    description:
      'Software Engineer specializing in performance optimization and scalable architecture',
    images: ['/images/hero-image-3.webp'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nilesh - Software Engineer & Web Developer',
    description:
      'Software Engineer specializing in performance optimization and scalable architecture',
    images: ['/images/hero-image-3.webp'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

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
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Nilesh',
              jobTitle: 'Software Engineer',
              url: 'https://nileshjha.live',
              sameAs: [
                'https://linkedin.com/in/nilesh2k',
                'https://github.com/t-trafer',
              ],
            }),
          }}
        />
      </head>

      <body className={inter.className}>
        <ThemeProvider>
          <main className="flex min-h-screen flex-col items-center justify-between">
            <Header />
            {children}
            <footer></footer>
          </main>
          {/* <ThemeScript /> */}
        </ThemeProvider>
      </body>
    </html>
  );
}
