import Image from "next/image";
import HeroSection from "./components/HeroSection";
import Container from "./components/Container";

export default function Home() {
  return (
    <Container>
      <div className="max-w-[1318px] h-[507px] py-[136px] px-[72px]">
        <HeroSection />
      </div>
    </Container>
  );
}
