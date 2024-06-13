import HeroSection from "./components/HeroSection";
import ImageSlider from "./components/ImageSlider";
import RelatedSearch from "./components/RelatedSearch";
import TrendingProducts from "./components/TrendingProducts";


export default function Home() {
  return (
    <>
      <HeroSection />
      <ImageSlider />
      <RelatedSearch />
      <TrendingProducts />
    </>
  );
}
