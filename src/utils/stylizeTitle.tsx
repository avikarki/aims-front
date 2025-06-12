import type { ShortcutKeysProps } from "../types";

/**
 * Styles a title based on shortcut key configuration
 * param {string} title - The original title
 * param {Object} shortcut - Shortcut key configuration
 * returns {JSX.Element} - Styled title component
 */
export const stylizeTitle = (
  title: string,
  shortcut: ShortcutKeysProps | null
) => {
  if (!shortcut?.key) return title;

  // Extract the letter from KeyX format (e.g., "KeyC" → "C")
  const targetLetter = shortcut.key.replace("Key", "").toLowerCase();
  const titleLower = title.toLowerCase();
  const index = titleLower.indexOf(targetLetter);

  // Split the title
  const before = title.slice(0, index);
  const letter = title[index];
  const after = title.slice(index + 1);

  // Determine styling based on shortcut keys
  let style = {};
  if (shortcut.altKey) {
    style = { textDecoration: "underline" };
  } else if (shortcut.ctrlKey) {
    style = {
      textDecoration: "underline",
      textDecorationStyle: "double",
    };
  } else if (shortcut.shiftKey) {
    style = {
      // borderTop: "2px solid",
      // paddingTop: "1px",
      textDecoration: "underline",
      textDecorationStyle: "wavy",
    };
  }

  if (index === -1)
    return (
      <>
        {title} (
        <span
          style={{
            ...style,
            color: "orange",
            fontWeight: "bold",
          }}
        >
          {shortcut?.key?.substring(3)}
        </span>
        )
      </>
    );

  return (
    <>
      {before}
      <span
        style={{
          ...style,
          color: "orange",
          fontWeight: "bold",
        }}
      >
        {letter.toUpperCase()}
      </span>
      {after}
    </>
  );
};

/**
 * Finds shortcut configuration by ID
 * param {string} id - The shortcut ID to find
 * param {Array} shortcuts - Array of shortcut configurations
 * returns {Object|null} - Found shortcut or null
 */
export const findShortcutById = (
  id: string,
  shortcuts: ShortcutKeysProps[]
) => {
  // First check top-level items
  const shortcut = shortcuts.find((s) => s.id === id);
  if (shortcut) return shortcut;

  // Then check subKeys if any
  for (const item of shortcuts) {
    if (item.subKeys) {
      const subShortcut = item.subKeys.find((s) => s.id === id);
      if (subShortcut) return subShortcut;
    }
  }

  return null;
};
