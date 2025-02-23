import AchievementsSection from '@/components/molecules/AchievmentSection';
import HeroSection from '@/components/organisms/HeroSection';
import WebVitalsDisplay from '@/components/organisms/WebVitalsDisplay';
export default function Home() {
  return (
    <>
      <HeroSection />
      <AchievementsSection />
      <WebVitalsDisplay />
    </>
  );
}
