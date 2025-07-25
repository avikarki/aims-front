import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Controller, type Control } from "react-hook-form";

interface FormInputDateProps {
  name: string;
  control: Control<any>;
  label: string;
  placeholder?: string;
  disabled?: boolean;
  minDate?: Date;
  maxDate?: Date;
}

const FormInputDate: React.FC<FormInputDateProps> = ({
  name,
  control,
  label,
  placeholder = "Select a date",
  disabled = false,
  minDate,
  maxDate,
}) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => (
        <div className="flex justify-center flex-col mb-4">
          <label className="block mb-1 text-sm font-medium text-gray-700">
            {label}
          </label>
          <DatePicker
            id={name}
            selected={field.value ? new Date(field.value) : null}
            onChange={(date) => field.onChange(date)}
            placeholderText={placeholder}
            disabled={disabled}
            minDate={minDate}
            maxDate={maxDate}
            dateFormat="yyyy-MM-dd"
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

export default FormInputDate;
