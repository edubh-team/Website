import React from "react";
import { motion } from "framer-motion";

interface HamburgerMenuToggleProps {
  isOpen: boolean;
  onClick: () => void;
}

const HamburgerMenuToggle: React.FC<HamburgerMenuToggleProps> = ({
  isOpen,
  onClick,
}) => {
  const commonStyles = "h-1 w-7 bg-black rounded-full absolute transition-all duration-300";

  return (
    <button 
      onClick={onClick}
      className="relative w-8 h-8 flex justify-center items-center focus:outline-none"
    >
      <motion.span
        initial={false}
        animate={{ rotate: 0, y: -6 }}
        className={`${commonStyles} top-1.5`}
      />
      <motion.span
        initial={false}
        animate={{ opacity: 1 }}
        className={`${commonStyles} top-1/2 -translate-y-1/2`}
      />
      <motion.span
        initial={false}
        animate={{ rotate: 0, y: 6 }}
        className={`${commonStyles} bottom-1.5`}
      />
    </button>
  );
};

export default HamburgerMenuToggle;
