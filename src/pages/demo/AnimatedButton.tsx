import React from "react";
import { motion } from "framer-motion";
import { useRipple } from "../../hooks/useRippleEffect";

interface RippleEffectProps {
  numCircles?: number;
  duration?: number;
  delay?: number;
  color?: string; // Solid color
  gradient?: string; // Optional gradient class (Tailwind)
  scale?: number;
  x: number;
  y: number;
}

const RippleEffect: React.FC<RippleEffectProps> = ({
  numCircles = 3,
  duration = 1.5,
  delay = 0.3,
  color = "white",
  scale = 6,
  x,
  y,
  gradient,
}) => {
  return (
    <>
      {Array.from({ length: numCircles }).map((_, i) => (
        <motion.span
          key={i}
          initial={{ scale: 0, opacity: 0.4 }}
          animate={{ scale, opacity: 0 }}
          transition={{
            duration,
            ease: "easeOut",
            delay: i * delay,
          }}
          className={`absolute rounded-full pointer-events-none ${
            gradient ?? ""
          }`}
          style={{
            width: "40px",
            height: "40px",
            top: y,
            left: x,
            backgroundColor: gradient ? undefined : color, // only use if gradient not set
            transform: "translate(-50%, -50%)",
            transformOrigin: "center",
            zIndex: 0,
          }}
        />
      ))}
    </>
  );
};

const SearchButton: React.FC = () => {
  const { ripples, createRipple } = useRipple();

  return (
    <div className="relative inline-block">
      <button
        onClick={createRipple}
        className="relative z-10 px-6 py-2 bg-blue-600 text-white rounded-full overflow-hidden"
      >
        Search
        {ripples.map((ripple) => (
          <RippleEffect
            key={ripple.id}
            x={ripple.x}
            y={ripple.y}
            numCircles={3}
            duration={1.5}
            delay={0.3}
            scale={6}
            // For solid dark-mode aware color:
            color="rgba(255,255,255,0.3)" // You can use Tailwind's bg-white/30 too if set up
            // OR use gradient (TailwindCSS)
            gradient="bg-gradient-to-tr from-cyan-400 to-blue-600"
          />
        ))}
      </button>
    </div>
  );
};

export default SearchButton;
