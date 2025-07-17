import React, { useEffect } from "react";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import StyledShortcutKeyTitle from "../common/StyledShortcutKeyTitle";
import { shortcutKeys } from "../../assets/shortcutKeys";

interface ConfirmDialogProps {
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
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
  setShow,
}) => {
  const handleClose = () => setShow(false);

  const handleConfirm = () => {
    onConfirm?.();
    handleClose();
  };

  const handleCancel = () => {
    onCancel?.();
    handleClose();
  };

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
    <Dialog open={show} onClose={setShow} className="relative z-10">
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-gray-500/75 transition-opacity data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in"
      />

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-fit justify-center p-4 text-center items-center sm:p-0">
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
                  <div className="mt-2">{message}</div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
              <button
                onClick={handleCancel}
                className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-red-500 sm:ml-3 sm:w-auto"
              >
                <StyledShortcutKeyTitle
                  title="No"
                  id="no"
                  shortcutKeys={shortcutKeys}
                />
              </button>
              <button
                // data-autofocus
                onClick={handleConfirm}
                className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-xs ring-1 ring-gray-300 ring-inset hover:bg-gray-50 sm:mt-0 sm:w-auto"
              >
                <StyledShortcutKeyTitle
                  title="Yes"
                  id="yes"
                  shortcutKeys={shortcutKeys}
                />
              </button>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
};
