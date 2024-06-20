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



import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"



const myFont = localFont({ src: '../../public/fonts/AnekBangla-SemiBold.ttf' })
const myFonts = localFont({ src: '../../public/fonts/AnekBangla-Regular.ttf' })


/* eslint-disable react/no-unescaped-entities */
const HeroSection = () => {
    const plugin = React.useRef(
        Autoplay({ delay: 2000, stopOnInteraction: true })
    )

    return (
        // <section className="w-full py-0 px-0 md:py-[35px] md:px-[50px] h-full mx-auto">
        //     <Carousel
        //         plugins={[plugin.current]}
        //         onMouseEnter={plugin.current.stop}
        //         onMouseLeave={plugin.current.reset}
        //     >
        //         <CarouselContent>
        //             {Array.from({ length: 3 }).map((_, index) => (
        //                 <CarouselItem key={index} className="relative">
        //                     <Image
        //                         alt="Hero"
        //                         className="w-full h-[507px] rounded-lg object-cover"
        //                         src={heroimg}
        //                     />
        //                     <div className="absolute inset-0 flex flex-col">
        //                         <div className="flex flex-col py-[52px] px-[59px]">
        //                             <div className="max-w-[359px] md:max-w-[555px]">
        //                                 <h1 className={`${myFont.className} text-[#333333] text-[32px] md:text-[50px] leading-[110%] font-semibold whitespace-pre-wrap break-words mb-5`}>
        //                                     Connecting <br />
        //                                     sellers and buyers where convenience <br />
        //                                     meet innovation
        //                                 </h1>
        //                             </div>
        //                             <div className="max-w-[197px] md:max-w-[332px]">
        //                                 <p className={`${myFonts.className} text-[#000000] leading-[131.8%] text-base md:text-[27px] mb-10`}>
        //                                     World’s largerst market place
        //                                 </p>
        //                             </div>
        //                             <Button asChild size="lg">
        //                                 <Link
        //                                     href="#"
        //                                 >
        //                                     Get started
        //                                 </Link>
        //                             </Button>

        //                         </div>
        //                     </div>
        //                     <div className="absolute bottom-0 w-full bg-white rounded-[10px] flex justify-center">
        //                         <div className="relative w-[90%] h-[80px] mx-[18px] my-[51px]">
        //                             <Input
        //                                 className="rounded-[30px] w-full h-full px-10 pl-12 pr-10"
        //                                 placeholder="Search..."
        //                             />
        //                             <div className="absolute inset-y-0 right-3 flex items-center pl-2">
        //                                 <div className="bg-[#5F3AFB] rounded-full p-1 w-[54px] h-[50px] flex justify-center items-center">
        //                                     <Search className="w-8 h-8 text-[#FFFFFF]" />
        //                                 </div>
        //                             </div>
        //                         </div>
        //                     </div>

        //                 </CarouselItem>
        //             ))}
        //         </CarouselContent>
        //         <CarouselPrevious />
        //         <CarouselNext />
        //     </Carousel>
        // </section>
        // <section className="w-full py-0 px-0 md:py-[35px] md:px-[50px] h-full mx-auto">
        //     <Carousel
        //         plugins={[plugin.current]}
        //         onMouseEnter={plugin.current.stop}
        //         onMouseLeave={plugin.current.reset}
        //     >
        //         <CarouselContent>
        //             {Array.from({ length: 3 }).map((_, index) => (
        //                 <CarouselItem key={index} className="relative">
        //                     <Image
        //                         alt="Hero"
        //                         className="w-full h-[507px] rounded-lg object-cover"
        //                         src={heroimg}
        //                     />
        //                     <div className="absolute inset-0 flex flex-col">
        //                         <div className="flex flex-col py-[52px] px-[59px]">
        //                             <div className="max-w-[359px] md:max-w-[555px]">
        //                                 <h1 className={`${myFont.className} text-[#333333] text-[32px] md:text-[50px] leading-[110%] font-semibold whitespace-pre-wrap break-words mb-5`}>
        //                                     Connecting <br />
        //                                     sellers and buyers where convenience <br />
        //                                     meet innovation
        //                                 </h1>
        //                             </div>
        //                             <div className="max-w-[197px] md:max-w-[332px]">
        //                                 <p className={`${myFonts.className} text-[#000000] leading-[131.8%] text-base md:text-[27px] mb-10`}>
        //                                     World’s largerst market place
        //                                 </p>
        //                             </div>
        //                             <Button asChild size="lg" className="relative z-10">
        //                                 <Link href="#">
        //                                     Get started
        //                                 </Link>
        //                             </Button>
        //                         </div>
        //                     </div>
        //                 </CarouselItem>
        //             ))}
        //         </CarouselContent>
        //     </Carousel>
        //     <div className="absolute bottom-0 h-[117px]  mx-[10px] p-2 mt-[50px] bg-white rounded-[10px] shadow-md flex justify-center">
        //         <div className="relative w-full h-[80px]">
        //             <Input
        //                 className="rounded-[30px] w-full h-full px-10 pl-12 pr-10"
        //                 placeholder="Search..."
        //             />
        //             <div className="absolute inset-y-0 right-3 flex items-center pl-2">
        //                 <div className="bg-[#5F3AFB] rounded-full p-1 w-[54px] h-[50px] flex justify-center items-center">
        //                     <Search className="w-8 h-8 text-[#FFFFFF]" />
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </section>
        <section className="w-full py-0 px-0 md:py-[35px] md:px-[50px] h-full mx-auto relative">
            <Carousel
                plugins={[plugin.current]}
                onMouseEnter={plugin.current.stop}
                onMouseLeave={plugin.current.reset}
            >
                <CarouselContent>
                    {Array.from({ length: 3 }).map((_, index) => (
                        <CarouselItem key={index} className="relative">
                            <Image
                                alt="Hero"
                                className="w-full h-[507px] rounded-lg object-cover"
                                src={heroimg}
                            />
                            <div className="absolute inset-0 flex flex-col">
                                <div className="flex flex-col py-[52px] px-[59px]">
                                    <div className="max-w-[359px] md:max-w-[555px]">
                                        <h1 className={`${myFont.className} text-[#333333] text-[32px] md:text-[50px] leading-[110%] font-semibold whitespace-pre-wrap break-words mb-5`}>
                                            Connecting <br />
                                            sellers and buyers where convenience <br />
                                            meet innovation
                                        </h1>
                                    </div>
                                    <div className="max-w-[197px] md:max-w-[332px]">
                                        <p className={`${myFonts.className} text-[#000000] leading-[131.8%] text-base md:text-[27px] mb-10`}>
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
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-[calc(100%-20px)] max-w-3xl md:max-w-[1175px] h-[117px] mx-auto p-2 bg-white rounded-[10px] shadow-md flex justify-center">
                <div className="relative w-full h-[80px]">
                    <Input
                        className="rounded-[30px] w-full h-full px-10 pl-12 pr-10"
                        placeholder="Search..."
                    />
                    <div className="absolute inset-y-0 right-3 flex items-center pl-2">
                        <div className="bg-[#5F3AFB] rounded-full p-1 w-[54px] h-[50px] flex justify-center items-center">
                            <Search className="w-8 h-8 text-[#FFFFFF]" />
                        </div>
                    </div>
                </div>
            </div>
        </section>


    );
}

export default HeroSection;

// px-4 py-8 md:px-8 md:py-[52px] lg:px-12 lg:py-16

{/* <div className="relative">
                <Image
                    alt="Hero"
                    className="w-full h-[507px] rounded-lg object-cover"
                    src={heroimg}
                />
                <div className="absolute inset-0 flex flex-col">
                    <div className="flex flex-col py-[52px] px-[59px]">
                        <div className="max-w-[359px] md:max-w-[555px]">
                            <h1 className={`${myFont.className} text-[#333333] text-[32px] md:text-[50px] leading-[110%] font-semibold whitespace-pre-wrap break-words mb-5`}>
                                Connecting <br />
                                sellers and buyers where convenience <br />
                                meet innovation
                            </h1>
                        </div>
                        <div className="max-w-[197px] md:max-w-[332px]">
                            <p className={`${myFonts.className} text-[#000000] leading-[131.8%] text-base md:text-[27px] mb-10`}>
                                World’s largerst market place
                            </p>
                        </div>
                        <Button asChild size="lg">
                            <Link
                                href="#"
                            >
                                Get started
                            </Link>
                        </Button>

                    </div>
                </div>
                <div className="absolute bottom-[-70px] left-0 right-0 bg-white h-[117px] rounded-[10px] mx-[10px] shadow-[#000000] flex justify-center items-center">
                    <div className="relative w-[90%] h-[80px] mx-[18px] my-[51px]">
                        <Input
                            className="rounded-[30px] w-full h-full px-10 pl-12 pr-10"
                            placeholder="Search..."
                        />
                        <div className="absolute inset-y-0 right-3 flex items-center pl-2">
                            <div className="bg-[#5F3AFB] rounded-full p-1 w-[54px] h-[50px] flex justify-center items-center">
                                <Search className="w-8 h-8 text-[#FFFFFF]" />
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}



