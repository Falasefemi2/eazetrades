import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface EmailListProps {
    registeredUsers: Array<{ id: string; email: string }>
    newsletterEmails: Array<{ id: string; email: string }>
}

export default function EmailList({
    registeredUsers = Array(4).fill(0).map((_, index) => ({
        id: `RU${String(index + 1).padStart(3, '0')}`,
        email: `user${index + 1}@example.com`
    })),
    newsletterEmails = Array(4).fill(0).map((_, index) => ({
        id: `NE${String(index + 1).padStart(3, '0')}`,
        email: `newsletter${index + 1}@example.com`
    })),
}: EmailListProps) {
    return (
        <div className="w-full space-y-8 p-4">
            <h1 className="text-2xl font-bold">Email List</h1>

            <Card>
                <CardHeader>
                    <CardTitle>Registered Users</CardTitle>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead className="w-20">ID</TableHead>
                                <TableHead>Email Address</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {registeredUsers.map((user) => (
                                <TableRow key={user.id}>
                                    <TableCell className="font-medium">{user.id}</TableCell>
                                    <TableCell className="w-full">{user.email}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                    <div className="flex items-center justify-between mt-4">
                        <p className="text-sm text-muted-foreground">Showing 1-10 of 79</p>
                        <div className="flex items-center space-x-2">
                            <Button variant="outline" size="icon">
                                <ChevronLeft className="h-4 w-4" />
                            </Button>
                            <Button variant="outline" size="icon">
                                <ChevronRight className="h-4 w-4" />
                            </Button>
                        </div>
                    </div>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>Newsletter Emails</CardTitle>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead className="w-20">ID</TableHead>
                                <TableHead>Email Address</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {newsletterEmails.map((email) => (
                                <TableRow key={email.id}>
                                    <TableCell className="font-medium">{email.id}</TableCell>
                                    <TableCell className="w-full">{email.email}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                    <div className="flex items-center justify-between mt-4">
                        <p className="text-sm text-muted-foreground">Showing 1-10 of 79</p>
                        <div className="flex items-center space-x-2">
                            <Button variant="outline" size="icon">
                                <ChevronLeft className="h-4 w-4" />
                            </Button>
                            <Button variant="outline" size="icon">
                                <ChevronRight className="h-4 w-4" />
                            </Button>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}

