import GridProducts from "@/components/GridProducts";
import Browse from "@/components/home/bbd/Browse";
import Gallery from "@/components/home/gallery/Gallery";
import Hero from "@/components/home/hero/Hero";
import HeroBottom from "@/components/home/hero/HeroBottom";
import Testimonial from "@/components/home/testimonial/Testimonial";
import React from "react";

const Home = () => {
  return (
    <>
      <Hero />
      <HeroBottom />
      <GridProducts title="NEW ARRIVALS" />
      <GridProducts title="Best Products" />
      <Browse />
      <Testimonial />
    </>
  );
};

export default Home;
