import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  type SelectProps,
  FormHelperText,
} from "@mui/material";
import {
  Controller,
  type Control,
  type FieldPath,
  type FieldValues,
} from "react-hook-form";

type Option = {
  label: string;
  value: string | number;
};

type RHFSelectProps<T extends FieldValues> = {
  name: FieldPath<T>;
  control: Control<T>;
  label: string;
  options: Option[];
} & Omit<SelectProps, "name" | "label">;

const RHFSelect = <T extends FieldValues>({
  name,
  control,
  label,
  options,
  ...rest
}: RHFSelectProps<T>) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => (
        <FormControl fullWidth error={!!fieldState.error}>
          <InputLabel>{label}</InputLabel>
          <Select {...field} label={label} {...rest}>
            {options.map((opt) => (
              <MenuItem key={opt.value} value={opt.value}>
                {opt.label}
              </MenuItem>
            ))}
          </Select>
          {fieldState.error && (
            <FormHelperText>{fieldState.error.message}</FormHelperText>
          )}
        </FormControl>
      )}
    />
  );
};

export default RHFSelect;
