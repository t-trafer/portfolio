import { usePathname } from 'next/navigation';

import {
  XMarkIcon,
  MinusIcon,
  ArrowsPointingOutIcon,
} from '@heroicons/react/20/solid';

export default function TerminalPopup({
  isOpen,
  close,
}: {
  isOpen: boolean;
  close: () => void;
}) {
  const pathname = usePathname();
  const backgroundMask = isOpen ? (
    <div
      className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
      onClick={close}
    />
  ) : null;

  const header = (
    <div className="flex items-center justify-between bg-zinc-800 px-4 py-2">
      <div className="group flex space-x-2">
        <div
          className="relative h-3 w-3 cursor-pointer rounded-full bg-red-500 hover:bg-red-400"
          onClick={close}
        >
          <XMarkIcon className="absolute top-1/2 left-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 transform text-black opacity-0 group-hover:opacity-100" />
        </div>
        <div
          className="relative h-3 w-3 cursor-pointer rounded-full bg-yellow-500 hover:bg-yellow-400"
          onClick={close}
        >
          <MinusIcon className="absolute top-1/2 left-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 transform text-black opacity-0 group-hover:opacity-100" />
        </div>
        <div
          className="relative h-3 w-3 cursor-pointer rounded-full bg-green-500 hover:bg-green-400"
          onClick={close}
        >
          <ArrowsPointingOutIcon className="absolute top-1/2 left-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 transform text-black opacity-0 group-hover:opacity-100" />
        </div>
      </div>
      <div className="text-sm text-zinc-400">~/{pathname.slice(1)}</div>
    </div>
  );

  const content = (
    <div className="p-4 font-mono text-sm">
      <div className="text-green-400">Welcome to Portfolio CLI v1.0.0</div>
      <div className="text-zinc-400">
        Type &apos;help&apos; to see available commands
      </div>
      {/* Command input and output here */}
      {/* {typeof window !== 'undefined' &&
      `${navigator.platform}@${navigator.userAgent.split(' ')[0]}`} */}
    </div>
  );

  return (
    <>
      {backgroundMask}
      <div
        className={`${isOpen ? 'z-50 translate-y-0 opacity-100' : 'pointer-events-none -translate-y-2 opacity-0'} fixed top-[20%] left-1/2 w-[600px] max-w-[90vw] -translate-x-1/2 overflow-hidden rounded-lg bg-zinc-900 shadow-2xl transition-all duration-200`}
      >
        {header}
        {content}
      </div>
    </>
  );
}

{
  /* Terminal Header */
}

{
  /* Terminal Content */
}
