import GridProducts from '@/components/GridProducts'
import Gallery from '@/components/home/gallery/Gallery'
import Hero from '@/components/home/hero/Hero'
import HeroBottom from '@/components/home/hero/HeroBottom'
import Testimonial from '@/components/home/testimonial/Testimonial'
import React from 'react'

const Home = () => {
  return (
   <>
   <Hero/>
   <HeroBottom/>
   <GridProducts/>
   <GridProducts/>

   <Testimonial/>
   <Gallery/>
   </>
  )
}

export default Home