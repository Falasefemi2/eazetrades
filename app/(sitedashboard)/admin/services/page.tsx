"use client";

import { useState } from 'react'
import Image from 'next/image'
import { PencilIcon, TrashIcon, SearchIcon, ChevronDownIcon, Pencil, Trash, ChevronDown } from 'lucide-react'
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

interface Product {
    id: number
    image: string
    name: string
    category: string
    price: string
    quantity: number
    colors: string[]
}
const products: Product[] = [
    {
        id: 1,
        name: "Apple Watch Series 4",
        category: "Digital Product",
        price: "₦47,000",
        quantity: 63,
        image: "/images/applewristwatch.png",
        colors: ["black", "gray", "pink"],
    },
    {
        id: 2,
        name: "Microsoft Headphone",
        category: "Digital Product",
        price: "₦42,000",
        quantity: 13,
        image: "/images/microsoftheadphone.png",
        colors: ["black", "red", "yellow", "blue"],
    },
    {
        id: 3,
        name: "Women's Dress",
        category: "Fashion",
        price: "₦26,000",
        quantity: 235,
        image: "/images/womandress.png",
        colors: ["purple", "blue", "indigo", "black"],
    },
    {
        id: 4,
        name: "Samsung A50",
        category: "Mobile",
        price: "₦34,000",
        quantity: 63,
        image: "/images/iphone12.png",
        colors: ["blue", "purple", "red"],
    },
    {
        id: 5,
        name: "Camera",
        category: "Electronic",
        price: "₦82,000",
        quantity: 32,
        image: "/images/blackcamera.png",
        colors: ["blue", "purple", "red"],
    },
]

export default function ProductPage() {


    return (
        <div className="container mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-start justify-start md:items-end md:justify-end mb-6">
                <div className="w-full sm:w-auto flex justify-start sm:justify-end">
                    <Button className='rounded-[30px] w-[199px]'>Add New Service</Button>
                </div>
            </div>
            <div className="overflow-x-auto">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="w-[100px]">Image</TableHead>
                            <TableHead>Product Name</TableHead>
                            <TableHead className="hidden sm:table-cell">Category</TableHead>
                            <TableHead className="hidden sm:table-cell">Price</TableHead>
                            <TableHead className="hidden sm:table-cell">Quantity</TableHead>
                            <TableHead className="hidden sm:table-cell">Available Color</TableHead>
                            <TableHead className="text-right">Action</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {products.map((product) => (
                            <TableRow key={product.id}>
                                <TableCell>
                                    <Image
                                        alt={product.name}
                                        className="aspect-square rounded-md object-cover"
                                        height={60}
                                        src={product.image}
                                        width={60}
                                    />
                                </TableCell>
                                <TableCell className="font-medium">
                                    <div>{product.name}</div>
                                    <div className="sm:hidden text-sm text-gray-500">
                                        {product.category} - ${product.price} - Qty: {product.quantity}
                                    </div>
                                </TableCell>
                                <TableCell className="hidden sm:table-cell">{product.category}</TableCell>
                                <TableCell className="hidden sm:table-cell">${product.price}</TableCell>
                                <TableCell className="hidden sm:table-cell">{product.quantity}</TableCell>
                                <TableCell className="hidden sm:table-cell">
                                    <div className="flex gap-1">
                                        {product.colors.map((color) => (
                                            <div
                                                key={color}
                                                className="w-4 h-4 rounded-full"
                                                style={{ backgroundColor: color }}
                                            />
                                        ))}
                                    </div>
                                </TableCell>
                                <TableCell className="text-right">
                                    <div className="hidden sm:inline-flex">
                                        <Button variant="outline" size="icon" className="mr-2">
                                            <Pencil className="h-4 w-4" />
                                        </Button>
                                        <Button variant="outline" size="icon">
                                            <Trash className="h-4 w-4 text-red-500" />
                                        </Button>
                                    </div>
                                    <div className="sm:hidden">
                                        <DropdownMenu>
                                            <DropdownMenuTrigger asChild>
                                                <Button variant="outline" size="icon">
                                                    <ChevronDown className="h-4 w-4" />
                                                </Button>
                                            </DropdownMenuTrigger>
                                            <DropdownMenuContent align="end">
                                                <DropdownMenuItem>
                                                    <Pencil className="h-4 w-4 mr-2" />
                                                    Edit
                                                </DropdownMenuItem>
                                                <DropdownMenuItem>
                                                    <Trash className="h-4 w-4 mr-2 text-red-500" />
                                                    Delete
                                                </DropdownMenuItem>
                                            </DropdownMenuContent>
                                        </DropdownMenu>
                                    </div>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </div>
    )
}