// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
// import Image from "next/image";
// import bag from "../../../public/images/brownbag.png"
// import cat from "../../../public/images/cat.png"
// import elect from "../../../public/images/elect.png"
// import watch from "../../../public/images/googlewatch.png"
// import headphones from "../../../public/images/headphone.png"
// import { Badge } from "@/components/ui/badge";

// export default function ProductTable() {
//     return (
//         <>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-3">
//                 <Card className="bg-white">
//                     <CardHeader>
//                         <CardTitle>Products</CardTitle>
//                     </CardHeader>
//                     <CardContent>
//                         <Table>
//                             <TableHeader>
//                                 <TableRow>
//                                     <TableHead>Item ID</TableHead>
//                                     <TableHead>Image</TableHead>
//                                     <TableHead>Customer Name</TableHead>
//                                     <TableHead>Reorder status</TableHead>
//                                     <TableHead>Unit Price</TableHead>
//                                 </TableRow>
//                             </TableHeader>
//                             <TableBody>
//                                 {[bag, cat, elect, watch, headphones].map((image, index) => {
//                                     const inStock = Math.random() > 0.5; // Randomly determine stock status
//                                     return (
//                                         <TableRow key={index + 1}>
//                                             <TableCell>{index + 1}</TableCell>
//                                             <TableCell>
//                                                 <Image src={image} alt={`Product ₦{index + 1}`} width={40} height={40} className="rounded" />
//                                             </TableCell>
//                                             <TableCell>Product {index + 1}</TableCell>
//                                             <TableCell>
//                                                 <Badge variant={inStock ? 'default' : 'destructive'}>
//                                                     {inStock ? 'In Stock' : 'Reorder'}
//                                                 </Badge>
//                                             </TableCell>
//                                             <TableCell>₦{(Math.random() * 100).toFixed(2)}</TableCell>
//                                         </TableRow>
//                                     );
//                                 })}
//                             </TableBody>
//                         </Table>
//                     </CardContent>
//                 </Card>
//                 <Card className="bg-white">
//                     <CardHeader>
//                         <CardTitle>Services</CardTitle>
//                     </CardHeader>
//                     <CardContent>
//                         <Table>
//                             <TableHeader>
//                                 <TableRow>
//                                     <TableHead>Item ID</TableHead>
//                                     <TableHead>Image</TableHead>
//                                     <TableHead>Customer Name</TableHead>
//                                     <TableHead>Reorder status</TableHead>
//                                     <TableHead>Unit Price</TableHead>
//                                 </TableRow>
//                             </TableHeader>
//                             <TableBody>
//                                 {[bag, cat, elect, watch, headphones].map((image, index) => {
//                                     const inStock = Math.random() > 0.5; // Randomly determine stock status
//                                     return (
//                                         <TableRow key={index + 1}>
//                                             <TableCell>{index + 1}</TableCell>
//                                             <TableCell>
//                                                 <Image src={image} alt={`Product ₦{index + 1}`} width={40} height={40} className="rounded" />
//                                             </TableCell>
//                                             <TableCell>Product {index + 1}</TableCell>
//                                             <TableCell>
//                                                 <Badge variant={inStock ? 'default' : 'destructive'}>
//                                                     {inStock ? 'In Stock' : 'Reorder'}
//                                                 </Badge>
//                                             </TableCell>
//                                             <TableCell>₦{(Math.random() * 100).toFixed(2)}</TableCell>
//                                         </TableRow>
//                                     );
//                                 })}
//                             </TableBody>
//                         </Table>
//                     </CardContent>
//                 </Card>
//             </div>
//         </>
//     )
// }


import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { MoreVertical } from "lucide-react"

export default function Component() {
    return (
        <div className="w-full">
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[100px]">ID</TableHead>
                        <TableHead>NAME</TableHead>
                        <TableHead>Plan</TableHead>
                        <TableHead>Expire date</TableHead>
                        <TableHead>Type</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead className="w-[50px]"></TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {[
                        {
                            id: "00001",
                            name: "Christine Brooks",
                            expireDate: "04 Sep 2019",
                            type: "Electric",
                            status: "completed"
                        },
                        {
                            id: "00002",
                            name: "Rosie Pearson",
                            expireDate: "28 Nov 2019",
                            type: "Book",
                            status: "processing"
                        },
                        {
                            id: "00003",
                            name: "Darrell Caldwell",
                            expireDate: "22 Nov 2019",
                            type: "Medicine",
                            status: "rejected"
                        }
                    ].map((user) => (
                        <TableRow key={user.id}>
                            <TableCell className="font-mono">{user.id}</TableCell>
                            <TableCell>{user.name}</TableCell>
                            <TableCell>Basic</TableCell>
                            <TableCell>{user.expireDate}</TableCell>
                            <TableCell>{user.type}</TableCell>
                            <TableCell>
                                <Badge
                                    variant="outline"
                                    className={
                                        user.status === "completed"
                                            ? "bg-emerald-50 text-emerald-700 border-emerald-200"
                                            : user.status === "processing"
                                                ? "bg-purple-50 text-purple-700 border-purple-200"
                                                : "bg-red-50 text-red-700 border-red-200"
                                    }
                                >
                                    {user.status.charAt(0).toUpperCase() + user.status.slice(1)}
                                </Badge>
                            </TableCell>
                            <TableCell>
                                <Button variant="ghost" size="icon">
                                    <MoreVertical className="h-4 w-4" />
                                </Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    )
}