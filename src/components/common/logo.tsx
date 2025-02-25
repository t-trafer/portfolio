import Link from 'next/link';

export function Logo() {
  const animatedLogo = (
    <div
      className="from-primary-500 to-secondary-500 absolute inset-0 bg-linear-to-r via-purple-500 bg-[length:200%_auto] bg-clip-text opacity-0 transition-opacity duration-500 group-hover:opacity-100"
      style={{ animation: 'gradient 3s linear infinite' }}
    >
      <span
        className="animate-levitate inline-block"
        style={{
          animation: 'levitate 2s ease-in-out infinite',
          animationDelay: '0ms',
        }}
      >
        {'<'}
      </span>
      <span
        className="animate-levitate inline-block"
        style={{
          animation: 'levitate 2s ease-in-out infinite',
          animationDelay: '200ms',
        }}
      >
        /
      </span>
      <span
        className="animate-levitate inline-block"
        style={{
          animation: 'levitate 2s ease-in-out infinite',
          animationDelay: '400ms',
        }}
      >
        {'>'}
      </span>
    </div>
  );

  const staticLogo = (
    <div className="text-zinc-800 transition-opacity duration-500 group-hover:opacity-0 dark:text-zinc-100">
      <span className="inline-block">{'<'}</span>
      <span className="inline-block">/</span>
      <span className="inline-block">{'>'}</span>
    </div>
  );

  return (
    <Link
      href={'/'}
      className="group relative text-2xl font-bold select-none md:text-5xl"
    >
      {animatedLogo}
      {staticLogo}
    </Link>
  );
}
