/**
 * Styles a title based on shortcut key configuration
 * param {string} title - The original title
 * param {Object} shortcut - Shortcut key configuration
 * returns {JSX.Element} - Styled title component
 */
export const stylizeTitle = (title: any, shortcut: any) => {
  if (!shortcut?.key) return title;

  // Extract the letter from KeyX format (e.g., "KeyC" → "C")
  const targetLetter = shortcut.key.replace("Key", "").toLowerCase();
  const titleLower = title.toLowerCase();
  const index = titleLower.indexOf(targetLetter);

  if (index === -1) return title;

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
      borderTop: "2px solid",
      // paddingTop: "1px",
    };
  }

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
export const findShortcutById = (id: any, shortcuts: any) => {
  // First check top-level items
  const shortcut = shortcuts.find((s: any) => s.id === id);
  if (shortcut) return shortcut;

  // Then check subKeys if any
  for (const item of shortcuts) {
    if (item.subKeys) {
      const subShortcut = item.subKeys.find((s: any) => s.id === id);
      if (subShortcut) return subShortcut;
    }
  }

  return null;
};
