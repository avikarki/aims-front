import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Controller, type Control } from "react-hook-form";
import { MdError } from "react-icons/md";

interface FormInputTimeProps {
  name: string;
  control: Control<any>;
  label: string;
  placeholder?: string;
  disabled?: boolean;
}

const FormInputTime: React.FC<FormInputTimeProps> = ({
  name,
  control,
  label,
  placeholder = "Select a time",
  disabled = false,
}) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => (
        <div className="flex flex-col mb-4">
          <label className="block mb-1 text-sm font-medium text-gray-700">
            {label}
          </label>
          <DatePicker
            selected={field.value ? new Date(field.value) : null}
            onChange={(time) => field.onChange(time)}
            showTimeSelect
            showTimeSelectOnly
            timeIntervals={15}
            timeCaption="Time"
            dateFormat="hh:mm aa"
            placeholderText={placeholder}
            disabled={disabled}
            className={`block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 focus:outline-2 focus:-outline-offset-2 placeholder:text-gray-400 sm:text-sm/6 ${
              fieldState.error
                ? "outline-red-500 focus:outline-red-500"
                : "outline-gray-300 focus:outline-indigo-600"
            }`}
          />
          {fieldState.error && (
            <MdError
              className="absolute top-1/2 right-2 -translate-y-1/2 text-red-500"
              size={20}
            />
          )}
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

export default FormInputTime;
