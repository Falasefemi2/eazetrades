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
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[40px] px-[63px] mx-auto">
                {pics.map((p, i) => (
                    <Card className="bg-[#FFFFFF] drop-shadow-md shadow-m overflow-hidden rounded-[45px]"
                        key={i}
                    >
                        <Image
                            src={p}
                            width={600}
                            height={400}
                            alt={`PIC ${i + 1}`}
                            className="w-full aspect-[3/2] object-cover"
                        />
                        <div className="p-4 space-y-2">
                            <div className="flex items-center justify-between">
                                <h3 className="text-lg font-semibold text-[#5F3AFB]">Fashion</h3>
                                <div className="text-2xl font-bold text-[#000000]">₦20,000</div>
                            </div>
                            <div className="p-4">
                                <p className="text-[#000000] font-bold text-xl">High Quality Crocs</p>
                            </div>
                            <div className="bg-[#F0F0F0] rounded-md p-4 flex items-center justify-between">
                                <div className="text-sm text-[#5F3AFB] flex items-center gap-2">
                                    {/* <LocateIcon className="w-4 h-4" /> */}
                                    Lagos, Ikeja
                                </div>
                                <Button size="sm" className="rounded-full">Preview</Button>
                            </div>
                        </div>
                    </Card>
                ))}
            </div>
            <div className="flex items-center justify-center mt-[60px] mb-[89px]">
                <Button variant="outline"
                    className="px-[14px] py-[13px] w-[234px] h-[69px] rounded-[12px] text-[#333333] bg-transparent">View all products <span className="ml-[10.5px]"><ShoppingCart /> </span></Button>
            </div>

        </section>
    )
}

export default TrendingProducts