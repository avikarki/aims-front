import type { ShortcutKeysProps } from "../../types";
import { findShortcutById, stylizeTitle } from "../../utils/stylizeTitle";

type TitleProps = {
  title: string;
  id?: string;
  shortcutKeys?: ShortcutKeysProps[];
  style?: React.CSSProperties;
  className?: string;
};

const StyledShortcutKeyTitle = ({
  title,
  id,
  shortcutKeys,
  style,
  className,
}: TitleProps) => {
  const baseClasses = "text-red-400 font-bold";

  if (id && shortcutKeys)
    return (
      <>{stylizeTitle(title, findShortcutById(id, shortcutKeys), className)}</>
    );

  return (
    <span style={style} className={`${className} ${baseClasses}`}>
      ({title})
    </span>
  );
};

export default StyledShortcutKeyTitle;
