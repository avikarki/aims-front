import { useState } from "react";
import { useShortcuts } from "../../hooks/useShortcutKeys";
import { shortcutKeys } from "../../assets/shortcutKeys";
import Calculator from "./Calculator";

type FieldProps = {
  label: string;
  useCalculator: Boolean;
};

const fields: FieldProps[] = [
  {
    label: "price",
    useCalculator: true,
  },
  {
    label: "income",
    useCalculator: true,
  },
  {
    label: "expenses",
    useCalculator: false,
  },
  {
    label: "total",
    useCalculator: false,
  },
  {
    label: "field1",
    useCalculator: true,
  },
  {
    label: "field2",
    useCalculator: false,
  },
];

const CalculatorScreen = () => {
  const [input, setInput] = useState<string>("");
  const [formData, setFormData] = useState<any>({
    price: 0,
    income: 0,
    expenses: 0,
    total: 0,
    field1: 0,
    field2: 0,
  });
  const [item, setItem] = useState("");
  const [isCalculatorActive, setIsCalculatorActive] = useState<Boolean>(true);
  const [showModal, setShowModal] = useState(false);

  const handleFocus = (item: FieldProps) => {
    if (item?.useCalculator) {
      setItem(item?.label);
    }
    setInput("");
    setIsCalculatorActive(item?.useCalculator);
  };

  const handleBlur = (field: FieldProps) => {
    if (field?.useCalculator) {
      if (!showModal) {
        setItem("");
      }
    }
    setIsCalculatorActive(true);
  };

  const openCalculator = () => {
    setShowModal(true);
    setIsCalculatorActive(false);
  };

  const shortcutHandlers = {
    calculator: () =>
      isCalculatorActive &&
      (document.getElementById("calculator") as HTMLElement).click(),
  };

  // Activate shortcuts
  useShortcuts(shortcutKeys, shortcutHandlers);

  return (
    <div className="container my-5 mx-auto">
      <div id="calculator" className="hidden" onClick={openCalculator}>
        calc
      </div>
      <p className="font-bold">Press "Alt + C" to open calculator</p>

      <div className="flex gap-2 my-5">
        {fields?.map((f) => (
          <div key={f?.label}>
            <label htmlFor={f?.label}>{f?.label}</label>
            <input
              type="number"
              className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 focus:outline-2 focus:-outline-offset-2 placeholder:text-gray-400 sm:text-sm/6 outline-gray-300 focus:outline-indigo-600"
              id={f?.label}
              onFocus={() => handleFocus(f)}
              onBlur={() => handleBlur(f)}
              value={formData[f?.label]}
              onChange={(e: any) => {
                if (!f?.useCalculator) {
                  setFormData((prev: any) => ({
                    ...prev,
                    [f?.label]: e.target.value,
                  }));
                  setInput("");
                }
              }}
            />
          </div>
        ))}
      </div>

      <Calculator
        title={item ? `${item} calculation` : "Calculator"}
        field={formData}
        setField={setFormData}
        input={input}
        setInput={setInput}
        item={item}
        setItem={setItem}
        setIsCalculatorActive={setIsCalculatorActive}
        setOpen={setShowModal}
        open={showModal}
      />
    </div>
  );
};

export default CalculatorScreen;
