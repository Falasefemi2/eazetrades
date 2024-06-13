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
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import Image from "next/image";
import location from "../../public/images/location.png"
import { ShoppingCart } from "lucide-react";


const pics = [stool, bootle, crocs, watch, headphone, speaker]

const TrendingProducts = () => {
    return (
        <section>
            <div className="text-center">
                <h1 className=" font-semibold text-[32px] leading-[131.8%] text-[#333333] mb-[60px]">All trending  products</h1>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 px-[63px] mx-auto">
                {pics.map((p, i) => (
                    <Card
                        key={i}
                        className="bg-[#FFFFFF] drop-shadow shadow-md rounded-[45px] p-4"
                    >
                        <CardContent className="flex items-center flex-col">
                            <Image src={p} alt="pic" className="rounded-[45px]" />

                        </CardContent>
                        <div className="flex items-center justify-between">
                            <p className="text-[#5F3AFB] font-medium text-xl lg:text-3xl leading-relaxed">Fashion</p>
                            <h2 className="text-[#000000] font-bold text-xl lg:text-[37px] leading-relaxed">₦20,000</h2>
                        </div>
                        <div className="flex items-start mb-4">
                            <p className="text-[#000000] font-bold text-xl lg:text-[27px]">High Quality Crocs</p>
                        </div>
                        <div className="bg-[#F0F0F0] rounded-[45px] flex flex-col px-5 py-5 lg:w-[394.55px] mx-auto">
                            <div className="flex items-center">
                                <Image src={location} alt="loc" width={22} height={29} />
                                <span className="font-bold text-[#5F3AFB] text-[18px]">Lagos, Ikeja</span>
                            </div>
                            <div className="flex items-center justify-between">
                                <p className=" text-black font-bold text-xl">16 Visits</p>
                                <Button>Preview</Button>
                            </div>
                        </div>
                    </Card>
                ))}
            </div>
            <div className="flex items-center justify-center mt-[60px] mb-[89px]">
                <Button variant="outline"
                    className="px-[14px] py-[13px] w-[234px] h-[69px] rounded-[12px] text-[#333333]">View all products <span className="ml-[10.5px]"><ShoppingCart /> </span></Button>
            </div>

        </section>
    )
}

export default TrendingProducts