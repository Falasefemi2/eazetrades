import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import Image from "next/image";
import bag from "../../../public/images/brownbag.png"
import cat from "../../../public/images/cat.png"
import elect from "../../../public/images/elect.png"
import watch from "../../../public/images/googlewatch.png"
import headphones from "../../../public/images/headphone.png"
import { Badge } from "@/components/ui/badge";

export default function ProductTable() {
    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-3">
                <Card className="bg-white">
                    <CardHeader>
                        <CardTitle>Products</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Item ID</TableHead>
                                    <TableHead>Image</TableHead>
                                    <TableHead>Customer Name</TableHead>
                                    <TableHead>Reorder status</TableHead>
                                    <TableHead>Unit Price</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {[bag, cat, elect, watch, headphones].map((image, index) => {
                                    const inStock = Math.random() > 0.5; // Randomly determine stock status
                                    return (
                                        <TableRow key={index + 1}>
                                            <TableCell>{index + 1}</TableCell>
                                            <TableCell>
                                                <Image src={image} alt={`Product ₦{index + 1}`} width={40} height={40} className="rounded" />
                                            </TableCell>
                                            <TableCell>Product {index + 1}</TableCell>
                                            <TableCell>
                                                <Badge variant={inStock ? 'default' : 'destructive'}>
                                                    {inStock ? 'In Stock' : 'Reorder'}
                                                </Badge>
                                            </TableCell>
                                            <TableCell>₦{(Math.random() * 100).toFixed(2)}</TableCell>
                                        </TableRow>
                                    );
                                })}
                            </TableBody>
                        </Table>
                    </CardContent>
                </Card>
                <Card className="bg-white">
                    <CardHeader>
                        <CardTitle>Services</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Item ID</TableHead>
                                    <TableHead>Image</TableHead>
                                    <TableHead>Customer Name</TableHead>
                                    <TableHead>Reorder status</TableHead>
                                    <TableHead>Unit Price</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {[bag, cat, elect, watch, headphones].map((image, index) => {
                                    const inStock = Math.random() > 0.5; // Randomly determine stock status
                                    return (
                                        <TableRow key={index + 1}>
                                            <TableCell>{index + 1}</TableCell>
                                            <TableCell>
                                                <Image src={image} alt={`Product ₦{index + 1}`} width={40} height={40} className="rounded" />
                                            </TableCell>
                                            <TableCell>Product {index + 1}</TableCell>
                                            <TableCell>
                                                <Badge variant={inStock ? 'default' : 'destructive'}>
                                                    {inStock ? 'In Stock' : 'Reorder'}
                                                </Badge>
                                            </TableCell>
                                            <TableCell>₦{(Math.random() * 100).toFixed(2)}</TableCell>
                                        </TableRow>
                                    );
                                })}
                            </TableBody>
                        </Table>
                    </CardContent>
                </Card>
            </div>
        </>
    )
}