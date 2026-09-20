import React from 'react';

export default function Container({ children, className = '' }) {
  return (
    <div className={`max-w-[1360px] mx-auto px-4 sm:px-8 lg:px-12 w-full ${className}`}>
      {children}
    </div>
  );
}
