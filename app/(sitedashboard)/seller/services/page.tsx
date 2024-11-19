"use client"

import { useState } from "react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Pencil, Trash2 } from 'lucide-react'

interface Product {
    id: string
    image: string
    name: string
    category: string
    price: string
    quantity: number
    colors: string[]
}

const products: Product[] = [
    {
        id: "1",
        image: "/placeholder.svg?height=40&width=40",
        name: "Apple Watch Series 6",
        category: "Digital Product",
        price: "₦45,000",
        quantity: 53,
        colors: ["#000000", "#888888", "#FF6B6B"],
    },
    {
        id: "2",
        image: "/placeholder.svg?height=40&width=40",
        name: "Microsoft Headphones",
        category: "Digital Product",
        price: "₦35,000",
        quantity: 13,
        colors: ["#000000", "#FF6B6B", "#4A90E2", "#FFD700"],
    },
    {
        id: "3",
        image: "/placeholder.svg?height=40&width=40",
        name: "Women's Dress",
        category: "Fashion",
        price: "₦15,500",
        quantity: 535,
        colors: ["#8B4513", "#4A90E2", "#000000", "#4169E1"],
    },
    {
        id: "4",
        image: "/placeholder.svg?height=40&width=40",
        name: "Samsung A50",
        category: "Mobile",
        price: "₦65,000",
        quantity: 67,
        colors: ["#4A90E2", "#000000", "#FF6B6B"],
    },
    {
        id: "5",
        image: "/placeholder.svg?height=40&width=40",
        name: "Camera",
        category: "Electronic",
        price: "₦42,000",
        quantity: 52,
        colors: ["#4A90E2", "#000000", "#FF6B6B"],
    },
]

export default function Component() {
    const [searchQuery, setSearchQuery] = useState("")

    const filteredProducts = products.filter((product) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
    )

    return (
        <div className="space-y-4">
            <div className="flex flex-col space-y-4 sm:flex-row sm:items-center sm:justify-between sm:space-y-0 p-5">
                <h2 className="text-3xl font-bold tracking-tight">Services</h2>
                <div className="w-full sm:w-[300px]">
                    <Input
                        placeholder="Search product name"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full"
                    />
                </div>
            </div>
            <Card>
                <div className="p-0">
                    <div className="overflow-auto">
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Image</TableHead>
                                    <TableHead className="min-w-[150px]">Service Name</TableHead>
                                    <TableHead className="hidden md:table-cell">Category</TableHead>
                                    <TableHead>Price</TableHead>
                                    <TableHead className="hidden sm:table-cell">Quantity</TableHead>
                                    <TableHead className="hidden lg:table-cell">Available Color</TableHead>
                                    <TableHead>Action</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {filteredProducts.map((product) => (
                                    <TableRow key={product.id}>
                                        <TableCell>
                                            <img
                                                src={product.image}
                                                alt={product.name}
                                                className="h-10 w-10 rounded-md object-cover"
                                            />
                                        </TableCell>
                                        <TableCell className="font-medium">{product.name}</TableCell>
                                        <TableCell className="hidden md:table-cell">{product.category}</TableCell>
                                        <TableCell>{product.price}</TableCell>
                                        <TableCell className="hidden sm:table-cell">{product.quantity}</TableCell>
                                        <TableCell className="hidden lg:table-cell">
                                            <div className="flex gap-1">
                                                {product.colors.map((color, index) => (
                                                    <div
                                                        key={index}
                                                        className="h-4 w-4 rounded-full border border-gray-200"
                                                        style={{ backgroundColor: color }}
                                                    />
                                                ))}
                                            </div>
                                        </TableCell>
                                        <TableCell>
                                            <div className="flex items-center gap-2">
                                                <Button variant="ghost" size="icon" className="h-8 w-8">
                                                    <Pencil className="h-4 w-4" />
                                                </Button>
                                                <Button variant="ghost" size="icon" className="h-8 w-8 text-destructive">
                                                    <Trash2 className="h-4 w-4" />
                                                </Button>
                                            </div>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </div>
                </div>
            </Card>
        </div>
    )
}