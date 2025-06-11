import { useEffect } from "react";

export const useKeyboardShortcuts = (shortcuts: Record<string, () => void>) => {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const shortcut = Object.entries(shortcuts).find(
        ([key]) => event.code === key
      );

      if (shortcut) {
        const [, action] = shortcut;
        action();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [shortcuts]);
};
