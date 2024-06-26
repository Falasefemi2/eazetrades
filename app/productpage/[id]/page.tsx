import Image from "next/image";
import camera1 from "../../../public/images/camera1.png"
import { Button } from "@/components/ui/button"
import { JSX, SVGProps } from "react";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import av1 from "../../../public/images/av1.png"

function ProductPage() {
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
            {/* <div className="p-4 flex flex-col md:flex-row gap-16">
                <div className="md:w-1/2 flex flex-col">
                    <Image src={camera1} alt="Polaroid camera" className="w-full rounded-lg shadow-lg mb-4" />
                    <div className="grid grid-cols-3 gap-2 mt-auto">
                        <Image src={camera1} alt="Thumbnail 1" className="w-full rounded-lg shadow" />
                        <Image src={camera1} alt="Thumbnail 2" className="w-full rounded-lg shadow" />
                        <Image src={camera1} alt="Thumbnail 3" className="w-full rounded-lg shadow" />
                    </div>
                </div>

                <div className="md:w-1/2 flex flex-col justify-between">
                    <div>
                        <h1 className="text-2xl font-bold mb-2">Name of product according to seller</h1>
                        <p className="text-gray-600 mb-1">Very short and important description of product.</p>
                        <p className="text-gray-600 mb-4">Very short and important description of product.</p>
                        <Card className=" w-96 rounded-2xl p-5 mb-4">
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
                    </div>
                    <div>
                        <button className="w-full bg-indigo-600 text-white py-2 rounded-lg mb-2">Buy Now</button>
                        <button className="w-full bg-gray-200 text-gray-800 py-2 rounded-lg mb-4">Go back to home page</button>

                        <div className="flex items-center mb-4">
                            <div className="flex -space-x-2 mr-2">
                                <div className="w-8 h-8 rounded-full bg-gray-300"></div>
                                <div className="w-8 h-8 rounded-full bg-gray-400"></div>
                                <div className="w-8 h-8 rounded-full bg-gray-500"></div>
                            </div>
                            <span className="text-sm text-gray-600">11 other people trust this seller</span>
                        </div>

                        <div className="grid grid-cols-2 gap-2">
                            <div className="flex items-center">
                                <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                                <span>Delivery to your home</span>
                            </div>
                            <div className="flex items-center">
                                <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                                <span>Delivery to your home</span>
                            </div>
                            <div className="flex items-center">
                                <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                                <span>Other benefits</span>
                            </div>
                            <div className="flex items-center">
                                <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                                <span>Other benefits</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
            <div className="flex gap-16 flex-col md:flex-row">
                <div className="md:w-2/4 flex flex-col">
                    <Image src={camera1} alt="camera" className="mb-4 rounded-lg w-full" />
                    <div className="grid grid-cols-3 gap-6 mt-auto">
                        <Image src={camera1} alt="Thumbnail 1" className="w-full rounded-lg shadow" />
                        <Image src={camera1} alt="Thumbnail 2" className="w-full rounded-lg shadow" />
                        <Image src={camera1} alt="Thumbnail 3" className="w-full rounded-lg shadow" />
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
                                <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                                <span>Delivery to your home</span>
                            </div>
                            <div className="flex items-center">
                                <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                                <span>Delivery to your home</span>
                            </div>
                            <div className="flex items-center">
                                <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                                <span>Other benefits</span>
                            </div>
                            <div className="flex items-center">
                                <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                                <span>Other benefits</span>
                            </div>
                        </div>
                    </div>
                </div>
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