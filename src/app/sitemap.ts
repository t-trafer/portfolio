import { MetadataRoute } from 'next';

import { PERSONAL_INFO } from '@/constants/personal-info.constants';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${PERSONAL_INFO.LINKS.WEBSITE}`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
  ];
}
