// import { useEffect, useState } from "react";
// import Calculator from "./Calculator";

// declare global {
//   interface Window {
//     bootstrap: any; // For accessing Bootstrap Modal in TS
//   }
// }

// type FieldProps = {
//   label: string;
//   useCalculator: Boolean;
// };

// type FormDataProps = {
//   price: Number;
//   income: Number;
//   expenses: Number;
//   total: Number;
//   field1: Number;
//   field2: Number;
// };

// const fields: FieldProps[] = [
//   {
//     label: "price",
//     useCalculator: true,
//   },
//   {
//     label: "income",
//     useCalculator: true,
//   },
//   {
//     label: "expenses",
//     useCalculator: false,
//   },
//   {
//     label: "total",
//     useCalculator: false,
//   },
//   {
//     label: "field1",
//     useCalculator: true,
//   },
//   {
//     label: "field2",
//     useCalculator: false,
//   },
// ];

// const CalculatorScreen = () => {
//   const [input, setInput] = useState("");
//   const [formData, setFormData] = useState<any>({
//     price: 0,
//     income: 0,
//     expenses: 0,
//     total: 0,
//     field1: 0,
//     field2: 0,
//   });
//   const [item, setItem] = useState("");
//   const [isCalculatorActive, setIsCalculatorActive] = useState(true);
//   console.log("calculator active", isCalculatorActive);

//   const handleFocus = (item: any) => {
//     // const modal = new window.bootstrap.Modal(
//     //   document.getElementById("calculatorModal")
//     // );
//     // modal.show();
//     if (item?.useCalculator) {
//       setItem(item?.label);
//     }
//     setInput("");
//     setIsCalculatorActive(item?.useCalculator);
//   };

//   const handleBlur = (field: any) => {
//     if (field?.useCalculator) {
//       // Only clear `item` if the blur wasn't caused by opening the calculator
//       const modalElement = document.getElementById("calculatorModal");
//       const isModalOpen = modalElement?.classList.contains("show");

//       if (!isModalOpen) {
//         setItem(""); // Clear if calculator isn't open
//       }
//     }
//     setIsCalculatorActive(true);
//   };

//   useEffect(() => {
//     const handleKeyDown = (event: KeyboardEvent) => {
//       if (
//         event.altKey &&
//         event.key.toLowerCase() === "a" &&
//         isCalculatorActive
//       ) {
//         const modal = new window.bootstrap.Modal(
//           document.getElementById("calculatorModal")
//         );
//         modal.show();
//         setIsCalculatorActive(false);
//       }
//     };

//     window.addEventListener("keydown", handleKeyDown);
//     return () => window.removeEventListener("keydown", handleKeyDown);
//   }, [isCalculatorActive]);

//   // Handles condition on closing calculator modal
//   // useEffect(() => {
//   //   const modal: any = document.getElementById("calculatorModal");

//   //   const handleHidden = () => {
//   //     setIsCalculatorActive(true);
//   //     console.log("Modal is closed!", isCalculatorActive);
//   //   };

//   //   modal.addEventListener("hidden.bs.modal", handleHidden);

//   //   return () => {
//   //     modal.removeEventListener("hidden.bs.modal", handleHidden);
//   //   };
//   // }, []);

//   return (
//     <div className="container mt-5">
//       <p className="font-weight-bold">Press "Alt + A" to open calculator</p>
//       <div className="d-flex gap-2">
//         {fields?.map((f) => (
//           <div className="mb-3" key={f?.label}>
//             <label htmlFor="exampleFormControlInput1" className="form-label">
//               {f?.label}
//             </label>
//             <input
//               // readOnly={f?.useCalculator}
//               type="number"
//               className="form-control"
//               id={f?.label}
//               onFocus={() => handleFocus(f)}
//               onBlur={() => handleBlur(f)}
//               value={formData[f?.label]}
//               onChange={(e: any) => {
//                 if (!f?.useCalculator) {
//                   setFormData((prev: any) => ({
//                     ...prev,
//                     [f?.label]: e.target.value,
//                   }));
//                   setInput("");
//                 }
//               }}
//             />
//           </div>
//         ))}
//       </div>
//       {/* Bootstrap Modal */}
//       <div
//         className="modal fade"
//         id="calculatorModal"
//         tabIndex={-1}
//         aria-labelledby="calculatorLabel"
//         aria-hidden="true"
//       >
//         <div className="modal-dialog modal-sm modal-dialog-centered">
//           <div className="modal-content">
//             <div className="modal-header">
//               <h5 className="modal-title" id="calculatorLabel">
//                 {item ? `${item} calculation` : "Calculator"}
//               </h5>
//               {/* <button
//                 type="button"
//                 className="btn-close"
//                 data-bs-dismiss="modal"
//                 aria-label="Close"
//               ></button> */}
//             </div>
//             <Calculator
//               field={formData}
//               setField={setFormData}
//               input={input}
//               setInput={setInput}
//               item={item}
//               setItem={setItem}
//               setIsCalculatorActive={setIsCalculatorActive}
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CalculatorScreen;

import { useState } from "react";
import { Form, Container } from "react-bootstrap";
import Calculator from "../../components/utility/Calculator";
// import useShortcutKeys from "../hooks/useShortcutKeys";
import PopupModal from "../../components/utility/PopupModal";
import { useShortcuts } from "../../hooks/useShortcutKeys";
import { shortcutKeys } from "../../shortcutKeys";

declare global {
  interface Window {
    bootstrap: any; // For accessing Bootstrap Modal in TS
  }
}

type FieldProps = {
  label: string;
  useCalculator: Boolean;
};

// type FormDataProps = {
//   price: Number;
//   income: Number;
//   expenses: Number;
//   total: Number;
//   field1: Number;
//   field2: Number;
// };

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

  const handleClose = () => {
    setShowModal(false);
  };

  const openCalculator = () => {
    setShowModal(true);
    setIsCalculatorActive(false);
  };

  const shortcutHandlers = {
    calculator: () =>
      isCalculatorActive &&
      (document.getElementById("calculator") as HTMLElement).click(),
    // ... other handlers
  };

  // Activate shortcuts
  useShortcuts(shortcutKeys, shortcutHandlers);

  // useShortcutKeys(
  //   (event: KeyboardEvent) => {
  //     if (event.altKey && event.code === "KeyA" && isCalculatorActive) {
  //       setShowModal(true);
  //       setIsCalculatorActive(false);
  //     }
  //   },
  //   [isCalculatorActive]
  // );

  return (
    <Container className="mt-5">
      <div id="calculator" style={{ display: "none" }} onClick={openCalculator}>
        calc
      </div>
      <p className="font-weight-bold">Press "Alt + C" to open calculator</p>
      <div className="d-flex gap-2">
        {fields?.map((f) => (
          <Form.Group className="mb-3" key={f?.label}>
            <Form.Label htmlFor="exampleFormControlInput1">
              {f?.label}
            </Form.Label>
            <Form.Control
              type="number"
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
          </Form.Group>
        ))}
      </div>

      <PopupModal
        open={showModal}
        onClose={handleClose}
        title={item ? `${item} calculation` : "Calculator"}
        size="sm"
      >
        <Calculator
          field={formData}
          setField={setFormData}
          input={input}
          setInput={setInput}
          item={item}
          setItem={setItem}
          setIsCalculatorActive={setIsCalculatorActive}
          setShowModal={setShowModal}
        />
      </PopupModal>
      {/* <Modal
        show={showModal}
        onHide={() => setShowModal(false)}
        size="sm"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>
            {item ? `${item} calculation` : "Calculator"}
          </Modal.Title>
        </Modal.Header>
        <Calculator
          field={formData}
          setField={setFormData}
          input={input}
          setInput={setInput}
          item={item}
          setItem={setItem}
          setIsCalculatorActive={setIsCalculatorActive}
          setShowModal={setShowModal}
        />
      </Modal> */}
    </Container>
  );
};

export default CalculatorScreen;
