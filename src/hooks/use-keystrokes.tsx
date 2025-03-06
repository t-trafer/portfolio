import { useCallback, useEffect, useRef } from 'react';

type KeybindId = string;
type KeyCombo = string;

interface Keybind {
  id: KeybindId;
  combos: KeyCombo[];
  handler: () => void;
  preventDefault?: boolean;
}

function doesComboMatch(combo: KeyCombo, e: KeyboardEvent) {
  const keys = combo.toLowerCase().split('+');
  const mainKey = keys.find(
    (key) => !['meta', 'ctrl', 'alt', 'shift'].includes(key)
  );
  const modifiers = keys.filter((key) =>
    ['meta', 'ctrl', 'alt', 'shift'].includes(key)
  );

  const modifiersMatch = modifiers.every((mod) => {
    switch (mod) {
      case 'meta':
        return e.metaKey;
      case 'ctrl':
        return e.ctrlKey;
      case 'alt':
        return e.altKey;
      case 'shift':
        return e.shiftKey;
      default:
        return false;
    }
  });

  const noExtraModifiers = !['meta', 'ctrl', 'alt', 'shift'].some((mod) => {
    if (!modifiers.includes(mod)) {
      switch (mod) {
        case 'meta':
          return e.metaKey;
        case 'ctrl':
          return e.ctrlKey;
        case 'alt':
          return e.altKey;
        case 'shift':
          return e.shiftKey;
        default:
          return false;
      }
    }
    return false;
  });

  return (
    modifiersMatch &&
    noExtraModifiers &&
    e.key.toLowerCase() === mainKey?.toLowerCase()
  );
}

function useKeystrokes() {
  const keybindMap = useRef(new Map<KeybindId, Keybind>());

  const registerKeybind = useCallback((keybind: Keybind) => {
    keybindMap.current.set(keybind.id, keybind);
  }, []);

  const unregsisterKeybind = useCallback((keybind: Keybind) => {
    keybindMap.current.delete(keybind.id);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      for (const keybind of keybindMap.current.values()) {
        const match = keybind.combos.find((combo) => doesComboMatch(combo, e));
        if (!match) continue;

        if (keybind.preventDefault) e.preventDefault();
        keybind.handler();
        break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return window.removeEventListener('keydown', handleKeyDown);
  }, []);
  return { registerKeybind, unregsisterKeybind };
}

function useShortcut() {}
