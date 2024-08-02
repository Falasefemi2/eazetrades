import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import mapimage from "../../public/images/map.png"
import { Textarea } from "@/components/ui/textarea"
import Image from "next/image"

/* eslint-disable react/no-unescaped-entities */
export default function ContactPage() {
    return (
        <>
            <section className="w-full pt-[80px] md:pt-[220px] px-0 md:px-[50px] h-full mx-auto relative">
                <div className="flex items-center justify-center flex-col max-w-3xl mx-auto text-center px-4">
                    <h1 className="font-semibold text-4xl mb-4">Contact Us</h1>
                    <h2 className="text-xl mb-4">We're Here to Help!</h2>
                    <p className="text-lg">
                        At EAZETRADES, your satisfaction is our top priority. Whether you have a question, need
                        assistance with an order, or want to provide feedback, we're here to listen and help.
                    </p>
                    <p className="text-lg mb-20">
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
            <div className="flex w-full px-[103px] py-[120px] max-w-7xl">
                {/* Contact Form */}
                <div className="w-5/12 bg-white p-8 border rounded-[15px] shadow-md">
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
                            <Input type="tel" className="w-full p-2 border rounded" placeholder="Password" />
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
                <div className="w-7/12 pl-44">
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
        <div className="absolute left-0 right-0 -top-16">
            <Image src={mapimage} alt="map" />
        </div>

    )
}