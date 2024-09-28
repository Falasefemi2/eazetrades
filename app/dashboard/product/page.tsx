"use client";

import { useState } from 'react'
import Image from 'next/image'
import { PencilIcon, TrashIcon, SearchIcon, ChevronDownIcon } from 'lucide-react'
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"


const products = [
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
            <div className="flex flex-col sm:flex-row items-center justify-between mb-6">
                <h1 className="text-2xl font-bold mb-4 sm:mb-0">Products</h1>
                <div className="w-full sm:w-auto">
                    <div className="relative">
                        <Input
                            className="w-full pl-10 pr-4 py-2 border-2 border-gray-300 rounded-full text-sm focus:outline-none focus:border-blue-500"
                            placeholder="Search product name"
                            type="search"
                        />
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <SearchIcon className="h-5 w-5 text-gray-400" />
                        </div>
                    </div>
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
                                            <PencilIcon className="h-4 w-4" />
                                        </Button>
                                        <Button variant="outline" size="icon">
                                            <TrashIcon className="h-4 w-4 text-red-500" />
                                        </Button>
                                    </div>
                                    <div className="sm:hidden">
                                        <DropdownMenu>
                                            <DropdownMenuTrigger asChild>
                                                <Button variant="outline" size="icon">
                                                    <ChevronDownIcon className="h-4 w-4" />
                                                </Button>
                                            </DropdownMenuTrigger>
                                            <DropdownMenuContent align="end">
                                                <DropdownMenuItem>
                                                    <PencilIcon className="h-4 w-4 mr-2" />
                                                    Edit
                                                </DropdownMenuItem>
                                                <DropdownMenuItem>
                                                    <TrashIcon className="h-4 w-4 mr-2 text-red-500" />
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