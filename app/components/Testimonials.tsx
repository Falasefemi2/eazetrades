'use client'

import React from 'react'
import Image from 'next/image'
import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"


import webflow from "../../public/images/webflow.png"
import airtag from "../../public/images/airtable.png"
import girl from "../../public/images/girl.png"
import boy from "../../public/images/boy.png"

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
]

// Repeat the card data to have 6 items total
const extendedCardData = [...cardData, ...cardData, ...cardData]

export default function Testimonials() {
    const plugin = React.useRef(
        Autoplay({ delay: 2000, stopOnInteraction: true })
    )

    return (
        <section className="py-16 px-4 md:px-8 lg:px-16">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <div className="inline-block bg-primary w-6 h-2 rounded-full mb-4"></div>
                    <h2 className="uppercase font-semibold text-2xl md:text-4xl tracking-wider text-primary mb-4">Testimonial</h2>
                    <p className="text-xl md:text-2xl text-gray-800 font-medium">Hear what our clients say</p>
                </div>

                <Carousel
                    plugins={[plugin.current]}
                    onMouseEnter={plugin.current.stop}
                    onMouseLeave={plugin.current.reset}
                    className="w-full"
                    opts={{
                        align: "start",
                        loop: true,
                    }}
                >
                    <CarouselContent>
                        {extendedCardData.map((card, index) => (
                            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                                <div className="p-1">
                                    <Card className="rounded-2xl shadow-lg border-none bg-white overflow-hidden">
                                        <CardContent className="p-6 md:p-8">
                                            <Image
                                                src={card.logo}
                                                alt={`${card.personName}'s company logo`}
                                                width={card.logoWidthLarge}
                                                height={card.logoHeightLarge}
                                                className="mb-6"
                                            />
                                            <p className="text-gray-600 mb-6">{card.description}</p>
                                            <div className="flex items-center">
                                                <Image
                                                    src={card.personImage}
                                                    alt={card.personName}
                                                    width={card.personImageWidthLarge}
                                                    height={card.personImageHeightLarge}
                                                    className="rounded-full mr-4"
                                                />
                                                <div>
                                                    <h3 className="font-bold text-gray-900">{card.personName}</h3>
                                                    <p className="text-gray-600">{card.personRole}</p>
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
        </section>
    )
}