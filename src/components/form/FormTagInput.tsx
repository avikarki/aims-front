import {
  Controller,
  type Control,
  type FieldPath,
  type FieldValues,
} from "react-hook-form";
import { useRef, useState } from "react";

type Option = { label: string; value: string | number };

type RHFTailwindMultiSelectProps<T extends FieldValues> = {
  name: FieldPath<T>;
  control: Control<T>;
  label?: string;
  options: Option[];
};

const FormTagInput = <T extends FieldValues>({
  name,
  control,
  label = "",
  options,
}: RHFTailwindMultiSelectProps<T>) => {
  const [search, setSearch] = useState("");
  const inputRef = useRef<HTMLInputElement | null>(null);

  return (
    <Controller
      name={name}
      control={control}
      //   defaultValue={[]}
      render={({ field, fieldState }) => {
        const selected: Option[] = field.value || [];

        const filteredOptions = options.filter(
          (opt) =>
            opt.label.toLowerCase().includes(search.toLowerCase()) &&
            !selected.some((s) => s.value === opt.value)
        );

        const handleAdd = (opt: Option) => {
          field.onChange([...selected, opt]);
          setSearch("");
          inputRef.current?.focus();
        };

        const handleRemove = (value: Option["value"]) => {
          field.onChange(selected.filter((s) => s.value !== value));
        };

        return (
          <div className="w-full relative">
            {label && <label className="block mb-1 font-medium">{label}</label>}

            {/* Input field with chips inside */}
            <div
              className={`flex flex-wrap items-center border px-2 py-1 rounded-md gap-2 focus-within:ring-2 ${
                fieldState.error
                  ? "border-red-500 ring-red-500"
                  : "border-gray-300 ring-indigo-600"
              }`}
              onClick={() => inputRef.current?.focus()}
            >
              {selected.map((item) => (
                <span
                  key={item.value}
                  className="flex items-center bg-blue-100 text-blue-700 text-sm rounded-full px-2 py-0.5"
                >
                  {item.label}
                  <button
                    type="button"
                    className="ml-1 text-indigo-600 hover:text-red-500"
                    onClick={() => handleRemove(item.value)}
                  >
                    ×
                  </button>
                </span>
              ))}

              <input
                ref={inputRef}
                type="text"
                className="flex-1 border-none focus:outline-none text-sm min-w-[120px] py-1"
                placeholder="Type to search..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>

            {/* Dropdown options */}
            {search && filteredOptions.length > 0 && (
              <ul className="absolute z-10 mt-1 bg-white w-full rounded shadow max-h-40 overflow-y-auto">
                {filteredOptions.map((opt) => (
                  <li
                    key={opt.value}
                    className="px-3 py-2 cursor-pointer hover:bg-blue-100"
                    onClick={() => handleAdd(opt)}
                  >
                    {opt.label}
                  </li>
                ))}
              </ul>
            )}

            {fieldState.error && (
              <p className="text-xs text-red-500 mt-1">
                {fieldState.error.message}
              </p>
            )}
          </div>
        );
      }}
    />
  );
};

export default FormTagInput;
