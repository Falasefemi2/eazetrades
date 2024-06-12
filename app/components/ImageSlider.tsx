import { Button } from "@/components/ui/button";
import Image from "next/image";
import { SVGProps } from "react";
import VidSlider from "./VidSlider";



const ImageSlider = () => {
    return (
        <div className="py-[58px] px-20 mt-[60px] md:mt-[195px]">
            <h1 className="text-[#333333] font-semibold text-[32px] leading-[35.2px] md:text-5xl md:leading-[52.8px] whitespace-nowrap text-center md:text-left">Browse by categories</h1>
            <div className="px-[34px] md:px-20 pt-[166px] pb-[115px]">
                <VidSlider />
            </div>
        </div>
    );
}

export default ImageSlider;



function ChevronLeftIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="m15 18-6-6 6-6" />
        </svg>
    )
}


function ChevronRightIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="m9 18 6-6-6-6" />
        </svg>
    )
}