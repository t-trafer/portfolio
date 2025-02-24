import { getAnalyticsData } from '@/utils/analytics.server';
import { AnimatedNumbers } from '@/modules/animated-numbers';
export default async function PageAnalyticsData() {
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

  return (
    <div className="gap-16 px-4 py-8 sm:px-16">
      <div className="flex flex-row items-center justify-between rounded-md border border-slate-400 px-4 py-8 sm:px-16 dark:border-slate-800">
        {metrics.map((metric, index) => (
          <div
            key={index}
            className="mx-4 flex flex-col items-center justify-center"
          >
            <h2 className="flex flex-row text-2xl font-bold text-zinc-900 sm:text-4xl dark:text-white">
              {metric.prefix}
              <AnimatedNumbers
                includeComma
                animateToNumber={metric.value}
                locale="en-US"
                className="text-2xl font-bold text-zinc-900 sm:text-4xl dark:text-white"
              />
              {metric.postfix}
            </h2>
            <p className="text-sm text-gray-600 sm:text-base dark:text-gray-400">
              {metric.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
} 