import { useEffect, useState } from 'react';

import { useKeyboard, MODIFIER_KEYS, SPECIAL_KEYS } from 'keyboard-manager-pro';

export default function useTerminal() {
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);

  const { registerBinding, unregisterBinding } = useKeyboard();

  useEffect(() => {
    registerBinding({
      id: 'terminal-toggle',
      combos: [`${MODIFIER_KEYS.META}+k`],
      handler: () => setIsTerminalOpen((prev) => !prev),
    });

    registerBinding({
      id: 'terminal-close',
      combos: [SPECIAL_KEYS.ESCAPE],
      handler: () => setIsTerminalOpen(false),
    });

    return () => {
      unregisterBinding('terminal-toggle');
      unregisterBinding('terminal-close');
    };
  }, [registerBinding, unregisterBinding]);

  return { isTerminalOpen, setIsTerminalOpen };
}
