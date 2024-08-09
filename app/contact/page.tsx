import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import mapimage from "../../public/images/map.png"
import { Textarea } from "@/components/ui/textarea"
import Image from "next/image"
import mobilemap from "../../public/images/mobilemap.png"

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

            <div className="max-w-7xl mx-auto relative z-10 h-96">
                <MapImage />
            </div>
        </>
    )
}




function ContactForm() {
    return (
        <div className="flex justify-center items-start">
            <div className="flex flex-col-reverse md:flex-row w-full px-4 md:px-[103px] py-8 md:py-[120px] max-w-7xl">

                {/* Contact Form */}
                <div className="w-full md:w-5/12 bg-white p-6 md:p-8 border rounded-[15px] shadow-md mt-8 md:mt-0">
                    <h2 className="text-2xl font-semibold mb-6">Contact form</h2>
                    <form>
                        <div className="mb-4">
                            <Label className="block text-sm font-medium mb-1">Name</Label>
                            <Input type="text" className="w-full p-2 border rounded" placeholder="Placeholder" />
                        </div>
                        <div className="mb-4">
                            <Label className="block text-sm font-medium mb-1">Email address</Label>
                            <Input type="email" className="w-full p-2 border rounded" placeholder="Placeholder" />
                        </div>
                        <div className="mb-4">
                            <Label className="block text-sm font-medium mb-1">Phone number</Label>
                            <Input type="tel" className="w-full p-2 border rounded" placeholder="Placeholder" />
                        </div>
                        <div className="mb-4">
                            <Label className="block text-sm font-medium mb-1">Subject</Label>
                            <Input type="text" className="w-full p-2 border rounded" placeholder="Placeholder" />
                        </div>
                        <div className="mb-6">
                            <Label className="block text-sm font-medium mb-1">Message</Label>
                            <Textarea className="bg-white" placeholder="Message"></Textarea>
                        </div>
                        <Button type="submit" className="bg-indigo-600 text-white px-6 py-2 rounded-full hover:bg-indigo-700">
                            Send Message
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
        <div className="relative w-full h-full">
            {/* Desktop Map Image */}
            <div className="hidden lg:block absolute inset-0 left-0 right-0 -top-16">
                <Image
                    src={mapimage}
                    alt="map"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                />
            </div>

            {/* Mobile Map Image */}
            <div className="block lg:hidden w-full h-full absolute inset-0">
                <Image
                    src={mobilemap}
                    alt="map"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                />
            </div>
        </div>
    )
}
