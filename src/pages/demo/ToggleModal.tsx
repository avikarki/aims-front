import { useState } from "react";
import { useShortcuts } from "../../hooks/useShortcutKeys";
import { shortcutKeys } from "../../assets/shortcutKeys";
import ReusableButton from "../../components/common/ReusableButton";
import DialogBox from "../../components/utility/DialogBox";
import Calculator from "./Calculator";

const ToggleModal = () => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [openCalculator, setOpenCalculator] = useState<boolean>(false);

  const [input, setInput] = useState<string>("");
  const [formData, setFormData] = useState<any>({
    sum: 0,
    difference: 0,
  });
  const [item, setItem] = useState("");
  const [isCalculatorActive, setIsCalculatorActive] = useState<Boolean>(true);

  const handleFocus = (item: any) => {
    setIsCalculatorActive(true);
    setItem(item);
    setInput("");
  };

  const shortcutHandlers = {
    calculator: () =>
      isCalculatorActive &&
      (document.getElementById("calculator") as HTMLButtonElement).click(),
  };

  // Activate shortcuts
  useShortcuts(shortcutKeys, shortcutHandlers, {
    allowInModal: ["calculator"], // Only allow calculator shortcut when modal is open
  });

  return (
    <div className="container mx-auto my-5">
      <ReusableButton onClick={() => setOpenModal(true)}>
        Open Client Modal
      </ReusableButton>

      <DialogBox confirmText="Submit" open={openModal} setOpen={setOpenModal}>
        <div className="flex flex-col gap-3">
          <div>
            <label
              htmlFor="sum"
              className="block text-sm/6 font-medium text-gray-900 mb-1"
            >
              Sum
            </label>
            <input
              readOnly
              id="sum"
              type="number"
              placeholder="Sum"
              autoFocus
              onFocus={() => handleFocus("sum")}
              value={formData?.sum}
              className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 focus:outline-2 focus:-outline-offset-2 placeholder:text-gray-400 sm:text-sm/6 outline-gray-300 focus:outline-indigo-600"
            />
          </div>
          <div>
            <label
              htmlFor="difference"
              className="block text-sm/6 font-medium text-gray-900 mb-1"
            >
              Difference
            </label>
            <input
              readOnly
              id="difference"
              type="number"
              placeholder="Difference"
              onFocus={() => handleFocus("difference")}
              value={formData?.difference}
              className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 focus:outline-2 focus:-outline-offset-2 placeholder:text-gray-400 sm:text-sm/6 outline-gray-300 focus:outline-indigo-600"
            />
          </div>
          <ReusableButton
            onClick={() => setOpenCalculator(true)}
            id="calculator"
            style={{ display: "none" }}
          >
            Open Calculator
          </ReusableButton>
        </div>
      </DialogBox>

      <Calculator
        field={formData}
        setField={setFormData}
        input={input}
        setInput={setInput}
        item={item}
        setItem={setItem}
        setIsCalculatorActive={setIsCalculatorActive}
        open={openCalculator}
        title={item ? `${item} calculation` : "Calculator"}
        setOpen={setOpenCalculator}
      />
    </div>
  );
};

export default ToggleModal;
