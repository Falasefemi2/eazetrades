"use client"

import React, { useState } from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const data = [
    { month: '1', sales: 2000 },
    { month: '2', sales: 2800 },
    { month: '3', sales: 3200 },
    { month: '4', sales: 2700 },
    { month: '5', sales: 4500 },
    { month: '6', sales: 4994.47 },
    { month: '7', sales: 3500 },
    { month: '8', sales: 3800 },
    { month: '9', sales: 3200 },
    { month: '10', sales: 3900 },
    { month: '11', sales: 3700 },
    { month: '12', sales: 3600 },
]

const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
]

export default function SalesChart() {
    const [selectedMonth, setSelectedMonth] = useState("1")

    const handleMonthChange = (value: string) => {
        setSelectedMonth(value)
        console.log(`Selected month: ${months[parseInt(value) - 1]}`)
        // Here you would typically update the chart data based on the selected month
    }

    return (
        <Card className="w-full bg-white shadow-md">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-base font-normal">Total Sales</CardTitle>
                <Select onValueChange={handleMonthChange} defaultValue={selectedMonth}>
                    <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Select month" />
                    </SelectTrigger>
                    <SelectContent>
                        {months.map((month, index) => (
                            <SelectItem key={index + 1} value={(index + 1).toString()}>
                                {month}
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>
            </CardHeader>
            <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                    <LineChart
                        data={data}
                        margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" vertical={false} />
                        <XAxis dataKey="month" axisLine={false} tickLine={false} />
                        <YAxis axisLine={false} tickLine={false} tickFormatter={(value) => `$${value}`} />
                        <Tooltip
                            formatter={(value) => [`$${value}`, 'Sales']}
                            labelFormatter={(label) => `Month ${label}`}
                        />
                        <Line
                            type="monotone"
                            dataKey="sales"
                            stroke="hsl(var(--primary))"
                            strokeWidth={2}
                            dot={false}
                            activeDot={{ r: 8 }}
                        />
                    </LineChart>
                </ResponsiveContainer>
            </CardContent>
        </Card>
    )
}