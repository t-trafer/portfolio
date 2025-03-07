import { useEffect, useState } from 'react';

import { useKeyboard } from 'keyboard-manager-pro';

export default function useTerminal() {
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);

  const { registerBinding, unregisterBinding } = useKeyboard();

  useEffect(() => {
    registerBinding({
      id: 'terminal-toggle',
      combos: ['meta+k'],
      handler: () => setIsTerminalOpen((prev) => !prev),
    });

    registerBinding({
      id: 'terminal-close',
      combos: ['escape'],
      handler: () => setIsTerminalOpen(false),
    });

    return () => {
      unregisterBinding('terminal-toggle');
      unregisterBinding('terminal-close');
    };
  }, [registerBinding, unregisterBinding]);

  return { isTerminalOpen, setIsTerminalOpen };
}
