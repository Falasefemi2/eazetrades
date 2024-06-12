"use client";

import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import gif1 from "../../public/vids/Car-Bike transform.gif"
import gif2 from "../../public/vids/Digital Marketing.gif"
import gif3 from "../../public/vids/Flat Illustration Character Vector PNG Images, Photographer Woman Vector Photo Equipment Camera Studio P.jpeg.jpg"
import gif4 from "../../public/vids/Gadgets.gif"
import gif5 from "../../public/vids/Lovely Animations of the Month — December 2017.gif"
import gif6 from "../../public/vids/Pup_.gif"
import gif7 from "../../public/vids/SVG Robot animation.gif"
import gif8 from "../../public/vids/Teacher Tips for Promoting Positive Student Mental Health.gif"
import gif9 from "../../public/vids/theaglad.gif"
import Image from "next/image";

const gifs = [gif1, gif2, gif3, gif4, gif5, gif6, gif7, gif8, gif9]

const VidSlider = () => {
    return (
        <Carousel className="w-full max-w-[1371px]">
            <CarouselContent className="-ml-1">
                {gifs.map((gif, index) => (
                    <CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/3">
                        <div className="p-1">
                            <Card className="w-[191px] md:w-[255px] h-[256px] md:h-[306px] px-[35px] py-[30px] bg-[#F0F4FF]">
                                <CardContent className="flex aspect-square items-center justify-center p-6">
                                    <Image src={gif} alt={`GIF ${index + 1}`} className="w-[177px] h-[126px] object-cover" />
                                </CardContent>
                            </Card>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>

    );
}

export default VidSlider;