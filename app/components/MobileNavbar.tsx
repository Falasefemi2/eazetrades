"use client";

import * as React from "react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Facebook, Instagram, Menu, Search, Twitter, Youtube } from "lucide-react";
import logo from "../../public/images/eazetrades-logo-3 3.png"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button";
import Image from "next/image";



const MobileNav = () => {
    return (
        <div className="flex items-center gap-[7.5px]">
            <div className="w-10 h-10 bg-[#5F3AFB] rounded-full flex items-center justify-center">
                <Search className="text-white w-5 h-5" />
            </div>
            <div>
                <Sheet>
                    <SheetTrigger className="w-10 h-10 bg-[#5F3AFB] rounded-full flex items-center justify-center">
                        <Menu className="text-white w-5 h-5" />
                    </SheetTrigger>
                    <SheetContent className="w-full flex flex-col justify-between pb-0">
                        <div className="flex flex-col items-start px-4 mt-5">
                            <Image src={logo} alt="" />
                            <div className="pt-5 w-full">
                                <div className="flex flex-col gap-4">
                                    <div className="flex flex-col gap-2">
                                        <p>Products</p>
                                        <Separator className="w-full h-[1px] bg-[#D9D9D9]" />
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <p>Services</p>
                                        <Separator className="w-full h-[1px] bg-[#D9D9D9]" />
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <p>Vendors</p>
                                        <Separator className="w-full h-[1px] bg-[#D9D9D9]" />
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <p>Testimonials</p>
                                        <Separator className="w-full h-[1px] bg-[#D9D9D9]" />
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <p>Contact Us</p>
                                        <Separator className="w-full h-[1px] bg-[#D9D9D9]" />
                                    </div>
                                    <div className="flex justify-center mt-4">
                                        <Button>Get Started</Button>
                                    </div>
                                    <div className="flex justify-center gap-4 mt-4">
                                        <a href="#" className="text-[#1DA1F2]">
                                            <Twitter />
                                        </a>
                                        <a href="#" className="text-[#426">
                                            <Facebook />
                                        </a>
                                        <a href="#" className="text-[#C13584]">
                                            <Instagram />
                                        </a>
                                        <a href="#" className="text-[#FF0000]">
                                            <Youtube />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SheetContent>
                </Sheet>
            </div>
        </div>
    );
}

export default MobileNav;




