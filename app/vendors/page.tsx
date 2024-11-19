"use client";

import Image from "next/image";
import cloth from "../../public/images/cloth.png"
import flower from "../../public/images/flower.png"
import halfcircle from "../../public/images/halfcircle.png"
import stool from "../../public/images/stool.png"
import bootle from "../../public/images/bottle.png"
import crocs from "../../public/images/crocs.png"
import watch from "../../public/images/watch.png"
import headphone from "../../public/images/headphone.png"
import speaker from "../../public/images/speaker.png"
import location from "../../public/images/location.png"


const pics = [stool, bootle, crocs, watch, headphone, speaker]
const picses = [stool, bootle, crocs]



export default function VendorPage() {
    return (
        <>
            <div className="relative h-screen w-full overflow-hidden">
                {/* Background Image */}
                <Image
                    src={cloth}
                    alt="Hero background"
                    layout="fill"
                    objectFit="cover"
                    className="absolute inset-0 z-0"
                />

                {/* Content Container */}
                <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
                    {/* Circle */}
                    <div className="flex items-center justify-center mb-8">
                        <Image src={flower} alt="alt" width={200} height={200} />
                    </div>

                    {/* Store Name */}
                    <h1 className="text-4xl font-bold mb-4">James Store</h1>

                    {/* Address and Numbers */}
                    <div className="space-y-2">
                        <p className="text-xl mb-3">Lagos, Nigeria</p>
                        <p className="text-xl">08184383828 <span className="ml-5">Registered - Mar 25 , 2024</span></p>
                    </div>

                    <h2 className=" mt-24">jjkkfkoe ierifngf Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem lorem lorem</h2>
                </div>
            </div>

            <div className="relative min-h-screen">
                <div className="inset-0 z-0 absolute">
                    <Image src={halfcircle} alt="alt" width={500} height={500} />
                </div>
                <div className="relative z-10 p-4 sm:p-6 md:p-8 w-full max-w-72 md:max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mt-10">
                        <StatsCard
                            icon={<CustomIcon>📦</CustomIcon>}
                            title="Product"
                            value="9"
                        />
                        <StatsCard
                            icon={<CustomIcon>🧩</CustomIcon>}
                            title="Services"
                            value="9"
                        />
                        <StatsCard
                            icon={<CustomIcon>👥</CustomIcon>}
                            title="Profile visits"
                            value="9"
                        />
                        <StatsCard
                            icon={<Instagram className="w-12 h-12 text-pink-500" />}
                            title="Instagram"
                            value="@hdhuiwj"
                            subtitle="hsuwu"
                        />
                        <StatsCard
                            icon={<Twitter className="w-12 h-12 text-blue-400" />}
                            title="X"
                            value="@jdjdjdjd"
                            subtitle="hdjs"
                        />
                        <StatsCard
                            icon={<Mail className="w-12 h-12 text-red-500" />}
                            title="Gmail"
                            value="@gfyryyvv"
                            subtitle="yeh"
                        />
                    </div>
                </div>
            </div>

            <div className=" mt-14">
                <div className="text-4xl text-center mb-10">Product</div>

                <div className="mt-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 px-4 sm:px-6 lg:px-8 mx-auto">
                        {pics.map((p, i) => (
                            <Card className="w-full bg-[#FFFFFF] drop-shadow-md shadow-m overflow-hidden rounded-[30px]" key={i}>
                                <div className="relative p-4">
                                    <div className="absolute top-8 right-8 bg-[#FFFFFF] text-[#5F3AFB] font-bold px-2 py-1 rounded-full text-xs">
                                        Premium Ad
                                    </div>

                                    <Image
                                        src={p}
                                        width={600}
                                        height={400}
                                        alt={`PIC ${i + 1}`}
                                        className="w-full aspect-[3/2] object-cover rounded-[30px]"
                                    />
                                </div>
                                <div className="p-4 space-y-2">
                                    <div className="flex items-center justify-between">
                                        <h3 className="text-lg font-semibold text-[#5F3AFB]">Fashion</h3>
                                        <div className="text-2xl font-bold text-[#000000]">₦20,000</div>
                                    </div>
                                    <div>
                                        <p className="text-[#000000] font-bold text-xl">High Quality Crocs</p>
                                    </div>
                                    <div className="bg-[#F0F0F0] rounded-[20px] p-4">
                                        <div className="text-sm text-[#5F3AFB] flex items-center gap-2 mb-2">
                                            <Image src={location} alt="location" />
                                            Lagos, Ikeja
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
                </div>

                <div className=" mt-14 flex items-center justify-center">
                    <ProductPagination />
                </div>
            </div>

            <div className=" mt-14">
                <div className="text-4xl text-center mb-10">Services</div>

                <div className="mt-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 px-4 sm:px-6 lg:px-8 mx-auto">
                        {picses.map((p, i) => (
                            <Card className="w-full bg-[#FFFFFF] drop-shadow-md shadow-m overflow-hidden rounded-[30px]" key={i}>
                                <div className="relative p-4">
                                    <div className="absolute top-8 right-8 bg-[#FFFFFF] text-[#5F3AFB] font-bold px-2 py-1 rounded-full text-xs">
                                        Premium Ad
                                    </div>

                                    <Image
                                        src={p}
                                        width={600}
                                        height={400}
                                        alt={`PIC ${i + 1}`}
                                        className="w-full aspect-[3/2] object-cover rounded-[30px]"
                                    />
                                </div>
                                <div className="p-4 space-y-2">
                                    <div className="flex items-center justify-between">
                                        <h3 className="text-lg font-semibold text-[#5F3AFB]">Fashion</h3>
                                        <div className="text-2xl font-bold text-[#000000]">₦20,000</div>
                                    </div>
                                    <div>
                                        <p className="text-[#000000] font-bold text-xl">High Quality Crocs</p>
                                    </div>
                                    <div className="bg-[#F0F0F0] rounded-[20px] p-4">
                                        <div className="text-sm text-[#5F3AFB] flex items-center gap-2 mb-2">
                                            <Image src={location} alt="location" />
                                            Lagos, Ikeja
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
                </div>

                <div className=" mt-14 flex items-center justify-center">
                    <ProductPagination />
                </div>
            </div>
        </>
    )
}


import { Instagram, Mail, Twitter } from "lucide-react"
import { Separator } from "@radix-ui/react-separator";
import ProductCard from "../(main)/product/ProductCard";
import ProductPagination from "../(main)/product/ProductPagination";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const StatsCard = ({ icon, title, value, subtitle }: { icon: React.ReactNode, title: string, value: string, subtitle?: string }) => (
    <div className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center justify-center text-center w-full h-full aspect-square max-w-xs">
        <div className="mb-2 text-4xl">{icon}</div>
        <h3 className="text-sm sm:text-base font-semibold mb-2">{title}</h3>
        <p className="text-xl sm:text-2xl md:text-3xl font-bold mb-2">{value}</p>
        {subtitle && <p className="text-xs sm:text-sm text-gray-500">{subtitle}</p>}
    </div>
)

const CustomIcon = ({ children }: { children: React.ReactNode }) => (
    <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-gray-600">
        {children}
    </div>
)



