import React from 'react';
import { AnimatedNumbers } from '@/modules/animated-numbers';

const achievementsList = [
  {
    metric: 'Projects',
    value: '100',
    postfix: '+',
  },
  {
    prefix: '~',
    metric: 'Users',
    value: '100,000',
  },
  {
    metric: 'Awards',
    value: '7',
  },
  {
    metric: 'Years',
    value: '5',
  },
];

const AchievementsSection = () => {
  return (
    <div className="gap-16 px-16 px-4 py-16 py-8">
      <div className="flex flex-row items-center justify-between rounded-md border border-slate-400 px-4 py-8 sm:px-16 dark:border-slate-800">
        {achievementsList.map((achievement, index) => {
          return (
            <div
              key={index}
              className="mx-4 flex flex-col items-center justify-center"
            >
              <h2 className="flex flex-row text-2xl font-bold text-zinc-900 sm:text-4xl dark:text-white">
                {achievement.prefix}
                <AnimatedNumbers
                  includeComma
                  animateToNumber={parseInt(achievement.value)}
                  locale="en-US"
                  className="text-2xl font-bold text-zinc-900 sm:text-4xl dark:text-white"
                />
                {achievement.postfix}
              </h2>
              <p className="text-sm text-gray-600 sm:text-base dark:text-gray-400">
                {achievement.metric}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AchievementsSection;
