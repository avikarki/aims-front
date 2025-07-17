import { useState } from "react";
import { evaluate } from "mathjs";
import { useCalculatorShortcutKeys } from "../../hooks/useShortcutKeys";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";

interface CalculatorProps {
  setField: (field: any) => void;
  setInput: React.Dispatch<React.SetStateAction<string>>;
  input: string;
  field: any;
  item: string;
  setItem: (item: string) => void;
  setIsCalculatorActive: (active: boolean) => void;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  title?: string;
  open: boolean;
}

const Calculator = ({
  setField,
  input,
  setInput,
  field,
  item,
  setItem,
  setIsCalculatorActive,
  setOpen,
  open,
  title = "Calculator",
}: CalculatorProps) => {
  const [calc, setCalc] = useState("");
  const [calculated, setCalculated] = useState(false);
  const allowedKeys = "0123456789+-*/.()%";
  const operators = "+-*/%";

  const handleClick = (value: string) => {
    if (value === "=") {
      try {
        setCalc(input);
        setInput(evaluate(input).toString());
        setCalculated(true);
      } catch {
        setInput("Error");
        setCalculated(true);
      }
    } else if (value.toLowerCase() === "c") {
      setInput("");
      setCalc("");
      setCalculated(false);
    } else if (allowedKeys.includes(value)) {
      setInput((prev: string) => {
        const isNumber = /[0-9]/.test(value);

        if (calculated && isNumber) {
          setCalculated(false);
          return value;
        }

        const lastChar = prev[prev.length - 1];

        if (operators.includes(value) && operators.includes(lastChar)) {
          setCalculated(false);
          return prev.slice(0, -1) + value;
        }

        setCalculated(false);
        return prev + value;
      });
    }
  };

  const buttons = [
    "C",
    "",
    "",
    "/",
    "7",
    "8",
    "9",
    "*",
    "4",
    "5",
    "6",
    "-",
    "1",
    "2",
    "3",
    "+",
    ".",
    "0",
    "%",
    "=",
  ];

  const handleApply = () => {
    setField({
      ...field,
      [item]: input ? evaluate(input).toFixed(2).toString() : "0",
    });
    handleClose();
    // Only for Model over Modal or toggle Modal page
    // (document.getElementById("toggleModal_back") as HTMLButtonElement).click();
  };

  const handleClose = () => {
    setInput("");
    setCalc("");
    setItem("");
    setCalculated(false);
    setIsCalculatorActive(true);
    setOpen && setOpen(false);
  };

  const handleCancel = () => {
    setInput("");
    setCalc("");
    setItem("");
    setCalculated(false);
    setIsCalculatorActive(true);
    setOpen && setOpen(false);
  };

  useCalculatorShortcutKeys(
    (event: KeyboardEvent) => {
      if (event.key === "=") {
        event.preventDefault();
        try {
          setCalc(input);
          setInput(evaluate(input).toString());
          setCalculated(true);
        } catch (err) {
          setInput("Error");
          setCalculated(true);
        }
      } else if (event.code === "KeyC") {
        setInput("");
        setCalculated(false);
      } else if (allowedKeys.includes(event.key)) {
        setInput((prev: string) => {
          const isNumber = /[0-9]/.test(event.key);

          if (calculated && isNumber) {
            setCalculated(false);
            return event.key;
          }

          const lastChar = prev[prev.length - 1];

          if (operators.includes(event.key) && operators.includes(lastChar)) {
            setCalculated(false);
            return prev.slice(0, -1) + event.key;
          }

          setCalculated(false);
          return prev + event.key;
        });
      } else if (event.code === "Enter") {
        handleApply();
      } else if (event.code === "Escape") {
        handleCancel();
      }
    },
    [input, calculated]
  );

  return (
    <Dialog open={open} onClose={setOpen} className="relative z-10">
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-gray-500/75 transition-opacity data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in"
      />

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full justify-center p-4 text-center items-center sm:p-0">
          <DialogPanel
            transition
            className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in sm:my-8 sm:w-full max-w-[300px] data-closed:sm:translate-y-0 data-closed:sm:scale-95"
          >
            <div className="bg-white px-3 pt-5 pb-3">
              <div>
                <div>
                  <DialogTitle
                    as="h2"
                    className="text-center text-xl font-bold text-gray-900"
                  >
                    {title}
                  </DialogTitle>
                  <div>
                    <div>
                      {calc && (
                        <p className="text-gray-500 pb-1 pt-3 px-2">{calc}</p>
                      )}
                      <input
                        value={input}
                        readOnly
                        disabled
                        type="text"
                        className="w-full wrap-normal bg-gray-200 border border-gray-300 px-2 py-4 my-2 rounded-xs"
                      />
                      <div className="grid grid-cols-4 gap-1">
                        {buttons.map((btn, index) =>
                          btn ? (
                            <button
                              key={btn}
                              className={`w-full h-16 rounded-md text-white ${
                                btn === "="
                                  ? "bg-amber-400"
                                  : btn === "C"
                                  ? "bg-black"
                                  : "bg-gray-500"
                              }`}
                              onClick={() => handleClick(btn)}
                            >
                              {btn}
                            </button>
                          ) : (
                            <span
                              key={`empty-${index}`}
                              className="w-16 h-16"
                            ></span>
                          )
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
};

export default Calculator;
