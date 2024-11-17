import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";

const UserList = () => {
    const data = [
        {
            id: '001',
            fullName: 'Christine Brooks',
            email: 'Christine.Brooks@gmail.com',
            joinDate: 'Jul 03, 2023 12:00 AM',
            lastLogin: 'Oct 09, 2024 12:00 AM',
            permission: 'Admin'
        },
        {
            id: '002',
            fullName: 'Christine Brooks',
            email: 'Christine.Brooks@gmail.com',
            joinDate: 'Jul 29, 2020 12:00 AM',
            lastLogin: 'Sep 26, 2024 12:00 AM',
            permission: 'Admin'
        },
        {
            id: '003',
            fullName: 'Christine Brooks',
            email: 'Christine.Brooks@gmail.com',
            joinDate: 'Jul 03, 2023 12:00 AM',
            lastLogin: 'Oct 09, 2024 12:00 AM',
            permission: 'Admin'
        },
        {
            id: '004',
            fullName: 'Christine Brooks',
            email: 'Christine.Brooks@gmail.com',
            joinDate: 'Jul 03, 2023 12:00 AM',
            lastLogin: 'Oct 09, 2024 12:00 AM',
            permission: 'Admin'
        },
        {
            id: '005',
            fullName: 'Christine Brooks',
            email: 'Christine.Brooks@gmail.com',
            joinDate: 'Jul 03, 2023 12:00 AM',
            lastLogin: 'Oct 09, 2024 12:00 AM',
            permission: 'Admin'
        },
        {
            id: '006',
            fullName: 'Christine Brooks',
            email: 'Christine.Brooks@gmail.com',
            joinDate: 'Jul 03, 2023 12:00 AM',
            lastLogin: 'Oct 09, 2024 12:00 AM',
            permission: 'Admin'
        },
        {
            id: '007',
            fullName: 'Christine Brooks',
            email: 'Christine.Brooks@gmail.com',
            joinDate: 'Jul 03, 2023 12:00 AM',
            lastLogin: 'Oct 09, 2024 12:00 AM',
            permission: 'Admin'
        },
        {
            id: '008',
            fullName: 'Christine Brooks',
            email: 'Christine.Brooks@gmail.com',
            joinDate: 'Jul 03, 2023 12:00 AM',
            lastLogin: 'Oct 09, 2024 12:00 AM',
            permission: 'Admin'
        },
        {
            id: '009',
            fullName: 'Christine Brooks',
            email: 'Christine.Brooks@gmail.com',
            joinDate: 'Jul 03, 2023 12:00 AM',
            lastLogin: 'Oct 09, 2024 12:00 AM',
            permission: 'Admin'
        },
        {
            id: '0010',
            fullName: 'Christine Brooks',
            email: 'Christine.Brooks@gmail.com',
            joinDate: 'Jul 03, 2023 12:00 AM',
            lastLogin: 'Oct 09, 2024 12:00 AM',
            permission: 'Admin'
        },
        {
            id: '0011',
            fullName: 'Christine Brooks',
            email: 'Christine.Brooks@gmail.com',
            joinDate: 'Jul 03, 2023 12:00 AM',
            lastLogin: 'Oct 09, 2024 12:00 AM',
            permission: 'Admin'
        },
    ];

    return (
        <div className="p-6 bg-white">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-xl font-normal text-gray-900">Users</h1>
                <Button
                    className="bg-indigo-600 hover:bg-indigo-700 text-white rounded-full px-6 py-2"
                >
                    Add New User
                </Button>
            </div>
            <div className="bg-white rounded-md">
                <div className="min-w-full">
                    <Table>
                        <TableHeader>
                            <TableRow className="bg-gray-50">
                                <TableHead className="w-20 py-3 px-4 text-left text-sm font-medium text-gray-500">ID</TableHead>
                                <TableHead className="py-3 px-4 text-left text-sm font-medium text-gray-500">Full Name</TableHead>
                                <TableHead className="py-3 px-4 text-left text-sm font-medium text-gray-500">Email Address</TableHead>
                                <TableHead className="py-3 px-4 text-left text-sm font-medium text-gray-500">Join Date</TableHead>
                                <TableHead className="py-3 px-4 text-left text-sm font-medium text-gray-500">Last Login</TableHead>
                                <TableHead className="py-3 px-4 text-left text-sm font-medium text-gray-500">Permission</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {data.map((row) => (
                                <TableRow key={row.id} className="border-t border-gray-200">
                                    <TableCell className="py-4 px-4 text-sm text-gray-600">{row.id}</TableCell>
                                    <TableCell className="py-4 px-4 text-sm text-gray-600">{row.fullName}</TableCell>
                                    <TableCell className="py-4 px-4 text-sm text-gray-600">{row.email}</TableCell>
                                    <TableCell className="py-4 px-4 text-sm text-gray-600">{row.joinDate}</TableCell>
                                    <TableCell className="py-4 px-4 text-sm text-gray-600">{row.lastLogin}</TableCell>
                                    <TableCell className="py-4 px-4">
                                        <span className="px-3 py-1 text-sm rounded-full bg-teal-50 text-teal-600">
                                            {row.permission}
                                        </span>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>
            </div>
        </div>
    );
};

export default UserList;