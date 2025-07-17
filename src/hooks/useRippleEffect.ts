// import { useState } from "react";

// export interface Ripple {
//   x: number;
//   y: number;
//   id: number;
// }

// export const useRipple = () => {
//   const [ripples, setRipples] = useState<Ripple[]>([]);

//   const createRipple = (e: React.MouseEvent<HTMLElement>) => {
//     const rect = e.currentTarget.getBoundingClientRect();
//     const x = e.clientX - rect.left;
//     const y = e.clientY - rect.top;

//     const newRipple = { x, y, id: Date.now() };

//     setRipples((prev) => [...prev, newRipple]);

//     // Remove ripple after animation duration
//     setTimeout(() => {
//       setRipples((prev) => prev.filter((r) => r.id !== newRipple.id));
//     }, 3000); // match duration+delay total
//   };

//   return { ripples, createRipple };
// };

import { useState } from "react";

export interface Ripple {
  x: number;
  y: number;
  id: number;
}

export const useRipple = () => {
  const [ripples, setRipples] = useState<Ripple[]>([]);

  const createRipple = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const newRipple = { x, y, id: Date.now() };
    setRipples((prev) => [...prev, newRipple]);

    setTimeout(() => {
      setRipples((prev) => prev.filter((r) => r.id !== newRipple.id));
    }, 3000);
  };

  return { ripples, createRipple };
};
