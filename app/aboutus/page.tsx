/* eslint-disable react/no-unescaped-entities */
import Image from "next/image"
import glasses from "../../public/images/aboutus.png"
import heroImg from "../../public/images/shopping.png"
import product from "../../public/images/product.png"
import item from "../../public/images/item.png"



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
        </main>
    )
}