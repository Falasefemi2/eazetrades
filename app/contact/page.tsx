"use client";

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner"

import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage
} from '@/components/ui/form'
import { ContactInput, ContactSchema } from "@/lib/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { submitContactForm } from "../action";



/* eslint-disable react/no-unescaped-entities */
export default function ContactPage() {
    return (
        <>
            <section className="w-full pt-40 lg:pt-48 px-4 md:px-12 h-full mx-auto relative">
                <div className="flex items-center justify-center flex-col max-w-3xl mx-auto text-center">
                    <h1 className="font-semibold text-3xl md:text-4xl lg:text-5xl mb-4">
                        Contact Us
                    </h1>
                    <h2 className="text-lg md:text-xl lg:text-2xl mb-4">
                        We're Here to Help!
                    </h2>
                    <p className="text-base md:text-lg lg:text-xl mb-4">
                        At EAZETRADES, your satisfaction is our top priority. Whether you have a question, need assistance with an order, or want to provide feedback, we're here to listen and help.
                    </p>
                    <p className="text-base md:text-lg lg:text-xl mb-16 md:mb-20">
                        Reach out to us through any of the following channels:
                    </p>
                </div>
            </section>

            <div className="min-h-screen bg-[#EEEAFF] relative">
                <div className="container mx-auto px-4 py-8">
                    <ContactForm />
                </div>
            </div>

            <div className="max-w-7xl mx-auto">
                <MapImage />
            </div>
        </>
    )
}




function ContactForm() {
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState<string | null>(null);

    // Assuming you have a ContactSchema defined for form validation
    const form = useForm<ContactInput>({
        resolver: zodResolver(ContactSchema),
        defaultValues: {
            fullName: '',
            userEmail: '',
            phoneNumber: '',
            subject: '',
            message: '',
        },
    });

    // Updated error handler name for clarity
    const handleContactFormError = (message: string, details?: any) => {
        console.error('Contact Form Error Details:', details); // Debug log
        setError(message);
        toast.error(message);
    };

    // Handle form submission
    async function onSubmit(values: ContactInput) {
        setLoading(true);
        setError(null);

        try {
            const result = await submitContactForm(values);

            if (!result) {
                handleContactFormError('No response from server');
                return;
            }

            if (String(result.status) === "200") {
                console.log('Form Submission Success:', {
                    status: result.status,
                    data: result,
                    message: result.message
                }); // Debug log

                setSuccess(true); // Mark the submission as successful
                form.reset(); // Reset the form fields

                // Display the message from the result in the toast notification
                toast.success(result.result.message || "Form submitted successfully");

            } else {
                console.error('Form Submission Failed:', {
                    status: result.status,
                    message: result.message,
                    validation: result.validation,
                    result: result.result
                }); // Debug log

                handleContactFormError(
                    result.message || "Form submission failed",
                    { result }
                );
            }
        } catch (error) {
            console.error('Unexpected Error:', error); // Debug log
            handleContactFormError("An unexpected error occurred", error); // Handle unexpected errors
        } finally {
            setLoading(false); // Stop the loading spinner
            console.log('Form Submission Completed'); // Debug log for completion
        }
    }



    return (
        <div className="flex justify-center items-start">
            <div className="flex flex-col-reverse md:flex-row w-full px-4 md:px-[103px] py-8 md:py-[120px] max-w-7xl">

                {/* Contact Form */}
                <div className="w-full md:w-5/12 bg-white p-6 md:p-8 border rounded-[15px] shadow-md mt-8 md:mt-0">
                    <h2 className="text-2xl font-semibold mb-6">Contact form</h2>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                            <FormField
                                control={form.control}
                                name="fullName"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Full Name</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Enter your full name" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="userEmail"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Email</FormLabel>
                                        <FormControl>
                                            <Input type="email" placeholder="Enter your email" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="phoneNumber"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Phone Number</FormLabel>
                                        <FormControl>
                                            <Input type="tel" placeholder="Enter your phone number" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="subject"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Subject</FormLabel>
                                        <FormControl>
                                            <Input type="text" placeholder="Enter your subject" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="message"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Message</FormLabel>
                                        <FormControl>
                                            <Textarea placeholder="Enter your message" {...field} className="bg-white border-foreground" />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <Button
                                type="submit"
                                className="w-full"
                                disabled={loading}
                            >
                                {loading ? 'Submitting...' : 'Submit'}
                            </Button>
                        </form>
                    </Form>
                </div>

                {/* Company Info */}
                <div className="w-full md:w-7/12 md:pl-48 flex flex-col justify-center items-start">
                    <h1 className="text-3xl font-bold mb-8">EAZETRADES</h1>
                    <div className="mb-8">
                        <h2 className="text-xl font-semibold mb-2">Address</h2>
                        <p>Borem ipsum dolor sit amet,<br />consectetur adipiscing elit.</p>
                    </div>
                    <div className="mb-8">
                        <h2 className="text-xl font-semibold mb-2">Email us</h2>
                        <p>Borem ipsum dolor sit amet,<br />consectetur adipiscing elit.</p>
                    </div>
                    <div className="mb-8">
                        <h2 className="text-xl font-semibold mb-2">Call us</h2>
                        <p>Borem ipsum dolor sit amet,<br />Monday - Friday : 9:00 AM to 6:00 PM</p>
                    </div>
                    <div className="flex space-x-4">
                        <a href="#" className="text-gray-600 hover:text-gray-800">in</a>
                        <a href="#" className="text-gray-600 hover:text-gray-800">f</a>
                        <a href="#" className="text-gray-600 hover:text-gray-800">t</a>
                    </div>
                </div>
            </div>
        </div>
    )
}


function MapImage() {
    return (
        <div className="relative w-full h-0 pb-[56.25%] overflow-hidden"> {/* 16:9 Aspect Ratio */}
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345093684!2d144.95373631531713!3d-37.81627997975182!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d43c3a45d11%3A0x5045675218ce6e0!2sFederation%20Square!5e0!3m2!1sen!2sus!4v1614262545649!5m2!1sen!2sus"
                className="absolute top-0 left-0 w-full h-full border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            />
        </div>
    );
}



