'use client';
import React from 'react';
import dynamic from 'next/dynamic';

const AnimatedNumbers = dynamic(
  () => {
    return import('react-animated-numbers');
  },
  { ssr: false },
);

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
      <div className="flex flex-row items-center justify-between rounded-md border border-[#33353F] px-16 py-8">
        {achievementsList.map((achievement, index) => {
          return (
            <div
              key={index}
              className="mx-4 my-4 flex flex-col items-center justify-center sm:my-0"
            >
              <h2 className="flex flex-row text-4xl font-bold text-white">
                {achievement.prefix}
                <AnimatedNumbers
                  includeComma
                  animateToNumber={parseInt(achievement.value)}
                  locale="en-US"
                  className="text-4xl font-bold text-white"
                  transitions={(index) => {
                    return {
                      mass: 1,
                      friction: 100,
                      tensions: 140 * (index + 1),
                    };
                  }}
                />
                {achievement.postfix}
              </h2>
              <p className="text-base text-[#ADB7BE]">{achievement.metric}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AchievementsSection;
