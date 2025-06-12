// export const shortcutKeys = [
//   "KeyA",
//   "KeyB",
//   "KeyC",
//   "KeyD",
//   "KeyE",
//   "KeyF",
//   "KeyG",
//   "KeyH",
//   "KeyI",
//   "KeyJ",
//   "KeyK",
//   "KeyL",
// ];

import type { ShortcutKeysProps } from "./types";

// export const shortcutKeys: ShortcutKeysProps = {
// export const shortcutKeys = {
//   homepage: {
//     keys: [
//       {
//         id: "client",
//         altKey: true,
//         ctrlKey: false,
//         key: "KeyA",
//       },
//       {
//         id: "toggle",
//         key: "KeyB",
//         altKey: true,
//         ctrlKey: false,
//       },
//       {
//         id: "calculator",
//         altKey: true,
//         ctrlKey: false,
//         key: "KeyC",
//       },
//       {
//         id: "datePicker",
//         key: "KeyD",
//         altKey: true,
//         ctrlKey: false,
//       },
//       {
//         id: "emi",
//         key: "KeyE",
//         altKey: true,
//         ctrlKey: false,
//       },
//       {
//         id: "modal1",
//         key: "KeyE",
//         altKey: true,
//         ctrlKey: false,
//       },
//       {
//         id: "modal2",
//         key: "KeyE",
//         altKey: true,
//         ctrlKey: false,
//       },
//       {
//         id: "modal3",
//         key: "KeyE",
//         altKey: true,
//         ctrlKey: false,
//       },
//     ],
//     popupKeys: [
//       {
//         openKey: "KeyF",
//         altKey: true,
//         ctrlKey: false,
//         buttonKey: "KeyS",
//         component: TestModal1,
//       },
//       {
//         openKey: "KeyG",
//         altKey: true,
//         ctrlKey: false,
//         buttonKey: "KeyT",
//         component: TestModal2,
//       },
//       {
//         openKey: "KeyH",
//         altKey: false,
//         ctrlKey: false,
//         buttonKey: "KeyR",
//         component: TestModal3,
//       },
//     ],
//   },
// };

// export const shortcutKeys = {
//   homepage: {
//     menus: [
//       {
//         id: "client",
//         altKey: true,
//         ctrlKey: false,
//         key: "KeyA",
//       },
//       {
//         id: "toggle",
//         key: "KeyB",
//         altKey: true,
//         ctrlKey: false,
//       },
//       {
//         id: "calculator",
//         altKey: true,
//         ctrlKey: false,
//         key: "KeyC",
//       },
//       {
//         id: "datePicker",
//         key: "KeyD",
//         altKey: true,
//         ctrlKey: false,
//       },
//       {
//         id: "emi",
//         key: "KeyE",
//         altKey: true,
//         ctrlKey: false,
//       },
//       {
//         id: "modal1",
//         key: "KeyE",
//         altKey: true,
//         ctrlKey: false,
//       },
//       {
//         id: "modal2",
//         key: "KeyE",
//         altKey: true,
//         ctrlKey: false,
//       },
//       {
//         id: "modal3",
//         key: "KeyE",
//         altKey: true,
//         ctrlKey: false,
//       },
//     ],
//     popupKeys: [
//       {
//         openKey: "KeyF",
//         altKey: true,
//         ctrlKey: false,
//         buttonKey: "KeyS",
//         component: TestModal1,
//       },
//       {
//         openKey: "KeyG",
//         altKey: true,
//         ctrlKey: false,
//         buttonKey: "KeyT",
//         component: TestModal2,
//       },
//       {
//         openKey: "KeyH",
//         altKey: false,
//         ctrlKey: false,
//         buttonKey: "KeyR",
//         component: TestModal3,
//       },
//     ],
//   },
// };

export const shortcutKeys: ShortcutKeysProps[] = [
  {
    id: "search",
    altKey: false, // Represents option key on macOS
    ctrlKey: false, // Represents control key on macOS
    // metaKey: false,
    shiftKey: true, // Represents Shift key on macOS
    key: "KeyS",
  },
  {
    id: "client",
    altKey: false,
    ctrlKey: false,
    // metaKey: true,
    shiftKey: false,
    key: "KeyC",
    subKeys: [
      {
        id: "client_add",
        altKey: true,
        ctrlKey: false,
        // metaKey: true,
        shiftKey: false,
        key: "KeyA",
      },
      {
        id: "client_edit",
        altKey: true,
        ctrlKey: false,
        // metaKey: true,
        shiftKey: false,
        key: "KeyE",
      },
    ],
  },
  {
    id: "toggleModal",
    altKey: false,
    ctrlKey: false,
    // metaKey: false,
    shiftKey: false,
    key: "KeyT",
  },
  {
    id: "calculator",
    altKey: false,
    ctrlKey: false,
    // metaKey: false,
    shiftKey: false,
    key: "KeyA",
  },
  {
    id: "datePicker",
    altKey: false,
    ctrlKey: false,
    // metaKey: false,
    shiftKey: false,
    key: "KeyN",
  },
  {
    id: "emiCalculator",
    altKey: false,
    ctrlKey: false,
    // metaKey: false,
    shiftKey: false,
    key: "KeyE",
  },
  {
    id: "modal1",
    altKey: false,
    ctrlKey: false,
    // metaKey: false,
    shiftKey: true,
    key: "KeyM",
  },
  {
    id: "modal3",
    altKey: true,
    ctrlKey: false,
    // metaKey: false,
    shiftKey: false,
    key: "KeyO",
  },
  {
    id: "submit_button",
    altKey: true,
    ctrlKey: false,
    // metaKey: false,
    shiftKey: false,
    key: "KeyS",
  },
  {
    id: "calculator",
    altKey: true,
    ctrlKey: false,
    // metaKey: false,
    shiftKey: false,
    key: "KeyC",
  },
];
