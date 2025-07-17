import React, { useState } from "react";
import { Controller, type Control } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa"; // or use any icon library you prefer
import { MdError } from "react-icons/md";

interface FormInputPasswordProps {
  name: string;
  control: Control<any>;
  label: string;
  placeholder?: string;
  disabled?: boolean;
}

const FormInputPassword: React.FC<FormInputPasswordProps> = ({
  name,
  control,
  label,
  placeholder = "Enter password",
  disabled = false,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => (
        <div className="mb-4 relative">
          <label className="block mb-1 text-sm font-medium text-gray-700">
            {label}
          </label>
          <div className="relative">
            <input
              {...field}
              type={showPassword ? "text" : "password"}
              placeholder={placeholder}
              disabled={disabled}
              //   className={`w-full px-3 py-2 border rounded-md shadow-sm text-sm focus:outline-none pr-10 ${
              //     fieldState.error
              //       ? "border-red-500 focus:ring-red-300"
              //       : "border-gray-300 focus:ring-blue-300"
              //   }`}
              className={`block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 focus:outline-2 focus:-outline-offset-2 placeholder:text-gray-400 sm:text-sm/6 ${
                fieldState.error
                  ? "outline-red-500 focus:outline-red-500"
                  : "outline-gray-300 focus:outline-indigo-600"
              }`}
            />
            {fieldState.error && (
              <MdError
                className="absolute top-1/2 right-8 -translate-y-1/2 text-red-500"
                size={20}
              />
            )}
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute cursor-pointer right-2 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
              tabIndex={-1}
            >
              {showPassword ? <FaEyeSlash size={18} /> : <FaEye size={18} />}
            </button>
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

export default FormInputPassword;
