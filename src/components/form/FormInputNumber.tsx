import React from "react";
import { Controller, type Control } from "react-hook-form";

interface FormInputNumberProps {
  name: string;
  control: Control<any>;
  label: string;
  placeholder?: string;
  min?: number;
  max?: number;
  step?: number;
  disabled?: boolean;
}

const FormInputNumber: React.FC<FormInputNumberProps> = ({
  name,
  control,
  label,
  placeholder = "",
  min,
  max,
  step,
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
          <input
            {...field}
            type="number"
            placeholder={placeholder}
            min={min}
            max={max}
            step={step}
            disabled={disabled}
            className={`block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 focus:outline-2 focus:-outline-offset-2 placeholder:text-gray-400 sm:text-sm/6 ${
              fieldState.error
                ? "outline-red-500 focus:outline-red-500"
                : "outline-gray-300 focus:outline-indigo-600"
            }`}
          />
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

export default FormInputNumber;
