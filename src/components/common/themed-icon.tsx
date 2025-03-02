import Image from 'next/image';
import type { StaticImageData } from 'next/image';

interface ThemedIconProps {
  src: StaticImageData;
  alt: string;
  className?: string;
  size?: number;
}

export function ThemedIcon({
  src,
  alt,
  className = '',
  size = 48,
}: ThemedIconProps) {
  return (
    <div className="relative">
      <Image
        src={src}
        alt={alt}
        width={size}
        height={size}
        className={`invert hover:invert-[.75] dark:invert-0 dark:hover:invert-[.2] ${className}`}
      />
    </div>
  );
}
