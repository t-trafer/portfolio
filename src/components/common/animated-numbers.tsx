'use client';

import dynamic from 'next/dynamic';

export const AnimatedNumbers = dynamic(() => import('react-animated-numbers'), { 
  ssr: false 
});