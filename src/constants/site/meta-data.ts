import { PERSONAL_INFO } from '../personal-info.constants';

const META_DATA = {
  title: PERSONAL_INFO.TITLE,
  description: PERSONAL_INFO.DESCRIPTION,
  keywords: PERSONAL_INFO.KEYWORDS,
  icons: {
    icon: [
      { url: '/icons/site/favicon.ico' },
      {
        url: '/icons/site/favicon-16x16.png',
        sizes: '16x16',
        type: 'image/png',
      },
      {
        url: '/icons/site/favicon-32x32.png',
        sizes: '32x32',
        type: 'image/png',
      },
      {
        url: '/icons/site/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        url: '/icons/site/android-chrome-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
    apple: [
      {
        url: '/icons/site/apple-touch-icon.png',
        sizes: '180x180',
        type: 'image/png',
      },
    ],
  },
  manifest: '/site.webmanifest',
  authors: [{ name: PERSONAL_INFO.NAME }],
  openGraph: {
    title: PERSONAL_INFO.TITLE,
    description: PERSONAL_INFO.DESCRIPTION,
    images: ['/images/hero-image-3.webp'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: PERSONAL_INFO.TITLE,
    description: PERSONAL_INFO.DESCRIPTION,
    images: ['/images/hero-image-3.webp'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default META_DATA;
