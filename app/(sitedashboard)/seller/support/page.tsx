import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { Card } from "@/components/ui/card"

export default function Component() {
    return (
        <Card className="w-full max-w-3xl mx-auto bg-slate-50 p-6">
            <h2 className="text-xl font-semibold mb-4">Support</h2>
            <Accordion type="single" collapsible className="space-y-4">
                <AccordionItem value="item-1" className="border rounded-lg bg-white px-4">
                    <AccordionTrigger className="hover:no-underline">
                        Questions here, then the answer underneath it
                    </AccordionTrigger>
                    <AccordionContent className="text-sm text-muted-foreground">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu ipsum molestie, rutrum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem
                        sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per
                        conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2" className="border rounded-lg bg-white px-4">
                    <AccordionTrigger className="hover:no-underline">
                        Questions here, then the answer underneath it
                    </AccordionTrigger>
                    <AccordionContent className="text-sm text-muted-foreground">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu ipsum molestie, rutrum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem
                        sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per
                        conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3" className="border rounded-lg bg-white px-4">
                    <AccordionTrigger className="hover:no-underline">
                        Questions here, then the answer underneath it
                    </AccordionTrigger>
                    <AccordionContent className="text-sm text-muted-foreground">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu ipsum molestie, rutrum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem
                        sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per
                        conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar.
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </Card>
    )
}