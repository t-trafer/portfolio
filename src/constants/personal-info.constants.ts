import { calculateYears } from '@/utils/date';

const START_DATE = new Date('2022-07-01');

export const PERSONAL_INFO = {
  NAME: 'Nilesh Jha',
  JOB_TITLE: 'Software Engineer',
  LINKS: {
    WEBSITE: 'https://nileshjha.live',
    LINKEDIN: 'https://linkedin.com/in/nilesh2k',
    GITHUB: 'https://github.com/t-trafer',
  },
  TITLE: 'Nilesh - Software Engineer & Web Developer',
  DESCRIPTION:
    'Software Engineer specializing in performance optimization and scalable architecture for modern web applications.',
  KEYWORDS: [
    'Software Engineer',
    'Web Developer',
    'UI/UX Designer',
    'React',
    'Next.js',
  ],
  PROFILE_DATA: {
    projects: [
      {
        prefix: '100',
        postfix: '+',
        name: 'Projects',
      },
    ],
    awards: [{}],
    years: Math.floor(calculateYears(START_DATE)),
  },
};
