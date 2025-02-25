import { MetadataRoute } from 'next';

import { PERSONAL_INFO } from '@/constants/personal-info.constants';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${PERSONAL_INFO.LINKS.WEBSITE}/sitemap.xml`,
  };
}
