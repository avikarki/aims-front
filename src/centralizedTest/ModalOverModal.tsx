import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import PopupModal from "../components/PopupModal";
import Calculator from "../components/Calculator";
import { useShortcuts } from "../hooks/useShortcutKeys";
import { shortcutKeys } from "../shortcutKeys";
// import useShortcutKeys from "../hooks/useShortcutKeys";

const ModalOverModal = () => {
  const [activeModal, setActiveModal] = useState<string | null>(null);
  const [input, setInput] = useState<string>("");
  const [formData, setFormData] = useState<any>({
    sum: 0,
    difference: 0,
  });
  const [item, setItem] = useState("");
  const [isCalculatorActive, setIsCalculatorActive] = useState<Boolean>(true);
  // const [showModal, setShowModal] = useState(false);

  const handleClose = () => {
    setActiveModal(null);
  };

  const handleFocus = (item: any) => {
    setIsCalculatorActive(true);
    setItem(item);
    setInput("");
  };

  const shortcutHandlers = {
    calculator: () =>
      isCalculatorActive &&
      (document.getElementById("calculator") as HTMLButtonElement).click(),
    // toggleModal_back: () => {
    //   (
    //     document.getElementById("toggleModal_back") as HTMLButtonElement
    //   ).click();
    // console.log("Clicked Enter in Calculator");
    // },
    // ... other handlers
  };

  // const modalShortcutKeys: any = shortcutKeys?.find(
  //   (k) => k?.id === "toggleModal"
  // )?.subKeys;

  // Activate shortcuts
  useShortcuts(shortcutKeys, shortcutHandlers, {
    allowInModal: ["calculator", "toggleModal_back"], // Only allow calculator shortcut when modal is open
  });

  // useCalculatorShortcutKeys(
  //   (event: KeyboardEvent) => {
  //     if (event.altKey && event.code === "KeyC" && isCalculatorActive) {
  //       setActiveModal("calculator");
  //     }
  //   },
  //   [isCalculatorActive]
  // );

  return (
    <>
      {/* Client Modal */}
      <PopupModal
        open={activeModal === "client"}
        title="Client Modal"
        onClose={handleClose}
      >
        <div className="d-flex flex-column gap-3">
          <Form.Control
            type="number"
            placeholder="Sum"
            autoFocus
            onFocus={() => handleFocus("sum")}
            value={formData?.sum}
          />
          <Form.Control
            type="number"
            placeholder="Difference"
            onFocus={() => handleFocus("difference")}
            value={formData?.difference}
          />
          <Button
            onClick={() => setActiveModal("calculator")}
            id="calculator"
            className="d-none"
          >
            Open Calculator
          </Button>
        </div>
      </PopupModal>

      {/* Calculator Modal */}
      <PopupModal
        open={activeModal === "calculator"}
        title={item ? `${item} calculation` : "Calculator"}
        // title="Calculator"
        size="sm"
        onClose={handleClose}
      >
        <Calculator
          field={formData}
          setField={setFormData}
          input={input}
          setInput={setInput}
          item={item}
          setItem={setItem}
          setIsCalculatorActive={setIsCalculatorActive}
          // setShowModal={setShowModal}
        />
        <Button
          onClick={() => setActiveModal("client")}
          id="toggleModal_back"
          className="d-none"
        >
          Back to Client Modal
        </Button>
      </PopupModal>

      {/* Open buttons */}
      <Button onClick={() => setActiveModal("client")}>
        Open Client Modal
      </Button>
      {/* <Button onClick={() => setActiveModal("modal2")}>Open Modal 2</Button> */}
    </>
  );
};

export default ModalOverModal;
