
import React from "react";
import HeroSection from "./components/HeroSection";
import ImageSlider from "./components/ImageSlider";
import RelatedSearch from "./components/RelatedSearch";
import Testimonials from "./components/Testimonials";
import TrendingProducts from "./components/TrendingProducts";


export default function Home() {
  return (
    <>
      <HeroSection />
      <ImageSlider />
      <RelatedSearch />
      <TrendingProducts />
      <Testimonials />
    </>
  );
}
