import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

import {
  XMarkIcon,
  MinusIcon,
  ArrowsPointingOutIcon,
} from '@heroicons/react/20/solid';
import { CommandLineIcon } from '@heroicons/react/24/outline';

function useTerminal() {
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsTerminalOpen(true);
      }

      if (e.key === 'Escape') {
        setIsTerminalOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return { isTerminalOpen, setIsTerminalOpen };
}

export function Terminal() {
  const { isTerminalOpen, setIsTerminalOpen } = useTerminal();

  const pathname = usePathname();
  return (
    <>
      <button
        className="cursor-pointer focus:ring-2 focus:outline-none"
        onClick={() => setIsTerminalOpen(true)}
      >
        <CommandLineIcon className="h-7 w-7" />
      </button>
      <div className="fixed right-4 bottom-4 z-50 text-sm text-zinc-400">
        Press{' '}
        <kbd className="rounded bg-zinc-800 px-2 py-1">
          {isTerminalOpen ? 'esc' : '⌘K'}
        </kbd>{' '}
        to {isTerminalOpen ? 'close' : 'open'} terminal
      </div>
      {isTerminalOpen ? (
        <div
          className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
          onClick={() => setIsTerminalOpen(false)}
        />
      ) : null}
      <div
        className={`${isTerminalOpen ? 'z-50 translate-y-0 opacity-100' : 'pointer-events-none -translate-y-2 opacity-0'} fixed top-[20%] left-1/2 w-[600px] max-w-[90vw] -translate-x-1/2 overflow-hidden rounded-lg bg-zinc-900 shadow-2xl transition-all duration-200`}
      >
        {/* Terminal Header */}
        <div className="flex items-center justify-between bg-zinc-800 px-4 py-2">
          <div className="group flex space-x-2">
            <div
              className="relative h-3 w-3 cursor-pointer rounded-full bg-red-500 hover:bg-red-400"
              onClick={() => setIsTerminalOpen(false)}
            >
              <XMarkIcon className="absolute top-1/2 left-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 transform text-black opacity-0 group-hover:opacity-100" />
            </div>
            <div
              className="relative h-3 w-3 cursor-pointer rounded-full bg-yellow-500 hover:bg-yellow-400"
              onClick={() => setIsTerminalOpen(false)}
            >
              <MinusIcon className="absolute top-1/2 left-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 transform text-black opacity-0 group-hover:opacity-100" />
            </div>
            <div
              className="relative h-3 w-3 cursor-pointer rounded-full bg-green-500 hover:bg-green-400"
              onClick={() => setIsTerminalOpen(false)}
            >
              <ArrowsPointingOutIcon className="absolute top-1/2 left-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 transform text-black opacity-0 group-hover:opacity-100" />
            </div>
          </div>
          <div className="text-sm text-zinc-400">~/{pathname.slice(1)}</div>
        </div>

        {/* Terminal Content */}
        <div className="p-4 font-mono text-sm">
          <div className="text-green-400">Welcome to Portfolio CLI v1.0.0</div>
          <div className="text-zinc-400">
            Type 'help' to see available commands
          </div>
          {/* Command input and output here */}
          {typeof window !== 'undefined' &&
            `${navigator.platform}@${navigator.userAgent.split(' ')[0]}`}
        </div>
      </div>
    </>
  );
}
