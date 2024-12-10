import Link from "next/link";
import { footerData } from "@/data/footerData";
import { FooterDataType } from "@/types/footer";
import Cta from "../cta/Cta";

const Footer = () => {
  const data: FooterDataType = footerData;

  return (
    <>

    <Cta/>
    <footer className="body-font bg-[#F0F0F0] z-10">
      <div className="max-w-[1240px] px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col md:mt-10 mt-0">
        <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
          <h3 className="font-integBold text-[33.45px] text-black">
            {data.companyName}
          </h3>
          <p className="mt-2 text-sm font-satoshi text-[14px] leading-[22px] mb-10">
            {data.description}
          </p>

          <div className="flex gap-3 md:justify-start justify-center items-center">
            {data.socialIcons.map((icon) => (
              <Link
              key={icon.name}
              href={icon.href}
                className="size-[28px] rounded-full bg-white flex justify-center items-center hover:bg-black group"
              >
                <icon.icon className="size-4 group-hover:text-white text-black" />
                <span className="sr-only">{icon.name}</span>
              </Link>
            ))}
          </div>
        </div>
        <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
          {data.footerCards.map((card) => (
            <div key={card.title} className="lg:w-1/4 w-1/2 px-4">
              <h2 className="title-font font-medium text-gray-900 text-sm mb-3 uppercase font-satoshmed text-[16px] leading-[18px] tracking-[3px]">
                {card.title}
              </h2>
              <nav className="list-none mb-10">
                {card.links.map((link, index) => (
                  <li key={index} className="mb-3">
                    <Link
                      href="#"
                      className="text-grey font-satoshi text-[16px] leading-[19px] hover:text-black"
                      >
                      {link}
                    </Link>
                  </li>
                ))}
              </nav>
            </div>
          ))}
        </div>
      </div>
      <div className="py-10">
        <div className="container px-4 mx-auto flex flex-col md:flex-row justify-center md:justify-between items-center">
          <p className="text-gray-500 text-sm text-center sm:text-left">
            {data.copyright}
          </p>
          <div className="flex gap-2 justify-center items-center mt-4 md:mt-0">
            {data.paymentMethods.map((src, index) => (
              <img
              key={index}
              className="object-cover object-center bg-white p-4 rounded-md w-[60px] h-[40px] sm:w-[80px] sm:h-[50px]"
              
              src={src}
              alt="Payment Method"

              />
            ))}
          </div>
        </div>
      </div>
    </footer>
            </>
  );
};

export default Footer;

