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
    <div className=" top-0 left-0 w-full h-[38px] bg-black text-white flex items-center p-3 shadow-md z-50 relative">
      <div className="mx-auto font-satoshi text-[14px]">
      Sign up and get 20% off to your first order. <span className='underline cursor-pointer'>Sign Up Now</span> 
      </div>
      <button 
        onClick={handleToggleVisibility} 
        className="hidden md:block absolute right-3 top-1/2 -translate-y-1/2 hover:bg-white hover:text-black rounded-full p-1 transition-colors"
      >
        <X size={24} />
      </button>
    </div>
  );
};

export default TopBar;