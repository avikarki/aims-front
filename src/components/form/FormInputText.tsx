import React, { forwardRef } from "react";
import { Controller, type Control } from "react-hook-form";
import { MdError } from "react-icons/md";

interface FormInputTextProps {
  name: string;
  control: Control<any>;
  label: string;
  placeholder?: string;
  type?: string;
  disabled?: boolean;
  tabIndex?: number;
  autoFocus?: boolean;
}

const FormInputText = forwardRef<HTMLInputElement, FormInputTextProps>(
  (
    {
      name,
      control,
      label,
      placeholder = "",
      type = "text",
      disabled = false,
      tabIndex,
      autoFocus,
    },
    ref
  ) => {
    return (
      <Controller
        name={name}
        control={control}
        render={({ field: { ref: hookFormRef, ...field }, fieldState }) => (
          <div className="mb-4">
            <label className="block text-sm/6 font-medium text-gray-900">
              {label}
            </label>
            <div className="mt-2">
              <div className="relative">
                <input
                  ref={(instance) => {
                    // Handle React Hook Form ref
                    hookFormRef(instance);
                    // Handle forwarded ref
                    if (typeof ref === "function") {
                      ref(instance);
                    } else if (ref) {
                      (
                        ref as React.RefObject<HTMLInputElement | null>
                      ).current = instance;
                    }
                    // Handle autoFocus if needed
                    if (autoFocus && instance) {
                      setTimeout(() => instance.focus(), 50);
                    }
                  }}
                  autoFocus={autoFocus}
                  tabIndex={tabIndex}
                  {...field}
                  type={type}
                  placeholder={placeholder}
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
              </div>
              {fieldState.error && (
                <>
                  <p className="mt-1 text-xs text-red-600">
                    {fieldState.error.message}
                  </p>
                </>
              )}
            </div>
          </div>
        )}
      />
    );
  }
);

export default FormInputText;
