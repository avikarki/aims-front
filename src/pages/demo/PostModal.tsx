import type { FieldValues, UseFormHandleSubmit } from "react-hook-form";
import { useCreatePostMutation, useUpdatePostMutation } from "./postApi";
import { useState } from "react";
import { useShortcuts } from "../../hooks/useShortcutKeys";
import { shortcutKeys } from "../../assets/shortcutKeys";
import { useEnterToSwitchInputs } from "../../hooks/useEnterToSwitchInputs";
import DialogBox from "../../components/utility/DialogBox";
import FormInputText from "../../components/form/FormInputText";
import FormInputTextarea from "../../components/form/FormInputTextArea";
import { ConfirmDialog } from "../../components/utility/ConfirmationDialog";

interface ModalProps<T extends FieldValues> {
  control: any;
  handleSubmit: UseFormHandleSubmit<T>;
  isModalOpen: boolean;
  onClose: () => void;
  postEditId: number | null;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const PostModal = <T extends FieldValues>({
  isModalOpen,
  onClose,
  control,
  handleSubmit,
  postEditId,
  setIsModalOpen,
}: ModalProps<T>) => {
  // const dispatch = useAppDispatch();

  const [createPost, { isLoading: creating }] = useCreatePostMutation();
  const [updatePost, { isLoading: updating }] = useUpdatePostMutation();

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
    }
    // isModalOpen

    // disabled: showConfirmation, // Disable other shortcuts when confirmation is open
    // allowInModal: ["yes", "no"], // Allow Y/N in modal
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
        // alert("Post created successfully!");
      }
      onClose();
    } catch (err) {
      // alert(postEditId ? "Failed to update post:" : "Failed to create post:");
    }
  };

  const handleCancel = () => {
    setShowConfirmation(false);
  };

  const { handleKeyDown } = useEnterToSwitchInputs();

  // const [inputRef, triggerFocus] = useAutoFocus<HTMLInputElement>({
  //   delay: 50,
  //   selectText: true,
  // });

  // useEffect(() => {
  //   triggerFocus(isModalOpen);
  // }, [isModalOpen, triggerFocus]);

  return (
    <>
      <DialogBox
        open={isModalOpen}
        setOpen={setIsModalOpen}
        title={postEditId ? "Edit Client" : "Add Client"}
        confirmText="Submit"
        loadingText="Submitting"
        loading={postEditId ? updating : creating}
        onConfirm={handleSubmit(submitForm)}
        // inputRef={inputRef}
      >
        <form noValidate onKeyDown={handleKeyDown}>
          <FormInputText
            // ref={inputRef}
            tabIndex={0}
            type="text"
            name="title"
            control={control}
            label="Title"
            placeholder="Enter Title"
            autoFocus
            disabled={creating || updating}
          />

          <FormInputTextarea
            tabIndex={1}
            name="body"
            label="Body"
            control={control}
            placeholder="Enter Body"
            rows={3}
            disabled={creating || updating}
          />
        </form>
      </DialogBox>
      <ConfirmDialog
        show={showConfirmation}
        setShow={setShowConfirmation}
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
