"use client"
/* eslint-disable react/no-unescaped-entities */
import Image from "next/image"
import glasses from "../../public/images/aboutus.png"
import heroImg from "../../public/images/shopping.png"
import product from "../../public/images/product.png"
import item from "../../public/images/item.png"
import bluetick from "../../public/images/bluetick.png"
import customer from "../../public/images/customer.png"
import AccordionDemo from "./AccordionDemo"
import ImageComponent from "./ImageComponent"



export default function AboutUs() {
    return (
        <main className="relative">
            <div className="h-[72px] lg:h-[155px]"></div>
            <div className="w-full h-[calc(100vh-72px)] lg:h-[calc(100vh-80px)] relative">
                <Image
                    src={glasses}
                    alt="glasses"
                    layout="fill"
                    objectFit="cover"
                    priority
                />
                <div className="absolute inset-0 flex items-center justify-center">
                    <h1 className="text-4xl md:text-6xl font-bold text-white z-10">
                        About Us
                    </h1>
                </div>
            </div>

            <div className="flex px-[82px] py-[92px] w-full">
                <div className="w-1/2 pr-8 flex flex-col justify-between">
                    <h1 className="max-w-2xl text-7xl font-light leading-[95px] mb-6">Our commitment to safety and satisfaction</h1>
                    <p className="max-w-lg font-light text-xl leading-6">
                        At EAZETRADES, we understand the security concerns that come with online shopping. With our end-to-end delivery service, you can shop with confidence, knowing that your purchases are handled with care and delivered securely. Our process ensures that every transaction is smooth and worry-free, providing peace of mind to both buyers and sellers.
                    </p>
                </div>
                <div className="w-1/2 flex items-stretch">
                    <div className="relative w-full pl-8">
                        <Image
                            src={heroImg}
                            alt="Our services illustration"
                            layout="fill"
                            objectFit="contain"
                        />
                    </div>
                </div>
            </div>


            <div className="px-[315px] pt-14 flex items-center flex-col justify-center">
                <h1 className=" leading-[70px] text-5xl text-center">Leveraging artificial intelligence for <br /> a personalized experience</h1>
                <p className="text-center text-xl">We are excited to integrate Artificial Intelligence into our platform to enhance your <br /> shopping journey. </p>
            </div>

            <div className="px-[82px] py-[92px] flex justify-center">
                <div className="flex">
                    <Image
                        src={product}
                        alt="Our services illustration"
                        className="max-w-full h-auto"
                    />
                    <Image
                        src={item}
                        alt="Our services illustration"
                        className="max-w-full h-auto"
                    />
                </div>
            </div>

            <div className="px-[82px] py-[92px] flex justify-between">
                <div className="w-1/2">
                    <h1 className=" text-5xl">What sets us apart</h1>
                </div>
                <div className="w-1/2">
                    <p className="max-w-[543px] text-[24px] leading-[44,78px]">Our innovative related searches feature ensures you discover new products based on your browsing history and preferences. Whether you're looking for the latest gadgets, fashion trends, or home essentials, our AI-powered recommendations help you find exactly what you’re searching for.</p>
                </div>
            </div>

            <div className="px-[82px] py-[92px] flex gap-8 justify-between">
                <div className="w-[405px]  px-5 py-10 border">
                    <div className="flex items-start flex-col">
                        <Image src={bluetick} alt="" width={85} height={85} className="mb-10" />
                        <h1 className=" font-medium text-[32px] leading-[59.71px]">Seller-to-buyer Delivery</h1>
                        <p className="max-w-[375px] font-light">We do not hold possession of the products. Instead, we pick up the item from the seller and deliver it directly to you.</p>
                    </div>
                </div>
                <div className="w-[405px]  px-5 py-10 border">
                    <div className="flex items-start flex-col">
                        <Image src={bluetick} alt="" width={85} height={85} className="mb-10" />
                        <h1 className=" font-medium text-[32px] leading-[59.71px]">Secure transactions</h1>
                        <p className="max-w-[375px] font-light">You confirm the product before making payment. Once satisfied, you pay the seller, and our rider confirms that the seller has received the payment before leaving.</p>
                    </div>
                </div>
                <div className="w-[405px]   px-5 py-10 border bg-[#B2C8F2] rounded-tr-[100px]">
                    <div className="flex items-start flex-col">
                        <Image src={bluetick} alt="" width={85} height={85} className="mb-10" />
                        <h1 className=" font-medium text-[32px] leading-[59.71px]">Enhanced safety:</h1>
                        <p className="max-w-[375px] font-light">By handling the deliveries ourselves, we mitigate the risks associated with in-person pickups, such as theft and fraudulent transactions.</p>
                    </div>
                </div>
            </div>

            <div className="relative mt-24 w-full h-auto">
                <Image src={customer} alt="" layout="responsive" width={100} height={100} objectFit="cover" />
                <div className="absolute inset-0 flex flex-col justify-between">
                    <div className="flex items-center justify-center mt-24">
                        <h1 className="text-white text-[48px]">Customer Satisfaction:</h1>
                    </div>
                    <div className="px-[111px] mb-24">
                        <p className="text-white  text-[32px]">Your satisfaction is our top priority.<br />
                            We strive to provide excellent customer service and ensure that <br /> every purchase meets your expectations.</p>
                    </div>
                </div>
            </div>

            <div className="px-[82px] py-[92px]">
                <div className="flex">
                    <div className="w-1/3 pr-8">
                        <h2 className="text-3xl font-bold mb-4">Frequently asked <br /> question</h2>
                    </div>
                    <div className="w-2/3">
                        <AccordionDemo />
                    </div>
                </div>
            </div>

            <div className="bg-white px-[82px] py-24">
                <h1 className="text-[#4255FF] text-5xl">MEET THE TEAM</h1>
                <p className="mt-6 text-xl">Lorem ipsum dolor sit amet consectetur. Interdum cursus ut morbi malesuada lorem odio enim. Imperdiet mauris iaculis velit mauris. Consequat quam neque maecenas nisi odio sed auctor etiam morbi. Suspendisse massa vitae platea velit id faucibus orci augue condimentum. Lorem cursus tortor enim risus fringilla in purus. Aliquam quis aliquet malesuada risus.</p>

                <ImageComponent />
            </div>

        </main>
    )
}













