"use client"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import bg from "../../../public/images/bgPhone.png"
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import Link from "next/link";



const SignInPage = () => {
    const [showPassword, setShowPassword] = useState(false);
    return (
        <div className="min-h-screen flex items-center justify-center px-4 overflow-y-auto">
            <div className="fixed inset-0">
                <Image
                    src={bg}
                    alt="bg"
                    layout="fill"
                    objectFit="cover"
                    quality={100}
                />
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>
            </div>
            <Card className="relative z-10 max-w-md w-full bg-[#F5F6FA] rounded-lg shadow-lg overflow-hidden">
                <CardHeader className="flex items-center justify-center">
                    <CardTitle className="text-[#333333] text-3xl lg:text-4xl font-bold mb-3">Sign in</CardTitle>
                    <CardDescription>Welcome back! Please enter your details</CardDescription>
                </CardHeader>
                <div className="px-6 py-8">
                    <form>
                        <div className="space-y-4">
                            <div className="">
                                <Label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</Label>
                                <Input id="name" placeholder="Placeholder" className="mt-1 block w-full px-3 py-2  border border-[#333333] rounded-md text-sm placeholder-gray-400
                focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 bg-[#F3F5F8]" />
                            </div>
                            <div>
                                <Label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</Label>
                                <div className="mt-1 relative">
                                    <Input type={showPassword ? "text" : "password"} id="password" className="block w-full px-3 py-2  border border-[#333333] rounded-md text-sm  placeholder-gray-400
                  focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 bg-[#F3F5F8]" placeholder="Password" />
                                    <button type="button" className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5" onClick={() => setShowPassword(!showPassword)}>
                                        {showPassword ? <EyeOff /> : <Eye />}
                                    </button>
                                </div>
                                <div className="mt-2 text-right">
                                    <Link href="/auth/forgetpassword" className="text-[#5F3AFB] font-medium text-sm">Forget Password</Link>
                                </div>
                            </div>
                        </div>
                        <div className="mt-12">
                            <Button type="submit" className="w-full px-4 py-2 bg-[#5F3AFB] text-white font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-[#5F3AFB] focus:ring-offset-2 focus:ring-offset-[#5F3AFB] rounded-[30px]">
                                Sign in
                            </Button>
                        </div>
                    </form>
                </div>
                <div className="flex items-center justify-center mb-4">
                    <p className=" text-lg font-semibold text-[#333333]">Already have an account? <span className="text-[#5F3AFB]"><Link href="/auth/createaccount">Sign up</Link></span></p>
                </div>
            </Card>
        </div>
    );
}

export default SignInPage;

