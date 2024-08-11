"use client";

import stool from "../../public/images/stool.png"
import bootle from "../../public/images/bottle.png"
import crocs from "../../public/images/crocs.png"
import watch from "../../public/images/watch.png"
import headphone from "../../public/images/headphone.png"
import speaker from "../../public/images/speaker.png"
import stoolm from "../../public/images/stool mobile.png"

import { Button } from "@/components/ui/button"
import {
    Card,
} from "@/components/ui/card"
import Image from "next/image";
import location from "../../public/images/location.png"
import { LocateIcon, ShoppingCart } from "lucide-react";


const pics = [stool, bootle, crocs, watch, headphone, speaker]

const TrendingProducts = () => {
    return (
        <section>
            <div className="text-center">
                <h1 className="font-semibold text-[32px] leading-[131.8%] text-[#333333] mb-[60px]">All trending products</h1>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 px-2 sm:px-4 lg:px-6 mx-auto">
                {pics.map((p, i) => (
                    <Card className="bg-white drop-shadow-md overflow-hidden rounded-lg sm:rounded-xl" key={i}>
                        <div className="p-2 sm:p-3 relative">
                            <div className="absolute top-2 right-2 sm:top-3 sm:right-3 z-10 bg-white text-blue-700 px-1.5 py-0.5 sm:px-2 sm:py-1 rounded-full text-[10px] sm:text-xs font-semibold">
                                Premium Ad
                            </div>
                            <Image
                                src={p}
                                width={600}
                                height={400}
                                alt={`PIC ${i + 1}`}
                                className="w-full aspect-[3/2] object-cover rounded-md sm:rounded-lg"
                            />
                        </div>
                        <div className="p-2 sm:p-3 space-y-1 sm:space-y-2">
                            <div className="flex items-center justify-between">
                                <h3 className="text-xs sm:text-sm font-semibold text-[#5F3AFB]">Fashion</h3>
                                <div className="text-xs sm:text-sm lg:text-base font-bold text-black">₦20,000</div>
                            </div>
                            <p className="text-black font-bold text-xs sm:text-sm lg:text-base">High Quality Crocs</p>
                            <div className="bg-[#F0F0F0] rounded-md sm:rounded-lg p-1.5 sm:p-2">
                                <div className="text-[10px] sm:text-xs lg:text-sm text-[#5F3AFB] flex items-center gap-1 sm:gap-2 mb-1 sm:mb-2">
                                    <Image src={location} alt="location" className="w-3 h-3 sm:w-4 sm:h-4" />
                                    Lagos, Ikeja
                                </div>
                                <div className="flex items-center justify-between">
                                    <p className="text-[10px] sm:text-xs lg:text-sm text-black whitespace-nowrap">16 visits</p>
                                    <Button className="rounded-full text-[8px] sm:text-xs px-1 py-0.5 sm:px-3 sm:py-1 ml-1 sm:ml-2 min-w-[40px] sm:min-w-auto w-[100px]">
                                        Preview
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </Card>
                ))}
            </div>
            <div className="flex items-center justify-center mt-[60px] mb-[89px]">
                <Button variant="outline" className="px-[14px] py-[13px] w-[234px] h-[69px] rounded-[12px] text-[#333333] bg-transparent">
                    View all products <span className="ml-[10.5px]"><ShoppingCart /> </span>
                </Button>
            </div>
        </section>

    )
}

export default TrendingProducts