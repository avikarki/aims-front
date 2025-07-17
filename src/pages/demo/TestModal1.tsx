// import { useEffect } from "react";
// import { Modal, ListGroup, Button } from "react-bootstrap";

// type TestModalProps = {
//   isModalOpen: boolean;
//   usableMenuKeys: string[];
//   onClose: () => void;
// };

// const TestModal = ({
//   isModalOpen,
//   usableMenuKeys,
//   onClose,
// }: TestModalProps) => {
//   // Performs the functions when pressing keyboard keys
//   useEffect(() => {
//     const handleKeyDown = (event: KeyboardEvent) => {
//       if (usableMenuKeys?.includes(event.code) && isModalOpen) {
//         console.log(`${event.code}!`);
//       }
//     };

//     window.addEventListener("keydown", handleKeyDown);
//     return () => window.removeEventListener("keydown", handleKeyDown);
//   }, [isModalOpen, usableMenuKeys]);

//   return (
//     <Modal show={isModalOpen} onHide={onClose}>
//       <Modal.Header closeButton>
//         <Modal.Title>Popup Modal</Modal.Title>
//       </Modal.Header>
//       <Modal.Body>
//         <ListGroup>
//           {usableMenuKeys?.map((key) => (
//             <ListGroup.Item key={key} action>
//               Press <span className="text-danger">({key})</span> to console{" "}
//               {key}
//             </ListGroup.Item>
//           ))}
//         </ListGroup>
//       </Modal.Body>
//       <Modal.Footer>
//         <Button variant="secondary" onClick={onClose}>
//           Close
//         </Button>
//       </Modal.Footer>
//     </Modal>
//   );
// };

// export default TestModal;

// import { useEffect } from "react";

// const TestModal = ({ isModalOpen, usableKeys }: any) => {
//   // Performs the functions when pressing keyboard keys
//   useEffect(() => {
//     const handleKeyDown = (event: KeyboardEvent) => {
//       if (usableKeys?.includes(event.key.toLowerCase()) && isModalOpen) {
//         console.log(`${event.key.toUpperCase()} key!`);
//       }
//     };

//     window.addEventListener("keydown", handleKeyDown);
//     return () => window.removeEventListener("keydown", handleKeyDown);
//   }, [isModalOpen]);

//   return (
//     <div
//       className="modal fade"
//       id="popupModal"
//       tabIndex={-1}
//       aria-labelledby="popupLabel"
//       aria-hidden="true"
//     >
//       <div className="modal-dialog">
//         <div className="modal-content">
//           <div className="modal-header">
//             <h5 className="modal-title" id="calculatorLabel">
//               Popup Modal
//             </h5>
//             <button
//               type="button"
//               className="btn-close"
//               data-bs-dismiss="modal"
//               aria-label="Close"
//             ></button>
//           </div>
//           <div className="modal-body">
//             <ul>
//               {usableKeys?.map((key: any) => (
//                 <li key={key}>
//                   <a href="">
//                     Press{" "}
//                     <span style={{ color: "red" }}>
//                       ({key.toUpperCase()} key)
//                     </span>{" "}
//                     to console {key.toUpperCase()} key
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TestModal;

import { Form } from "react-bootstrap";
// import { shortcutKeys } from "../../shortcutKeys";
import PopupModal from "../../components/utility/PopupModal";
import TextField from "../../components/TextField";
import { useForm } from "react-hook-form";
import { useEnterToSwitchInputs } from "../../hooks/useEnterToSwitchInputs";

type TestModalProps = {
  isModalOpen: boolean;
  onClose: () => void;
  // openKey: string;
  // shortcutKeys: any;
};

const TestModal1 = ({
  isModalOpen,
  onClose,
}: // openKey,
// shortcutKeys,
TestModalProps) => {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      name: "",
      contact: "",
    },
  });
  const { handleKeyDown } = useEnterToSwitchInputs();

  // const buttonKey = shortcutKeys?.homepage?.popupKeys?.find(
  //   (popup: PopupKeysProps) => popup?.openKey === openKey
  // )?.buttonKey;

  // const isAlt = shortcutKeys?.homepage?.popupKeys?.find(
  //   (popup: PopupKeysProps) => popup?.openKey === openKey
  // )?.altKey;

  // const isCtrl = shortcutKeys?.homepage?.popupKeys?.find(
  //   (popup: PopupKeysProps) => popup?.openKey === openKey
  // )?.ctrlKey;

  const submitForm = (data: any) => {
    console.log(data);
    onClose();
  };

  // Performs the functions when pressing keyboard keys
  // useShortcutKeys(
  //   (event: KeyboardEvent) => {
  //     const keyToBeUsed =
  //       isCtrl && isAlt
  //         ? event.altKey && event.ctrlKey && event.code === buttonKey
  //         : isAlt
  //         ? event.altKey && event.code === buttonKey
  //         : isCtrl
  //         ? event.ctrlKey && event.code === buttonKey
  //         : event.code === buttonKey;
  //     // if (event.altKey && event.code === buttonKey && isModalOpen) {
  //     if (keyToBeUsed && isModalOpen) {
  //       const handleCustomSubmit = handleSubmit(submitForm);
  //       handleCustomSubmit();
  //     }
  //   },
  //   [isModalOpen]
  // );

  // const usableMenuKeys = shortcutKeys?.homepage?.popupKeys?.find(
  //   (popup: PopupKeysProps) => popup?.openKey === openKey
  // )?.insideKeys;

  // // Performs the functions when pressing keyboard keys
  // useShortcutKeys(
  //   (event: KeyboardEvent) => {
  //     if (usableMenuKeys?.includes(event.code) && isModalOpen) {
  //       console.log(`${event.code}!`);
  //     }
  //   },
  //   [isModalOpen, usableMenuKeys]
  // );

  return (
    <PopupModal
      open={isModalOpen}
      onClose={onClose}
      // title={`Popup Modal ${openKey}`}
      title={`Modal 1`}
      buttonRequired
      submitForm={handleSubmit(submitForm)}
    >
      <Form noValidate className="form-horizontal" onKeyDown={handleKeyDown}>
        <TextField
          type="text"
          name="name"
          control={control}
          label="Name"
          placeholder="Enter Name"
          required
          autoFocus
        />

        <TextField
          type="text"
          name="contact"
          label="Contact"
          control={control}
          placeholder="Enter Contact"
          required
        />
      </Form>
      {/* <ListGroup>
        {usableMenuKeys?.map((key) => (
          <ListGroup.Item key={key} action>
            Press <span className="text-danger">({key})</span> to console {key}
          </ListGroup.Item>
        ))}
      </ListGroup> */}
    </PopupModal>
  );
};

export default TestModal1;
