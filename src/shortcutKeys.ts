import type { ShortcutKeysProps } from "./types";

export const shortcutKeys: ShortcutKeysProps[] = [
  {
    // Shift + S Key
    id: "search",
    altKey: false, // Represents option key on macOS
    ctrlKey: false, // Represents control key on macOS
    // metaKey: false,
    shiftKey: true, // Represents Shift key on macOS
    key: "KeyS",
  },
  {
    // C Key
    id: "post",
    altKey: false,
    ctrlKey: false,
    // metaKey: true,
    shiftKey: false,
    key: "KeyP",
    subKeys: [
      {
        // Alt + A Key
        id: "post_add",
        altKey: true,
        ctrlKey: false,
        // metaKey: true,
        shiftKey: false,
        key: "KeyA",
      },
      {
        // Alt + E Key
        id: "post_edit",
        altKey: true,
        ctrlKey: false,
        // metaKey: true,
        shiftKey: false,
        key: "KeyE",
      },
    ],
  },
  {
    // T Key
    id: "toggleModal",
    altKey: false,
    ctrlKey: false,
    // metaKey: false,
    shiftKey: false,
    key: "KeyT",
  },
  {
    // A Key
    id: "calculator",
    altKey: false,
    ctrlKey: false,
    // metaKey: false,
    shiftKey: false,
    key: "KeyA",
  },
  {
    // N Key
    id: "datePicker",
    altKey: false,
    ctrlKey: false,
    // metaKey: false,
    shiftKey: false,
    key: "KeyN",
  },
  {
    // E Key
    id: "emiCalculator",
    altKey: false,
    ctrlKey: false,
    // metaKey: false,
    shiftKey: false,
    key: "KeyE",
  },
  {
    // Shift + M Key
    id: "modal1",
    altKey: false,
    ctrlKey: false,
    // metaKey: false,
    shiftKey: true,
    key: "KeyM",
  },
  {
    // Alt + O Key
    id: "modal3",
    altKey: true,
    ctrlKey: false,
    // metaKey: false,
    shiftKey: false,
    key: "KeyO",
  },
  {
    // Alt + S Key
    id: "submit_button",
    altKey: true,
    ctrlKey: false,
    // metaKey: false,
    shiftKey: false,
    key: "KeyS",
  },
  {
    // Alt + C Key
    id: "calculator",
    altKey: true,
    ctrlKey: false,
    // metaKey: false,
    shiftKey: false,
    key: "KeyC",
  },
];
