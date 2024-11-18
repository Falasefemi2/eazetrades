"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"
import { ChartContainer, ChartTooltip } from "@/components/ui/chart"
import { Users, TrendingUp } from 'lucide-react'

const salesData = [
    { date: "1", sales: 25 },
    { date: "5", sales: 36 },
    { date: "10", sales: 30 },
    { date: "15", sales: 45 },
    { date: "20", sales: 55 },
    { date: "25", sales: 40 },
    { date: "30", sales: 48 },
]

const products = [
    {
        id: "001",
        image: "/placeholder.svg?height=32&width=32",
        name: "Apparel",
        status: "In Stock",
        price: "₦1,020"
    },
    {
        id: "002",
        image: "/placeholder.svg?height=32&width=32",
        name: "Apparel",
        status: "Reorder",
        price: "₦1,020"
    },
    {
        id: "003",
        image: "/placeholder.svg?height=32&width=32",
        name: "Electronics",
        status: "In Stock",
        price: "₦1,500"
    },
]

const services = [
    {
        id: "001",
        image: "/placeholder.svg?height=32&width=32",
        name: "Apparel",
        status: "In Stock",
        price: "₦1,020"
    },
    {
        id: "002",
        image: "/placeholder.svg?height=32&width=32",
        name: "Apparel",
        status: "Reorder",
        price: "₦1,020"
    },
    {
        id: "003",
        image: "/placeholder.svg?height=32&width=32",
        name: "Electronics",
        status: "In Stock",
        price: "₦1,500"
    },
]

export default function Component() {
    return (
        <div className="p-4 space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Total Visitors</CardTitle>
                        <Users className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">489</div>
                        <p className="text-xs text-muted-foreground">
                            <span className="text-green-500">8.5% </span>
                            up from yesterday
                        </p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Today&apos;s Visitors</CardTitle>
                        <Users className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">100</div>
                        <p className="text-xs text-muted-foreground">
                            <span className="text-green-500">1.7% </span>
                            up from past week
                        </p>
                    </CardContent>
                </Card>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>Total Sales</CardTitle>
                </CardHeader>
                <CardContent>
                    <ChartContainer
                        config={{
                            sales: {
                                label: "Sales",
                                color: "hsl(var(--primary))",
                            },
                        }}
                        className="h-[300px]"
                    >
                        <ResponsiveContainer width="100%" height="100%">
                            <AreaChart data={salesData}>
                                <XAxis
                                    dataKey="date"
                                    stroke="#888888"
                                    fontSize={12}
                                    tickLine={false}
                                    axisLine={false}
                                />
                                <YAxis
                                    stroke="#888888"
                                    fontSize={12}
                                    tickLine={false}
                                    axisLine={false}
                                    tickFormatter={(value) => `$${value}`}
                                />
                                <Tooltip content={<ChartTooltip />} />
                                <Area
                                    type="monotone"
                                    dataKey="sales"
                                    stroke="hsl(var(--primary))"
                                    fill="hsl(var(--primary)/.2)"
                                />
                            </AreaChart>
                        </ResponsiveContainer>
                    </ChartContainer>
                </CardContent>
            </Card>

            <div className="grid gap-4 md:grid-cols-2">
                <Card>
                    <CardHeader>
                        <CardTitle>Products</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Item</TableHead>
                                    <TableHead>Status</TableHead>
                                    <TableHead>Price</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {products.map((product) => (
                                    <TableRow key={product.id}>
                                        <TableCell className="flex items-center gap-2">
                                            <Avatar className="h-8 w-8">
                                                <AvatarImage src={product.image} alt={product.name} />
                                                <AvatarFallback>P</AvatarFallback>
                                            </Avatar>
                                            {product.name}
                                        </TableCell>
                                        <TableCell>
                                            <Badge variant={product.status === "In Stock" ? "default" : "destructive"}>
                                                {product.status}
                                            </Badge>
                                        </TableCell>
                                        <TableCell>{product.price}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>Services</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Item</TableHead>
                                    <TableHead>Status</TableHead>
                                    <TableHead>Price</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {services.map((service) => (
                                    <TableRow key={service.id}>
                                        <TableCell className="flex items-center gap-2">
                                            <Avatar className="h-8 w-8">
                                                <AvatarImage src={service.image} alt={service.name} />
                                                <AvatarFallback>S</AvatarFallback>
                                            </Avatar>
                                            {service.name}
                                        </TableCell>
                                        <TableCell>
                                            <Badge variant={service.status === "In Stock" ? "default" : "destructive"}>
                                                {service.status}
                                            </Badge>
                                        </TableCell>
                                        <TableCell>{service.price}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}