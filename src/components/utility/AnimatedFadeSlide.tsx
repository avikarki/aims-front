import { motion, AnimatePresence } from "framer-motion";
import React from "react";

interface AnimatedFadeSlideProps {
  isVisible: boolean;
  children: React.ReactNode;
  className?: string;
  duration?: number;
  offset?: number;
  direction?: "up" | "down" | "left" | "right";
}

const getOffsetValues = (direction: string, offset: number) => {
  switch (direction) {
    case "up":
      return { initial: { y: offset }, exit: { y: -offset } };
    case "down":
      return { initial: { y: -offset }, exit: { y: offset } };
    case "left":
      return { initial: { x: offset }, exit: { x: -offset } };
    case "right":
      return { initial: { x: -offset }, exit: { x: offset } };
    default:
      return { initial: {}, exit: {} };
  }
};

const AnimatedFadeSlide: React.FC<AnimatedFadeSlideProps> = ({
  isVisible,
  children,
  className = "",
  duration = 0.3,
  offset = 20,
  direction = "up",
}) => {
  const { initial, exit } = getOffsetValues(direction, offset);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, ...initial }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          exit={{ opacity: 0, ...exit }}
          transition={{ duration, ease: "easeOut" }}
          className={className}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AnimatedFadeSlide;
