import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import {
  Controller,
  type Control,
  type FieldPath,
  type FieldValues,
} from "react-hook-form";
import { Dayjs } from "dayjs";

type RHFDatePickerProps<T extends FieldValues> = {
  name: FieldPath<T>;
  control: Control<T>;
  label: string;
};

const RHFDatePicker = <T extends FieldValues>({
  name,
  control,
  label,
}: RHFDatePickerProps<T>) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => (
        <DatePicker
          value={field.value ?? null}
          onChange={(date: Dayjs | null) => field.onChange(date)}
          label={label}
          slotProps={{
            textField: {
              fullWidth: true,
              error: !!fieldState.error,
              helperText: fieldState.error?.message,
            },
          }}
        />
      )}
    />
  );
};

export default RHFDatePicker;
