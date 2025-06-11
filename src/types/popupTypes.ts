import type { ReactNode } from "react";

export type PopupProps = {
  open: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
  buttonRequired?: boolean;
  submitForm?: () => void;
  size?: "sm" | "lg" | "xl" | undefined;
};
