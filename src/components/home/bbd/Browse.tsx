import React from "react";

const Browse = () => {
  return (
    <div className="h-auto md:h-[866px] max-w-[1240px] mx-auto bg-[#F0F0F0] rounded-3xl py-5">
      <h2 className="text-center py-16 capitalize  font-integBold text-[48px]">
        BROWSE BY dress STYLE
      </h2>

      <div className="md:p-[0px_80px_0px_80px] p-[0px_10px_0px_10px] h-auto md:h-[289px] mb-10">
        <div className="grid grid-cols-1 md:grid-cols-[30%_70%] gap-4 mb-4">
          <div className="relative">
            <h4 className="absolute left-2 top-2 font-satoshBold text-[36px] text-black">
              Casual
            </h4>
            <img
              src="/images/c1.png"
              alt="C1 Image"
              className="object-cover object-left-top w-full h-[289px] rounded-2xl"
            />
          </div>
          <div className="relative">
            <h4 className="absolute left-2 top-2 font-satoshBold text-[36px]">
              Casual
            </h4>
            <img
              src="/images/c1.png"
              alt="C1 Image"
              className="object-cover object-left-top w-full h-[289px] rounded-2xl"
            />
          </div>
         
        </div>
        <div className="grid grid-cols-1 md:grid-cols-[70%_30%] gap-4">
          <div className="relative">
            <h4 className="absolute left-2 top-2 font-satoshBold text-[36px]">
              Casual
            </h4>
            <img
              src="/images/c1.png"
              alt="C1 Image"
              className="object-cover object-left-top w-full h-[289px] rounded-2xl"
            />
          </div>
          <div className="relative">
            <h4 className="absolute left-2 top-2 font-satoshBold text-[36px]">
              Casual
            </h4>
            <img
              src="/images/c1.png"
              alt="C1 Image"
              className="object-cover object-left-top w-full h-[289px] rounded-2xl"
            />
          </div>
         
        </div>
       
      </div>
    </div>
  );
};

export default Browse;
