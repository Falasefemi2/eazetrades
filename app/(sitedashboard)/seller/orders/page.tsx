"use client"

import * as React from "react"
import { addDays, format } from "date-fns"
import { CalendarIcon, Filter, X } from 'lucide-react'

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

// Sample data
const orders = [
    {
        id: "00001",
        name: "Christine Brooks",
        address: "989 Auto Green Apt. 448",
        date: "04 Sep 2019",
        type: "Electric",
        status: "completed"
    },
    {
        id: "00002",
        name: "Rose Norman",
        address: "979 Immanuel Ferry Suite 520",
        date: "28 May 2019",
        type: "Book",
        status: "processing"
    },
    // Add more orders as needed
]

export default function Component() {
    const [date, setDate] = React.useState<Date>()

    return (
        <div className="w-full p-4">
            <div className="mb-4 flex flex-col gap-4 sm:flex-row sm:items-center">
                <Button variant="outline" size="sm" className="h-8 w-fit">
                    <Filter className="mr-2 h-4 w-4" />
                    Filter By
                </Button>

                <Popover>
                    <PopoverTrigger asChild>
                        <Button
                            variant="outline"
                            size="sm"
                            className="h-8 w-[240px] justify-start text-left font-normal"
                        >
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            {date ? format(date, "PPP") : <span>Pick a date</span>}
                        </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                            mode="single"
                            selected={date}
                            onSelect={setDate}
                            initialFocus
                        />
                    </PopoverContent>
                </Popover>

                <Select defaultValue="all">
                    <SelectTrigger className="h-8 w-[150px]">
                        <SelectValue placeholder="Order Type" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="all">All Types</SelectItem>
                        <SelectItem value="electric">Electric</SelectItem>
                        <SelectItem value="book">Book</SelectItem>
                        <SelectItem value="medicine">Medicine</SelectItem>
                    </SelectContent>
                </Select>

                <Select defaultValue="all">
                    <SelectTrigger className="h-8 w-[150px]">
                        <SelectValue placeholder="Order Status" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="all">All Status</SelectItem>
                        <SelectItem value="completed">Completed</SelectItem>
                        <SelectItem value="processing">Processing</SelectItem>
                        <SelectItem value="rejected">Rejected</SelectItem>
                    </SelectContent>
                </Select>

                <Button size="sm" variant="ghost" className="h-8 px-2 lg:px-3">
                    Reset Filter
                    <X className="ml-2 h-4 w-4" />
                </Button>
            </div>

            <div className="rounded-md border">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="w-[100px]">ID</TableHead>
                            <TableHead>NAME</TableHead>
                            <TableHead className="hidden md:table-cell">ADDRESS</TableHead>
                            <TableHead>DATE</TableHead>
                            <TableHead>TYPE</TableHead>
                            <TableHead>STATUS</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {orders.map((order) => (
                            <TableRow key={order.id}>
                                <TableCell className="font-medium">{order.id}</TableCell>
                                <TableCell>{order.name}</TableCell>
                                <TableCell className="hidden md:table-cell">{order.address}</TableCell>
                                <TableCell>{order.date}</TableCell>
                                <TableCell>{order.type}</TableCell>
                                <TableCell>
                                    <Badge
                                        variant="secondary"
                                        className={
                                            order.status === "completed"
                                                ? "bg-green-100 text-green-800"
                                                : order.status === "processing"
                                                    ? "bg-purple-100 text-purple-800"
                                                    : order.status === "rejected"
                                                        ? "bg-red-100 text-red-800"
                                                        : "bg-yellow-100 text-yellow-800"
                                        }
                                    >
                                        {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                                    </Badge>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </div>
    )
}