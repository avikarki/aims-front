import React from "react";
import { Controller, type Control } from "react-hook-form";
import { MdError } from "react-icons/md";

interface FormCurrencyInputProps {
  name: string;
  control: Control<any>;
  label: string;
  placeholder?: string;
  disabled?: boolean;
}

const formatCurrency = (value: string) => {
  const numberValue = value.replace(/[^\d.]/g, "");
  const [integer, decimal] = numberValue.split(".");
  const formatted = parseFloat(integer || "0").toLocaleString("en-US");
  return decimal !== undefined
    ? `${formatted}.${decimal.slice(0, 2)}`
    : formatted;
};

const unformatCurrency = (value: string) => value.replace(/,/g, "");

const FormCurrencyInput: React.FC<FormCurrencyInputProps> = ({
  name,
  control,
  label,
  placeholder = "Enter amount",
  disabled = false,
}) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => {
        const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
          const raw = unformatCurrency(e.target.value);
          if (!isNaN(Number(raw))) {
            field.onChange(raw);
          }
        };

        return (
          <div className="mb-4">
            <label className="block mb-1 text-sm font-medium text-gray-700">
              {label}
            </label>
            <div className="relative">
              <input
                type="text"
                value={formatCurrency(field.value || "")}
                onChange={handleChange}
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
              <p className="mt-1 text-xs text-red-500">
                {fieldState.error.message}
              </p>
            )}
          </div>
        );
      }}
    />
  );
};

export default FormCurrencyInput;
