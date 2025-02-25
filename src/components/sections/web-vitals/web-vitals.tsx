'use client';
import { useReportWebVitals } from 'next/web-vitals';
import React, { useState } from 'react';

import { RATING_COLORS, WEB_VITALS_CONFIG } from './web-vitals.constants';
import { WebVitalName } from './web-vitals.types';

function useCoreWebVitals() {
  const [metrics, setMetrics] = useState<
    Partial<Record<keyof typeof WEB_VITALS_CONFIG, number>>
  >({});

  useReportWebVitals((metric) => {
    if (
      !Object.keys(WEB_VITALS_CONFIG).includes(metric.name) ||
      metrics.hasOwnProperty(metric.name)
    )
      return;
    setMetrics((prev) => ({
      ...prev,
      [metric.name]: Math.round(metric.value * 100) / 100,
    }));
  });

  return metrics;
}

function getRating(
  name: WebVitalName,
  value: number
): 'good' | 'needs-improvement' | 'poor' {
  const { thresholds } = WEB_VITALS_CONFIG[name];

  if (value <= thresholds.good) return 'good';
  if (value >= thresholds.poor) return 'poor';
  return 'needs-improvement';
}

export default function WebVitalsDisplay() {
  const metrics = useCoreWebVitals();

  return (
    <section className="mx-auto max-w-4xl p-6">
      <h2 className="mb-6 text-2xl font-bold">Core Web Vitals</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {(Object.entries(metrics) as [WebVitalName, number][]).map(
          ([metricName, metricValue]) => (
            <div
              key={metricName}
              className={`rounded-lg border-2 bg-white/5 p-4`}
            >
              <div className="mb-2 flex items-center justify-between">
                <h3 className="font-semibold">
                  {WEB_VITALS_CONFIG[metricName].label}
                </h3>
                <span className="text-sm opacity-70">{metricName}</span>
              </div>
              <p className="mb-3 text-sm text-gray-400">
                {WEB_VITALS_CONFIG[metricName].description}
              </p>
              <div className="flex items-end gap-2">
                <span className="font-mono text-2xl font-bold">
                  {metricValue}
                </span>
                <span className="mb-1 text-sm text-gray-400">
                  {WEB_VITALS_CONFIG[metricName].unit}
                </span>
              </div>
              <div className="mt-2 text-sm capitalize">
                Status:{' '}
                <span
                  className={`font-medium ${RATING_COLORS[getRating(metricName, metricValue)]}`}
                >
                  {getRating(metricName, metricValue)}
                </span>
              </div>
            </div>
          )
        )}
      </div>
    </section>
  );
}
