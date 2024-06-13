import { Button } from "@/components/ui/button";
import Image from "next/image";
import { SVGProps } from "react";
import VidSlider from "./VidSlider";



const ImageSlider = () => {
    return (
        <div className="py-[58px] px-20 mt-[60px] md:mt-[195px]">
            <div className="text-center lg:text-left">
                <h1 className="text-[#333333] font-semibold text-3xl lg:text-[48px] leading-[110%]">Browse by categories</h1>
            </div>
            {/* <h1 className="text-[#333333] font-semibold text-[32px] leading-[110%]  whitespace-nowrap text-center md:text-left">Browse by categories</h1> */}
            <div className="px-[34px] md:px-20 pt-[32px] md:pt-[55px] pb-[115px]">
                <VidSlider />
            </div>
        </div>
    );
}

export default ImageSlider;


