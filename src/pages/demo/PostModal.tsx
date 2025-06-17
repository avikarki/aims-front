import { Form } from "react-bootstrap";
// import { shortcutKeys2 } from "../../shortcutKeys";
import PopupModal from "../../components/PopupModal";
import TextField from "../../components/TextField";
import type { FieldValues, UseFormHandleSubmit } from "react-hook-form";
// import { useAppDispatch } from "../../app/hooks";
// import { addUser, editUser } from "../../features/post/usersSlice";
// import CheckboxField from "../../components/CheckboxField";
import { useEnterToSwitchInputs } from "../../hooks/useEnterToSwitchInputs";
import {
  useCreatePostMutation,
  useUpdatePostMutation,
} from "../../features/post/postsApi";
import { useState } from "react";
import { useShortcuts } from "../../hooks/useShortcutKeys";
import { shortcutKeys } from "../../shortcutKeys";
import { ConfirmDialog } from "../../components/ConfirmationDialog";
// import { confirmAlert } from "react-confirm-alert";

interface ModalProps<T extends FieldValues> {
  control: any;
  handleSubmit: UseFormHandleSubmit<T>;
  isModalOpen: boolean;
  onClose: () => void;
  postEditId: number | null;
}

const PostModal = <T extends FieldValues>({
  isModalOpen,
  onClose,
  control,
  handleSubmit,
  postEditId,
}: ModalProps<T>) => {
  // const dispatch = useAppDispatch();

  const [createPost, { isLoading: creating }] = useCreatePostMutation();
  const [updatePost, { isLoading: updating }] = useUpdatePostMutation();

  // const buttonKey = shortcutKeys2?.homepage?.popupKeys?.find(
  //   (popup: PopupKeysProps) => popup?.openKey === openKey
  // )?.buttonKey;

  // const isAlt = shortcutKeys2?.homepage?.popupKeys?.find(
  //   (popup: PopupKeysProps) => popup?.openKey === openKey
  // )?.altKey;

  // const isCtrl = shortcutKeys2?.homepage?.popupKeys?.find(
  //   (popup: PopupKeysProps) => popup?.openKey === openKey
  // )?.ctrlKey;

  // const submitForm = async (data: any) => {
  //   // Show confirmation dialog
  //   const isConfirmed = window.confirm(
  //     `Are you sure you want to ${postEditId ? "update" : "create"} this post?`
  //   ); // Use react-confirm-alert if you want to edit OK or Cancel buttons

  //   if (!isConfirmed) {
  //     return; // If user clicks "No", do nothing (stay on modal)
  //   }

  //   try {
  //     if (postEditId) {
  //       await updatePost({ ...data, id: postEditId }).unwrap();
  //       alert("Post updated successfully!");
  //     } else {
  //       await createPost(data).unwrap();
  //       alert("Post created successfully!");
  //     }
  //     onClose();
  //   } catch (err) {
  //     alert(postEditId ? "Failed to update post:" : "Failed to create post:");
  //   }
  // };

  // const submitForm = async (data: any) => {
  //   showConfirm({
  //     title: "Confirm Submission",
  //     message: `Are you sure you want to ${
  //       postEditId ? "update" : "create"
  //     } this post?`,
  //     onConfirm: async () => {
  //       try {
  //         if (postEditId) {
  //           await updatePost({ ...data, id: postEditId }).unwrap();
  //           alert("Post updated successfully!");
  //         } else {
  //           await createPost(data).unwrap();
  //           alert("Post created successfully!");
  //         }
  //         onClose();
  //       } catch (err) {
  //         alert("Error: Action failed.");
  //       }
  //     },
  //     onCancel: () => {
  //       // Optional: Add any cancel logic here
  //       console.log("User cancelled submission");
  //     },
  //   });
  // };

  const [showConfirmation, setShowConfirmation] = useState(false);
  const [pendingData, setPendingData] = useState<any>(null);

  // Setup your existing shortcuts
  useShortcuts(
    shortcutKeys,
    {
      // ... your existing handlers
      yes: () => {
        if (showConfirmation) {
          handleConfirm();
        }
      },
      no: () => {
        if (showConfirmation) {
          handleCancel();
        }
      },
      // submit_button: () => handleSubmit(submitForm)(),
    },
    {
      // disabled: showConfirmation, // Disable other shortcuts when confirmation is open
      // allowInModal: ["yes", "no"], // Allow Y/N in modalsn
    }
  );

  const submitForm = (data: any) => {
    setPendingData(data);
    setShowConfirmation(true);
  };

  const handleConfirm = async () => {
    setShowConfirmation(false);
    try {
      if (postEditId) {
        await updatePost({ ...pendingData, id: postEditId }).unwrap();
        alert("Post updated successfully!");
      } else {
        await createPost(pendingData).unwrap();
        alert("Post created successfully!");
      }
      onClose();
    } catch (err) {
      alert(postEditId ? "Failed to update post:" : "Failed to create post:");
    }
  };

  const handleCancel = () => {
    setShowConfirmation(false);
  };

  const { handleKeyDown } = useEnterToSwitchInputs();

  // Performs the functions when pressing keyboard keys
  //   useShortcutKeys(
  //     (event: KeyboardEvent) => {
  //       const keyToBeUsed =
  //         isCtrl && isAlt
  //           ? event.altKey && event.ctrlKey && event.code === buttonKey
  //           : isAlt
  //           ? event.altKey && event.code === buttonKey
  //           : isCtrl
  //           ? event.ctrlKey && event.code === buttonKey
  //           : event.code === buttonKey;
  //       // if (event.altKey && event.code === buttonKey && isModalOpen) {
  //       if (keyToBeUsed && isModalOpen) {
  //         const handleCustomSubmit = handleSubmit(submitForm);
  //         handleCustomSubmit();
  //       }
  //     },
  //     [isModalOpen]
  //   );

  // useShortcutKeys(
  //   (event: KeyboardEvent) => {
  //     if (event.shiftKey && event.code === "KeyS" && isModalOpen) {
  //       const saveForm = handleSubmit(submitForm);
  //       saveForm();
  //       onClose();
  //     }
  //   },
  //   [isModalOpen]
  // );

  return (
    <>
      <PopupModal
        open={isModalOpen}
        onClose={onClose}
        title={postEditId ? "Edit Client" : "Add Client"}
        buttonRequired
        submitForm={handleSubmit(submitForm)}
        loading={postEditId ? updating : creating}
      >
        <Form noValidate className="form-horizontal" onKeyDown={handleKeyDown}>
          <TextField
            tabIndex={0}
            type="text"
            name="title"
            control={control}
            label="Title"
            placeholder="Enter Title"
            autoFocus
            required
            disabled={creating || updating}
          />

          <TextField
            tabIndex={1}
            type="text"
            name="body"
            label="Body"
            control={control}
            placeholder="Enter Body"
            required
            as="textarea"
            rows={3}
            disabled={creating || updating}
          />

          {/* {postEditId && (
          <CheckboxField
            tabIndex={3}
            name="isActive"
            control={control}
            label="isActive?"
            required
          />
        )} */}
        </Form>
      </PopupModal>
      <ConfirmDialog
        show={showConfirmation}
        title="Confirm Submission"
        message={`Are you sure you want to ${
          postEditId ? "update" : "create"
        } this post?`}
        onConfirm={handleConfirm}
        onCancel={handleCancel}
      />
    </>
  );
};

export default PostModal;
