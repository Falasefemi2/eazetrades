"use client"
import * as React from "react"
import { DropdownMenuCheckboxItemProps } from "@radix-ui/react-dropdown-menu"
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu'


import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuCheckboxItem,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Slider } from "@/components/ui/slider"
import iconexport from "../../public/images/octicon_filter-16.png"
import Image from "next/image"
import { X } from "lucide-react"


export default function FilterDropdown() {

    const [selectedCategory, setSelectedCategory] = React.useState('');
    const [selectedFashion, setSelectedFashion] = React.useState('');
    const [open, setOpen] = React.useState(false);


    const categories = [
        'Fashion',
        'Sport, art, outdoors',
        'Pet',
        'Health and lifestyle'
    ];

    const fashionItems = [
        'Clothes',
        'Shoes',
        'Glasses',
        'Accessories'

    ]

    return (
        <DropdwonMenuClose>
            <DropdownMenu open={open} onOpenChange={setOpen}>
                <DropdownMenuTrigger asChild>
                    <Button
                        variant="outline"
                        className="rounded-[10px] py-4 px-8 border-none flex items-center justify-center space-x-3"
                    >
                        <span className="text-base font-medium">Sort by Filter</span>
                        <Image src={iconexport} alt="export" width={24} height={24} />
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-[738px] p-6 bg-white">
                    <DropdownMenuLabel className="flex items-center justify-end mb-4">
                        <X className="cursor-pointer" onClick={() => setOpen(false)} />
                    </DropdownMenuLabel>
                    <div className="space-y-4">
                        <h1 className="text-lg font-semibold mb-2">Category</h1>
                        <div className="flex flex-wrap sm:flex-nowrap overflow-x-auto gap-2 lg:w-full w-1/2 sm:w-auto flex-grow sm:flex-grow-0 sm:flex-shrink-0 ">
                            {categories.map((category) => (
                                <Button
                                    key={category}
                                    variant={selectedCategory === category ? "default" : "outline"}
                                    className={`flex-grow sm:flex-grow-0 sm:flex-shrink-0 justify-center text-center text-sm px-4 py-3 border-[#333333] rounded-[20px] ${selectedCategory === category
                                        ? 'bg-primary text-white'
                                        : 'bg-white text-[#333333]'
                                        }`}
                                    onClick={() => setSelectedCategory(category)}
                                >
                                    <span className="truncate">{category}</span>
                                </Button>
                            ))}
                        </div>
                    </div>

                    <div className="mt-10 space-y-4">
                        <h1 className="text-lg font-semibold mb-2">Fashion Item</h1>
                        <div className="flex flex-wrap sm:flex-nowrap overflow-x-auto gap-2 lg:w-full w-1/2 sm:w-auto flex-grow sm:flex-grow-0 sm:flex-shrink-0 ">
                            {fashionItems.map((fashion) => (
                                <Button
                                    key={fashion}
                                    variant={selectedFashion === fashion ? "default" : "outline"}
                                    className={`flex-grow sm:flex-grow-0 sm:flex-shrink-0 justify-center text-center text-sm px-4 py-3 border-[#333333] rounded-[20px] ${selectedFashion === fashion
                                        ? 'bg-primary text-white'
                                        : 'bg-white text-[#333333]'
                                        }`}
                                    onClick={() => setSelectedFashion(fashion)}
                                >
                                    <span className="truncate">{fashion}</span>
                                </Button>
                            ))}
                        </div>
                    </div>

                    <div className="mt-10">
                        <h1 className="text-lg font-semibold mb-2">Filter by price</h1>
                        <Slider defaultValue={[33]} max={100} step={1} />
                        <div className="mt-8">
                            <Button>Filter</Button>
                        </div>
                    </div>

                    <div className="mt-10">
                        <h1 className="text-lg font-semibold mb-2">Colors</h1>
                    </div>
                </DropdownMenuContent>
            </DropdownMenu>
        </DropdwonMenuClose>

    )
}




function DropdwonMenuClose({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const [open, setOpen] = React.useState(false)
    return (
        <DropdownMenuPrimitive.Root open={open} onOpenChange={setOpen}>
            {children}
        </DropdownMenuPrimitive.Root>
    )
}