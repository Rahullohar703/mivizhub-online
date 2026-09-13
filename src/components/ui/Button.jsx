import React from 'react';

export default function Button({ children, onClick, variant = 'primary', className = '' }) {
  const baseStyles = "inline-flex items-center justify-center font-semibold transition-all duration-150 rounded-xl text-sm focus:outline-none";
  
  const variants = {
    primary: "bg-[#4F46E5] hover:bg-[#4338CA] text-white shadow-md shadow-indigo-900/30 px-6 py-3 border border-indigo-400/30 active:scale-[0.99]",
    secondary: "bg-white/5 hover:bg-white/10 text-white border border-white/10 px-6 py-3 active:scale-[0.99]",
    ghost: "text-gray-400 hover:text-white px-4 py-2"
  };

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
}
