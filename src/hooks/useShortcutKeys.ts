import { useEffect } from "react";

interface Shortcut {
  id: string;
  key: string;
  altKey?: boolean;
  ctrlKey?: boolean;
  metaKey?: boolean;
  shiftKey?: boolean;
}

interface HandlerMap {
  [id: string]: () => void;
}

type KeyboardHandler = (event: KeyboardEvent) => void;

export const useCalculatorShortcutKeys = (
  handler: KeyboardHandler,
  dependencies: any[]
) => {
  useEffect(() => {
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, dependencies);
};

export const useShortcuts = (
  shortcuts: Shortcut[],
  handlerMap: HandlerMap,
  options?: {
    disabled?: boolean;
    allowInModal?: string[]; // Shortcut IDs to allow when modal is open
  }
) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Skip if globally disabled
      if (options?.disabled) return;

      // Check if search input is focused (disable all shortcuts)
      const isSearchFocused = document.activeElement?.id === "search";
      if (isSearchFocused) return;

      // Check if modal is open
      // const isModalOpen = !!document.querySelector(".modal.show");
      const isModalOpen = !!document.querySelector("#reusable-dialog");

      // Find matching shortcut
      const matchedShortcut = shortcuts.find(
        (shortcut) =>
          shortcut.key === e.code &&
          !!shortcut.altKey === e.altKey &&
          !!shortcut.ctrlKey === e.ctrlKey &&
          !!shortcut.shiftKey === e.shiftKey
      );

      if (matchedShortcut) {
        // Skip if modal is open and shortcut isn't allowed
        if (
          isModalOpen &&
          !options?.allowInModal?.includes(matchedShortcut.id)
        ) {
          return;
        }

        e.preventDefault();
        handlerMap[matchedShortcut.id]?.();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [shortcuts, handlerMap, options]);
};
