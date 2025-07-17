import React from "react";
import { Controller, type Control } from "react-hook-form";

interface Option {
  label: string;
  value: string | number;
}

interface FormInputRadioGroupProps {
  name: string;
  control: Control<any>;
  label: string;
  options: Option[];
  disabled?: boolean;
}

const FormInputRadioGroup: React.FC<FormInputRadioGroupProps> = ({
  name,
  control,
  label,
  options,
  disabled = false,
}) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => (
        <div className="mb-4">
          <p className="block mb-2 text-sm font-medium text-gray-700">
            {label}
          </p>
          <div className="flex flex-col">
            {options.map((opt) => (
              <label
                key={opt.value}
                className="inline-flex items-center text-sm text-gray-700"
              >
                <input
                  type="radio"
                  value={opt.value}
                  checked={field.value === opt.value}
                  onChange={() => field.onChange(opt.value)}
                  disabled={disabled}
                  className="h-3 w-3 text-blue-600 border-gray-300"
                />
                <span className="ml-2">{opt.label}</span>
              </label>
            ))}
          </div>
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

export default FormInputRadioGroup;
