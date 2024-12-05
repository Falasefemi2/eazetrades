import { Button } from "@/components/ui/button"
import { ExternalLink } from 'lucide-react'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"


// export default function PromotionInterface() {
//     return (
//         <div className="p-4 space-y-6">
//             <h1 className="text-2xl font-semibold mb-6">Advertisement and Promotion</h1>

//             <div className="grid gap-6 md:grid-cols-2">
//                 <Card>
//                     <CardHeader>
//                         <CardTitle>Promotion</CardTitle>
//                     </CardHeader>
//                     <CardContent className="space-y-4">
//                         {[1, 2, 3].map((item) => (
//                             <div
//                                 key={item}
//                                 className="flex items-center justify-between p-4 rounded-lg bg-muted/50"
//                             >
//                                 <div className="space-y-1">
//                                     <p className="font-medium">Premium</p>
//                                     <p className="text-sm text-muted-foreground">
//                                         Price: NGN 10,000
//                                     </p>
//                                 </div>
//                                 <Button variant="ghost" size="icon">
//                                     <Copy className="h-4 w-4" />
//                                 </Button>
//                             </div>
//                         ))}
//                         <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
//                             Add New
//                         </Button>
//                     </CardContent>
//                 </Card>

//                 <Card>
//                     <CardHeader>
//                         <CardTitle>Promotion Power</CardTitle>
//                     </CardHeader>
//                     <CardContent className="space-y-4">
//                         {[1, 2, 3].map((item) => (
//                             <div
//                                 key={item}
//                                 className="flex items-center justify-between p-4 rounded-lg bg-muted/50"
//                             >
//                                 <div>
//                                     <p className="font-medium">Premium</p>
//                                 </div>
//                                 <Button variant="ghost" size="icon">
//                                     <Copy className="h-4 w-4" />
//                                 </Button>
//                             </div>
//                         ))}
//                         <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
//                             Add New
//                         </Button>
//                     </CardContent>
//                 </Card>
//             </div>
//         </div>
//     )
// }


export default function PromotionInterface() {
    const adTypes = [
        { type: "Premium", price: "NGN 10,000" },
        { type: "Premium", price: "NGN 10,000" },
        { type: "Premium", price: "NGN 10,000" },
    ]

    return (
        <div className="p-4 space-y-6">
            <div>
                <h1 className="text-2xl font-semibold mb-6">Advertisement and Promotion</h1>
            </div>

            <div>
                <Card className="bg-white px-12 py-6">
                    <div className="space-y-6">
                        <h2>Promotion</h2>
                        <Card className="w-full h-[409px] px-7 bg-[#F5F6FA]">
                            <CardHeader>
                                <CardTitle>Ad Type</CardTitle>
                            </CardHeader>
                            <div className="space-y-4">
                                {adTypes.map((ad, index) => (
                                    <div
                                        key={index}
                                        className="flex items-center justify-between p-2 rounded-lg hover:bg-muted/50"
                                    >
                                        <div className="space-y-1">
                                            <p className="font-medium">{ad.type}</p>
                                            <p className="text-sm text-muted-foreground">Price: {ad.price}</p>
                                        </div>
                                        <Button variant="ghost" size="icon">
                                            <ExternalLink className="h-4 w-4" />
                                        </Button>
                                    </div>
                                ))}
                                <Button className="flex justify-self-end w-[199px] h-[53px] justify-items-end" variant="default">
                                    Add New
                                </Button>
                            </div>
                        </Card>

                    </div>
                </Card>
            </div>
        </div>
    )
}
