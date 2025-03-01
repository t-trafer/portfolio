'use client';

import { MetricCardProps } from './metric.types';
import { AnimatedNumbers } from '../animated-numbers';

export function MetricCard({ prefix, value, postfix, name }: MetricCardProps) {
  return (
    <div className={`mx-4 flex flex-col items-center justify-center`}>
      <h2
        className={`flex flex-row text-2xl font-bold text-zinc-900 sm:text-4xl dark:text-white`}
      >
        {prefix}
        <AnimatedNumbers
          includeComma={true}
          animateToNumber={value}
          locale="en-US"
          className={`text-2xl font-bold text-zinc-900 sm:text-4xl dark:text-white`}
        />
        {postfix}
      </h2>
      <p className={`text-sm text-gray-600 sm:text-base dark:text-gray-400`}>
        {name}
      </p>
    </div>
  );
}
