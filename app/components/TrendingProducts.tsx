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
            {/* <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 px-2 sm:px-4 lg:px-6 mx-auto">
                {pics.map((p, i) => (
                    <Card className="w-full max-w-sm bg-[#FFFFFF] drop-shadow-md shadow-m overflow-hidden rounded-[45px]" key={i}>
                        <div className="relative p-4">
                            <div className="absolute top-8 right-8 bg-[#FFFFFF] text-[#5F3AFB] font-bold px-2 py-1 rounded-full text-xs">
                                Premium Ad
                            </div>

                            <Image
                                src={p}
                                width={600}
                                height={400}
                                alt={`PIC ${i + 1}`}
                                className="w-full aspect-[3/2] object-cover rounded-[45px]"
                            />
                        </div>
                        <div className="p-4 space-y-2">
                            <div className="flex items-center justify-between">
                                <h3 className="text-lg font-semibold text-[#5F3AFB]">Fashion</h3>
                                <div className="text-2xl font-bold text-[#000000]">₦20,000</div>
                            </div>
                            <div className="">
                                <p className="text-[#000000] font-bold text-xl">High Quality Crocs</p>
                            </div>
                            <div className="bg-[#F0F0F0] rounded-[20px] p-4">
                                <div className="text-sm text-[#5F3AFB] flex items-center gap-2 mb-2">
                                    <Image src={location} alt="location" />
                                    Lagos, Ikeja
                                </div>
                                <div className="flex items-center justify-between">
                                    <p className="text-sm text-black">16 visits</p>
                                    <Button size="md" className="rounded-full text-base md:text-sm lg:text-xs">Preview</Button>
                                </div>
                            </div>
                        </div>
                    </Card>

                ))}
            </div> */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 px-4 sm:px-6 lg:px-8 mx-auto">
                {pics.map((p, i) => (
                    <Card className="w-full bg-[#FFFFFF] drop-shadow-md shadow-m overflow-hidden rounded-[30px]" key={i}>
                        <div className="relative p-4">
                            {/* Badge for Premium Ad */}
                            <div className="absolute top-8 right-8 bg-[#FFFFFF] text-[#5F3AFB] font-bold px-2 py-1 rounded-full text-xs">
                                Premium Ad
                            </div>

                            <Image
                                src={p}
                                width={600}
                                height={400}
                                alt={`PIC ${i + 1}`}
                                className="w-full aspect-[3/2] object-cover rounded-[30px]"
                            />
                        </div>
                        <div className="p-4 space-y-2">
                            <div className="flex items-center justify-between">
                                <h3 className="text-lg font-semibold text-[#5F3AFB]">Fashion</h3>
                                <div className="text-2xl font-bold text-[#000000]">₦20,000</div>
                            </div>
                            <div>
                                <p className="text-[#000000] font-bold text-xl">High Quality Crocs</p>
                            </div>
                            <div className="bg-[#F0F0F0] rounded-[20px] p-4">
                                <div className="text-sm text-[#5F3AFB] flex items-center gap-2 mb-2">
                                    <Image src={location} alt="location" />
                                    Lagos, Ikeja
                                </div>
                                <div className="flex items-center justify-between">
                                    <p className="text-sm text-black">16 visits</p>
                                    <Button size="md" className="rounded-full text-base md:text-sm lg:text-xs">Preview</Button>
                                </div>
                            </div>
                        </div>
                    </Card>
                ))}
            </div>

            <div className="flex items-center justify-center mt-8 mb-10 sm:mt-12 sm:mb-16">
                <Button
                    variant="outline"
                    className="px-4 py-3 w-[80%] sm:w-[234px] sm:h-[69px] rounded-[12px] text-[#333333] bg-transparent text-sm sm:text-base"
                >
                    View all products <span className="ml-2"><ShoppingCart /></span>
                </Button>
            </div>

        </section>

    )
}

export default TrendingProducts