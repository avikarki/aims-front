import React, { useState, useEffect } from "react";
import { Controller, type Control } from "react-hook-form";
import { MdError } from "react-icons/md";

interface Option {
  label: string;
  value: string | number;
}

interface FormAutocompleteProps {
  name: string;
  control: Control<any>;
  label: string;
  options: Option[];
  placeholder?: string;
  disabled?: boolean;
}

const FormAutocomplete: React.FC<FormAutocompleteProps> = ({
  name,
  control,
  label,
  options,
  placeholder = "Search...",
  disabled = false,
}) => {
  const [filteredOptions, setFilteredOptions] = useState<Option[]>([]);
  const [inputValue, setInputValue] = useState("");

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => {
        useEffect(() => {
          const match = options.find((opt) => opt.value === field.value);
          if (match) setInputValue(match.label);
        }, [field.value]);

        const handleInputChange = (value: string) => {
          setInputValue(value);
          setFilteredOptions(
            options.filter((opt) =>
              opt.label.toLowerCase().includes(value.toLowerCase())
            )
          );
        };

        const handleSelect = (option: Option) => {
          field.onChange(option.value);
          setInputValue(option.label);
          setFilteredOptions([]);
        };

        return (
          <div className="mb-4 relative">
            <label className="block mb-1 text-sm font-medium text-gray-700">
              {label}
            </label>
            <div className="relative">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => handleInputChange(e.target.value)}
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
            {filteredOptions.length > 0 && (
              <ul className="absolute z-10 bg-white border border-gray-200 rounded-md w-full mt-1 max-h-48 overflow-auto shadow-sm">
                {filteredOptions.map((opt) => (
                  <li
                    key={opt.value}
                    onClick={() => handleSelect(opt)}
                    className="px-3 py-2 text-sm hover:bg-blue-100 cursor-pointer"
                  >
                    {opt.label}
                  </li>
                ))}
              </ul>
            )}
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

export default FormAutocomplete;
