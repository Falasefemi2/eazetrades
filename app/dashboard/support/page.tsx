import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { HelpCircle } from "lucide-react"
import { Card, CardContent, CardHeader } from "@/components/ui/card" // Import Card components

export default function SupportPage() {
    return (
        <div className="container mx-auto p-4 md:p-6 lg:p-8">
            <h1 className="text-2xl font-bold mb-6">Support</h1>
            <Card className="mb-6 bg-white">
                <CardHeader>
                    <h2 className="text-xl font-semibold">Frequently Asked Questions</h2>
                </CardHeader>
                <CardContent>
                    <Accordion type="single" collapsible className="w-full space-y-4">
                        <AccordionItem value="item-1">
                            <AccordionTrigger>Questions here, then the answer underneath it</AccordionTrigger>
                            <AccordionContent>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-2">
                            <AccordionTrigger>Questions here, then the answer underneath it</AccordionTrigger>
                            <AccordionContent>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-3">
                            <AccordionTrigger>Questions here, then the answer underneath it</AccordionTrigger>
                            <AccordionContent>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </CardContent>
            </Card>
            <div className="absolute right-4">
                <Button size="icon" className="rounded-full w-12 h-12 bg-primary text-primary-foreground">
                    <HelpCircle className="h-6 w-6" />
                    <span className="sr-only">Get help</span>
                </Button>
            </div>
        </div>
    )
}