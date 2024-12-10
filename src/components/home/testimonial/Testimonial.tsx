import { ReviewCard } from "@/components/ReviewCard";
import React from "react";

const Testimonial = () => {
  return (
    <section className="max-w-[1240px] mx-auto">
      <div className="container px-5 py-24 mx-auto">
        <h2 className=" py-16 capitalize  font-integBold text-[48px]">
          OUR HAPPY CUSTOMERS
        </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

          <ReviewCard
            rating={5}
            customerName={"sharjeel"}
            description={"somethong went wrong"}
            date={"10-12-2024"}
          />
          <ReviewCard
            rating={5}
            customerName={"sharjeel"}
            description={"somethong went wrong"}
            date={"10-12-2024"}
          />
          <ReviewCard
            rating={5}
            customerName={"sharjeel"}
            description={"somethong went wrong"}
            date={"10-12-2024"}
          />
      </div>
  
      </div>
    </section>
  );
};

export default Testimonial;
