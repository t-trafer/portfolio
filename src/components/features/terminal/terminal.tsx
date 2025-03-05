import useTerminal from '@/hooks/use-terminal';

import TerminalButton from './terminal.button';
import TerminalInfoOverlay from './terminal.info-overlay';
import TerminalPopup from './terminal.terminal-popup';

export function Terminal() {
  const { isTerminalOpen, setIsTerminalOpen } = useTerminal();

  return (
    <>
      <TerminalButton onClick={() => setIsTerminalOpen(true)} />
      <TerminalInfoOverlay isTerminalOpen={isTerminalOpen} />
      <TerminalPopup
        isOpen={isTerminalOpen}
        close={() => setIsTerminalOpen(false)}
      />
    </>
  );
}
