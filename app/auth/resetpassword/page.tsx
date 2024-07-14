"use client"

import bg from "../../../public/images/bgPhone.png"
import Image from "next/image";
import {
    Card,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button";
import Link from "next/link";
import logo from "../../../public/images/eazetrades-logo-3 3.png"
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";


export default function ResetPassword() {
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
                    <CardTitle className="flex items-center gap-2 justify-center mb-10">
                        <Image src={logo} alt="logo" height={35} width={29.17} />
                        <span className="text-[#4F4F4F] font-semibold text-xl">EAZETRADES</span>
                    </CardTitle>
                </CardHeader>
                <div className="p-6">
                    <div>
                        <h1 className="font-semibold text-lg lg:text-2xl">Reset Password</h1>
                        <p className="text-[#333333] font-normal text-base">Choose a new password for your account</p>
                    </div>
                    <div className="py-8">
                        <form>
                            <div className="space-y-4">
                                <div>
                                    <Label htmlFor="email" className="block text-sm font-medium text-gray-700">Password</Label>
                                    <Input type="password" id="password" className="mt-1 block w-full px-3 py-2  border border-[#333333] rounded-md text-sm placeholder-gray-400
                    focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 bg-[#F3F5F8]" placeholder="Password" />
                                </div>
                                <div>
                                    <Label htmlFor="email" className="block text-sm font-medium text-gray-700">Confirm Password</Label>
                                    <Input type="password" id="password" className="mt-1 block w-full px-3 py-2  border border-[#333333] rounded-md text-sm placeholder-gray-400
                    focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 bg-[#F3F5F8]" placeholder="Password" />
                                </div>
                            </div>
                            <CardFooter className="flex flex-col mt-16 gap-4 p-0">
                                <Button type="submit" className="w-full px-4 py-2 bg-[#5F3AFB] text-white font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-[#5F3AFB] focus:ring-offset-2 focus:ring-offset-[#5F3AFB] rounded-[30px]">
                                    Reset Password
                                </Button>
                                <Button asChild variant="outline" className="w-full px-4 py-2  text-[#5F3AFB] font-semibold shadow-md rounded-[30px] border-[2px] border-[#5F3AFB]">
                                    <Link href="/auth/signin">Back to sign in</Link>
                                </Button>

                            </CardFooter>
                        </form>
                    </div>
                </div>
            </Card>
        </div>
    )
}