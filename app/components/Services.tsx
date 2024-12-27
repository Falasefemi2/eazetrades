import Image, { StaticImageData } from "next/image"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import girl from "../../public/images/Rectangle 33.png"
import girl2 from "../../public/images/Rectangle 33(1).png"
import man from "../../public/images/Rectangle 33(2).png"
import man2 from "../../public/images/Rectangle 33(3).png"
import man3 from "../../public/images/Rectangle 33(4).png"
import man4 from "../../public/images/Rectangle 33(5).png"
import location from "../../public/images/location.png"
import { ShoppingCart } from "lucide-react";
import Link from "next/link"


interface Service {
    id: number
    image: string | StaticImageData
    category: string
    title: string
    location: string
    style: string
    visits: number
    featured?: boolean
}

const services: Service[] = [
    {
        id: 1,
        image: girl,
        category: "Fashion",
        title: "High Quality Crocs",
        location: "Lagos",
        style: "Style",
        visits: 16
    },
    {
        id: 2,
        image: girl2,
        category: "Fashion",
        title: "High Quality Crocs",
        location: "Lagos",
        style: "Style",
        visits: 16
    },
    {
        id: 3,
        image: man,
        category: "Fashion",
        title: "High Quality Crocs",
        location: "Lagos",
        style: "Style",
        visits: 16
    },
    {
        id: 4,
        image: man2,
        category: "Fashion",
        title: "High Quality Crocs",
        location: "Lagos",
        style: "Style",
        visits: 16
    },
    {
        id: 5,
        image: man3,
        category: "Fashion",
        title: "High Quality Crocs",
        location: "Lagos",
        style: "Style",
        visits: 16
    },
    {
        id: 6,
        image: man4,
        category: "Fashion",
        title: "High Quality Crocs",
        location: "Lagos",
        style: "Style",
        visits: 16
    },
]

export default function Service() {
    return (
        <div className="py-12 px-4 sm:px-6 lg:px-8">
            <h1 className="font-semibold text-[32px] leading-[131.8%] text-[#333333] text-center mb-6">All services</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 px-4 sm:px-6 lg:px-8 mx-auto">
                {services.map((service) => (
                    <Card key={service.id} className="w-full bg-[#FFFFFF] drop-shadow-md shadow-m overflow-hidden rounded-[30px]">
                        <div className="relative p-4">
                            <div className="absolute top-8 right-8 bg-[#FFFFFF] text-[#5F3AFB] font-bold px-2 py-1 rounded-full text-xs">
                                Premium Ad
                            </div>
                            <Image src={service.image} alt="alt" width={400} height={400} />
                        </div>
                        <div className="p-4 space-y-2">
                            <div className="flex items-center justify-between">
                                <h3 className="text-lg font-semibold text-[#5F3AFB]">{service.category}</h3>
                                <div className="text-2xl font-bold text-[#000000]">₦20,000</div>
                            </div>
                            <div>
                                <p className="text-[#000000] font-bold text-xl">{service.title}</p>
                            </div>
                            <div className="bg-[#F0F0F0] rounded-[20px] p-4">
                                <div className="text-sm text-[#5F3AFB] flex items-center gap-2 mb-2">
                                    <Image src={location} alt="location" />
                                    {service.location}, Ikeja
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
                    asChild
                >
                    <Link href="/product">
                        View all products <span className="ml-2"><ShoppingCart /></span>
                    </Link>
                </Button>
            </div>
        </div>

    )
}
