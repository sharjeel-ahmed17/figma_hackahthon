import GridProducts from "@/components/GridProducts";
import Browse from "@/components/home/bbd/Browse";
import Gallery from "@/components/home/gallery/Gallery";
import Hero from "@/components/home/hero/Hero";
import HeroBottom from "@/components/home/hero/HeroBottom";
import Testimonial from "@/components/home/testimonial/Testimonial";
import { Button } from "@/components/ui/button";
import React from "react";




const newArrivals = [
  {
    image: "/images/na1.png",
    title: "Stylish Jacket",
    price: 150,
    discountPrice: 120,
    discountPercent: 20,
    rating: 4.8,
  },
  {
    image: "/images/na2.png",
    title: "Trendy Sneakers",
    price: 100,
    discountPrice: null,
    discountPercent: null,
    rating: 4.5,
  },
  {
    image: "/images/na3.png",
    title: "Trendy Sneakers",
    price: 100,
    discountPrice: null,
    discountPercent: null,
    rating: 4.5,
  },
  {
    image: "/images/na4.png",
    title: "Trendy Sneakers",
    price: 100,
    discountPrice: null,
    discountPercent: null,
    rating: 4.5,
  },
];

const bestProducts = [
  {
    image: "/images/ts1.png",
    title: "Classic Watch",
    price: 200,
    discountPrice: 180,
    discountPercent: 10,
    rating: 4.9,
  },
  {
    image: "/images/ts2.png",
    title: "Leather Bag",
    price: 250,
    discountPrice: null,
    discountPercent: null,
    rating: 4.6,
  },
  {
    image: "/images/ts3.png",
    title: "Leather Bag",
    price: 250,
    discountPrice: null,
    discountPercent: null,
    rating: 4.6,
  },
  {
    image: "/images/ts4.png",
    title: "Leather Bag",
    price: 250,
    discountPrice: null,
    discountPercent: null,
    rating: 4.6,
  },
];
const Home = () => {
  return (
    <>
      <Hero />
      <HeroBottom />
      <GridProducts title="NEW ARRIVALS" products={newArrivals}/>
    
      <GridProducts title="Best Products" products={bestProducts}/>
      <Browse />
      <Testimonial />
    </>
  );
};

export default Home;
