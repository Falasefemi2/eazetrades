"use client"

import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { ArrowBigRight, FacebookIcon, Linkedin, Twitter } from "lucide-react"
import Image from "next/image"
import logo from "../../public/images/eazetrades-logo-3 3.png"
import Link from "next/link"
import { FormEvent, useState } from "react"
import { subscribeUser } from "../action"
import { toast } from "sonner"


const Footer = () => {
    const [email, setEmail] = useState("");
    const [isLoading, setIsLoading] = useState(false);


    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setIsLoading(true);


        try {
            const response = await subscribeUser(email);
            if (response.validation) {
                toast.success(response.result.message);
                setEmail(""); // clear the input field
            } else {
                // Handle case where validation is false
                toast.error(response.message || "Failed to subscribe. Please try again.");
            }
        } catch (error) {
            toast.error("Failed to subscribe. Please try again.");
        } finally {
            setIsLoading(false);
        }
    };


    return (
        <footer className=" mt-[46px] lg:mt-[141px] w-full bg-[#E8E2FF] py-[136px]">
            <div className="container mx-auto grid grid-cols-2 lg:grid-cols-5 gap-20 lg:gap-4">
                <div>
                    <h3 className=" text-base leading-7 text-[#333333] font-semibold mb-2">Product</h3>
                    <ul className="text-[#333333] text-base  space-y-4">
                        <li>Employee Database</li>
                        <li>Payroll</li>
                        <li>Attendance</li>
                        <li>Time Tracking</li>
                        <li>Shift Planner</li>
                        <li>Recruiting</li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-base leading-7 text-[#333333] font-semibold mb-2">Service</h3>
                    <ul className="text-[#333333] text-base  space-y-4">
                        <li>Employee Database</li>
                        <li>Payroll</li>
                        <li>Attendance</li>
                        <li>Time Tracking</li>
                        <li>Shift Planner</li>
                        <li>Recruiting</li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-base leading-7 text-[#333333] font-semibold mb-2">Information</h3>
                    <ul className="text-[#333333] text-base  space-y-4">
                        <li>FAQ</li>
                        <li>Blog</li>
                        <li>Support</li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-base leading-7 text-[#333333] font-semibold mb-2">Company</h3>
                    <ul className="text-[#333333] text-base  space-y-4">
                        <li>About Us</li>
                        <li>Careers</li>
                        <li>Contact Us</li>
                        <li>Lift Media</li>
                    </ul>
                </div>
                <Card className="w-[350px] px-7 py-0 lg:px-[42px] lg:py-[32px]  lg:mt-0">
                    <CardHeader>
                        <CardTitle className="font-semibold text-base leading-7 text-[#333333]">Subscribe</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <form onSubmit={handleSubmit}>
                            <div className="relative">
                                <Input
                                    type="email"
                                    className="w-[248px] h-[50px] pl-8"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Enter your email"
                                    required
                                />
                                <button
                                    type="submit"
                                    className="absolute inset-y-0 right-0 flex items-center justify-center pl-3 bg-[#5F3AFB] rounded-l h-[50px] w-[50px] disabled:opacity-70"
                                    disabled={isLoading}
                                >
                                    {isLoading ? (
                                        <svg
                                            className="animate-spin h-5 w-5 text-white"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                        >
                                            <circle
                                                className="opacity-25"
                                                cx="12"
                                                cy="12"
                                                r="10"
                                                stroke="currentColor"
                                                strokeWidth="4"
                                            />
                                            <path
                                                className="opacity-75"
                                                fill="currentColor"
                                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                            />
                                        </svg>
                                    ) : (
                                        <ArrowBigRight className="text-white" />
                                    )}
                                </button>
                            </div>
                        </form>


                        <p className="mt-6 text-[#333333] text-xs leading-[20.4px]">Hello, we are Lift Media. Our goal is to translate the positive effects from revolutionizing how companies engage with their clients & their team.</p>
                    </CardContent>
                </Card>
            </div>
            <div className="container mx-auto mt-8 border-t  border-[#333333] pt-4 flex items-center flex-col lg:flex-row lg:justify-between">
                <Link href="/">
                    <Image src={logo} alt="logo" />
                </Link>
                <div className="flex items-center space-x-10">
                    <a href="#" className="text-[#333333 font-medium text-[14px]">
                        Terms
                    </a>
                    <a href="#" className="text-[#333333 font-medium text-[14px]">
                        Privacy
                    </a>
                    <a href="#" className="text-[#333333 font-medium text-[14px]">
                        Cookies
                    </a>
                </div>
                <div className="flex items-center space-x-6  rounded-full p-2">
                    <div className="border-[#333333] border-[1.5px] rounded-full flex items-center justify-center w-10 h-10">
                        <Linkedin className="w-[11.87px] h-[11.87px] text-[#333333]" />
                    </div>
                    <div className="border-[#333333] border-[1.5px] rounded-full flex items-center justify-center w-10 h-10">
                        <FacebookIcon className="w-[11.87px] h-[11.87px] text-[#333333]" />
                    </div>
                    <div className=" border-[#333333] border-[1.5px] rounded-full flex items-center justify-center w-10 h-10">
                        <Twitter className="w-[11.87px] h-[11.87px] text-[#333333]" />
                    </div>
                </div>

            </div>


        </footer>
    )
}

export default Footer