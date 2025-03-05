export default function TerminalInfoOverlay({
  isTerminalOpen,
}: {
  isTerminalOpen: boolean;
}) {
  return (
    <div className="fixed right-4 bottom-4 z-50 text-sm text-zinc-400">
      Press{' '}
      <kbd className="rounded bg-zinc-800 px-2 py-1">
        {isTerminalOpen ? 'esc' : '⌘K'}
      </kbd>{' '}
      to {isTerminalOpen ? 'close' : 'open'} terminal
    </div>
  );
}
