import PopupModal from "../../components/PopupModal";

type TestModalProps = {
  isModalOpen: boolean;
  onClose: () => void;
};

const TestModal3 = ({ isModalOpen, onClose }: TestModalProps) => {
  // const usableMenuKeys = shortcutKeys2?.homepage?.popupKeys?.find(
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
    <PopupModal open={isModalOpen} onClose={onClose} title={`Modal 3`}>
      Modal 3
    </PopupModal>
  );
};

export default TestModal3;
