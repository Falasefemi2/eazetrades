"use client"

import { Card, CardContent, CardDescription, CardFooter } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import camera from "../../public/images/camera.png"
import show from "../../public/images/show.png"
import Image from "next/image"
import location from "../../public/images/location.png"
import { Button } from "@/components/ui/button"
import { LocateIcon } from "lucide-react"

const pic = [camera, show]
const repeatedPics = Array(9).fill(pic).map((_, i) => pic[i % pic.length]);



const RelatedSearch = () => {
    return (
        <section className="mb-0 lg:mb-[152px]">
            <div className="text-center">
                <h1 className=" font-semibold text-[32px] md:text-5xl leading-[131.8%] text-[#000000]">Related Searches</h1>
            </div>
            {/* <div className="mt-0 lg:mt-[60px] px-[34px] md:px-20 pt-[32px] md:pt-[55px] pb-[115px]">
                <Carousel>
                    <CarouselContent className="flex justify-between items-center p-6 -ml-1">
                        {repeatedPics.map((p, i) => (
                            <CarouselItem key={i} className="pl-2 basis-full sm:basis-full md:basis-1/2 lg:basis-1/3">
                                <div className="p-1">
                                    <Card className="w-full max-w-sm bg-[#FFFFFF] drop-shadow-md shadow-m overflow-hidden">
                                        <div className="p-4">
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
                                            <div className="p-4">
                                                <p className="text-[#000000] font-bold text-xl">High Quality Crocs</p>
                                            </div>
                                            <div className="bg-[#F0F0F0] rounded-md p-4 flex items-center justify-between">
                                                <div className="text-sm text-[#5F3AFB] flex items-center gap-2">
                                                    <LocateIcon className="w-4 h-4" />
                                                    Lagos, Ikeja
                                                </div>
                                                <p>16 visits</p>
                                                <Button size="sm" className="rounded-full">Preview</Button>
                                            </div>
                                        </div>
                                    </Card>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious />
  <CarouselNext />
                </Carousel>

            </div> */}
            <div className="mt-0 lg:mt-[60px] px-[34px] md:px-20 pt-[32px] md:pt-[55px] pb-[115px]">
                <Carousel>
                    <CarouselContent className="flex justify-between items-center p-6 -ml-1">
                        {repeatedPics.map((p, i) => (
                            <CarouselItem key={i} className="pl-2 basis-full sm:basis-full md:basis-1/2 lg:basis-1/3">
                                <div className="p-1">
                                    <Card className="w-full max-w-sm bg-[#FFFFFF] drop-shadow-md shadow-m overflow-hidden rounded-[45px]">
                                        <div className="p-4">
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
                                            <div className="bg-[#F0F0F0] rounded-[45px] p-4">
                                                <div className="text-sm text-[#5F3AFB] flex items-center gap-2 mb-2">
                                                    <LocateIcon className="w-4 h-4" />
                                                    Lagos, Ikeja
                                                </div>
                                                <div className="flex items-center justify-between">
                                                    <p className="text-sm text-black">16 visits</p>
                                                    <Button size="sm" className="rounded-full">Preview</Button>
                                                </div>
                                            </div>
                                        </div>
                                    </Card>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    {/* <CarouselPrevious />
    <CarouselNext /> */}
                </Carousel>
            </div>

        </section>
    )
}

export default RelatedSearch