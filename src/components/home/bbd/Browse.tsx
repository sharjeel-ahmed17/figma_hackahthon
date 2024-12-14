import React from "react";

const data = [
  {
    image: "/images/c1.png",
    text: "Casual",
  },
  {
    image: "/images/c2.png",
    text: "Formal",
  },
  {
    image: "/images/c3.png",
    text: "Sporty",
  },
  {
    image: "/images/c4.png",
    text: "Elegant",
  },
];

const Browse = () => {
  return (
    <div className="h-auto md:h-[866px] max-w-[1240px] mx-auto bg-[#F0F0F0] rounded-3xl py-5">
      <h2 className="text-center py-16 capitalize font-integBold text-[48px]">
        BROWSE BY DRESS STYLE
      </h2>

      <div className="md:p-[0px_80px_0px_80px] p-[0px_10px_0px_10px] h-auto md:h-[289px] mb-10">
        <div className="grid grid-cols-1 md:grid-cols-[30%_70%] gap-4 mb-4">
          {data.slice(0, 2).map((item, index) => (
            <div key={index} className="relative">
              <h4 className="absolute left-2 top-2 font-satoshBold text-[36px] text-black">
                {item.text}
              </h4>
              <img
                src={item.image}
                alt={`Image ${index + 1}`}
                className="object-cover object-left-top w-full h-[289px] rounded-2xl"
              />
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-[70%_30%] gap-4">
          {data.slice(2, 4).map((item, index) => (
            <div key={index} className="relative">
              <h4 className="absolute left-2 top-2 font-satoshBold text-[36px]">
                {item.text}
              </h4>
              <img
                src={item.image}
                alt={`Image ${index + 3}`}
                className="object-cover object-left-top w-full h-[289px] rounded-2xl"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Browse;
