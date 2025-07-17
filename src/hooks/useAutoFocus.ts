import { useRef, type RefObject } from "react";

type UseAutoFocusOptions = {
  delay?: number;
  selectText?: boolean;
};

export const useAutoFocus = <T extends HTMLElement>(
  options?: UseAutoFocusOptions
): [RefObject<T | null>, (shouldFocus: boolean) => void] => {
  const ref = useRef<T | null>(null);
  const { delay = 50, selectText = false } = options || {};

  const triggerFocus = (shouldFocus: boolean) => {
    if (shouldFocus) {
      setTimeout(() => {
        if (ref.current) {
          ref.current.focus();
          if (selectText) {
            if (
              ref.current instanceof HTMLInputElement ||
              ref.current instanceof HTMLTextAreaElement
            ) {
              ref.current.select();
            }
          }
        }
      }, delay);
    }
  };

  return [ref, triggerFocus];
};
