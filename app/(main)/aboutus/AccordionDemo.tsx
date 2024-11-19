import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

export default function AccordionDemo() {
    return (
        <Accordion type="single" collapsible className="w-full space-y-4">
            <AccordionItem value="item-1">
                <AccordionTrigger>What is UX design?</AccordionTrigger>
                <AccordionContent>
                    UX design stands for User Experience design. It is the process of designing digital or physical products that are easy to use, intuitive, and enjoyable for the user.
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
                <AccordionTrigger>What is UX design?</AccordionTrigger>
                <AccordionContent>
                    UX design stands for User Experience design. It is the process of designing digital or physical products that are easy to use, intuitive, and enjoyable for the user.
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
                <AccordionTrigger>What is UX design?</AccordionTrigger>
                <AccordionContent>
                    UX design stands for User Experience design. It is the process of designing digital or physical products that are easy to use, intuitive, and enjoyable for the user.
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    )
}
