import { Button } from "@/components/ui/button";
import heroimg from "../../public/images/hero.jpg"
import Image from "next/image";
import { Input } from "@/components/ui/input";
import SearchBar from "./Search";
import Link from "next/link";
import localFont from 'next/font/local'
import { Search } from "lucide-react";


const myFont = localFont({ src: '../../public/fonts/AnekBangla-SemiBold.ttf' })
const myFonts = localFont({ src: '../../public/fonts/AnekBangla-Regular.ttf' })


/* eslint-disable react/no-unescaped-entities */
const HeroSection = () => {
    return (
        <section className="w-full py-0 px-0 md:py-[35px] md:px-[50px] h-full mx-auto">
            <div className="relative">
                <Image
                    alt="Hero"
                    className="w-full h-[507px] rounded-lg object-cover"
                    src={heroimg}
                />
                <div className="absolute inset-0 flex flex-col">
                    <div className="flex flex-col py-[52px] px-[59px]">
                        <div className="max-w-[359px] md:max-w-[555px]">
                            <h1 className={`${myFont.className} text-[#333333] text-[32px] md:text-[50px] leading-[110%] font-semibold whitespace-pre-wrap break-words mb-5`}>
                                Connecting <br />
                                sellers and buyers where convenience <br />
                                meet innovation
                            </h1>
                        </div>
                        <div className="max-w-[197px] md:max-w-[332px]">
                            <p className={`${myFonts.className} text-[#000000] leading-[131.8%] text-base md:text-[27px] mb-10`}>
                                World’s largerst market place
                            </p>
                        </div>
                        <Button asChild size="lg">
                            <Link
                                href="#"
                            >
                                Get started
                            </Link>
                        </Button>

                    </div>
                </div>
                {/* <div className="absolute bottom-[-70px] left-0 right-0 bg-white h-[117px] rounded-[10px] mx-[10px] shadow-[#000000] flex justify-center items-center">
                    <div className="relative w-[337px] h-[66px] mx-[18px] my-[51px]">
                        <Input
                            className="rounded-[30px] w-full h-full px-10 pl-12 pr-10"
                            placeholder="Search..."
                        />
                        <div className="absolute inset-y-0 right-3 flex items-center pl-2">
                            <div className="bg-[#5F3AFB] rounded-full p-1 w-[54px]  h-[50px] flex justify-center items-center">
                                <Search className="w-8 h-8 text-[#FFFFFF]" />
                            </div>
                        </div>
                    </div>
                </div> */}
                <div className="absolute bottom-[-70px] left-0 right-0 bg-white h-[117px] rounded-[10px] mx-[10px] shadow-[#000000] flex justify-center items-center">
                    <div className="relative w-[500px] h-[80px] mx-[18px] my-[51px]">
                        <Input
                            className="rounded-[30px] w-full h-full px-10 pl-12 pr-10"
                            placeholder="Search..."
                        />
                        <div className="absolute inset-y-0 right-3 flex items-center pl-2">
                            <div className="bg-[#5F3AFB] rounded-full p-1 w-[54px] h-[50px] flex justify-center items-center">
                                <Search className="w-8 h-8 text-[#FFFFFF]" />
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </section>
    );
}

export default HeroSection;

// px-4 py-8 md:px-8 md:py-[52px] lg:px-12 lg:py-16