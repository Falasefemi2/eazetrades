/* eslint-disable react/no-unescaped-entities */
"use client";

import Image from "next/image";
import { useState } from 'react';
import camera1 from "../../../public/images/camera1.png"
import { Button } from "@/components/ui/button"
import { JSX, SVGProps } from "react";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import av1 from "../../../public/images/av1.png"
import av2 from "../../../public/images/av2.png"
import bag from "../../../public/images/bag.jpg"
import cup from "../../../public/images/cup.jpg"
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";

import stool from "../../../public/images/stool.png"
import bootle from "../../../public/images/bottle.png"
import crocs from "../../../public/images/crocs.png"
import location from "../../../public/images/location.png"


const pics = [stool, bootle, crocs, bag]


function ProductPage() {
    const [mainImage, setMainImage] = useState(camera1);

    const thumbnails = [camera1, bag, cup]

    return (
        <main className="pt-20 md:pt-52 px-4 md:px-12">
            <div className="py-6">
                <div>
                    <h1 className="text-[#333333] font-medium text-2xl lg:text-4xl leading-10">Camera</h1>
                    <ul className="flex items-center">
                        <li className="relative pr-[22px] after:content-[''] after:absolute after:right-[11px] after:top-1/2 after:-translate-y-1/2 after:h-4 after:w-[1px] after:bg-[#333333]">Home</li>
                        <li className="relative px-[22px] after:content-[''] after:absolute after:right-[11px] after:top-1/2 after:-translate-y-1/2 after:h-4 after:w-[1px] after:bg-[#333333]">Product</li>
                        <li className="relative px-[22px] after:content-[''] after:absolute after:right-[11px] after:top-1/2 after:-translate-y-1/2 after:h-4 after:w-[1px] after:bg-[#333333]">Category</li>
                        <li className="relative pl-[22px]">Camera</li>
                    </ul>
                </div>
            </div>
            <div className="flex gap-16 flex-col md:flex-row">
                <div className="md:w-2/4 flex flex-col">
                    <Image
                        src={mainImage}
                        alt="Main camera"
                        className="mb-4 rounded-lg w-full aspect-[1/1]"
                    />
                    <div className="grid grid-cols-3 gap-6 mt-auto">
                        {thumbnails.map((img, index) => (
                            <Image
                                key={index}
                                src={img}
                                alt={`Thumbnail ${index + 1}`}
                                className="w-full rounded-lg shadow cursor-pointer aspect-[1/1]"
                                onClick={() => setMainImage(img)}
                            />
                        ))}

                    </div>
                </div>
                <div className="md:w-2/4 flex flex-col">
                    <div className="max-w-[355px] lg:max-w-[535px]">
                        <h1 className=" font-medium text-2xl mb-2">Name of product according to seller</h1>
                        <p className=" mb-1 font-light">Very short and important description of product.</p>
                        <p className=" mb-4 font-light">Very short and important description of product.</p>
                    </div>
                    <div className="flex flex-col mt-6">
                        <Card className=" lg:w-96 rounded-2xl p-5 mb-4">
                            <div className="grid grid-cols-2 gap-y-8 text-sm">
                                <p className="font-semibold">Price</p>
                                <p className="text-right">N20,000</p>

                                <p className="font-semibold">Advert ID</p>
                                <p className="text-right">ID:43795</p>

                                <p className="font-semibold">Category</p>
                                <p className="text-right">Animals & pets - Birds</p>

                                <p className="font-semibold">Seller</p>
                                <p className="text-right text-[#5F3AFB]">Seller Name</p>

                                <p className="font-semibold">Location</p>
                                <p className="text-right">Lagos, Ikeja</p>
                            </div>
                        </Card>
                        <div className="mt-10 flex flex-col space-y-4 lg:w-96">
                            <Button className="w-full bg-[#5F3AFB] text-white  mb-2">Buy Now</Button>
                            <Button variant="outline" className="w-full mb-4 text-[#5F3AFB] border-none">Go back to home page</Button>
                        </div>

                        <div className="mt-10 flex items-center space-x-2">
                            <div className="flex -space-x-2 mr-2">
                                <Avatar>
                                    <AvatarImage src={av1.src} />
                                    <AvatarFallback>CN</AvatarFallback>
                                </Avatar>
                                <Avatar>
                                    <AvatarImage src={av1.src} />
                                    <AvatarFallback>CN</AvatarFallback>
                                </Avatar>
                                <Avatar>
                                    <AvatarImage src={av1.src} />
                                    <AvatarFallback>CN</AvatarFallback>
                                </Avatar>
                                <span className="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full bg-gray-500"></span>
                            </div>
                            <span className="text-sm text-gray-600">11 other people trust this seller</span>
                        </div>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 mt-20">
                            <div className="flex items-center">
                                <CheckIcon className="w-5 h-5 text-green-500 mr-2" />
                                <span>Delivery to your home</span>
                            </div>
                            <div className="flex items-center">
                                <CheckIcon className="w-5 h-5 text-green-500 mr-2" />
                                <span>Delivery to your home</span>
                            </div>
                            <div className="flex items-center">
                                <CheckIcon className="w-5 h-5 text-green-500 mr-2" />
                                <span>Other benefits</span>
                            </div>
                            <div className="flex items-center">
                                <CheckIcon className="w-5 h-5 text-green-500 mr-2" />
                                <span>Other benefits</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-24">
                <ProductDetails />
                <ProductFeatures />
                <SafetyTips />
                <Testimonials />
                <Likes />
            </div>
        </main>
    )
}

export default ProductPage;


function CheckIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M20 6 9 17l-5-5" />
        </svg>
    )
}


function ProductDetails() {
    return (
        <section>
            <Separator className="bg-[#696969]" />
            <div className=" px-10 py-8">
                <h1 className="text-3xl lg:text-5xl leading-8 lg:leading-10 text-muted-foreground">Product Details</h1>
                <p className=" mt-6 font-light text-base lg:text-xl text-muted-foreground">Borem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus. . Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.
                </p>
            </div>
        </section>
    )
}

function ProductFeatures() {
    return (
        <section className="px-10 py-10">
            <h1 className=" font-light text-3xl lg:text-5xl leading-8 lg:leading-10 mb-5 text-muted-foreground">Features of this product</h1>
            <p className="  font-light text-base lg:text-xl text-muted-foreground">Borem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <p className=" font-light text-base lg:text-xl text-muted-foreground">Borem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <p className="  font-light text-base lg:text-xl text-muted-foreground">Borem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <p className="  font-light text-base lg:text-xl text-muted-foreground">Borem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <p className="  font-light text-base lg:text-xl text-muted-foreground">Borem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </section>
    )
}


function Bullet() {
    return (
        <span className="w-[15px] h-[15px] rounded-full bg-[#4F4F4F] mr-2 flex-shrink-0 flex items-center justify-center">
            <span className="w-[9px] h-[9px] rounded-full bg-[#D9D9D9]"></span>
        </span>
    )
}


function SafetyTips() {
    return (
        <section className="bg-[#F0F0F0] rounded-2xl px-10 h-[350px] py-10 lg:w-2/5">
            <h1 className=" font-medium text-[#333333] text-2xl lg:text-4xl">Safety tips !</h1>
            <ul className="mt-4 space-y-2">
                <li className="flex items-center">
                    <Bullet />
                    Don't pay in advance, including for delivery
                </li>
                <li className="flex items-center">
                    <Bullet />

                    Meet the seller at a safe public place
                </li>
                <li className="flex items-center">
                    <Bullet />
                    Inspect the goods thoroughly to ensure you are satisfied
                </li>
                <li className="flex items-center">
                    <Bullet />
                    Only pay when you are satisfied
                </li>
            </ul>
        </section>
    )
}


function Testimonials() {
    return (
        <section className=" mt-20">
            <Card className=" px-14 py-12 space-y-6">
                <div className="flex items-center space-x-5 ">
                    <Image
                        src={av1}
                        alt=""
                    />
                    <div className="flex flex-col">
                        <p className=" font-medium text-lg lg:text-2xl">Paul James</p>
                        <h3 className=" font-light text-sm text-muted-foreground lg:text-lg leading-6">I like how beautiful and easy to use this product is. Will definitely recommend it for others</h3>
                    </div>
                </div>
                <div className="flex items-center space-x-5">
                    <Image
                        src={av2}
                        alt=""
                    />
                    <div className="flex flex-col">
                        <p className=" font-medium text-lg lg:text-2xl">Paul James</p>
                        <h3 className=" font-light text-sm text-muted-foreground lg:text-base leading-6">I like how beautiful and easy to use this product is. Will definitely recommend it for others</h3>
                    </div>
                </div>

                <div className="flex items-center gap-6">
                    <Input placeholder="Write your comment here..." className=" h-14 w-[996px] p-[15px] rounded-[30px] hidden lg:block" />
                    <Button className="bg-[#5F3AFB] rounded-[30px] p-5 hidden lg:flex items-center justify-center">Comment</Button>
                    <div className="relative flex items-center w-full lg:hidden">
                        <Input
                            type="text"
                            className="block w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-full focus:outline-none focus:border-purple-500 pr-10"
                            placeholder="Write your comment here.."
                        />
                        <button
                            type="submit"
                            className="absolute right-0 flex items-center justify-center w-10 h-10 text-white bg-[#5F3AFB] rounded-full hover:bg-[#5F3AFB] focus:outline-none focus:ring-2 focus:ring-[#5F3AFB] focus:ring-opacity-50 mr-1"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd" />
                            </svg>
                        </button>
                    </div>

                </div>
            </Card>
        </section>
    )
}

function Likes() {
    return (
        <section className=" mt-20">
            <h1 className="text-center text-[#333333] font-semibold text-3xl lg:text-5xl">You may also like</h1>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-[20px] sm:gap-[30px] lg:gap-[40px] px-4 sm:px-[20px] lg:px-[63px] mx-auto mt-10">
                {pics.map((p, i) => (
                    <Card className="bg-[#FFFFFF] drop-shadow-md shadow-m overflow-hidden rounded-[20px] sm:rounded-[30px] lg:rounded-[45px]" key={i}>
                        <div className="p-2 sm:p-4 relative">
                            <div className="absolute top-12 right-8  z-10 bg-white text-blue-700 px-2 py-1 rounded-full text-xs font-semibold">
                                Premium Ad
                            </div>
                            <Image
                                src={p}
                                width={600}
                                height={400}
                                alt={`PIC ${i + 1}`}
                                className="w-full aspect-[3/2] object-cover rounded-[20px] sm:rounded-[30px] lg:rounded-[45px]"
                            />
                        </div>
                        <div className="p-2 sm:p-4 space-y-2">
                            <div className="flex items-center justify-between">
                                <h3 className="text-lg font-semibold text-[#5F3AFB]">Fashion</h3>
                                <div className="text-base lg:text-2xl font-bold text-[#000000]">₦20,000</div>
                            </div>
                            <div>
                                <p className="text-[#000000] font-bold text-lg lg:text-xl">High Quality Crocs</p>
                            </div>
                            <div className="bg-[#F0F0F0] rounded-[20px] p-2 sm:p-4">
                                <div className="text-sm text-[#5F3AFB] flex items-center gap-2 mb-2">
                                    {/* <LocateIcon className="w-4 h-4" /> */}
                                    <Image src={location} alt="location" />
                                    Lagos, Ikeja
                                </div>
                                <div className="flex items-center justify-between">
                                    <p className="text-sm text-black">16 visits</p>
                                    <Button size="md" className="rounded-full text-base md:text-sm lg:text-xs hidden lg:block">Preview</Button>
                                    <Button size="sm" className=" lg:hidden block">Preview</Button>
                                </div>
                            </div>
                        </div>
                    </Card>
                ))}
            </div>
        </section>
    )
}
