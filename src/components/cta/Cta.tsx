import { Mail } from 'lucide-react'
import React from 'react'

const Cta = () => {
  return (
    <div className="p-10 bg-black max-w-[1240px] mx-auto h-auto md:h-[180px] z-50 text-white rounded-3xl relative overflow-hidden md:-mb-[90px] -mb-[0px]">
    <div className="flex flex-col md:flex-row md:justify-between justify-normal items-center">
      <div className="md:w-1/2 w-full text-center md:text-left">
        <h2 className="font-integBold md:text-[40px] text-[20px] leading-[45px]">
          STAY UP TO DATE ABOUT OUR LATEST OFFERS
        </h2>
      </div>
      <div className="md:w-1/2 w-full flex flex-col items-center md:items-end mt-4 md:mt-0">
        <div className="relative w-full md:w-auto">
          <input 
            className="p-[12px_16px] rounded-full pl-12 w-full md:w-[339px] mb-2 placeholder:text-grey text-center" 
            type="text" 
            placeholder="Enter your email address" 
          />
          <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-grey" />
        </div>
        <button 
          className="p-[12px_16px] rounded-full px-5 w-full md:w-[339px] bg-white text-black font-satoshmed text-[16px] mt-2"
        >
          Subscribe to Newsletter
        </button>
      </div>
    </div>
  </div>
  )
}

export default Cta