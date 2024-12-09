import { ChevronRight } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"


export default function PromotionCard() {
    return (
        <main className='px-7 py-10'>
            <h1 className="text-[#333333] text-3xl mb-8">Advertisement and Promotion</h1>
            <Card className="w-full bg-white pb-10">
                <CardHeader>
                    <CardTitle>Promotion</CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                    <Accordion type="single" collapsible className="w-full">
                        <AccordionItem value="ad-type" className="border-none">
                            <Card className="bg-[#F5F6FA]">
                                <AccordionTrigger className="px-6 py-4 hover:no-underline w-full">
                                    Ad Type
                                </AccordionTrigger>
                                <AccordionContent className="pt-0 pb-4">
                                    <div className="space-y-1">
                                        {[1, 2, 3].map((item) => (
                                            <div
                                                key={item}
                                                className="flex items-center justify-between px-6 py-2 hover:bg-slate-100"
                                            >
                                                <div>
                                                    <div className="font-medium">Premium</div>
                                                    <div className="text-sm text-muted-foreground">
                                                        Price: NGN 10,000
                                                    </div>
                                                </div>
                                                <ChevronRight className="h-4 w-4 text-muted-foreground" />
                                            </div>
                                        ))}
                                    </div>
                                    <div className="px-6 pt-4 flex justify-end">
                                        <Button className="bg-primary text-white px-6 py-2 rounded-full font-medium">
                                            Add New
                                        </Button>
                                    </div>
                                </AccordionContent>
                            </Card>
                        </AccordionItem>
                    </Accordion>
                </CardContent>

                <CardContent className="p-6">
                    <Accordion type="single" collapsible className="w-full">
                        <AccordionItem value="ad-type" className="border-none">
                            <Card className="bg-[#F5F6FA]">
                                <AccordionTrigger className="px-6 py-4 hover:no-underline w-full">
                                    Promotion Power
                                </AccordionTrigger>
                                <AccordionContent className="pt-0 pb-4">
                                    <div className="space-y-1">
                                        {[1, 2, 3].map((item) => (
                                            <div
                                                key={item}
                                                className="flex items-center justify-between px-6 py-2 hover:bg-slate-100"
                                            >
                                                <div>
                                                    <div className="font-medium">Premium</div>
                                                    <div className="text-sm text-muted-foreground">
                                                        Price: NGN 10,000
                                                    </div>
                                                </div>
                                                <ChevronRight className="h-4 w-4 text-muted-foreground" />
                                            </div>
                                        ))}
                                    </div>
                                    <div className="px-6 pt-4 flex justify-end">
                                        <Button className="bg-primary text-white px-6 py-2 rounded-full font-medium">
                                            Add New
                                        </Button>
                                    </div>
                                </AccordionContent>
                            </Card>
                        </AccordionItem>
                    </Accordion>
                </CardContent>

                <CardContent className="p-6">
                    <Accordion type="single" collapsible className="w-full">
                        <AccordionItem value="ad-type" className="border-none">
                            <Card className="bg-[#F5F6FA]">
                                <AccordionTrigger className="px-6 py-4 hover:no-underline w-full">
                                    Ad Show
                                </AccordionTrigger>
                                <AccordionContent className="pt-0 pb-4">
                                    <div className="space-y-1">
                                        {[1, 2, 3].map((item) => (
                                            <div
                                                key={item}
                                                className="flex items-center justify-between px-6 py-2 hover:bg-slate-100"
                                            >
                                                <div>
                                                    <div className="font-medium">Premium</div>
                                                    <div className="text-sm text-muted-foreground">
                                                        Price: NGN 10,000
                                                    </div>
                                                </div>
                                                <ChevronRight className="h-4 w-4 text-muted-foreground" />
                                            </div>
                                        ))}
                                    </div>
                                    <div className="px-6 pt-4 flex justify-end">
                                        <Button className="bg-primary text-white px-6 py-2 rounded-full font-medium">
                                            Add New
                                        </Button>
                                    </div>
                                </AccordionContent>
                            </Card>
                        </AccordionItem>
                    </Accordion>
                </CardContent>
                <div className="flex gap-4 w-full px-6">
                    <Button className="flex-1 px-6 py-2.5 border-primary bg-white text-primary" variant="outline">
                        Cancel
                    </Button>
                    <Button className="flex-1 px-6 py-2.5 bg-primary rounded-full font-medium">
                        Change password
                    </Button>
                </div>

            </Card>
        </main>
    )
}


