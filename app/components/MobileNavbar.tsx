"use client";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Search } from "lucide-react";
import Link from "next/link";

import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
    NavigationMenuViewport,
} from "@/components/ui/navigation-menu"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button";



const MobileNav = () => {
    return (
        <div className="flex items-center gap-[7.5px]">
            <div className="w-[30px] h-[30px] bg-[#5F3AFB] rounded-full flex items-center justify-center">
                <Search className="text-white w-[15px] h-[15px]" />
            </div>
            <div>
                <Sheet>
                    <SheetTrigger className="w-[30px] h-[30px] bg-[#5F3AFB] rounded-full flex items-center justify-center">
                        <Menu className="text-white w-[15px] h-[15px]" />
                    </SheetTrigger>
                    <SheetContent className="w-full flex flex-col justify-between">
                        <div className="flex flex-col items-start w-[364px] px-4 mt-10">
                            <NavigationMenu className="flex flex-col items-center space-y-10">
                                <NavigationMenuItem>
                                    <NavigationMenuTrigger>Products</NavigationMenuTrigger>
                                </NavigationMenuItem>
                                <NavigationMenuItem>
                                    <NavigationMenuTrigger>Services</NavigationMenuTrigger>
                                </NavigationMenuItem>
                                <NavigationMenuItem>
                                    <Link href="/" legacyBehavior passHref>
                                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                            Vendors
                                        </NavigationMenuLink>
                                    </Link>
                                </NavigationMenuItem>
                            </NavigationMenu>
                            <Separator className="text-[#696969] w-full" />
                        </div>
                        <div className="flex justify-center px-4">
                            <Button size="lg">Get Started</Button>
                        </div>
                    </SheetContent>
                </Sheet>
            </div>
        </div>
    );
}

export default MobileNav;