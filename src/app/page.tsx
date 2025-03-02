import { AchievementMetrics } from '@/components/features/achievement-metrics';
import AnalyticMetrics from '@/components/features/analytic-metrics';
import AboutSection from '@/components/sections/about-section';
import ContactSection from '@/components/sections/contact-section';
import Hero from '@/components/sections/hero';
import WebVitalsDisplay from '@/components/sections/web-vitals/web-vitals';

export default function Home() {
  return (
    <>
      <Hero />
      <AchievementMetrics />
      <AnalyticMetrics />
      <AboutSection />
      <ContactSection />
      <WebVitalsDisplay />
    </>
  );
}
