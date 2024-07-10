"use client";

import { useState } from "react";
import bg from "../../../public/images/bgPhone.png"
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import bgd from "../../../public/images/bg-dek.png"
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Eye, EyeOff } from "lucide-react";
import Link from "next/link";

function CreateAccount() {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

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
                <div className="px-6 py-8">
                    <h2 className="text-2xl font-bold text-center text-[#333333] mb-6">Create new account</h2>
                    <form>
                        <div className="space-y-4">
                            <div>
                                <Label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</Label>
                                <Input type="text" id="name" className="mt-1 block w-full px-3 py-2  border border-[#333333] rounded-md text-sm placeholder-gray-400
                    focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 bg-[#F3F5F8]" placeholder="Placeholder" />
                            </div>
                            <div>
                                <Label htmlFor="email" className="block text-sm font-medium text-gray-700">Email address</Label>
                                <Input type="email" id="email" className="mt-1 block w-full px-3 py-2  border border-[#333333] rounded-md text-sm  placeholder-gray-400
                    focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 bg-[#F3F5F8]" placeholder="Placeholder" />
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
                            <div>
                                <Label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">Confirm password</Label>
                                <div className="mt-1 relative">
                                    <Input type={showConfirmPassword ? "text" : "password"} id="confirmPassword" className="block w-full px-3 py-2  border border-[#333333] rounded-md text-sm  placeholder-gray-400
                      focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 bg-[#F3F5F8]" placeholder="Password" />
                                    <button type="button" className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5" onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
                                        {showPassword ? <EyeOff /> : <Eye />}
                                    </button>
                                </div>
                            </div>
                            <div>
                                <span className="text-sm text-blue-600 hover:text-blue-500 cursor-pointer">Forgot password?</span>
                            </div>
                            <div>
                                <p className="block text-sm font-medium text-gray-700">Signing As</p>
                                <div className="mt-2 space-x-4">
                                    <Label className="inline-flex items-center">
                                        <Input type="radio" className="form-radio" name="accountType" value="buyer" />
                                        <span className="ml-2">Buyer</span>
                                    </Label>
                                    <Label className="inline-flex items-center">
                                        <Input type="radio" className="form-radio" name="accountType" value="supplier" />
                                        <span className="ml-2">Supplier</span>
                                    </Label>
                                </div>
                            </div>
                        </div>
                        <div className="mt-6">
                            <Button type="submit" className="w-full px-4 py-2 bg-[#5F3AFB] text-white font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-[#5F3AFB] focus:ring-offset-2 focus:ring-offset-[#5F3AFB] rounded-[30px]">
                                Sign up
                            </Button>
                        </div>
                    </form>
                </div>
                <div className="flex items-center justify-center mb-4">
                    <p className=" text-lg font-semibold text-[#333333]">Already have an account? <span className="text-[#5F3AFB]"><Link href="/auth/signin">Sign in</Link></span></p>
                </div>
            </Card>
        </div>


    )
}

export default CreateAccount;

