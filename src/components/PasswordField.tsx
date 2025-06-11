import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import { Controller } from "react-hook-form";
import type { FieldValues } from "react-hook-form";
import { Eye, EyeSlash } from "react-bootstrap-icons";
import type { PasswordFieldProps } from "../types";

const PasswordField = <T extends FieldValues>({
  name,
  label,
  control,
  placeholder,
  showPassword,
  setShowPassword,
}: PasswordFieldProps<T>) => {
  return (
    <Form.Group className="mb-3" controlId={name}>
      <Form.Label>{label}</Form.Label>
      <InputGroup>
        <Controller
          name={name}
          control={control}
          render={({ field, fieldState: { error } }) => (
            <>
              <Form.Control
                placeholder={placeholder}
                type={showPassword ? "text" : "password"}
                required
                {...field}
                isInvalid={!!error}
              />
              <Button
                variant="light"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <Eye /> : <EyeSlash />}
              </Button>
              <Form.Control.Feedback type="invalid">
                {error?.message}
              </Form.Control.Feedback>
            </>
          )}
        />
      </InputGroup>
    </Form.Group>
  );
};

export default PasswordField;
