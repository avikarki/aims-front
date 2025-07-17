import type { Control, FieldValues, Path } from "react-hook-form";

export interface BaseFieldProps<T extends FieldValues> {
  name: Path<T>;
  control: Control<T>;
  label: string;
  required?: boolean;
  readOnly?: boolean;
  disabled?: boolean;
  autoFocus?: boolean;
  tabIndex?: number;
  as?: any;
  rows?: number;
}

export interface PasswordFieldProps<T extends FieldValues>
  extends BaseFieldProps<T> {
  placeholder?: string;
  showPassword: boolean;
  setShowPassword: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface TextFieldProps<T extends FieldValues>
  extends BaseFieldProps<T> {
  placeholder?: string;
  type: string;
}
