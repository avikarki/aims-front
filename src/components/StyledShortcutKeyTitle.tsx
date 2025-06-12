import type { ShortcutKeysProps } from "../types";
import { findShortcutById, stylizeTitle } from "../utils/stylizeTitle";

type TitleProps = {
  title: string;
  id?: string;
  shortcutKeys?: ShortcutKeysProps[];
};

const StyledShortcutKeyTitle = ({ title, id, shortcutKeys }: TitleProps) => {
  if (id && shortcutKeys)
    return <>{stylizeTitle(title, findShortcutById(id, shortcutKeys))}</>;

  return <span style={{ color: "orange", fontWeight: "bold" }}>({title})</span>;
};

export default StyledShortcutKeyTitle;
