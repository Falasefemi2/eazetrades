import { Button } from "@/components/ui/button";
import heroimg from "../../public/images/heroimg.jpg"
import Image from "next/image";
import { Input } from "@/components/ui/input";
import SearchBar from "./Search";

/* eslint-disable react/no-unescaped-entities */
const HeroSection = () => {
    return (
        <div className="rounded-[12px]">
            <div className="relative">
                <div className="relative flex flex-col lg:flex-row items-center justify-between">
                    <div className="relative z-10 lg:max-w-md mb-8 lg:mb-0 text-center lg:text-left">
                        <h1>Connecting sellers and buyers where convenience meet innovation</h1>
                        <p>World's largest market place</p>
                        <Button>Get Started</Button>
                    </div>
                    <div className="absolute w-full lg:w-auto">
                        <Image src={heroimg}
                            width={400}
                            height={300}
                            alt="Shopping cart with products"
                            className="rounded-lg" />
                    </div>
                </div>
                <div className="mt-8">
                    <SearchBar className="w-full max-w-2xl mx-auto" />
                </div>
            </div>
        </div>
    );
}

export default HeroSection;