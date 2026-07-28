import React from 'react';

export default function Container({ children, className = '' }) {
  return (
    <div className={`max-w-6xl mx-auto px-6 md:px-12 lg:px-8 w-full ${className}`}>
      {children}
    </div>
  );
}
