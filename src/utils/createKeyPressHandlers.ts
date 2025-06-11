export const createClickHandler = (id: string) => () => {
  const element = document.getElementById(id) as HTMLElement;
  if (element) element.click();
};

export const createFocusHandler = (id: string) => () => {
  const element = document.getElementById(id) as HTMLInputElement;
  if (element) element.focus();
};
