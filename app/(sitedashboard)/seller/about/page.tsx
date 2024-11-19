"use client"

import { useState, useEffect } from "react"
import { Camera } from 'lucide-react'
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"
import {
    Drawer,
    DrawerContent,
    DrawerHeader,
    DrawerTitle,
    DrawerFooter,
} from "@/components/ui/drawer"
import { Input } from "@/components/ui/input"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

// Types
interface UserData {
    id: string
    fullName: string
    email: string
    phoneNumber: string
}

// Sample data
const initialData: UserData[] = Array.from({ length: 10 }, (_, i) => ({
    id: `00${i + 1}`,
    fullName: "Christine Brooks",
    email: "Brooks@gmail.com",
    phoneNumber: "09173737387374"
}))

export default function Component() {
    const [data] = useState<UserData[]>(initialData)
    const [isMobile, setIsMobile] = useState(false)
    const [isOpen, setIsOpen] = useState(false)
    const [selectedUser, setSelectedUser] = useState<UserData | null>(null)

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768)
        checkMobile()
        window.addEventListener("resize", checkMobile)
        return () => window.removeEventListener("resize", checkMobile)
    }, [])

    const handleRowClick = (user: UserData) => {
        setSelectedUser(user)
        setIsOpen(true)
    }

    const UserForm = () => (
        <div className="space-y-6 px-4">
            <div className="flex flex-col items-center justify-center gap-2">
                <div className="relative h-24 w-24 rounded-full border-2 border-dashed border-gray-300 p-2">
                    <Camera className="h-12 w-12 mx-auto mt-4 text-gray-400" />
                </div>
                <span className="text-sm text-primary">Upload Cover Photo</span>
            </div>
            <div className="grid gap-4">
                <div className="grid gap-2">
                    <label htmlFor="fullName">Full Name</label>
                    <Input
                        id="fullName"
                        defaultValue={selectedUser?.fullName}
                        placeholder="Enter your name"
                    />
                </div>
                <div className="grid gap-2">
                    <label htmlFor="email">Email Address</label>
                    <Input
                        id="email"
                        type="email"
                        defaultValue={selectedUser?.email}
                        placeholder="Enter your email"
                    />
                </div>
                <div className="grid gap-2">
                    <label htmlFor="date">Date</label>
                    <Input
                        id="date"
                        type="date"
                        defaultValue={new Date().toISOString().split('T')[0]}
                    />
                </div>
                <div className="grid gap-2">
                    <label htmlFor="address">Address</label>
                    <Input
                        id="address"
                        placeholder="Enter your address"
                    />
                </div>
                <div className="grid gap-2">
                    <label htmlFor="phone">Contact Number</label>
                    <Input
                        id="phone"
                        type="tel"
                        defaultValue={selectedUser?.phoneNumber}
                        placeholder="Enter your contact number"
                    />
                </div>
            </div>
        </div>
    )

    return (
        <div className="container mx-auto py-6">
            <h2 className="text-2xl font-bold mb-6">About Us</h2>

            <div className="rounded-md border">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>ID</TableHead>
                            <TableHead>Full Name</TableHead>
                            <TableHead>Email Address</TableHead>
                            <TableHead>Phone Number</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {data.map((user) => (
                            <TableRow
                                key={user.id}
                                className="cursor-pointer hover:bg-muted/50"
                                onClick={() => handleRowClick(user)}
                            >
                                <TableCell>{user.id}</TableCell>
                                <TableCell>{user.fullName}</TableCell>
                                <TableCell>{user.email}</TableCell>
                                <TableCell>{user.phoneNumber}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>

            {isMobile ? (
                <Drawer open={isOpen} onOpenChange={setIsOpen}>
                    <DrawerContent>
                        <DrawerHeader>
                            <DrawerTitle>Edit User</DrawerTitle>
                        </DrawerHeader>
                        <UserForm />
                        <DrawerFooter>
                            <Button className="w-full bg-primary" onClick={() => setIsOpen(false)}>
                                Add now
                            </Button>
                        </DrawerFooter>
                    </DrawerContent>
                </Drawer>
            ) : (
                <Dialog open={isOpen} onOpenChange={setIsOpen}>
                    <DialogContent>
                        <DialogHeader>
                            <DialogTitle>Edit User</DialogTitle>
                        </DialogHeader>
                        <UserForm />
                        <Button className="mt-6 w-full bg-primary" onClick={() => setIsOpen(false)}>
                            Add now
                        </Button>
                    </DialogContent>
                </Dialog>
            )}
        </div>
    )
}