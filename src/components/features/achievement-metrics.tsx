import { PERSONAL_INFO } from '@/constants/personal-info.constants';

import { MetricList } from '../common/metric';

const ACHIEVEMENT_METRICS = [
  {
    value: PERSONAL_INFO.PROFILE_DATA.projects.length,
    postfix: '+',
    name: 'Projects',
  },
  {
    value: PERSONAL_INFO.PROFILE_DATA.awards.length,
    name: 'Awards',
  },
  {
    value: PERSONAL_INFO.PROFILE_DATA.years,
    postfix: '+',
    name: 'Years',
  },
];

export function AchievementMetrics() {
  return <MetricList items={ACHIEVEMENT_METRICS} />;
}
