"use client"

import { useState } from "react";
import girl from "../../public/images/orangegirl.png"
import mask from "../../public/images/mask.png"
import model from "../../public/images/model.png"
import model2 from "../../public/images/model2.png"
import orange1 from "../../public/images/orangegirl.png"
import orange2 from "../../public/images/orange2.png"
import old from "../../public/images/old.png"
import Image, { StaticImageData } from "next/image"


interface ImageItem {
    src: StaticImageData;
    alt: string;
}

export default function ImageComponent() {
    const [activeIndex, setActiveIndex] = useState<number>(0);


    const images: ImageItem[] = [
        {
            src: girl,
            alt: "Pinu Maharana",
        },
        {
            src: mask,
            alt: "Person 2",
        },
        {
            src: model,
            alt: "Person 3",
        },
        {
            src: model2,
            alt: "Person 4",
        },
        {
            src: orange1,
            alt: "Person 4",
        },
        {
            src: orange2,
            alt: "Person 4",
        },
        {
            src: old,
            alt: "Person 4",
        },
    ];

    return (
        <div className="flex h-[571px] overflow-hidden mt-14 gap-4">
            {images.map((image, index) => (
                <div
                    key={index}
                    className={`relative transition-all duration-500 ease-in-out cursor-pointer
                        ${activeIndex === index ? "flex-[3]" : "flex-[0.5]"}`}
                    onClick={() => setActiveIndex(index)}
                >
                    <div className="absolute inset-0 overflow-hidden">
                        <Image
                            src={image.src}
                            alt={image.alt}
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black opacity-70"></div>
                    <div className="absolute inset-0 bg-gradient-to-b from-white to-transparent opacity-10"></div>
                    <div className={`absolute bottom-0 left-0 right-0 p-4 text-white
                            transition-opacity duration-500 ease-in-out
                            ${activeIndex === index ? "opacity-100" : "opacity-0"}`}>
                        {image.alt}
                    </div>
                </div>
            ))}
        </div>

    );
}