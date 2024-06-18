"use client";

import * as React from "react"
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
import { cn } from "@/lib/utils";

const ecommerceComponents: { title: string; description: string }[] = [
    {
        title: "Product List",
        description: "Displays a collection of products available for purchase.",
    },
    {
        title: "Product Details",
        description: "Shows detailed information about a selected product.",
    },
    {
        title: "Shopping Cart",
        description: "Displays items added to the cart, with options to modify the quantity or remove items.",
    },
    {
        title: "Checkout",
        description: "A process where the user provides payment and shipping information to complete a purchase.",
    },
    {
        title: "User Profile",
        description: "Shows user account information, order history, and saved addresses.",
    },
    {
        title: "Search Bar",
        description: "Allows users to search for products by keywords.",
    },
    {
        title: "Filters",
        description: "Provides options to filter products based on categories, price, ratings, etc.",
    },
    {
        title: "Wishlist",
        description: "A list of products the user wishes to purchase in the future.",
    },
    {
        title: "Reviews",
        description: "Displays customer reviews and ratings for products.",
    },
    {
        title: "Promotional Banner",
        description: "Highlights special offers, discounts, or new arrivals.",
    },
];



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
                    <SheetContent className="w-full flex flex-col justify-between pb-0">
                        <div className="flex flex-col items-start px-4 mt-10">
                            <NavigationMenu className="flex flex-col items-center space-y-10">
                                <NavigationMenuItem>
                                    <NavigationMenuTrigger>Products</NavigationMenuTrigger>
                                    <NavigationMenuContent>
                                        <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                                            {ecommerceComponents.map((component) => (
                                                <ListItem
                                                    key={component.title}
                                                    title={component.title}
                                                >
                                                    {component.description}
                                                </ListItem>
                                            ))}
                                        </ul>
                                    </NavigationMenuContent>
                                </NavigationMenuItem>
                                <NavigationMenuItem>
                                    <NavigationMenuTrigger>Services</NavigationMenuTrigger>
                                    <NavigationMenuContent>
                                        <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                                            {ecommerceComponents.map((component) => (
                                                <ListItem
                                                    key={component.title}
                                                    title={component.title}
                                                >
                                                    {component.description}
                                                </ListItem>
                                            ))}
                                        </ul>
                                    </NavigationMenuContent>
                                </NavigationMenuItem>
                                <NavigationMenuItem>
                                    <Link href="/" legacyBehavior passHref>
                                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                            Vendors
                                        </NavigationMenuLink>
                                    </Link>
                                </NavigationMenuItem>
                            </NavigationMenu>
                            <Separator className="bg-[#696969] w-full mt-9" />
                        </div>
                        <div className="flex justify-center px-4 mb-[81px]">
                            <Button size="lg">Get Started</Button>
                        </div>
                    </SheetContent>
                </Sheet>
            </div>
        </div>
    );
}

export default MobileNav;


const ListItem = React.forwardRef<
    React.ElementRef<"a">,
    React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <a
                    ref={ref}
                    className={cn(
                        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                        className
                    )}
                    {...props}
                >
                    <div className="text-sm font-medium leading-none">{title}</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        {children}
                    </p>
                </a>
            </NavigationMenuLink>
        </li>
    )
})
ListItem.displayName = "ListItem"
