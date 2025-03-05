import { CommandLineIcon } from '@heroicons/react/24/outline';

export default function TerminalButton({ onClick }: { onClick: () => void }) {
  return (
    <button
      className="cursor-pointer focus:ring-2 focus:outline-none"
      onClick={onClick}
    >
      <CommandLineIcon className="h-7 w-7" />
    </button>
  );
}
