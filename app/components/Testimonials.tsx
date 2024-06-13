"use client";

import { Separator } from "@/components/ui/separator";
import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"


const Testimonials = () => {
    return (
        <section>
            <Separator />
            <div className="mt-[75px]">
                <div className="flex items-center justify-center flex-col gap-[14px]">
                    <p className="text-[#4A3AFF] w-[22px] h-2 rounded-[30px]">-</p>
                    <h1 className=" uppercase font-semibold text-4xl leading-5 tracking-[10%] text-[#4A3AFF]">Testimonial</h1>
                    <p className="text-[#170F49] font-medium text-2xl leading-[46px]">Hear what our clients say</p>
                </div>
                <div className="px-[108px] py-[75px] mx-auto container">
                    <Carousel>
                        <CarouselContent className="-ml-1">
                            {Array.from({ length: 5 }).map((_, index) => (
                                <CarouselItem key={index} className="lg:basis-1/2">
                                    <div className="p-1">
                                        <Card className="w-full lg:w-[592px] h-full lg:h-[366px]">
                                            <CardContent className="flex aspect-square items-center justify-center p-6">
                                                <span className="text-3xl font-semibold">{index + 1}</span>
                                            </CardContent>
                                        </Card>
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious />
                        <CarouselNext />
                    </Carousel>
                </div>
            </div>
        </section>
    )
}

export default Testimonials