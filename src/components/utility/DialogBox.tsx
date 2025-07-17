import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { useShortcuts } from "../../hooks/useShortcutKeys";
import { shortcutKeys } from "../../assets/shortcutKeys";
import Spinner from "./Spinner";
import StyledShortcutKeyTitle from "../common/StyledShortcutKeyTitle";

interface DialogProps {
  title?: string;
  message?: string;
  confirmText?: string;
  cancelText?: string;
  onConfirm?: () => void;
  onCancel?: () => void;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  buttonRequired?: boolean;
  children: React.ReactNode;
  loading?: boolean;
  loadingText?: string;
  // inputRef?: React.RefObject<HTMLElement>;
}

const DialogBox = ({
  title = "Deactivate account",
  // message = "Are you sure you want to deactivate your account? All of your data will be permanently removed. This action cannot be undone.",
  confirmText = "Deactivate",
  cancelText = "Cancel",
  onConfirm,
  onCancel,
  open,
  setOpen,
  buttonRequired = true,
  loading,
  loadingText,
  // inputRef,
  children,
}: DialogProps) => {
  const handleClose = () => setOpen(false);

  const handleConfirm = () => {
    onConfirm?.();
    // handleClose();
  };

  const handleCancel = () => {
    onCancel?.();
    handleClose();
  };

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
    <>
      <Dialog
        open={open}
        onClose={setOpen}
        id="reusable-dialog"
        className="relative z-10"
      >
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-gray-500/75 transition-opacity data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in"
        />

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full justify-center p-4 text-center items-center sm:p-0">
            <DialogPanel
              transition
              className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in sm:my-8 sm:w-full sm:max-w-lg data-closed:sm:translate-y-0 data-closed:sm:scale-95"
            >
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="">
                  <div className="mt-3 text-center sm:mt-0 sm:text-left">
                    <DialogTitle
                      as="h2"
                      className="text-base font-bold text-gray-900"
                    >
                      {title}
                    </DialogTitle>
                    <div className="mt-2">{children}</div>
                  </div>
                </div>
              </div>
              {buttonRequired && (
                <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                  <button
                    aria-hidden={false}
                    id="submit_button"
                    type="button"
                    onClick={handleConfirm}
                    disabled={loading}
                    className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-red-500 sm:ml-3 sm:w-auto disabled:opacity-50 disabled:pointer-events-none"
                  >
                    {loading ? (
                      <>
                        <Spinner size="w-5 h-5" color="border-white" />{" "}
                        {loadingText}...
                      </>
                    ) : (
                      <StyledShortcutKeyTitle
                        title={confirmText}
                        id="submit_button"
                        shortcutKeys={shortcutKeys}
                      />
                    )}
                  </button>
                  <button
                    aria-hidden={false}
                    type="button"
                    disabled={loading}
                    // data-autofocus
                    onClick={handleCancel}
                    className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-xs ring-1 ring-gray-300 ring-inset hover:bg-gray-50 sm:mt-0 sm:w-auto disabled:opacity-50 disabled:pointer-events-none"
                  >
                    {cancelText} <StyledShortcutKeyTitle title="Esc" />
                  </button>
                </div>
              )}
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  );
};

export default DialogBox;
