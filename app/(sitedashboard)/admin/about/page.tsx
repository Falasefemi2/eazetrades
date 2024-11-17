import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Pencil, Trash2 } from "lucide-react";

const MobileUserList = () => {
    const data = [
        {
            id: '001',
            title: 'Christine Brooks',
            featured: {
                name: 'Christine',
                email: 'Brooks@gmail.com'
            }
        },
        {
            id: '002',
            title: 'Christine Brooks',
            featured: {
                name: 'Christine',
                email: 'Brooks@gmail.com'
            }
        },
        {
            id: '003',
            title: 'Christine Brooks',
            featured: {
                name: 'Christine',
                email: 'Brooks@gmail.com'
            }
        },
        {
            id: '004',
            title: 'Christine Brooks',
            featured: {
                name: 'Christine',
                email: 'Brooks@gmail.com'
            }
        },
        {
            id: '005',
            title: 'Christine Brooks',
            featured: {
                name: 'Christine',
                email: 'Brooks@gmail.com'
            }
        },
        // Additional rows...
    ];

    return (
        <div className="bg-white">
            <div className="overflow-x-auto">
                <div className="min-w-full">
                    <Table>
                        <TableHeader>
                            <TableRow className="bg-gray-50">
                                <TableHead className="w-20 py-3 px-4 text-left text-sm font-medium text-gray-500">ID</TableHead>
                                <TableHead className="py-3 px-4 text-left text-sm font-medium text-gray-500">Title</TableHead>
                                <TableHead className="py-3 px-4 text-left text-sm font-medium text-gray-500">Featured</TableHead>
                                <TableHead className="py-3 px-4 text-left text-sm font-medium text-gray-500 w-24">Actions</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {data.map((row) => (
                                <TableRow key={row.id} className="border-t border-gray-200">
                                    <TableCell className="py-4 px-4 text-sm text-gray-600">
                                        {row.id}
                                    </TableCell>
                                    <TableCell className="py-4 px-4 text-sm text-gray-600">
                                        {row.title}
                                    </TableCell>
                                    <TableCell className="py-4 px-4">
                                        <div className="flex flex-col">
                                            <span className="text-sm text-gray-600">{row.featured.name}</span>
                                            <span className="text-sm text-gray-600">{row.featured.email}</span>
                                        </div>
                                    </TableCell>
                                    <TableCell className="py-4 px-4">
                                        <div className="flex space-x-3">
                                            <button className="text-gray-400 hover:text-gray-500">
                                                <Pencil className="h-4 w-4" />
                                            </button>
                                            <button className="text-red-400 hover:text-red-500">
                                                <Trash2 className="h-4 w-4" />
                                            </button>
                                        </div>
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

export default MobileUserList;