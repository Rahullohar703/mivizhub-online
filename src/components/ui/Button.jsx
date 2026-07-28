import React from 'react';
import { motion } from 'framer-motion';

export default function Button({ children, onClick, variant = 'primary', className = '' }) {
  const baseStyles = "inline-flex items-center justify-center font-medium transition-all duration-200 rounded-full text-sm";
  
  const variants = {
    primary: "bg-brandBlack text-white hover:bg-gray-800 shadow-sm px-6 py-3",
    secondary: "bg-white text-textMain border border-gray-200 hover:border-gray-300 hover:bg-gray-50 shadow-sm px-6 py-3",
    ghost: "text-textMuted hover:text-textMain px-4 py-2"
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {children}
    </motion.button>
  );
}
