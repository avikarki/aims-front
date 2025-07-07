import React from "react";
import { Controller, type Control } from "react-hook-form";

interface Option {
  label: string;
  value: string | number;
}

interface FormInputSelectProps {
  name: string;
  control: Control<any>;
  label: string;
  options: Option[];
  placeholder?: string;
  disabled?: boolean;
}

const FormInputSelect: React.FC<FormInputSelectProps> = ({
  name,
  control,
  label,
  options,
  placeholder = "Select an option",
  disabled = false,
}) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => (
        <div className="mb-4">
          <label className="block mb-1 text-sm font-medium text-gray-700">
            {label}
          </label>
          <select
            {...field}
            disabled={disabled}
            className={`block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 focus:outline-2 focus:-outline-offset-2 placeholder:text-gray-400 sm:text-sm/6 ${
              fieldState.error
                ? "outline-red-500 focus:outline-red-500"
                : "outline-gray-300 focus:outline-indigo-600"
            }`}
          >
            <option value="">{placeholder}</option>
            {options.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
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

export default FormInputSelect;
