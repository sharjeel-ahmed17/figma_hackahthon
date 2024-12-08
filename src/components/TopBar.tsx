'use client'
import React, { useState } from 'react';
import { X } from 'lucide-react';

const TopBar = () => {
  const [isVisible, setIsVisible] = useState(true);

  const handleToggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div className="fixed top-0 left-0 w-full bg-blue-500 text-white flex items-center p-3 shadow-md z-50 relative">
      <div className="mx-auto font-semibold text-lg">
        Top Bar Title
      </div>
      <button 
        onClick={handleToggleVisibility} 
        className="absolute right-3 top-1/2 -translate-y-1/2 hover:bg-blue-600 rounded-full p-1 transition-colors"
      >
        <X size={24} />
      </button>
    </div>
  );
};

export default TopBar;