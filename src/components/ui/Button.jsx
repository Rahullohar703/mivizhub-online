import React from 'react';
import { motion } from 'framer-motion';

export default function Button({ children, onClick, variant = 'primary', className = '' }) {
  const baseStyles = "inline-flex items-center justify-center font-medium transition-all duration-200 rounded-full text-sm";
  
  const variants = {
    primary: "bg-brandAccent text-white shadow-[0_0_20px_rgba(79,70,229,0.4)] hover:shadow-[0_0_30px_rgba(79,70,229,0.6)] px-6 py-3 border border-brandAccent/50 relative overflow-hidden group",
    secondary: "bg-surface/50 backdrop-blur text-white border border-surfaceBorder hover:border-textMuted px-6 py-3",
    ghost: "text-textMuted hover:text-white px-4 py-2"
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
