import React from "react";
import { Controller, type Control } from "react-hook-form";

interface FormSwitchToggleProps {
  name: string;
  control: Control<any>;
  label: string;
  disabled?: boolean;
}

const FormSwitchToggle: React.FC<FormSwitchToggleProps> = ({
  name,
  control,
  label,
  disabled = false,
}) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <div className="mb-4 flex items-center justify-between">
          <label className="text-sm font-medium text-gray-700">{label}</label>
          <button
            type="button"
            disabled={disabled}
            onClick={() => field.onChange(!field.value)}
            className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-200 ${
              field.value ? "bg-blue-600" : "bg-gray-300"
            }`}
          >
            <span
              className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-200 ${
                field.value ? "translate-x-6" : "translate-x-1"
              }`}
            />
          </button>
        </div>
      )}
    />
  );
};

export default FormSwitchToggle;
