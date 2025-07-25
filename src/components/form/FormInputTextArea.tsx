import React from "react";
import { Controller, type Control } from "react-hook-form";
import { MdError } from "react-icons/md";

interface FormInputTextareaProps {
  name: string;
  control: Control<any>;
  label: string;
  placeholder?: string;
  rows?: number;
  disabled?: boolean;
}

const FormInputTextarea: React.FC<FormInputTextareaProps> = ({
  name,
  control,
  label,
  placeholder = "",
  rows = 4,
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
          <div className="relative">
            <textarea
              {...field}
              placeholder={placeholder}
              rows={rows}
              disabled={disabled}
              className={`block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 focus:outline-2 focus:-outline-offset-2 placeholder:text-gray-400 sm:text-sm/6 ${
                fieldState.error
                  ? "outline-red-500 focus:outline-red-500"
                  : "outline-gray-300 focus:outline-indigo-600"
              }`}
            ></textarea>
            {fieldState.error && (
              <MdError
                className="absolute top-1/2 right-2 -translate-y-1/2 text-red-500"
                size={20}
              />
            )}
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

export default FormInputTextarea;
