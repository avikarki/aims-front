import React from "react";

interface SpinnerProps {
  size?: string; // Tailwind size like "w-6 h-6" or "w-10 h-10"
  color?: string; // Tailwind color like "border-blue-500"
}

const Spinner: React.FC<SpinnerProps> = ({
  size = "w-10 h-10",
  color = "border-blue-500",
}) => {
  return (
    <div className={`flex items-center justify-center`}>
      <div
        className={`border-3 ${color} border-t-transparent rounded-full animate-spin ${size}`}
      ></div>
    </div>
  );
};

export default Spinner;
