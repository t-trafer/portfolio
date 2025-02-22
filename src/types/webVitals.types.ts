type WebVitalName = 'FCP' | 'LCP' | 'FID' | 'CLS' | 'TTFB';
type RatingType = 'good' | 'needs-improvement' | 'poor';

type Threshold = {
  good: number;
  poor: number;
};

type WebVitalConfig = {
  label: string;
  description: string;
  thresholds: Threshold;
  unit: 'ms' | 'score';
};
