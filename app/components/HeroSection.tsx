"use client";

import { Button } from "@/components/ui/button";
import heroimg from "../../public/images/hero.jpg"
import Image from "next/image";
import { Input } from "@/components/ui/input";
import SearchBar from "./Search";
import Link from "next/link";
import localFont from 'next/font/local'
import { Search } from "lucide-react";

import * as React from "react"
import Autoplay from "embla-carousel-autoplay"




import {
    Carousel,
    CarouselIndicator,
    CarouselMainContainer,
    CarouselNext,
    CarouselPrevious,
    CarouselThumbsContainer,
    SliderMainItem,
} from "@/components/ui/mycarousel";
import AutoScroll from "embla-carousel-auto-scroll";



// import {
//     Carousel,
//     CarouselContent,
//     CarouselItem,
//     CarouselNext,
//     CarouselPrevious,
// } from "@/components/ui/carousel"



const myFont = localFont({ src: '../../public/fonts/AnekBangla-SemiBold.ttf' })
const myFonts = localFont({ src: '../../public/fonts/AnekBangla-Regular.ttf' })


/* eslint-disable react/no-unescaped-entities */
const HeroSection = () => {
    const plugin = React.useRef(
        Autoplay({ delay: 2000, stopOnInteraction: true })
    )

    return (
        <section className="w-full pt-[80px] md:pt-[220px] px-0 md:px-[50px] h-full mx-auto relative">

            <Carousel
                plugins={[
                    AutoScroll({
                        speed: 0.95,
                    }),
                    Autoplay({
                        delay: 7000,
                        stopOnInteraction: true,
                        jump: true

                    })

                ]}
                carouselOptions={{
                    loop: true,
                }}
            >
                <CarouselMainContainer>
                    {Array.from({ length: 3 }).map((_, index) => (
                        <SliderMainItem key={index} className="relative">
                            <Image
                                alt="Hero"
                                className="w-full h-[427px] md:h-[507px] rounded-lg object-cover"
                                src={heroimg}
                            />
                            <div className="absolute inset-0 flex flex-col">
                                <div className="flex flex-col py-[32px] md:py-[52px] px-[30px] md:px-[59px]">
                                    <div className="max-w-[359px] md:max-w-[555px]">
                                        <h1 className={`${myFont.className} text-[#333333] text-[28px] md:text-[50px] leading-[110%] font-semibold whitespace-pre-wrap break-words mb-3 md:mb-5`}>
                                            Connecting <br />
                                            sellers and buyers where convenience <br />
                                            meet innovation
                                        </h1>
                                    </div>
                                    <div className="max-w-[197px] md:max-w-[332px]">
                                        <p className={`${myFonts.className} text-[#000000] leading-[131.8%] text-sm md:text-[27px] mb-6 md:mb-10`}>
                                            World's largerst market place
                                        </p>
                                    </div>
                                    <Button asChild size="lg" className="relative z-10">
                                        <Link href="#">
                                            Get started
                                        </Link>
                                    </Button>
                                </div>
                            </div>
                        </SliderMainItem>
                    ))}
                </CarouselMainContainer>
                <div className="absolute bottom-[-120px] left-1/2 -translate-x-1/2">
                    <CarouselThumbsContainer className="gap-x-2 ">
                        {Array.from({ length: 3 }).map((_, index) => (
                            <CarouselIndicator key={index} index={index} />
                        ))}
                    </CarouselThumbsContainer>
                </div>

            </Carousel>
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-[calc(100%-20px)] max-w-3xl md:max-w-[1175px] h-[100px] mx-auto bg-white rounded-[10px] shadow-md flex items-center justify-center">
                <div className="relative w-full px-4">
                    <Input
                        className="rounded-[30px] w-full h-[60px] px-6 pl-12 pr-[70px]"
                        placeholder="Search..."
                    />
                    <div className="absolute inset-y-0 right-6 flex items-center">
                        <div className="bg-[#5F3AFB] rounded-full p-1 w-[50px] h-[50px] flex justify-center items-center">
                            <Search className="w-7 h-7 text-[#FFFFFF]" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HeroSection;




