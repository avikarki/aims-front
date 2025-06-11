// import { useEffect, useState } from "react";
// import { evaluate } from "mathjs";

// const Calculator = ({
//   setField,
//   input,
//   setInput,
//   field,
//   item,
//   setItem,
//   setIsCalculatorActive,
// }: any) => {
//   // const [input, setInput] = useState("");
//   const [calc, setCalc] = useState("");
//   const [calculated, setCalculated] = useState(false);
//   const allowedKeys = "0123456789+-*/.()%";
//   const operators = "+-*/%";

//   const handleClick = (value: string) => {
//     if (value === "=") {
//       try {
//         // Unsafe eval - for production use `mathjs` instead
//         setCalc(input);
//         setInput(evaluate(input).toString());
//         setCalculated(true);
//       } catch {
//         setInput("Error");
//         setCalculated(true);
//       }
//     } else if (value.toLowerCase() === "c") {
//       setInput("");
//       setCalc("");
//       setCalculated(false);
//     } else if (allowedKeys.includes(value)) {
//       setInput((prev: any) => {
//         const isNumber = /[0-9]/.test(value);

//         if (calculated && isNumber) {
//           setCalculated(false);
//           return value;
//         }

//         const lastChar = prev[prev.length - 1];

//         // Replace last operator if current key is an operator
//         if (operators.includes(value) && operators.includes(lastChar)) {
//           setCalculated(false);
//           return prev.slice(0, -1) + value;
//         }

//         setCalculated(false);
//         return prev + value;
//       });
//     }
//     // else {
//     //   setInput((prev) => prev + value);
//     // }
//   };

//   const buttons = [
//     "C",
//     "",
//     "",
//     "/",
//     "7",
//     "8",
//     "9",
//     "*",
//     "4",
//     "5",
//     "6",
//     "-",
//     "1",
//     "2",
//     "3",
//     "+",
//     ".",
//     "0",
//     "%",
//     "=",
//   ];

//   useEffect(() => {
//     const handleKeyDownCalc = (event: KeyboardEvent) => {
//       if (event.key === "=") {
//         event.preventDefault();
//         try {
//           setCalc(input);
//           setInput(evaluate(input).toString());
//           setCalculated(true);
//         } catch (err) {
//           setInput("Error");
//           setCalculated(true);
//         }
//       } else if (event.key.toLowerCase() === "c") {
//         setInput("");
//         setCalculated(false);
//       } else if (allowedKeys.includes(event.key)) {
//         // setInput((prev) => prev + event.key);
//         setInput((prev: any) => {
//           const isNumber = /[0-9]/.test(event.key);

//           if (calculated && isNumber) {
//             setCalculated(false);
//             return event.key;
//           }

//           const lastChar = prev[prev.length - 1];

//           // Replace last operator if current key is an operator
//           if (operators.includes(event.key) && operators.includes(lastChar)) {
//             setCalculated(false);
//             return prev.slice(0, -1) + event.key;
//           }

//           setCalculated(false);
//           return prev + event.key;
//         });
//       } else if (event.key === "Enter") {
//         const modalElement = document.getElementById("calculatorModal");
//         const modalInstance =
//           window.bootstrap.Modal.getInstance(modalElement) ||
//           new window.bootstrap.Modal(modalElement);

//         setField({
//           ...field,
//           [item]: input ? evaluate(input).toFixed(2).toString() : 0,
//         });
//         setInput("");
//         setCalc("");
//         setItem("");
//         setCalculated(false);
//         setIsCalculatorActive(true);
//         modalInstance.hide();
//       } else if (event.key === "Escape") {
//         setInput("");
//         setCalc("");
//         setItem("");
//         setCalculated(false);
//         setIsCalculatorActive(true);
//       }
//     };

//     window.addEventListener("keydown", handleKeyDownCalc);
//     return () => window.removeEventListener("keydown", handleKeyDownCalc);
//   }, [input, item, calculated]);

//   return (
//     <div className="modal-body">
//       {calc && <p className="text-bg-light p-2">{calc}</p>}
//       <input
//         value={input}
//         readOnly
//         disabled
//         type="text"
//         className="form-control mb-3"
//       />
//       <div className="d-flex flex-wrap gap-2">
//         {buttons.map((btn) =>
//           btn ? (
//             <button
//               key={btn}
//               className={`btn ${btn ? "btn-secondary" : ""} ${
//                 btn === "=" ? "text-bg-warning" : ""
//               } ${btn === "C" ? "text-bg-dark" : ""}`}
//               style={{ width: "60px" }}
//               onClick={() => handleClick(btn)}
//             >
//               {btn}
//             </button>
//           ) : (
//             <span style={{ width: "60px" }}></span>
//           )
//         )}
//       </div>
//     </div>
//   );
// };

// export default Calculator;

import { useState } from "react";
import { evaluate } from "mathjs";
import { Button, Form } from "react-bootstrap";
import { useCalculatorShortcutKeys } from "../hooks/useShortcutKeys";

interface CalculatorProps {
  setField: (field: any) => void;
  setInput: React.Dispatch<React.SetStateAction<string>>;
  input: string;
  field: any;
  item: string;
  setItem: (item: string) => void;
  setIsCalculatorActive: (active: boolean) => void;
  setShowModal: (show: boolean) => void;
}

const Calculator = ({
  setField,
  input,
  setInput,
  field,
  item,
  setItem,
  setIsCalculatorActive,
  setShowModal,
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
  };

  const handleClose = () => {
    setInput("");
    setCalc("");
    setItem("");
    setCalculated(false);
    setIsCalculatorActive(true);
    setShowModal(false);
  };

  const handleCancel = () => {
    setInput("");
    setCalc("");
    setItem("");
    setCalculated(false);
    setIsCalculatorActive(true);
    setShowModal(false);
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
    <>
      {/* <Modal.Body> */}
      {calc && <p className="text-bg-light p-2">{calc}</p>}
      <Form.Control
        value={input}
        readOnly
        disabled
        type="text"
        className="mb-3"
      />
      <div className="d-flex flex-wrap gap-2">
        {buttons.map((btn, index) =>
          btn ? (
            <Button
              key={btn}
              variant={
                btn === "=" ? "warning" : btn === "C" ? "dark" : "secondary"
              }
              style={{ width: "60px" }}
              onClick={() => handleClick(btn)}
            >
              {btn}
            </Button>
          ) : (
            <span key={`empty-${index}`} style={{ width: "60px" }}></span>
          )
        )}
      </div>
      {/* </Modal.Body> */}
    </>
  );
};

export default Calculator;
