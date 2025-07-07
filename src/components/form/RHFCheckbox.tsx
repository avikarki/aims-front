import { Checkbox, FormControlLabel, FormHelperText } from "@mui/material";
import {
  Controller,
  type Control,
  type FieldPath,
  type FieldValues,
} from "react-hook-form";

type RHFCheckboxProps<T extends FieldValues> = {
  name: FieldPath<T>;
  control: Control<T>;
  label: string;
};

const RHFCheckbox = <T extends FieldValues>({
  name,
  control,
  label,
}: RHFCheckboxProps<T>) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => (
        <>
          <FormControlLabel
            control={<Checkbox {...field} checked={field.value || false} />}
            label={label}
          />
          {fieldState.error && (
            <FormHelperText error>{fieldState.error.message}</FormHelperText>
          )}
        </>
      )}
    />
  );
};

export default RHFCheckbox;
