'use client';

import React from 'react';

import { useSpring, animated } from 'react-spring';

import { useTheme } from '@/contexts/theme-context';

import { MASK_ID, PROPERTIES } from './dark-mode-switch.constants';
import type { Props } from './dark-mode-switch.types';

export default function DarkModeSwitch({
  size = 24,
  moonColor = 'white',
  sunColor = 'black',
  style,
  ...rest
}: Props): React.ReactNode {
  const { theme, setTheme } = useTheme();
  const { circle, svg, lines, mask } = PROPERTIES[theme];
  const color = theme === 'dark' ? moonColor : sunColor;
  const svgContainerProps = useSpring(svg);
  const centerCircleProps = useSpring(circle);
  const maskedCircleProps = useSpring(mask);
  const linesProps = useSpring(lines);

  const onToggle = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <animated.svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      color={color}
      fill="none"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      stroke="currentColor"
      onClick={onToggle}
      className="select-none"
      style={{
        cursor: 'pointer',
        ...svgContainerProps,
        ...style,
      }}
      {...rest}
    >
      <mask id={MASK_ID}>
        <rect x="0" y="0" width="100%" height="100%" fill="white" />
        <animated.circle
          // @ts-ignore
          style={maskedCircleProps}
          r="9"
          fill="black"
        />
      </mask>

      <animated.circle
        cx="12"
        cy="12"
        fill={color}
        // @ts-ignore
        style={centerCircleProps}
        mask={`url(#${MASK_ID})`}
      />
      <animated.g stroke="currentColor" style={linesProps}>
        <line x1="12" y1="1" x2="12" y2="3" />
        <line x1="12" y1="21" x2="12" y2="23" />
        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
        <line x1="1" y1="12" x2="3" y2="12" />
        <line x1="21" y1="12" x2="23" y2="12" />
        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
      </animated.g>
    </animated.svg>
  );
}
