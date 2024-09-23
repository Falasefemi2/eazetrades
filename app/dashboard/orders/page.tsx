// "use client";

// import { SetStateAction, useState } from "react"
// import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
// import { Button } from "@/components/ui/button"
// import { Badge } from "@/components/ui/badge"
// import { ChevronLeft, ChevronRight, Filter } from "lucide-react"
// import { Calendar } from "@/components/ui/calendar"
// import { format } from "date-fns";
// import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
// import { Separator } from "@/components/ui/separator";


// interface Order {
//     id: string
//     name: string
//     address: string
//     date: string
//     type: string
//     status: "Completed" | "Processing" | "Rejected" | "On Hold"
// }

// const orders: Order[] = [
//     { id: "00001", name: "Christine Brooks", address: "089 Groth Street Apt. 459", date: "04 Sep 2019", type: "Electric", status: "Completed" },
//     { id: "00002", name: "Nolan Pearson", address: "979 Immanuel Ferry Suite 506", date: "28 May 2019", type: "Book", status: "Processing" },
//     { id: "00003", name: "Darrell Caldwell", address: "81877 Kris Ports", date: "23 Nov 2019", type: "Medicine", status: "Rejected" },
//     { id: "00004", name: "Gilbert Johnson", address: "766 Destini Lake Suite 000", date: "05 Feb 2019", type: "Books", status: "Completed" },
//     { id: "00005", name: "Alan Cain", address: "042 Mylene Throughway", date: "29 Jul 2019", type: "Watch", status: "Processing" },
//     { id: "00006", name: "Alfred Murray", address: "543 Watsica Mountain", date: "15 Aug 2019", type: "Medicine", status: "Completed" },
//     { id: "00007", name: "Maggie Sullivan", address: "New Scottieburgh", date: "21 Dec 2019", type: "Watch", status: "Processing" },
//     { id: "00008", name: "Rosie Todd", address: "New Jon", date: "30 Apr 2019", type: "Medicine", status: "On Hold" },
// ]

// export default function OrderPage() {
//     const [currentPage, setCurrentPage] = useState(1)
//     const ordersPerPage = 8
//     const totalPages = Math.ceil(orders.length / ordersPerPage)

//     const getStatusColor = (status: Order["status"]) => {
//         switch (status) {
//             case "Completed":
//                 return "bg-green-100 text-green-800"
//             case "Processing":
//                 return "bg-purple-100 text-purple-800"
//             case "Rejected":
//                 return "bg-red-100 text-red-800"
//             case "On Hold":
//                 return "bg-yellow-100 text-yellow-800"
//             default:
//                 return "bg-gray-100 text-gray-800"
//         }
//     }

//     const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date()) // State for selected date
//     const [isCalendarOpen, setIsCalendarOpen] = useState(false) // State to control calendar visibility

//     return (
//         <div className="container mx-auto p-4">
//             <h1 className="text-2xl font-bold mb-4">Order Lists</h1>
//             <div className="flex justify-between items-center mb-4">
//                 <div className="flex space-x-2">
//                     <Button variant="outline" size="sm">
//                         <Filter className="mr-2 h-4 w-4" />
//                         Filter By
//                     </Button>
//                     <Select onValueChange={() => setIsCalendarOpen(true)}>
//                         <SelectTrigger className="w-[180px]">
//                             <SelectValue placeholder="Date" />
//                         </SelectTrigger>
//                         <SelectContent className="bg-white">
//                             <div className="p-0">
//                                 <Calendar
//                                     mode="single"
//                                     selected={selectedDate}
//                                     onSelect={(date) => {
//                                         setSelectedDate(date);
//                                         setIsCalendarOpen(false);
//                                     }}
//                                     initialFocus
//                                 />
//                             </div>
//                         </SelectContent>
//                     </Select>
//                     <Select>
//                         <SelectTrigger className="w-[180px]">
//                             <SelectValue placeholder="Order Type" />
//                         </SelectTrigger>
//                         <SelectContent>
//                             <SelectItem value="electric">Electric</SelectItem>
//                             <SelectItem value="book">Book</SelectItem>
//                             <SelectItem value="medicine">Medicine</SelectItem>
//                             <SelectItem value="watch">Watch</SelectItem>
//                         </SelectContent>
//                     </Select>
//                     <Select>
//                         <SelectTrigger className="w-[180px]">
//                             <SelectValue placeholder="Order Status" />
//                         </SelectTrigger>
//                         <SelectContent className="bg-white">
//                             <Card className=" w-96">
//                                 <CardHeader>
//                                     <CardTitle className="text-sm font-semibold">Select Order Status</CardTitle>
//                                 </CardHeader>
//                                 <CardContent className="grid grid-cols-3 gap-4">
//                                     {/* Make badges clickable for selection */}
//                                     <Badge className="bg-white text-black border-black hover:bg-gray-200 cursor-pointer">Completed</Badge>
//                                     <Badge className="bg-white text-black border-black hover:bg-gray-200 cursor-pointer">Processing</Badge>
//                                     <Badge className="bg-white text-black border-black hover:bg-gray-200 cursor-pointer">Rejected</Badge>
//                                     <Badge className="bg-white text-black border-black hover:bg-gray-200 cursor-pointer">On Hold</Badge>
//                                     <Badge className="bg-white text-black border-black hover:bg-gray-200 cursor-pointer">In Transit</Badge>
//                                 </CardContent>
//                                 <Separator />
//                                 <p className="text-xs text-muted-foreground mt-2">
//                                     *You can choose multiple Order Status
//                                 </p>
//                                 <CardFooter className="flex items-center justify-center mt-8">
//                                     <Button className=" bg-[#5F3AFB] hover:bg-[#5F3AFB] w-32 h-9 rounded-none">
//                                         Apply Now
//                                     </Button>
//                                 </CardFooter>
//                             </Card>
//                         </SelectContent>
//                     </Select>
//                 </div>
//                 <Button variant="outline" size="sm" className="text-red-500">
//                     Reset Filter
//                 </Button>
//             </div>
//             <Table className="text-[#333333]">
//                 <TableHeader>
//                     <TableRow>
//                         <TableHead className="w-[100px]">ID</TableHead>
//                         <TableHead>NAME</TableHead>
//                         <TableHead>ADDRESS</TableHead>
//                         <TableHead>DATE</TableHead>
//                         <TableHead>TYPE</TableHead>
//                         <TableHead>STATUS</TableHead>
//                     </TableRow>
//                 </TableHeader>
//                 <TableBody>
//                     {orders.slice((currentPage - 1) * ordersPerPage, currentPage * ordersPerPage).map((order) => (
//                         <TableRow key={order.id}>
//                             <TableCell className="font-medium">{order.id}</TableCell>
//                             <TableCell>{order.name}</TableCell>
//                             <TableCell>{order.address}</TableCell>
//                             <TableCell onClick={() => setIsCalendarOpen(true)}>
//                                 {order.date}
//                                 {isCalendarOpen && (
//                                     <Calendar
//                                         selected={selectedDate}
//                                         onSelect={(range: Date | undefined) => {
//                                             if (range) {
//                                                 setSelectedDate(range); // Update selected date
//                                             }
//                                             setIsCalendarOpen(false); // Close calendar after selection
//                                         }}
//                                     />
//                                 )}
//                             </TableCell>

//                             <TableCell>{order.type}</TableCell>
//                             <TableCell>
//                                 <Badge className={getStatusColor(order.status)}>{order.status}</Badge>
//                             </TableCell>
//                         </TableRow>
//                     ))}
//                 </TableBody>
//             </Table>
//             <div className="flex items-center justify-between mt-4">
//                 <p className="text-sm text-gray-500">
//                     Showing {(currentPage - 1) * ordersPerPage + 1} - {Math.min(currentPage * ordersPerPage, orders.length)} of {orders.length}
//                 </p>
//                 <div className="flex space-x-2">
//                     <Button
//                         variant="outline"
//                         size="sm"
//                         onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
//                         disabled={currentPage === 1}
//                     >
//                         <ChevronLeft className="h-4 w-4" />
//                     </Button>
//                     <Button
//                         variant="outline"
//                         size="sm"
//                         onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
//                         disabled={currentPage === totalPages}
//                     >
//                         <ChevronRight className="h-4 w-4" />
//                     </Button>
//                 </div>
//             </div>
//         </div>
//     )
// }


"use client"

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Calendar } from "@/components/ui/calendar"
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
    { id: "001", name: "John Doe", address: "123 Main St", date: "2023-06-01", type: "Electric", status: "Completed" },
    { id: "002", name: "Jane Smith", address: "456 Elm St", date: "2023-06-02", type: "Book", status: "Processing" },
    { id: "003", name: "Bob Johnson", address: "789 Oak St", date: "2023-06-03", type: "Medicine", status: "Rejected" },
    { id: "004", name: "Alice Brown", address: "321 Pine St", date: "2023-06-04", type: "Watch", status: "On Hold" },
    { id: "005", name: "Charlie Davis", address: "654 Maple St", date: "2023-06-05", type: "Electric", status: "Completed" },
    { id: "006", name: "Eva Wilson", address: "987 Cedar St", date: "2023-06-06", type: "Book", status: "Processing" },
    { id: "007", name: "Frank Miller", address: "147 Birch St", date: "2023-06-07", type: "Medicine", status: "Rejected" },
    { id: "008", name: "Grace Taylor", address: "258 Walnut St", date: "2023-06-08", type: "Watch", status: "On Hold" },
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

    const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date())
    const [isCalendarOpen, setIsCalendarOpen] = useState(false)

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Order Lists</h1>
            <div className="flex flex-col space-y-4 md:flex-row md:justify-between md:items-center mb-4">
                <div className="flex flex-row space-x-2 md:space-y-0">
                    <Button variant="outline" size="sm" className="w-full md:w-auto">
                        <Filter className="mr-2 h-4 w-4" />
                        Filter By
                    </Button>
                    <Select onValueChange={() => setIsCalendarOpen(true)}>
                        <SelectTrigger className="w-full md:w-[180px]">
                            <SelectValue placeholder="Date" />
                        </SelectTrigger>
                        <SelectContent className="bg-white">
                            <div className="p-0">
                                <Calendar
                                    mode="single"
                                    selected={selectedDate}
                                    onSelect={(date) => {
                                        setSelectedDate(date)
                                        setIsCalendarOpen(false)
                                    }}
                                    initialFocus
                                />
                            </div>
                        </SelectContent>
                    </Select>
                    <Select>
                        <SelectTrigger className="w-full md:w-[180px]">
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
                        <SelectTrigger className="w-full md:w-[180px]">
                            <SelectValue placeholder="Order Status" />
                        </SelectTrigger>
                        <SelectContent className="bg-white">
                            <Card className="w-full md:w-96">
                                <CardHeader>
                                    <CardTitle className="text-sm font-semibold">Select Order Status</CardTitle>
                                </CardHeader>
                                <CardContent className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                    <Badge className="bg-white text-black border-black hover:bg-gray-200 cursor-pointer">Completed</Badge>
                                    <Badge className="bg-white text-black border-black hover:bg-gray-200 cursor-pointer">Processing</Badge>
                                    <Badge className="bg-white text-black border-black hover:bg-gray-200 cursor-pointer">Rejected</Badge>
                                    <Badge className="bg-white text-black border-black hover:bg-gray-200 cursor-pointer">On Hold</Badge>
                                    <Badge className="bg-white text-black border-black hover:bg-gray-200 cursor-pointer">In Transit</Badge>
                                </CardContent>
                                <Separator />
                                <p className="text-xs text-muted-foreground mt-2 px-4">
                                    *You can choose multiple Order Status
                                </p>
                                <CardFooter className="flex items-center justify-center mt-8">
                                    <Button className="bg-[#5F3AFB] hover:bg-[#5F3AFB] w-full md:w-32 h-9 rounded-none">
                                        Apply Now
                                    </Button>
                                </CardFooter>
                            </Card>
                        </SelectContent>
                    </Select>
                </div>
                <Button variant="outline" size="sm" className="w-full md:w-auto">
                    Reset Filter
                </Button>
            </div>
            <div className="overflow-x-auto">
                <Table className="text-[#333333] w-full">
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
                                <TableCell onClick={() => setIsCalendarOpen(true)}>
                                    {order.date}
                                    {isCalendarOpen && (
                                        <div className="absolute z-10 bg-white shadow-lg">
                                            <Calendar
                                                selected={selectedDate}
                                                onSelect={(range: Date | undefined) => {
                                                    if (range) {
                                                        setSelectedDate(range)
                                                    }
                                                    setIsCalendarOpen(false)
                                                }}
                                            />
                                        </div>
                                    )}
                                </TableCell>
                                <TableCell>{order.type}</TableCell>
                                <TableCell>
                                    <Badge className={getStatusColor(order.status)}>{order.status}</Badge>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
            <div className="flex flex-col md:flex-row items-center justify-between mt-4 space-y-4 md:space-y-0">
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