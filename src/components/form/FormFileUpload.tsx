import React, { useState, useEffect } from "react";
import { Controller, type Control } from "react-hook-form";

interface FormFileUploadProps {
  name: string;
  control: Control<any>;
  label: string;
  accept?: string;
  disabled?: boolean;
}

const FormFileUpload: React.FC<FormFileUploadProps> = ({
  name,
  control,
  label,
  accept = "image/*",
  disabled = false,
}) => {
  const [preview, setPreview] = useState<string | null>(null);

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => {
        const file = field.value?.[0];

        useEffect(() => {
          if (file) {
            const objectUrl = URL.createObjectURL(file);
            setPreview(objectUrl);

            return () => URL.revokeObjectURL(objectUrl); // Cleanup
          } else {
            setPreview(null);
          }
        }, [file]);

        return (
          <div className="mb-4">
            <label className="block mb-1 text-sm font-medium text-gray-700">
              {label}
            </label>
            <input
              type="file"
              accept={accept}
              onChange={(e) => field.onChange(e.target.files)}
              disabled={disabled}
              className="block w-full text-sm text-gray-700 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-600 hover:file:bg-blue-100"
            />
            {preview && (
              <div className="mt-2">
                <img
                  src={preview}
                  alt="Preview"
                  className="w-32 h-32 object-cover border rounded"
                />
              </div>
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

export default FormFileUpload;
