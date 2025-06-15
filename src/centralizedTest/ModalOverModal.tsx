// import { useState } from "react";
// import { Button, Form, Modal } from "react-bootstrap";
// import PopupModal from "../components/PopupModal";
// import Calculator from "../components/Calculator";
// // import useShortcutKeys from "../hooks/useShortcutKeys";

// const ModalOverModal = () => {
//   const [activeModal, setActiveModal] = useState<string | null>(null);
//   const [input, setInput] = useState<string>("");
//   const [formData, setFormData] = useState<any>({
//     sum: 0,
//     difference: 0,
//   });
//   const [item, setItem] = useState("");
//   const [isCalculatorActive, setIsCalculatorActive] = useState<Boolean>(true);
//   const [showModal, setShowModal] = useState(false);

//   const handleClose = () => {
//     setActiveModal(null);
//   };

//   // useShortcutKeys(
//   //   (event: KeyboardEvent) => {
//   //     if (event.altKey && event.code === "KeyC" && isCalculatorActive) {
//   //       setActiveModal("calculator");
//   //     }
//   //   },
//   //   [isCalculatorActive]
//   // );

//   return (
//     <>
//       {/* Client Modal */}
//       <PopupModal
//         open={activeModal === "client"}
//         title="Client Modal"
//         onClose={handleClose}
//       >
//         <Form.Control
//           type="number"
//           placeholder="Sum"
//           autoFocus
//           onFocus={() => setIsCalculatorActive(true)}
//         />
//         <Form.Control type="number" placeholder="Difference" />
//         <Button onClick={() => setActiveModal("calculator")}>
//           Open Calculator
//         </Button>
//       </PopupModal>

//       {/* Calculator Modal */}
//       <PopupModal
//         open={activeModal === "calculator"}
//         title="Calculator"
//         size="sm"
//         onClose={handleClose}
//       >
//         <Calculator
//           field={formData}
//           setField={setFormData}
//           input={input}
//           setInput={setInput}
//           item={item}
//           setItem={setItem}
//           setIsCalculatorActive={setIsCalculatorActive}
//           setShowModal={setShowModal}
//         />
//         <Button onClick={() => setActiveModal("client")}>
//           Back to Client Modal
//         </Button>
//       </PopupModal>

//       {/* Open buttons */}
//       <Button onClick={() => setActiveModal("client")}>
//         Open Client Modal
//       </Button>
//       {/* <Button onClick={() => setActiveModal("modal2")}>Open Modal 2</Button> */}
//     </>
//   );
// };

// export default ModalOverModal;

const ModalOverModal = () => {
  return <div></div>;
};

export default ModalOverModal;
