import { Form } from "react-bootstrap";
// import { shortcutKeys2 } from "../../shortcutKeys";
import PopupModal from "../../components/PopupModal";
import TextField from "../../components/TextField";
import type { FieldValues, UseFormHandleSubmit } from "react-hook-form";
import { useAppDispatch } from "../../app/hooks";
import { addUser, editUser } from "../../features/user/usersSlice";
import CheckboxField from "../../components/CheckboxField";
import { useEnterToSwitchInputs } from "../../hooks/useEnterToSwitchInputs";

interface ModalProps<T extends FieldValues> {
  control: any;
  handleSubmit: UseFormHandleSubmit<T>;
  isModalOpen: boolean;
  onClose: () => void;
  userEditId: string;
}

const ClientModal = <T extends FieldValues>({
  isModalOpen,
  onClose,
  control,
  handleSubmit,
  userEditId,
}: ModalProps<T>) => {
  const dispatch = useAppDispatch();
  const { handleKeyDown } = useEnterToSwitchInputs();

  // const buttonKey = shortcutKeys2?.homepage?.popupKeys?.find(
  //   (popup: PopupKeysProps) => popup?.openKey === openKey
  // )?.buttonKey;

  // const isAlt = shortcutKeys2?.homepage?.popupKeys?.find(
  //   (popup: PopupKeysProps) => popup?.openKey === openKey
  // )?.altKey;

  // const isCtrl = shortcutKeys2?.homepage?.popupKeys?.find(
  //   (popup: PopupKeysProps) => popup?.openKey === openKey
  // )?.ctrlKey;

  const submitForm = (data: any) => {
    if (userEditId) {
      dispatch(editUser({ ...data, id: userEditId }));
    } else {
      dispatch(addUser(data));
    }
    onClose();
  };

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
    <PopupModal
      open={isModalOpen}
      onClose={onClose}
      title={userEditId ? "Edit Client" : "Add Client"}
      buttonRequired
      submitForm={handleSubmit(submitForm)}
    >
      <Form noValidate className="form-horizontal" onKeyDown={handleKeyDown}>
        <TextField
          tabIndex={0}
          type="text"
          name="name"
          control={control}
          label="Name"
          placeholder="Enter Name"
          autoFocus
          required
        />

        <TextField
          tabIndex={1}
          type="text"
          name="contact"
          label="Contact"
          control={control}
          placeholder="Enter Contact"
          required
        />

        {userEditId && (
          <CheckboxField
            tabIndex={3}
            name="isActive"
            control={control}
            label="isActive?"
            required
          />
        )}
      </Form>
    </PopupModal>
  );
};

export default ClientModal;
