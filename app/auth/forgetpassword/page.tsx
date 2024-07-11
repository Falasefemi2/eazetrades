import bg from "../../../public/images/bgPhone.png"
import Image from "next/image";
import {
    Card,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import logo from "../../../public/images/eazetrades-logo-3 3.png"
import { Button } from "@/components/ui/button";
import Link from "next/link";

const ForgetPasswordPage = () => {
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
                    <div className="flex items-center flex-col">
                        <h2 className="text-[#333333] font-semibold text-2xl lg:text-4xl mb-2">Forgot Password</h2>
                        <p className="text-[#333333] font-normal text-base text-center">
                            Enter the email you used to create your account so we can send you instructions on how to reset your password.
                        </p>
                    </div>
                </CardHeader>
                <div className="px-6 py-8">
                    <h2 className="text-2xl font-bold text-center text-[#333333] mb-6">Create new account</h2>
                    <form>
                        <div className="space-y-4">
                            <div>
                                <Label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</Label>
                                <Input type="text" id="name" className="mt-1 block w-full px-3 py-2  border border-[#333333] rounded-md text-sm placeholder-gray-400
                    focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 bg-[#F3F5F8]" placeholder="Email" />
                            </div>
                        </div>
                        <CardFooter className="flex flex-col mt-16 gap-4">
                            <Button type="submit" className="w-full px-4 py-2 bg-[#5F3AFB] text-white font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-[#5F3AFB] focus:ring-offset-2 focus:ring-offset-[#5F3AFB] rounded-[30px]">
                                Send
                            </Button>
                            <Button asChild variant="outline" className="w-full px-4 py-2  text-[#5F3AFB] font-semibold shadow-md rounded-[30px] border-[2px] border-[#5F3AFB]">
                                <Link href="/auth/signin">Back to sign in</Link>
                            </Button>

                        </CardFooter>
                    </form>
                </div>

            </Card>
        </div>
    );
}

export default ForgetPasswordPage;