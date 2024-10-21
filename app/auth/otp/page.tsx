"use client"

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
import {
    InputOTP,
    InputOTPGroup,
    InputOTPSeparator,
    InputOTPSlot,
} from "@/components/ui/input-otp"
import { REGEXP_ONLY_DIGITS_AND_CHARS } from "input-otp"
import logo from "../../../public/images/eazetrades-logo-3 3.png"
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useState } from "react";
import { validateOtp } from "@/app/action";
import { toast } from 'sonner';





function OtpPage() {

    const [otp, setOtp] = useState<string>('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const userEmail = 'femifalase228@gmail.com'; // Replace with actual user email

    // Handle OTP input change
    const handleOtpChange = (newOtp: string) => {
        setOtp(newOtp);
    };

    // Handle OTP submission
    const handleSubmit = async () => {
        setLoading(true);
        setError(null);

        try {
            const response = await validateOtp(userEmail, otp); // Call validateOtp

            console.log({ response });


            if (response.status === '200') {
                toast.success(response.message || 'OTP validated successfully!');
                // Redirect or handle successful validation here
            } else {
                setError(response.message || 'OTP validation failed');
                toast.error(response.message || 'OTP validation failed');
            }
        } catch (error) {
            setError('An unexpected error occurred. Please try again.');
            toast.error('An unexpected error occurred.');
        } finally {
            setLoading(false);
        }
    };

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
                <CardContent>
                    <h1 className="font-semibold text-2xl lg:text-3xl mb-3 text-[#333333]">Confirm it’s you</h1>
                    <p className="text-center font-normal text-base text-[#333333] mb-16">
                        Enter the code sent to your email {userEmail}.
                    </p>
                    <Separator />
                </CardContent>
                <CardFooter className="flex flex-col w-full">
                    <div className="flex items-center justify-between w-full">
                        <p className="text-[#333333] font-normal text-base">{userEmail}</p>
                        <Link href="/" className="text-[#5F3AFB] font-normal text-base">Change</Link>
                    </div>
                    <div className="w-full mt-8">
                        <InputOTP maxLength={6} value={otp} onChange={handleOtpChange}>
                            <InputOTPGroup>
                                <InputOTPSlot index={0} />
                                <InputOTPSlot index={1} />
                                <InputOTPSlot index={2} />
                                <InputOTPSlot index={3} />
                                <InputOTPSlot index={4} />
                                <InputOTPSlot index={5} />
                            </InputOTPGroup>
                        </InputOTP>
                    </div>
                    {error && <p className="text-red-500 mt-4">{error}</p>}
                    <Button
                        className="w-full mt-6"
                        onClick={handleSubmit}
                        disabled={loading}
                    >
                        {loading ? 'Confirming...' : 'Confirm'}
                    </Button>
                </CardFooter>
            </Card>
        </div>

    )
}

export default OtpPage;