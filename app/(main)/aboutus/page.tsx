"use client"
/* eslint-disable react/no-unescaped-entities */
import Image from "next/image"
import glasses from "../../../public/images/aboutus.png"
import heroImg from "../../../public/images/shopping.png"
import product from "../../../public/images/product.png"
import item from "../../../public/images/item.png"
import bluetick from "../../../public/images/bluetick.png"
import customer from "../../../public/images/customer.png"
import AccordionDemo from "./AccordionDemo"
import ImageComponent from "./ImageComponent"
import mobilegirl from '../../../public/images/mobilegirl.png'



export default function AboutUs() {
    return (
        <main className="relative">
            <div className="h-28 sm:h-20 md:h-24 lg:h-40">
            </div>
            <div className="w-full h-[393px] sm:h-[calc(100vh-5rem)] md:h-[calc(100vh-6rem)] lg:h-[calc(100vh-8rem)] relative">
                <Image
                    src={glasses}
                    alt="glasses"
                    layout="fill"
                    objectFit="cover"
                    priority
                    className="hidden md:block" // Hide on mobile, show on md and larger screens
                />
                <Image
                    src={mobilegirl}
                    alt="mobile background"
                    layout="fill"
                    objectFit="cover"
                    priority
                    className="md:hidden h-[393px] w-[393px]" // Show on mobile, hide on md and larger screens
                />
                <div className="absolute inset-0 flex items-center justify-center">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white z-10 px-4 text-center">
                        About Us
                    </h1>
                </div>
            </div>


            <div className="flex flex-col md:flex-row px-4 md:px-[82px] py-8 md:py-[92px] w-full">
                <div className="w-full md:w-1/2 md:pr-8 flex flex-col justify-between mb-8 md:mb-0">
                    <h1 className="text-4xl md:text-5xl lg:text-7xl font-light leading-tight md:leading-[95px] mb-6">
                        Our commitment to safety and satisfaction
                    </h1>
                    <p className="font-light text-lg md:text-xl leading-6 md:max-w-lg">
                        At EAZETRADES, we understand the security concerns that come with online shopping. With our end-to-end delivery service, you can shop with confidence, knowing that your purchases are handled with care and delivered securely. Our process ensures that every transaction is smooth and worry-free, providing peace of mind to both buyers and sellers.
                    </p>
                </div>
                <div className="w-full md:w-1/2 flex items-stretch">
                    <div className="relative w-full h-64 md:h-auto md:pl-8">
                        <Image
                            src={heroImg}
                            alt="Our services illustration"
                            layout="fill"
                            objectFit="contain"
                        />
                    </div>
                </div>
            </div>

            <div className="px-4 md:px-[82px] lg:px-[315px] pt-8 md:pt-14 flex items-center flex-col justify-center">
                <h1 className="text-3xl md:text-4xl lg:text-5xl leading-tight md:leading-[70px] text-center mb-4">
                    Leveraging artificial intelligence for a personalized experience
                </h1>
                <p className="text-center text-base md:text-lg lg:text-xl mb-8">
                    We are excited to integrate Artificial Intelligence into our platform to enhance your shopping journey.
                </p>
            </div>

            <div className="px-4 md:px-[82px] py-8 md:py-[92px] flex justify-center">
                <div className="flex flex-col md:flex-row items-center md:items-start space-y-8 md:space-y-0 md:space-x-8">
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

            <div className="px-4 md:px-[82px] py-8 md:py-[92px] flex flex-col md:flex-row justify-between">
                <div className="w-full md:w-1/2 mb-6 md:mb-0">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">What sets us apart</h1>
                </div>
                <div className="w-full md:w-1/2">
                    <p className="text-lg md:text-xl lg:text-[24px] leading-relaxed md:leading-[44.78px] md:max-w-[543px]">
                        Our innovative related searches feature ensures you discover new products based on your browsing history and preferences. Whether you're looking for the latest gadgets, fashion trends, or home essentials, our AI-powered recommendations help you find exactly what you're searching for.
                    </p>
                </div>
            </div>


            <div className="px-4 sm:px-6 md:px-[82px] py-8 md:py-[92px] flex flex-col md:flex-row gap-8 justify-between">
                <div className="w-full md:w-[405px] px-5 py-10 border mb-8 md:mb-0">
                    <div className="flex items-start flex-col">
                        <Image src={bluetick} alt="" width={85} height={85} className="mb-6 md:mb-10" />
                        <h1 className="font-medium text-2xl md:text-[32px] leading-tight md:leading-[59.71px] mb-4">Seller-to-buyer Delivery</h1>
                        <p className="font-light text-base md:text-lg">We do not hold possession of the products. Instead, we pick up the item from the seller and deliver it directly to you.</p>
                    </div>
                </div>
                <div className="w-full md:w-[405px] px-5 py-10 border mb-8 md:mb-0">
                    <div className="flex items-start flex-col">
                        <Image src={bluetick} alt="" width={85} height={85} className="mb-6 md:mb-10" />
                        <h1 className="font-medium text-2xl md:text-[32px] leading-tight md:leading-[59.71px] mb-4">Secure transactions</h1>
                        <p className="font-light text-base md:text-lg">You confirm the product before making payment. Once satisfied, you pay the seller, and our rider confirms that the seller has received the payment before leaving.</p>
                    </div>
                </div>
                <div className="w-full md:w-[405px] px-5 py-10 border bg-[#B2C8F2] rounded-tr-[100px]">
                    <div className="flex items-start flex-col">
                        <Image src={bluetick} alt="" width={85} height={85} className="mb-6 md:mb-10" />
                        <h1 className="font-medium text-2xl md:text-[32px] leading-tight md:leading-[59.71px] mb-4">Enhanced safety:</h1>
                        <p className="font-light text-base md:text-lg">By handling the deliveries ourselves, we mitigate the risks associated with in-person pickups, such as theft and fraudulent transactions.</p>
                    </div>
                </div>
            </div>

            <div className="relative mt-12 md:mt-24 w-full h-auto">
                <Image src={customer} alt="" layout="responsive" width={100} height={100} objectFit="cover" />
                <div className="absolute inset-0 flex flex-col justify-between p-4 md:p-8">
                    <div className="flex items-center justify-center mt-8 md:mt-24">
                        <h1 className="text-white text-2xl md:text-4xl lg:text-[48px] text-center">
                            Customer Satisfaction:
                        </h1>
                    </div>
                    <div className="px-4 md:px-[111px] mb-8 md:mb-24">
                        <p className="text-white text-lg md:text-2xl lg:text-[32px] text-center md:text-left">
                            Your satisfaction is our top priority. We strive to provide excellent customer service and ensure that every purchase meets your expectations.
                        </p>
                    </div>
                </div>
            </div>

            <div className="px-4 sm:px-6 md:px-[82px] py-8 md:py-[92px]">
                <div className="flex flex-col md:flex-row">
                    <div className="w-full md:w-1/3 md:pr-8 mb-6 md:mb-0">
                        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center md:text-left">
                            Frequently asked question
                        </h2>
                    </div>
                    <div className="w-full md:w-2/3">
                        <AccordionDemo />
                    </div>
                </div>
            </div>

            <div className="bg-white px-4 sm:px-6 md:px-[82px] py-12 md:py-24">
                <h1 className="text-[#4255FF] text-3xl md:text-4xl lg:text-5xl font-bold text-center md:text-left">
                    MEET THE TEAM
                </h1>
                <p className="mt-4 md:mt-6 text-base sm:text-lg md:text-xl leading-relaxed">
                    Lorem ipsum dolor sit amet consectetur. Interdum cursus ut morbi malesuada lorem odio enim. Imperdiet mauris iaculis velit mauris. Consequat quam neque maecenas nisi odio sed auctor etiam morbi. Suspendisse massa vitae platea velit id faucibus orci augue condimentum. Lorem cursus tortor enim risus fringilla in purus. Aliquam quis aliquet malesuada risus.
                </p>
                <ImageComponent />
            </div>

        </main>
    )
}













