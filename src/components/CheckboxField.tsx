import { Form } from "react-bootstrap";
import { Controller } from "react-hook-form";
import type { FieldValues } from "react-hook-form";
import type { BaseFieldProps } from "../types";

const CheckboxField = <T extends FieldValues>({
  name,
  control,
  label,
  required,
  tabIndex,
}: BaseFieldProps<T>) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <>
          <Form.Check
            tabIndex={tabIndex}
            {...field}
            type="checkbox"
            label={label}
            className="mb-3"
            required={required}
            isInvalid={!!error}
            checked={field.value}
          />
          <Form.Control.Feedback type="invalid" style={{ display: "block" }}>
            {error?.message}
          </Form.Control.Feedback>
        </>
      )}
    />
  );
};

export default CheckboxField;
