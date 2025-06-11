export type SubKeysProps = {
  id: string;
  altKey: boolean;
  ctrlKey: boolean;
  shiftKey: boolean;
  metaKey?: boolean;
  key: string;
};

export type ShortcutKeysProps = {
  id: string;
  altKey: boolean;
  ctrlKey: boolean;
  shiftKey: boolean;
  key: string;
  subKeys?: SubKeysProps[];
};
