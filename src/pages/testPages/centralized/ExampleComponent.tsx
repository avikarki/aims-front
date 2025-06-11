// ExampleComponent.tsx

import { useKeyboardShortcuts } from "./useKeyboardShortcuts";
import { SHORTCUTS } from "./keyboardShortcuts";

const ExampleComponent: React.FC = () => {
  const handleOpenModal = () => {
    // Logic to open modal
  };

  useKeyboardShortcuts({
    [SHORTCUTS.OPEN_MODAL]: handleOpenModal,
    // Add more shortcuts and corresponding handlers here
  });

  return <div>{/* Your component JSX */}</div>;
};

export default ExampleComponent;
