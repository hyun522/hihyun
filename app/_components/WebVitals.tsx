'use client';

import { useReportWebVitals } from 'next/web-vitals';

const WebVitals = () => {
  useReportWebVitals((metric) => {
    // 여기서 metric.name / metric.value / metric.id 등을 확인 가능
    console.log('[WebVitals]', metric);
  });
  return null;
};

export default WebVitals;
