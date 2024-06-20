"use client";

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
import webflow from "../../public/images/webflow.png"
import airtag from "../../public/images/airtable.png"
import girl from "../../public/images/girl.png"
import boy from "../../public/images/boy.png"
import Image from "next/image";

const cardData = [
    {
        logo: webflow,
        logoWidthLarge: 129.95,
        logoHeightLarge: 32.68,
        logoWidthSmall: 74.55,
        logoHeightSmall: 31.96,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua quis nostrud exercitation ullamco',
        personImage: girl,
        personImageWidthLarge: 64.19,
        personImageHeightLarge: 62.34,
        personImageWidthSmall: 36.83,
        personImageHeightSmall: 36.83,
        personName: 'Sophie Moore',
        personRole: 'Product Developer at Webflow'
    },
    {
        logo: airtag,
        logoWidthLarge: 129.95,
        logoHeightLarge: 32.68,
        logoWidthSmall: 74.55,
        logoHeightSmall: 31.96,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua quis nostrud exercitation ullamco',
        personImage: boy,
        personImageWidthLarge: 64.19,
        personImageHeightLarge: 62.34,
        personImageWidthSmall: 36.83,
        personImageHeightSmall: 36.83,
        personName: 'Adam Smith',
        personRole: 'Web Designer at Airtable'
    },

    ...Array(2).fill({
        logo: webflow,
        logoWidthLarge: 129.95,
        logoHeightLarge: 32.68,
        logoWidthSmall: 74.55,
        logoHeightSmall: 31.96,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua quis nostrud exercitation ullamco',
        personImage: girl,
        personImageWidthLarge: 64.19,
        personImageHeightLarge: 62.34,
        personImageWidthSmall: 36.83,
        personImageHeightSmall: 36.83,
        personName: 'Sophie Moore',
        personRole: 'Product Developer at Webflow'
    }),
    // Repeat the second card data object 2 more times
    ...Array(2).fill({
        logo: airtag,
        logoWidthLarge: 129.95,
        logoHeightLarge: 32.68,
        logoWidthSmall: 74.55,
        logoHeightSmall: 31.96,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua quis nostrud exercitation ullamco',
        personImage: boy,
        personImageWidthLarge: 64.19,
        personImageHeightLarge: 62.34,
        personImageWidthSmall: 36.83,
        personImageHeightSmall: 36.83,
        personName: 'Adam Smith',
        personRole: 'Web Designer at Airtable'
    })

]


const Testimonials = () => {
    const plugin = React.useRef(
        Autoplay({ delay: 2000, stopOnInteraction: true })
    )

    return (
        <section>
            <div className="mt-[75px]">
                <div className="flex items-center justify-center flex-col gap-[14px]">
                    <p className="text-[#4A3AFF] w-[22px] h-2 rounded-[30px]">-</p>
                    <h1 className=" uppercase font-semibold text-4xl leading-5 tracking-[10%] text-[#4A3AFF]">Testimonial</h1>
                    <p className="text-[#170F49] font-medium text-2xl leading-[46px]">Hear what our clients say</p>
                </div>
                <div className="lg:mt-[60px] px-[34px] md:px-20 pt-[32px] md:pt-[55px] pb-[115px]">
                    {/* <Carousel>
                        <CarouselContent className="-ml-1">
                            {Array.from({ length: 5 }).map((_, index) => (
                                <CarouselItem key={index} className="lg:basis-1/2">
                                    <div className="p-1">
                                        <Card className="rounded-[20px] lg:w-[592px] lg:h-[366px] shadow-lg bg-transparent border border-transparent border-solid">
                                            <CardContent className="flex aspect-square items-start py-[25px] md:py-[75.38px] px-[25.5px] md:px-[43.66px]">
                                                <Image src={webflow} alt="logo1" width={129.95} height={32.68} className="hidden md:block" />
                                                <Image src={webflow} alt="logo1" width={74.55} height={31.96} className="block md:hidden" />
                                                <div className="flex flex-col mt-[19.5px] md:mt-[18.97px]">
                                                    <p className="text-[#514F6E] text-lg leading-[30px]">
                                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua quis nostrud exercitation ullamco
                                                    </p>
                                                    <div className="grid grid-cols-[64.19px_auto] gao-[12px] lg:gap-7 mt-[16.63px] items-start">
                                                        <Image src={girl} alt="girl" width={64.19} height={62.34} className="hidden md:block" />
                                                        <Image src={girl} alt="girl" width={36.83} height={36.83} className="block md:hidden" />
                                                        <div>
                                                            <h2 className="text-[#170F49] font-bold text-lg leading-5 mb-[6.5px]">Sophie Moore</h2>
                                                            <p className="text-[#6F6C90] text-lg leading-5">Product Developer at Webflow</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </CardContent>
                                        </Card>
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious />
                        <CarouselNext />
                    </Carousel> */}
                    <Carousel
                        plugins={[plugin.current]}
                        onMouseEnter={plugin.current.stop}
                        onMouseLeave={plugin.current.reset}
                    >
                        <CarouselContent className="-ml-1">
                            {cardData.map((card, index) => (
                                <CarouselItem key={index} className="lg:basis-1/2">
                                    <div className="p-1">
                                        <Card className="rounded-[20px] lg:w-[592px] lg:h-[366px] shadow-lg bg-transparent border border-transparent border-solid">
                                            <CardContent className="flex aspect-square items-start py-[25px] md:py-[75.38px] px-[25.5px] md:px-[43.66px]">
                                                <Image src={card.logo} alt="logo1" width={card.logoWidthLarge} height={card.logoHeightLarge} className="hidden md:block" />
                                                <Image src={card.logo} alt="logo1" width={card.logoWidthSmall} height={card.logoHeightSmall} className="block md:hidden" />
                                                <div className="flex flex-col mt-[19.5px] md:mt-[18.97px]">
                                                    <p className="text-[#514F6E] text-lg leading-[30px]">{card.description}</p>
                                                    <div className="grid grid-cols-[64.19px_auto] gao-[12px] lg:gap-7 mt-[16.63px] items-start">
                                                        <Image src={card.personImage} alt="person" width={card.personImageWidthLarge} height={card.personImageHeightLarge} className="hidden md:block" />
                                                        <Image src={card.personImage} alt="person" width={card.personImageWidthSmall} height={card.personImageHeightSmall} className="block md:hidden" />
                                                        <div>
                                                            <h2 className="text-[#170F49] font-bold text-lg leading-5 mb-[6.5px]">{card.personName}</h2>
                                                            <p className="text-[#6F6C90] text-lg leading-5">{card.personRole}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </CardContent>
                                        </Card>
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        {/* <CarouselPrevious />
                        <CarouselNext /> */}
                    </Carousel>
                </div>
            </div>
        </section>
    )
}

export default Testimonials

