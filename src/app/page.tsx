import AchievementsSection from '@/components/molecules/AchievementSection';
import PageAnalyticsData from '@/components/molecules/page-analytics-data';
import HeroSection from '@/components/organisms/HeroSection';
import WebVitalsDisplay from '@/components/organisms/WebVitalsDisplay';
export default function Home() {
  return (
    <>
      <HeroSection />
      <AchievementsSection />
      <PageAnalyticsData />
      <WebVitalsDisplay />
    </>
  );
}
