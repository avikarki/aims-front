import { Button, Modal } from "react-bootstrap";
import type { PopupProps } from "../types";
import { shortcutKeys } from "../shortcutKeys";
import { useShortcuts } from "../hooks/useShortcutKeys";
import StyledShortcutKeyTitle from "./StyledShortcutKeyTitle";

const PopupModal = ({
  open,
  onClose,
  title,
  children,
  buttonRequired = false,
  submitForm,
  size,
}: PopupProps) => {
  const shortcutHandlers = {
    submit_button: () =>
      open && document.getElementById("submit_button")?.click(),
    // ... other handlers
  };

  // Activate shortcuts
  useShortcuts(shortcutKeys, shortcutHandlers, {
    allowInModal: ["submit_button"], // Only allow save shortcut when modal is open
  });

  return (
    <Modal show={open} onHide={onClose} size={size} centered>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{children}</Modal.Body>
      {buttonRequired && (
        <Modal.Footer>
          <Button id="submit_button" onClick={submitForm}>
            <StyledShortcutKeyTitle
              title="Save"
              id="submit_button"
              shortcutKeys={shortcutKeys}
            />
          </Button>
          <Button variant="secondary" onClick={onClose}>
            Close <StyledShortcutKeyTitle title="Esc" />
          </Button>
        </Modal.Footer>
      )}
      {/* <p className="mx-3 mb-2 text-danger">
        Press 'Shift + S' to save and 'Escape' to close.
      </p> */}
    </Modal>
  );
};

export default PopupModal;
