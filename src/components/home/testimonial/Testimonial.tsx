
'use client'
import React, { useRef, useEffect } from "react";
import { ReviewCard } from "@/components/ReviewCard";
import { Button } from "@/components/ui/button";
import { MoveLeftIcon, MoveRightIcon } from "lucide-react";

type Review = {
  rating: number;
  customerName: string;
  description: string;
  date: string;
};

const reviews: Review[] = [
  {
    rating: 5,
    customerName: "Sharjeel",
    description: "Something went wrong",
    date: "10-12-2024",
  },
  {
    rating: 4,
    customerName: "Ayesha",
    description: "Amazing product, will buy again!",
    date: "09-12-2024",
  },
  {
    rating: 5,
    customerName: "Ali",
    description: "Exceeded my expectations!",
    date: "08-12-2024",
  },
  {
    rating: 3,
    customerName: "Fatima",
    description: "Good, but there's room for improvement.",
    date: "07-12-2024",
  },
  {
    rating: 5,
    customerName: "Zain",
    description: "Excellent customer service and quality.",
    date: "06-12-2024",
  },
  {
    rating: 4,
    customerName: "Hassan",
    description: "Pretty decent experience overall.",
    date: "05-12-2024",
  },
  {
    rating: 5,
    customerName: "Sara",
    description: "Highly recommended!",
    date: "04-12-2024",
  },
  {
    rating: 3,
    customerName: "Kamran",
    description: "Delivery was late but product was good.",
    date: "03-12-2024",
  },
  {
    rating: 5,
    customerName: "Noor",
    description: "Absolutely loved it!",
    date: "02-12-2024",
  },
  {
    rating: 4,
    customerName: "Tariq",
    description: "Met my expectations.",
    date: "01-12-2024",
  },
];

const Testimonial: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      container.scrollLeft = (container.scrollWidth - container.clientWidth) / 2;
    }
  }, []);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -300,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 300,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="container mx-auto">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex justify-between items-center">
          <h2 className="py-16 px-5 capitalize font-integBold text-[48px]">
            OUR HAPPY CUSTOMERS
          </h2>
          <div>
            <Button onClick={scrollLeft} className="bg-transparent text-black">
              <MoveLeftIcon color="black" />
            </Button>
            <Button onClick={scrollRight} className="bg-transparent">
              <MoveRightIcon color="black" />
            </Button>
          </div>
        </div>
        <div className="relative">
          <div
            ref={scrollContainerRef}
            className="flex overflow-hidden gap-4 py-4 relative"
          >
            {reviews.map((review, index) => (
              <div
                key={index}
                className={`min-w-[300px] flex-shrink-0 snap-center relative transform transition-all ease-in-out duration-300 ${
                  index === Math.floor(reviews.length / 2)
                    ? "scale-100 opacity-100"
                    : "scale-90 opacity-70"
                }`}
                style={{ transition: "all 0.3s ease" }}
              >
                <ReviewCard
                  rating={review.rating}
                  customerName={review.customerName}
                  description={review.description}
                  date={review.date}
                />
              </div>
            ))}
            <div
              className="absolute left-0 top-0 h-full w-1/5 bg-gradient-to-r from-white to-transparent pointer-events-none"
            ></div>
            <div
              className="absolute right-0 top-0 h-full w-1/5 bg-gradient-to-l from-white to-transparent pointer-events-none"
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
