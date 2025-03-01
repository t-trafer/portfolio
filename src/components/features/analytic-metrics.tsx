import { getAnalyticsData } from '@/utils/analytics.server';

import { MetricList } from '../common/metric';

export default async function AnalyticMetrics() {
  const analyticsData = await getAnalyticsData();

  if (!analyticsData) return null;

  const metrics = [
    {
      name: 'Total Users',
      value: analyticsData.totalUsers,
      prefix: '~',
    },
    {
      name: 'Page Views',
      value: analyticsData.pageViews,
      postfix: '+',
    },
    {
      name: 'Avg. Time (min)',
      value: Math.round(analyticsData.avgSessionDuration / 60),
    },
  ];

  return <MetricList items={metrics} />;
}
