import { MetricCard } from './metric-card';
import type { MetricCardProps } from './metric.types';

export function MetricList({ items }: { items: MetricCardProps[] }) {
  return (
    <div className={'gap-16 px-4 py-8'}>
      <div className="flex flex-row items-center justify-between rounded-md border border-slate-400 px-4 py-8 sm:px-16 dark:border-slate-800">
        {items.map((item) => (
          <MetricCard key={item.name} {...item} />
        ))}
      </div>
    </div>
  );
}
