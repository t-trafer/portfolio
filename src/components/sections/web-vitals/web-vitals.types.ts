export type WebVitalName = 'FCP' | 'LCP' | 'FID' | 'CLS' | 'TTFB';
export type RatingType = 'good' | 'needs-improvement' | 'poor';

export type Threshold = {
  good: number;
  poor: number;
};

export type WebVitalConfig = {
  label: string;
  description: string;
  thresholds: Threshold;
  unit: 'ms' | 'score';
};
