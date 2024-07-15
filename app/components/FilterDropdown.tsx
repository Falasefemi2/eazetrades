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
import iconexport from "../../public/images/octicon_filter-16.png"
import Image from "next/image"
import { X } from "lucide-react"


export default function FilterDropdown() {

    const [selectedCategory, setSelectedCategory] = React.useState('');
    const [open, setOpen] = React.useState(false);


    const categories = [
        'Fashion',
        'Sport, art, outdoors',
        'Pet',
        'Health and lifestyle'
    ];

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
                <DropdownMenuContent className="w-80 p-6 bg-white">
                    <DropdownMenuLabel className="flex items-center justify-end mb-4">
                        {/* <X className="cursor-pointer" /> */}
                        <X className="cursor-pointer" onClick={() => setOpen(false)} />
                    </DropdownMenuLabel>
                    <div className="space-y-4">
                        <h1 className="text-lg font-semibold mb-2">Category</h1>
                        <div className="flex flex-wrap gap-2 max-w-[600px]">
                            {categories.map((category) => (
                                <Button
                                    key={category}
                                    variant={selectedCategory === category ? "default" : "outline"}
                                    className={`flex-grow basis-[30%] justify-center text-center text-sm px-2 py-3 ${selectedCategory === category ? 'bg-primary text-white' : ''
                                        }`}
                                    onClick={() => setSelectedCategory(category)}
                                >
                                    <span className="truncate">{category}</span>
                                </Button>
                            ))}

                        </div>
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