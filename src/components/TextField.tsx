import { Form } from "react-bootstrap";
import { Controller } from "react-hook-form";
import type { FieldValues } from "react-hook-form";
import type { TextFieldProps } from "../types";

const TextField = <T extends FieldValues>({
  name,
  control,
  label,
  placeholder,
  type,
  required,
  tabIndex,
  readOnly = false,
  disabled = false,
  autoFocus = false,
}: TextFieldProps<T>) => {
  return (
    <Form.Group className="mb-3" controlId={name}>
      <Form.Label>{label}</Form.Label>
      <Controller
        name={name}
        control={control}
        render={({ field, fieldState: { error } }) => (
          <>
            <Form.Control
              tabIndex={tabIndex}
              disabled={disabled}
              readOnly={readOnly}
              type={type}
              placeholder={placeholder}
              required={required}
              autoFocus={autoFocus}
              {...field}
              isInvalid={!!error}
            />
            <Form.Control.Feedback type="invalid">
              {error?.message}
            </Form.Control.Feedback>
          </>
        )}
      />
    </Form.Group>
  );
};

export default TextField;
