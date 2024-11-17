import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const EmailList = () => {
    const data = [
        { id: '001', fullName: 'Christine Brooks', email: 'Christine.Brooks@gmail.com', phone: '09173737287474' },
        { id: '002', fullName: 'Christine Brooks', email: 'Christine.Brooks@gmail.com', phone: '09173737287474' },
        { id: '003', fullName: 'Christine Brooks', email: 'Christine.Brooks@gmail.com', phone: '09173737287474' },
        { id: '004', fullName: 'Christine Brooks', email: 'Christine.Brooks@gmail.com', phone: '09173737287474' },
        { id: '005', fullName: 'Christine Brooks', email: 'Christine.Brooks@gmail.com', phone: '09173737287474' },
        { id: '006', fullName: 'Christine Brooks', email: 'Christine.Brooks@gmail.com', phone: '09173737287474' },
        { id: '007', fullName: 'Christine Brooks', email: 'Christine.Brooks@gmail.com', phone: '09173737287474' },
        { id: '008', fullName: 'Christine Brooks', email: 'Christine.Brooks@gmail.com', phone: '09173737287474' },
        { id: '009', fullName: 'Christine Brooks', email: 'Christine.Brooks@gmail.com', phone: '09173737287474' },
        { id: '010', fullName: 'Christine Brooks', email: 'Christine.Brooks@gmail.com', phone: '09173737287474' },
        { id: '011', fullName: 'Christine Brooks', email: 'Christine.Brooks@gmail.com', phone: '09173737287474' },
        { id: '012', fullName: 'Christine Brooks', email: 'Christine.Brooks@gmail.com', phone: '09173737287474' }
    ];

    return (
        <div className="p-6 bg-white">
            <div className="mb-4">
                <h1 className="text-xl font-normal text-gray-900">Email List</h1>
            </div>
            <div className="bg-white rounded-md">
                <div className="min-w-full">
                    <Table>
                        <TableHeader>
                            <TableRow className="bg-gray-50">
                                <TableHead className="w-20 py-3 px-4 text-left text-sm font-medium text-gray-500">ID</TableHead>
                                <TableHead className="py-3 px-4 text-left text-sm font-medium text-gray-500">Full Name</TableHead>
                                <TableHead className="py-3 px-4 text-left text-sm font-medium text-gray-500">Email Address</TableHead>
                                <TableHead className="py-3 px-4 text-left text-sm font-medium text-gray-500">Phone Number</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {data.map((row) => (
                                <TableRow key={row.id} className="border-t border-gray-200">
                                    <TableCell className="py-4 px-4 text-sm text-gray-600">{row.id}</TableCell>
                                    <TableCell className="py-4 px-4 text-sm text-gray-600">{row.fullName}</TableCell>
                                    <TableCell className="py-4 px-4 text-sm text-gray-600">{row.email}</TableCell>
                                    <TableCell className="py-4 px-4 text-sm text-gray-600">{row.phone}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>
            </div>
        </div>
    );
};

export default EmailList;