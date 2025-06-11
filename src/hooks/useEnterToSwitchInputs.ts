export const useEnterToSwitchInputs = () => {
  const handleKeyDown = (e: any) => {
    if (e.key === "Enter") {
      e.preventDefault();
      const form = e.currentTarget;
      const inputs: any = Array.from(form.querySelectorAll("input"));
      const currentIndex = inputs.indexOf(document.activeElement);

      if (currentIndex < inputs.length - 1) {
        inputs[currentIndex + 1].focus();
      }
    }
  };

  return { handleKeyDown };
};
