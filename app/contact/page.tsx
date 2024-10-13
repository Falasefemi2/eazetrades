"use client";

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import mapimage from "../../public/images/map.png"
import { Textarea } from "@/components/ui/textarea"
import Image from "next/image"
import mobilemap from "../../public/images/mobilemap.png"
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { submitContact } from "../action";


interface ContactFormData {
    fullName: string;
    userEmail: string;
    phoneNumber: string;
    subject: string;
    message: string;
}




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
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitError, setSubmitError] = useState<string | null>(null)
    const { register, handleSubmit, formState: { errors } } = useForm<ContactFormData>()

    const onSubmit: SubmitHandler<ContactFormData> = async (data) => {
        setIsSubmitting(true)
        setSubmitError(null)

        try {
            const formData = new FormData()
            Object.entries(data).forEach(([key, value]) => {
                formData.append(key, value)
            })

            await submitContact(formData)
            // Handle success (e.g., show a success message, reset form)
        } catch (error) {
            setSubmitError('Failed to submit the form. Please try again.')
        } finally {
            setIsSubmitting(false)
        }
    }



    return (
        <div className="flex justify-center items-start">
            <div className="flex flex-col-reverse md:flex-row w-full px-4 md:px-[103px] py-8 md:py-[120px] max-w-7xl">

                {/* Contact Form */}
                <div className="w-full md:w-5/12 bg-white p-6 md:p-8 border rounded-[15px] shadow-md mt-8 md:mt-0">
                    <h2 className="text-2xl font-semibold mb-6">Contact form</h2>
                    {/* <form>
                        <div className="mb-4">
                            <Label className="block text-sm font-medium mb-1">Name</Label>
                            <Input type="text" className="w-full p-2 border rounded shadow-none" placeholder="Placeholder" />
                        </div>
                        <div className="mb-4">
                            <Label className="block text-sm font-medium mb-1">Email address</Label>
                            <Input type="email" className="w-full p-2 border rounded shadow-none" placeholder="Placeholder" />
                        </div>
                        <div className="mb-4">
                            <Label className="block text-sm font-medium mb-1">Phone number</Label>
                            <Input type="tel" className="w-full p-2 border rounded shadow-none" placeholder="Placeholder" />
                        </div>
                        <div className="mb-4">
                            <Label className="block text-sm font-medium mb-1">Subject</Label>
                            <Input type="text" className="w-full p-2 border rounded shadow-none" placeholder="Placeholder" />
                        </div>
                        <div className="mb-6">
                            <Label className="block text-sm font-medium mb-1">Message</Label>
                            <Textarea className="bg-white border-input-[#333333]" placeholder="Message"></Textarea>
                        </div>
                        <Button type="submit" className="bg-indigo-600 text-white px-6 py-2 rounded-full hover:bg-indigo-700">
                            Send Message
                        </Button>
                    </form> */}
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="mb-4">
                            <Label className="block text-sm font-medium mb-1" htmlFor="fullName">Name</Label>
                            <Input
                                id="fullName"
                                type="text"
                                className="w-full p-2 border rounded shadow-none"
                                placeholder="Your full name"
                                {...register('fullName', { required: 'Name is required' })}
                            />
                            {errors.fullName && <p className="text-red-500 text-xs mt-1">{String(errors.fullName.message)}</p>}
                        </div>
                        <div className="mb-4">
                            <Label className="block text-sm font-medium mb-1" htmlFor="userEmail">Email address</Label>
                            <Input
                                id="userEmail"
                                type="email"
                                className="w-full p-2 border rounded shadow-none"
                                placeholder="Your email address"
                                {...register('userEmail', { required: 'Email is required', pattern: { value: /^\S+@\S+$/i, message: 'Invalid email address' } })}
                            />
                            {errors.userEmail?.message && <p className="text-red-500 text-xs mt-1">{String(errors.userEmail.message)}</p>}
                        </div>
                        <div className="mb-4">
                            <Label className="block text-sm font-medium mb-1" htmlFor="phoneNumber">Phone number</Label>
                            <Input
                                id="phoneNumber"
                                type="tel"
                                className="w-full p-2 border rounded shadow-none"
                                placeholder="Your phone number"
                                {...register('phoneNumber', { required: 'Phone number is required' })}
                            />
                            {errors.phoneNumber && <p className="text-red-500 text-xs mt-1">{String(errors.phoneNumber.message)}</p>}
                        </div>
                        <div className="mb-4">
                            <Label className="block text-sm font-medium mb-1" htmlFor="subject">Subject</Label>
                            <Input
                                id="subject"
                                type="text"
                                className="w-full p-2 border rounded shadow-none"
                                placeholder="Subject of your message"
                                {...register('subject', { required: 'Subject is required' })}
                            />
                            {errors.subject && <p className="text-red-500 text-xs mt-1">{String(errors.subject.message)}</p>}
                        </div>
                        <div className="mb-6">
                            <Label className="block text-sm font-medium mb-1" htmlFor="message">Message</Label>
                            <Textarea
                                id="message"
                                className="bg-white border-input-[#333333]"
                                placeholder="Your message"
                                {...register('message', { required: 'Message is required' })}
                            />
                            {errors.message && <p className="text-red-500 text-xs mt-1">{String(errors.message.message)}</p>}
                        </div>
                        {submitError && <p className="text-red-500 text-sm mb-4">{submitError}</p>}
                        <Button
                            type="submit"
                            className="bg-indigo-600 text-white px-6 py-2 rounded-full hover:bg-indigo-700"
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? 'Sending...' : 'Send Message'}
                        </Button>
                    </form>

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



