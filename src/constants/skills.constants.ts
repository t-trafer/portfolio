import * as siSimpleicons from 'simple-icons';

import { Skill } from '@/components/common/skill-card';

export const SKILLS: Skill[] = [
  {
    name: 'React',
    icon: siSimpleicons.siReact,
    level: 90,
    category: ['frontend'],
  },
  {
    name: 'Next.js',
    icon: siSimpleicons.siNextdotjs,
    level: 80,
    category: ['frontend'],
  },
  {
    name: 'Gatsby',
    icon: siSimpleicons.siGatsby,
    level: 80,
    category: ['frontend'],
  },
  {
    name: 'JavaScript',
    icon: siSimpleicons.siJavascript,
    level: 90,
    category: ['language'],
  },
  {
    name: 'Typescript',
    icon: siSimpleicons.siTypescript,
    level: 85,
    category: ['language'],
  },
  {
    name: 'Python',
    icon: siSimpleicons.siPython,
    level: 80,
    category: ['language'],
  },
  {
    name: 'SASS',
    icon: siSimpleicons.siSass,
    level: 90,
    category: ['frontend'],
  },
  {
    name: 'Tailwind CSS',
    icon: siSimpleicons.siTailwindcss,
    level: 90,
    category: ['frontend'],
  },
  {
    name: 'Node.js',
    icon: siSimpleicons.siNodedotjs,
    level: 85,
    category: ['backend'],
  },
  {
    name: 'Nest.js',
    icon: siSimpleicons.siNestjs,
    level: 80,
    category: ['backend'],
  },
  {
    name: 'Express',
    icon: siSimpleicons.siExpress,
    level: 80,
    category: ['backend'],
  },
  {
    name: 'MongoDB',
    icon: siSimpleicons.siMongodb,
    level: 80,
    category: ['database'],
  },
  {
    name: 'PostgreSQL',
    icon: siSimpleicons.siPostgresql,
    level: 80,
    category: ['database'],
  },
  {
    name: 'AWS',
    icon: siSimpleicons.siAwsorganizations,
    level: 80,
    category: ['cloud'],
  },
  {
    name: 'Docker',
    icon: siSimpleicons.siDocker,
    level: 80,
    category: ['cloud'],
  },
  {
    name: 'Kubernetes',
    icon: siSimpleicons.siKubernetes,
    level: 80,
    category: ['cloud'],
  },
];

export default SKILLS;
