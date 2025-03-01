import { WebVitalConfig, WebVitalName, RatingType } from './web-vitals.types';

export const WEB_VITALS_CONFIG: Record<WebVitalName, WebVitalConfig> = {
  FCP: {
    label: 'First Contentful Paint',
    description: 'Time until the first text or image is painted',
    thresholds: { good: 1800, poor: 3000 },
    unit: 'ms',
  },
  LCP: {
    label: 'Largest Contentful Paint',
    description: 'Time until the largest text or image is painted',
    thresholds: { good: 2500, poor: 4000 },
    unit: 'ms',
  },
  FID: {
    label: 'First Input Delay',
    description: 'Time from first interaction to response',
    thresholds: { good: 100, poor: 300 },
    unit: 'ms',
  },
  CLS: {
    label: 'Cumulative Layout Shift',
    description: 'Sum of layout shift scores for unexpected shifts',
    thresholds: { good: 0.1, poor: 0.25 },
    unit: 'score',
  },
  TTFB: {
    label: 'Time to First Byte',
    description: 'Time until the first byte of the page is received',
    thresholds: { good: 800, poor: 1800 },
    unit: 'ms',
  },
};

export const RATING_COLORS: Record<RatingType, string> = {
  good: 'text-green-500 border-green-500',
  'needs-improvement': 'text-yellow-500 border-yellow-500',
  poor: 'text-red-500 border-red-500',
};
