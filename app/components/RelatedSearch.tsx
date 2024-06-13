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

const pic = [camera, show]
const repeatedPics = Array(9).fill(pic).map((_, i) => pic[i % pic.length]);



const RelatedSearch = () => {
    return (
        <section className="mb-0 lg:mb-[152px]">
            <div className="text-center">
                <h1 className=" font-semibold text-[32px] md:text-5xl leading-[131.8%] text-[#000000]">Related Searches</h1>
            </div>
            <div className="mt-0 lg:mt-[60px] px-[34px] md:px-20 pt-[32px] md:pt-[55px] pb-[115px]">
                <Carousel>
                    <CarouselContent className="flex justify-between items-center p-6 -ml-1">
                        {repeatedPics.map((p, i) => (
                            <CarouselItem key={i} className="pl-2 basis-full sm:basis-full md:basis-1/2  lg:basis-1/5">
                                <div className="p-1">
                                    <Card className=" bg-[#FFFFFF] rounded-[59px] drop-shadow-md shadow-md">
                                        <CardContent className="flex aspect-square items-center justify-center p-6">
                                            <Image src={p} alt={`PIC ${i + 1}`} className="w-[316.85px] lg:w-[464px] object-cover rounded-[45px]" />
                                        </CardContent>
                                        <>
                                            <div className="flex justify-between items-center p-2 lg:p-4">
                                                <p className="text-[#5F3AFB] font-medium text-xl lg:text-3xl leading-relaxed">Fashion</p>
                                                <h2 className="text-[#000000] font-bold text-xl lg:text-[37px] leading-relaxed">₦20,000</h2>
                                            </div>
                                            <div className="p-4">
                                                <p className="text-[#000000] font-bold text-xl lg:text-[27px]">High Quality Crocs</p>
                                            </div>
                                        </>
                                        <CardFooter className="p-4">
                                            <div className="bg-[#F0F0F0] w-full mx-auto rounded-[45px]">
                                                <div className="flex items-center m-6">
                                                    <Image src={location} alt="loc" width={22} height={29} />
                                                    <span className="font-bold text-[#5F3AFB] text-[22px]">Lagos, Ikeja</span>
                                                </div>
                                                <div className="flex items-center justify-between m-6">
                                                    <p className=" text-black font-bold text-xl">16 Visits</p>
                                                    <Button size="md">Preview</Button>
                                                </div>
                                            </div>
                                        </CardFooter>
                                    </Card>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
            </div>
        </section>
    )
}

export default RelatedSearch