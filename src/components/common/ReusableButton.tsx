//  ***** SIMPLE REUSABLE BUTTON WITHOUT ANIMATION *****

// import React from "react";

// type ButtonProps = {
//   variant?: "primary" | "secondary" | "outline" | "text";
//   size?: "small" | "medium" | "large";
//   children: React.ReactNode;
//   onClick?: () => void;
//   disabled?: boolean;
//   icon?: React.ReactNode;
//   iconPosition?: "left" | "right";
//   className?: string;
//   type?: "button" | "submit" | "reset";
//   style?: React.CSSProperties;
//   id?: string;
// };

// const ReusableButton: React.FC<ButtonProps> = ({
//   variant = "primary",
//   size = "medium",
//   children,
//   onClick,
//   disabled = false,
//   icon,
//   iconPosition = "left",
//   className = "",
//   type = "button",
//   style,
//   id,
// }) => {
//   // Base button classes
//   const baseClasses =
//     "inline-flex items-center justify-center rounded-md font-medium transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-sky-500 disabled:opacity-50 disabled:pointer-events-none";

//   // Variant classes
//   const variantClasses = {
//     primary: "bg-primary text-white hover:bg-primary-hover",
//     secondary: "bg-gray-200 text-gray-900 hover:bg-gray-300",
//     outline:
//       "border border-gray-300 bg-transparent text-gray-700 hover:bg-gray-50",
//     text: "bg-transparent text-primary-hover hover:text-primary",
//   };

//   // Size classes
//   const sizeClasses = {
//     small: "py-1 px-3 text-sm",
//     medium: "py-2 px-4 text-base",
//     large: "py-3 px-6 text-lg",
//   };

//   // Combine all classes
//   const buttonClasses = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

//   return (
//     <button
//       type={type}
//       className={buttonClasses}
//       onClick={onClick}
//       disabled={disabled}
//       style={style}
//       id={id}
//     >
//       {icon && iconPosition === "left" && <span className="mr-2">{icon}</span>}
//       {children}
//       {icon && iconPosition === "right" && <span className="ml-2">{icon}</span>}
//     </button>
//   );
// };

// export default ReusableButton;

// **** END OF SIMPLE REUSABLE BUTTON WITHOUT ANIMATION ****

// ****** ANIMATED REUSABLE BUTTON WITH SIMPLE RIPPLE EFFECT ******

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

type ButtonProps = {
  variant?: "primary" | "secondary" | "outline" | "text" | "icon";
  size?: "small" | "medium" | "large";
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  className?: string;
  type?: "button" | "submit" | "reset";
  style?: React.CSSProperties;
  id?: string;
  rippleColor?: string;
};

const ReusableButton: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "medium",
  children,
  onClick,
  disabled = false,
  icon,
  iconPosition = "left",
  className = "",
  type = "button",
  style,
  id,
  rippleColor = "bg-white",
}) => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [ripples, setRipples] = useState<any[]>([]);

  const createRipple = () => {
    const rect = buttonRef.current?.getBoundingClientRect();
    if (!rect) return;

    const size = rect.width * 2;
    const x = rect.width / 2;
    const y = rect.height / 2;

    const newRipple = {
      id: Date.now(),
      x,
      y,
      size,
    };

    setRipples((prev) => [...prev, newRipple]);

    setTimeout(() => {
      setRipples((prev) => prev.filter((r) => r.id !== newRipple.id));
    }, 600);

    onClick?.(); // trigger button's main action
  };

  const baseClasses =
    "relative overflow-hidden text-sm inline-flex items-center justify-center rounded-md font-medium transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-sky-500 disabled:opacity-50 disabled:pointer-events-none";

  const variantClasses = {
    primary: "bg-primary text-white hover:bg-primary-hover",
    secondary: "bg-gray-200 text-gray-900 hover:bg-gray-300",
    outline:
      "border border-gray-300 bg-transparent text-gray-700 hover:bg-gray-50",
    text: "bg-transparent text-primary-hover hover:text-primary",
    icon: "text-black",
  };

  const sizeClasses = {
    small: "py-1 px-3 text-sm",
    medium: "py-2 px-4 text-base",
    large: "py-3 px-6 text-lg",
  };

  const buttonClasses = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  return (
    <button
      type={type}
      className={buttonClasses}
      onClick={createRipple}
      disabled={disabled}
      style={style}
      id={id}
      ref={buttonRef}
    >
      {icon && iconPosition === "left" && <span className="mr-2">{icon}</span>}
      {children}
      {icon && iconPosition === "right" && <span className="ml-2">{icon}</span>}

      {/* Ripple container */}
      <span className="absolute inset-0 pointer-events-none">
        {ripples.map((ripple) => (
          <motion.div
            key={ripple.id}
            className={`absolute rounded-full ${rippleColor} opacity-40`}
            initial={{ scale: 0, opacity: 0.6 }}
            animate={{ scale: 1.5, opacity: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            style={{
              top: ripple.y - ripple.size / 2,
              left: ripple.x - ripple.size / 2,
              width: ripple.size,
              height: ripple.size,
            }}
          />
        ))}
      </span>
    </button>
  );
};

export default ReusableButton;
// ****** END OF ANIMATED REUSABLE BUTTON WITH SIMPLE RIPPLE EFFECT ******

// ****** ANIMATED REUSABLE BUTTON WITH CIRCULAR RIPPLE EFFECT ******

// import React from "react";
// import { motion } from "framer-motion";
// import { useRipple, type Ripple } from "../../hooks/useRippleEffect";

// type ButtonProps = {
//   variant?: "primary" | "secondary" | "outline" | "text";
//   size?: "small" | "medium" | "large";
//   children: React.ReactNode;
//   onClick?: (e?: React.MouseEvent<HTMLElement>) => void;
//   disabled?: boolean;
//   icon?: React.ReactNode;
//   iconPosition?: "left" | "right";
//   className?: string;
//   type?: "button" | "submit" | "reset";
//   style?: React.CSSProperties;
//   id?: string;

//   // Ripple customization
//   rippleColor?: string; // solid color like "rgba(255,255,255,0.3)"
//   rippleGradient?: string; // tailwind class e.g., "bg-gradient-to-tr from-cyan-400 to-blue-600"
//   rippleNumCircles?: number;
//   rippleDuration?: number;
//   rippleDelay?: number;
//   rippleScale?: number;
// };

// const RippleEffect: React.FC<
//   Ripple & {
//     color?: string;
//     gradient?: string;
//     numCircles?: number;
//     duration?: number;
//     delay?: number;
//     scale?: number;
//   }
// > = ({
//   x,
//   y,
//   color = "white",
//   gradient,
//   numCircles = 3,
//   duration = 1.5,
//   delay = 0.3,
//   scale = 6,
// }) => {
//   return (
//     <>
//       {Array.from({ length: numCircles }).map((_, i) => (
//         <motion.span
//           key={i}
//           initial={{ scale: 0, opacity: 0.4 }}
//           animate={{ scale, opacity: 0 }}
//           transition={{ duration, ease: "easeOut", delay: i * delay }}
//           className={`absolute rounded-full pointer-events-none ${
//             gradient ?? ""
//           }`}
//           style={{
//             width: "40px",
//             height: "40px",
//             top: y,
//             left: x,
//             backgroundColor: gradient ? undefined : color,
//             transform: "translate(-50%, -50%)",
//             transformOrigin: "center",
//             zIndex: 0,
//           }}
//         />
//       ))}
//     </>
//   );
// };

// const ReusableButton: React.FC<ButtonProps> = ({
//   variant = "primary",
//   size = "medium",
//   children,
//   onClick,
//   disabled = false,
//   icon,
//   iconPosition = "left",
//   className = "",
//   type = "button",
//   style,
//   id,

//   // Ripple props
//   rippleColor,
//   rippleGradient,
//   rippleNumCircles,
//   rippleDuration,
//   rippleDelay,
//   rippleScale,
// }) => {
//   const { ripples, createRipple } = useRipple();

//   const baseClasses =
//     "inline-flex items-center justify-center rounded-md font-medium transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-sky-500 disabled:opacity-50 disabled:pointer-events-none relative overflow-hidden";

//   const variantClasses = {
//     primary: "bg-primary text-white hover:bg-primary-hover",
//     secondary: "bg-gray-200 text-gray-900 hover:bg-gray-300",
//     outline:
//       "border border-gray-300 bg-transparent text-gray-700 hover:bg-gray-50",
//     text: "bg-transparent text-primary-hover hover:text-primary",
//   };

//   const sizeClasses = {
//     small: "py-1 px-3 text-sm",
//     medium: "py-2 px-4 text-base",
//     large: "py-3 px-6 text-lg",
//   };

//   const buttonClasses = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

//   return (
//     <button
//       type={type}
//       className={buttonClasses}
//       onClick={(e) => {
//         createRipple(e);
//         onClick?.(e);
//       }}
//       disabled={disabled}
//       style={style}
//       id={id}
//     >
//       {ripples.map((r) => (
//         <RippleEffect
//           key={r.id}
//           {...r}
//           color={rippleColor}
//           gradient={rippleGradient}
//           numCircles={rippleNumCircles}
//           duration={rippleDuration}
//           delay={rippleDelay}
//           scale={rippleScale}
//         />
//       ))}

//       {icon && iconPosition === "left" && <span className="mr-2">{icon}</span>}
//       {children}
//       {icon && iconPosition === "right" && <span className="ml-2">{icon}</span>}
//     </button>
//   );
// };

// export default ReusableButton;

// Using method in required components

{
  /* <ReusableButton
  variant="primary"
  size="large"
  onClick={() => console.log("Clicked!")}
  rippleColor="rgba(255,255,255,0.3)"
  // OR use Tailwind gradient class:
  // rippleGradient="bg-gradient-to-tr from-pink-400 to-blue-500"
  rippleNumCircles={3}
  rippleDuration={1.2}
  rippleDelay={0.2}
  rippleScale={8}
>
  Search
</ReusableButton> */
}
