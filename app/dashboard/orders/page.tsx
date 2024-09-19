"use client";

import { useState } from "react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ChevronLeft, ChevronRight, Filter } from "lucide-react"

interface Order {
    id: string
    name: string
    address: string
    date: string
    type: string
    status: "Completed" | "Processing" | "Rejected" | "On Hold"
}

const orders: Order[] = [
    { id: "00001", name: "Christine Brooks", address: "089 Groth Street Apt. 459", date: "04 Sep 2019", type: "Electric", status: "Completed" },
    { id: "00002", name: "Nolan Pearson", address: "979 Immanuel Ferry Suite 506", date: "28 May 2019", type: "Book", status: "Processing" },
    { id: "00003", name: "Darrell Caldwell", address: "81877 Kris Ports", date: "23 Nov 2019", type: "Medicine", status: "Rejected" },
    { id: "00004", name: "Gilbert Johnson", address: "766 Destini Lake Suite 000", date: "05 Feb 2019", type: "Books", status: "Completed" },
    { id: "00005", name: "Alan Cain", address: "042 Mylene Throughway", date: "29 Jul 2019", type: "Watch", status: "Processing" },
    { id: "00006", name: "Alfred Murray", address: "543 Watsica Mountain", date: "15 Aug 2019", type: "Medicine", status: "Completed" },
    { id: "00007", name: "Maggie Sullivan", address: "New Scottieburgh", date: "21 Dec 2019", type: "Watch", status: "Processing" },
    { id: "00008", name: "Rosie Todd", address: "New Jon", date: "30 Apr 2019", type: "Medicine", status: "On Hold" },
]

export default function OrderPage() {
    const [currentPage, setCurrentPage] = useState(1)
    const ordersPerPage = 8
    const totalPages = Math.ceil(orders.length / ordersPerPage)

    const getStatusColor = (status: Order["status"]) => {
        switch (status) {
            case "Completed":
                return "bg-green-100 text-green-800"
            case "Processing":
                return "bg-purple-100 text-purple-800"
            case "Rejected":
                return "bg-red-100 text-red-800"
            case "On Hold":
                return "bg-yellow-100 text-yellow-800"
            default:
                return "bg-gray-100 text-gray-800"
        }
    }

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Order Lists</h1>
            <div className="flex justify-between items-center mb-4">
                <div className="flex space-x-2">
                    <Button variant="outline" size="sm">
                        <Filter className="mr-2 h-4 w-4" />
                        Filter By
                    </Button>
                    <Select>
                        <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder="Date" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="asc">Ascending</SelectItem>
                            <SelectItem value="desc">Descending</SelectItem>
                        </SelectContent>
                    </Select>
                    <Select>
                        <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder="Order Type" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="electric">Electric</SelectItem>
                            <SelectItem value="book">Book</SelectItem>
                            <SelectItem value="medicine">Medicine</SelectItem>
                            <SelectItem value="watch">Watch</SelectItem>
                        </SelectContent>
                    </Select>
                    <Select>
                        <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder="Order Status" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="completed">Completed</SelectItem>
                            <SelectItem value="processing">Processing</SelectItem>
                            <SelectItem value="rejected">Rejected</SelectItem>
                            <SelectItem value="onhold">On Hold</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
                <Button variant="outline" size="sm" className="text-red-500">
                    Reset Filter
                </Button>
            </div>
            <Table className="text-[#333333]">
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[100px]">ID</TableHead>
                        <TableHead>NAME</TableHead>
                        <TableHead>ADDRESS</TableHead>
                        <TableHead>DATE</TableHead>
                        <TableHead>TYPE</TableHead>
                        <TableHead>STATUS</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {orders.slice((currentPage - 1) * ordersPerPage, currentPage * ordersPerPage).map((order) => (
                        <TableRow key={order.id}>
                            <TableCell className="font-medium">{order.id}</TableCell>
                            <TableCell>{order.name}</TableCell>
                            <TableCell>{order.address}</TableCell>
                            <TableCell>{order.date}</TableCell>
                            <TableCell>{order.type}</TableCell>
                            <TableCell>
                                <Badge className={getStatusColor(order.status)}>{order.status}</Badge>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            <div className="flex items-center justify-between mt-4">
                <p className="text-sm text-gray-500">
                    Showing {(currentPage - 1) * ordersPerPage + 1} - {Math.min(currentPage * ordersPerPage, orders.length)} of {orders.length}
                </p>
                <div className="flex space-x-2">
                    <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                        disabled={currentPage === 1}
                    >
                        <ChevronLeft className="h-4 w-4" />
                    </Button>
                    <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                        disabled={currentPage === totalPages}
                    >
                        <ChevronRight className="h-4 w-4" />
                    </Button>
                </div>
            </div>
        </div>
    )
}