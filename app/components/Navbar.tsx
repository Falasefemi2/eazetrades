"use client"

import { useState } from 'react'
import Link from 'next/link'
import { Search, ChevronDown, Menu } from 'lucide-react'
import Image from 'next/image';
import logo from "../../public/images/eazetrades-logo-3 3.png"
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import { Separator } from "@/components/ui/separator"



import { Button } from '@/components/ui/button'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from '@/components/ui/sheet'

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)

    const NavItems = () => (
        <>
            <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center text-gray-700 hover:text-purple-600">
                    Products <ChevronDown className="ml-1 h-4 w-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                    <DropdownMenuItem>Product 1</DropdownMenuItem>
                    <DropdownMenuItem>Product 2</DropdownMenuItem>
                    <DropdownMenuItem>Product 3</DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
            <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center text-gray-700 hover:text-purple-600">
                    Services <ChevronDown className="ml-1 h-4 w-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                    <DropdownMenuItem>Service 1</DropdownMenuItem>
                    <DropdownMenuItem>Service 2</DropdownMenuItem>
                    <DropdownMenuItem>Service 3</DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
            <Link href="/vendors" className="text-gray-700 hover:text-purple-600">
                Vendors
            </Link>
            <Button asChild>
                <Link href="/auth/createaccount">Get Started</Link>
            </Button>
        </>
    )

    return (
        <div className="w-full bg-[#EEEAFF] border-b-[5px] backdrop-blur-sm fixed top-0 left-0 right-0 z-50">
            <nav className="flex items-center justify-between px-4 py-2 max-w-7xl mx-auto">
                <div className="flex items-center">
                    <Link href="/" className="flex items-center text-2xl font-bold text-purple-600">
                        <Image src={logo} width={29.17} height={35} alt="logo" className="mr-2 w-auto h-6 sm:h-8 md:h-9" priority />
                        <span className="hidden sm:block">EAZETRADES</span>
                    </Link>
                </div>
                <div className="flex-1 max-w-xl mx-4 hidden sm:block">
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Search for product"
                            className="w-full px-4 py-2 border rounded-full focus:outline-none focus:ring-2"
                        />
                        <Search className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
                    </div>
                </div>
                <div className="hidden md:flex items-center space-x-4">
                    <NavItems />
                </div>
                <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-[#5F3AFB] rounded-full flex items-center justify-center sm:hidden">
                        <Search className="text-white w-5 h-5" />
                    </div>
                    <Sheet open={isOpen} onOpenChange={setIsOpen}>
                        <SheetTrigger asChild>
                            <Button variant="outline" size="icon" className="md:hidden">
                                <Menu className="h-6 w-6" />
                                <span className="sr-only">Toggle menu</span>
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right">
                            <div className="flex flex-col space-y-4 mt-4">
                                <div className="flex flex-col items-start px-4 mt-5">
                                    <Image src={logo} alt="Logo" width={29.17} height={35} />
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
                                                <Button asChild>
                                                    <Link href="/auth/createaccount">Get Started</Link>
                                                </Button>
                                            </div>
                                            <div className="flex justify-center gap-4 mt-4">
                                                <a href="#" className="text-[#1DA1F2]">
                                                    <Twitter />
                                                </a>
                                                <a href="#" className="text-[#4267B2]">
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
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </nav>
        </div>
    )
}