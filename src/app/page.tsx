import { AchievementMetrics } from '@/components/features/achievement-metrics';
import AnalyticMetrics from '@/components/features/analytic-metrics';
import Hero from '@/components/sections/hero';
import WebVitalsDisplay from '@/components/sections/web-vitals/web-vitals';

export default function Home() {
  return (
    <>
      <Hero />
      <AchievementMetrics />
      <AnalyticMetrics />
      <WebVitalsDisplay />
    </>
  );
}
