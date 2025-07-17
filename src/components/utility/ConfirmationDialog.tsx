// import { confirmAlert } from "react-confirm-alert";
// import { Modal, Button } from "react-bootstrap";
// import "react-confirm-alert/src/react-confirm-alert.css";
// import { useEffect } from "react";
// import { useShortcuts } from "../hooks/useShortcutKeys";
// import { shortcutKeys } from "../shortcutKeys";

// type ConfirmOptions = {
//   title: string;
//   message: string;
//   onConfirm: () => void;
//   onCancel?: () => void;
// };

// export const showConfirm = ({
//   title,
//   message,
//   onConfirm,
//   onCancel,
// }: ConfirmOptions) => {
//   confirmAlert({
//     customUI: ({ onClose }) => {
//       // Keyboard event handler
//       // const shortcutHandlers = {
//       //   yes: () =>
//       //     (document.getElementById("yes") as HTMLButtonElement)?.click(),
//       //   no: () => (document.getElementById("no") as HTMLButtonElement)?.click(),
//       //   // ... other handlers
//       // };

//       // // Activate shortcuts
//       // useShortcuts(shortcutKeys, shortcutHandlers);

//       // useEffect(() => {
//       //   const handleKeyDown = (e: KeyboardEvent) => {
//       //     if (e.key === "y" || e.key === "Y") {
//       //       onConfirm();
//       //       onClose();
//       //     } else if (e.key === "n" || e.key === "N") {
//       //       onCancel?.();
//       //       onClose();
//       //     }
//       //   };

//       //   window.addEventListener("keydown", handleKeyDown);
//       //   return () => window.removeEventListener("keydown", handleKeyDown);
//       // }, []);

//       return (
//         <Modal
//           show={true}
//           onHide={() => {
//             onClose();
//             onCancel?.();
//           }}
//           backdrop="static" // Disables clicking outside
//           keyboard={false} // Disables escape key
//         >
//           <Modal.Header closeButton>
//             <Modal.Title>{title}</Modal.Title>
//           </Modal.Header>
//           <Modal.Body>{message}</Modal.Body>
//           <Modal.Footer>
//             <Button
//               id="yes"
//               variant="secondary"
//               onClick={() => {
//                 onConfirm();
//                 onClose();
//               }}
//             >
//               Yes
//             </Button>
//             <Button
//               id="no"
//               variant="primary"
//               onClick={() => {
//                 onClose();
//                 onCancel?.();
//               }}
//             >
//               No
//             </Button>
//           </Modal.Footer>
//         </Modal>
//       );
//     },
//     closeOnClickOutside: false, // Prevent closing by clicking backdrop
//     closeOnEscape: false, // Prevent closing with ESC key
//   });
// };

import React, { useEffect } from "react";
import { Modal, Button } from "react-bootstrap";
import { shortcutKeys } from "../../shortcutKeys";
import StyledShortcutKeyTitle from "../StyledShortcutKeyTitle";

interface ConfirmDialogProps {
  show: boolean;
  title: string;
  message: string;
  onConfirm: () => void;
  onCancel: () => void;
  onKeyDown?: (e: KeyboardEvent) => void;
}

export const ConfirmDialog: React.FC<ConfirmDialogProps> = ({
  show,
  title,
  message,
  onConfirm,
  onCancel,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.code === "KeyY") {
        e.preventDefault();
        onConfirm();
      } else if (e.code === "KeyN") {
        e.preventDefault();
        onCancel();
      }
    };

    if (show) {
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [show, onConfirm, onCancel]);

  return (
    <Modal show={show} onHide={onCancel} backdrop="static" keyboard={false}>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {message}
        {/* <div className="mt-2 text-muted">
          (Press <strong>Y</strong> for Yes or <strong>N</strong> for No)
        </div> */}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onCancel}>
          <StyledShortcutKeyTitle
            title="No"
            id="no"
            shortcutKeys={shortcutKeys}
          />
        </Button>
        <Button variant="primary" onClick={onConfirm}>
          <StyledShortcutKeyTitle
            title="Yes"
            id="yes"
            shortcutKeys={shortcutKeys}
          />
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
