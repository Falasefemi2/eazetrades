import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Pencil, Trash2 } from 'lucide-react'

export default function Component() {
    return (
        <div className="w-full p-4 space-y-8">
            <Card className="bg-white">
                <CardHeader>
                    <CardTitle>Edit Category</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="w-full space-y-2">
                        <Label htmlFor="parent">Parent</Label>
                        <Input id="parent" placeholder="Parent" className="w-full" />
                    </div>
                    <div className="w-full space-y-2">
                        <Label htmlFor="category">Category</Label>
                        <Input id="category" placeholder="Category" className="w-full" />
                    </div>
                </CardContent>
                <CardFooter className="flex flex-col w-full sm:flex-row gap-2">
                    <Button variant="outline" className="w-full sm:flex-1 bg-white">Cancel</Button>
                    <Button className="w-full sm:flex-1">Change password</Button>
                </CardFooter>

            </Card>

            <div className="border rounded-lg overflow-x-auto">
                <Table className="bg-white">
                    <TableHeader>
                        <TableRow>
                            <TableHead>Category</TableHead>
                            <TableHead>Parent</TableHead>
                            <TableHead className="w-[100px]">Actions</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {[
                            "Health",
                            "Journalism",
                            "Wellness",
                            "Inspiration",
                            "Food & Nutrition",
                            "Science & Technology",
                            "Entertainment",
                        ].map((category) => (
                            <TableRow key={category}>
                                <TableCell>{category}</TableCell>
                                <TableCell>Parent</TableCell>
                                <TableCell>
                                    <div className="flex items-center gap-2">
                                        <Button variant="ghost" size="icon" className="h-8 w-8">
                                            <Pencil className="h-4 w-4" />
                                            <span className="sr-only">Edit</span>
                                        </Button>
                                        <Button variant="ghost" size="icon" className="h-8 w-8">
                                            <Trash2 className="h-4 w-4" />
                                            <span className="sr-only">Delete</span>
                                        </Button>
                                    </div>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </div>
    )
}