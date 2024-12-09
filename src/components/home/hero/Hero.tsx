// import Image from 'next/image'
// import { Button } from "@/components/ui/button"

// export default function Hero() {
//   return (

//     <>

//    {/* <div >
// <div>content</div>
//    </div> */}
// {/* <img src="/images/hero2.png" alt="" /> */}

//    <div className="md:bg-[url('/images/hero2.png')] bg-[url('/images/mob-hero.png')] bg-cover bg-center h-screen">
//   <h1 className="text-white text-4xl font-bold">Welcome to Tailwind CSS</h1>
// </div>

//     </>
//   )
// }

// import React from 'react';

// const Hero = () => {
//   return (
//     <section className="relative bg-cover bg-center lg:bg-[url('/images/hero2.png')] sm:bg-[url('/images/mob-hero.png')] bg-no-repeat h-screen flex items-center">
//       <div className="container mx-auto px-6 lg:px-20">
//         <div className="w-full lg:w-1/2">
//           <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 z-50">
//             Welcome to Our Platform
//           </h1>
//           <p className="text-lg sm:text-xl text-gray-200 mb-6">
//             Discover amazing features and transform your workflow today.
//           </p>
//           <button className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
//             Get Started
//           </button>
//         </div>
//       </div>
//       <div className="absolute inset-0 bg-black/40 lg:bg-black/30"></div>
//     </section>
//   );
// };

// export default Hero;

// final
// const Hero = () => {
//   return (
//     <section className="relative bg-cover bg-center lg:bg-[url('/images/hero2.png')] sm:bg-none bg-no-repeat h-auto lg:h-screen flex flex-col lg:flex-row items-center my-10">

//       {/* Text Content */}
//       <div className="container mx-auto px-6 lg:px-20 z-10 py-16 lg:py-0">
//         <div className="w-full lg:w-1/2 text-center lg:text-left">
//           <h1 className=" leading-[64px] text-4xl sm:text-5xl lg:text-[64px] font-integBold text-white mb-4">
//           FIND CLOTHES THAT MATCHES YOUR STYLE
//           </h1>
//           <p className="font-satoshi text-lg sm:text-[16px] leading-[22px] text-black mb-6">
//           Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.
//           </p>
//           <button className="px-[75px] py-[22px] rounded-full  bg-black text-white  hover:bg-white hover:text-black transition font-satoshmed text-[16px]">
//           Shop Now
//           </button>
//         </div>
//       </div>

//       {/* Mobile Image */}
//       <div className="w-full lg:hidden">
//         <img
//           src="/images/mob-hero.png"
//           alt="Mobile Hero"
//           className="w-full object-cover"
//         />
//       </div>

//       {/* Overlay for Large Screens */}
//       <div className="absolute inset-0 bg-black/40 lg:bg-black/30"></div>
//     </section>
//   );
// };

// export default Hero;

import React from "react";

const Hero = () => {
  return (
    <section className="relative bg-cover bg-center lg:bg-[url('/images/hero2.png')] sm:bg-none bg-no-repeat h-auto lg:h-screen flex flex-col lg:flex-row items-center mt-10">
      {/* Text Content */}
      <div className="container mx-auto px-6 lg:px-20 z-10 py-16 lg:py-0">
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h1 className="leading-[64px] text-4xl sm:text-5xl lg:text-[64px] font-integBold text-white mb-4">
            FIND CLOTHES THAT MATCHES YOUR STYLE
          </h1>
          <p className="font-satoshi text-lg sm:text-[16px] leading-[22px] text-black mb-6">
            Browse through our diverse range of meticulously crafted garments,
            designed to bring out your individuality and cater to your sense of
            style.
          </p>
          <button className="px-[75px] py-[22px] rounded-full bg-black text-white hover:bg-white hover:text-black transition font-satoshmed text-[16px]">
            Shop Now
          </button>
        </div>
      </div>

      {/* Star Image - Top Right */}
      <div className=" hidden md:block absolute top-5 right-5 w-12 h-12 lg:w-16 lg:h-16">
        <img
          src="/images/star.png"
          alt="Star Decorative"
          className="w-full h-full object-contain"
        />
      </div>

      {/* Star Image - Center Center */}
      <div className="hidden md:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 lg:w-16 lg:h-16">
        <img
          src="/images/star.png"
          alt="Star Decorative"
          className="w-full h-full object-contain"
        />
      </div>

      {/* Mobile Image */}
      <div className="w-full lg:hidden relative">
        <img
          src="/images/mob-hero.png"
          alt="Mobile Hero"
          className="w-full object-cover"
        />
        {/* mobile screen image */}
        <div className=" block md:hidden absolute top-5 right-5 w-12 h-12 lg:w-16 lg:h-16">
          <img
            src="/images/star.png"
            alt="Star Decorative"
            className="w-full h-full object-contain"
          />
        </div>

        {/* Star Image - Center Center */}
        <div className="block md:hidden absolute top-1/2 left-5   w-12 h-12 lg:w-16 lg:h-16">
          <img
            src="/images/star.png"
            alt="Star Decorative"
            className="w-full h-full object-contain"
          />
        </div>
      </div>

      {/* Overlay for Large Screens */}
      <div className="absolute inset-0 bg-black/40 lg:bg-black/30"></div>
    </section>
  );
};

export default Hero;
