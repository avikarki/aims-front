import React from "react";
import { Controller, type Control } from "react-hook-form";

interface FormInputCheckboxProps {
  name: string;
  control: Control<any>;
  label: string;
  disabled?: boolean;
}

const FormInputCheckbox: React.FC<FormInputCheckboxProps> = ({
  name,
  control,
  label,
  disabled = false,
}) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => (
        <div className="mb-4">
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              {...field}
              checked={field.value}
              disabled={disabled}
              className={`h-3 w-3 text-blue-600 border-gray-300 rounded focus:ring focus:ring-blue-300 ${
                fieldState.error ? "border-red-500 ring-red-500" : ""
              }`}
            />
            <span className="ml-2 text-sm text-gray-700">{label}</span>
          </label>
          {fieldState.error && (
            <p className="mt-1 text-xs text-red-500">
              {fieldState.error.message}
            </p>
          )}
        </div>
      )}
    />
  );
};

export default FormInputCheckbox;
