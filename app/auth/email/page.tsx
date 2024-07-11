import bg from "../../../public/images/bgPhone.png"
import Image from "next/image";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import logo from "../../../public/images/eazetrades-logo-3 3.png"
import { Button } from "@/components/ui/button";


function Email() {
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
                <CardContent className="">
                    <h1 className=" font-semibold text-2xl lg:text-3xl mb-3 text-[#333333]">Check your email</h1>
                    <p className="text-center font-normal text-base text-[#333333] mb-16">We have sent an email with password reset information to n****e@e***e.com.</p>
                </CardContent>
                <CardFooter className="w-full">
                    <div className="w-full">
                        <h2 className="text-center mb-4">Didn’t receive the email? Check spam or promotion folder or</h2>
                        <div className="w-full flex flex-col space-y-4">
                            <Button className="w-full">Resend email</Button>
                            <Button className="w-full border-[#5F3AFB] text-[#5F3AFB]" variant="outline">Back to sign in</Button>
                        </div>
                    </div>
                </CardFooter>
            </Card>
        </div>
    )
}

export default Email;