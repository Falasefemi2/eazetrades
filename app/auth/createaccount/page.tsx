"use client";


import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import bg from "../../../public/images/bgPhone.png"

import {
    Card,
    CardHeader,
    CardTitle,
    CardContent,
    CardFooter
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage
} from '@/components/ui/form'
import { registerUser } from '@/app/action'
import { RegistrationInput, RegistrationSchema } from '@/lib/schema'
import Image from "next/image";
import { Label } from "@/components/ui/label";
import { Eye, EyeOff } from "lucide-react";
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import Link from 'next/link';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';

export default function RegistrationForm() {
    const [loading, setLoading] = useState(false)
    const [success, setSuccess] = useState(false)
    const [error, setError] = useState<string | null>(null);

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);


    const router = useRouter();

    const form = useForm<RegistrationInput>({
        resolver: zodResolver(RegistrationSchema),
        defaultValues: {
            fullName: '',
            userEmail: '',
            password: '',
            rePassword: '',
            userSelection: 'seller'
        }
    })

    const handleRegistrationError = (message: string, details?: any) => {
        console.error('Registration Error Details:', details); // Debug log
        setError(message);
        toast.error(message);
    };


    async function onSubmit(values: RegistrationInput) {
        setLoading(true);
        setError(null);

        try {
            const result = await registerUser(values);

            if (!result) {
                handleRegistrationError('No response from server');
                return;
            }


            if (result.status === "200") {
                console.log('Registration Success:', {
                    status: result.status,
                    data: result,
                    message: result.message
                }); // Debug log

                setSuccess(true); // Mark the registration as successful
                form.reset(); // Reset the form
                toast.success(result.result.message || "Registration completed successfully"); // Show success toast
                router.push('/auth/otp');
            } else {
                // Handle failed registration: API returned an error
                console.error('Registration Failed:', {
                    status: result.status,
                    message: result.message,
                    validation: result.validation,
                    result: result.result
                }); // Debug log

                handleRegistrationError(
                    result.message || "Registration failed", // Show error message
                    { result }
                );
            }
        } catch (error) {
            console.error('Unexpected Error:', error); // Debug log
            handleRegistrationError(
                "An unexpected error occurred", // Handle unexpected errors
                error
            );
        } finally {
            setLoading(false); // Stop loading spinner
            console.log('Form Submission Completed'); // Debug log for completion
        }
    }




    return (
        <div className="min-h-screen flex items-center justify-center px-4">
            <div className="fixed inset-0">
                <Image
                    src={bg}
                    alt="Background"
                    layout="fill"
                    objectFit="cover"
                    quality={100}
                    priority
                    className="opacity-90"
                />
                <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
            </div>

            <Card className="relative z-10 w-full max-w-[602px] rounded-lg bg-white/95 shadow-xl">
                <CardHeader className="space-y-1 text-center pb-6">
                    <CardTitle className="text-2xl font-bold tracking-tight">
                        Create new account
                    </CardTitle>
                </CardHeader>

                <CardContent className="space-y-4">
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                            <FormField
                                control={form.control}
                                name="fullName"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Full Name</FormLabel>
                                        <FormControl>
                                            <Input
                                                className="w-full lg:w-[500px] py-2"
                                                placeholder="Enter your full name"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="userEmail"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Email</FormLabel>
                                        <FormControl>
                                            <Input
                                                className="w-full lg:w-[500px] py-2"
                                                type="email"
                                                placeholder="Enter your email"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="password"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Password</FormLabel>
                                        <div className="relative">
                                            <FormControl>
                                                <Input
                                                    className="w-full lg:w-[500px] py-2"
                                                    type={showPassword ? "text" : "password"}
                                                    placeholder="Enter your password"
                                                    {...field}
                                                />
                                            </FormControl>
                                            <button
                                                type="button"
                                                onClick={() => setShowPassword(!showPassword)}
                                                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                                            >
                                                {showPassword ? (
                                                    <EyeOff className="h-5 w-5" />
                                                ) : (
                                                    <Eye className="h-5 w-5" />
                                                )}
                                            </button>
                                        </div>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="rePassword"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Confirm Password</FormLabel>
                                        <div className="relative">
                                            <FormControl>
                                                <Input
                                                    className="w-full lg:w-[500px] py-2"
                                                    type={showConfirmPassword ? "text" : "password"}
                                                    placeholder="Confirm your password"
                                                    {...field}
                                                />
                                            </FormControl>
                                            <button
                                                type="button"
                                                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                                            >
                                                {showConfirmPassword ? (
                                                    <EyeOff className="h-5 w-5" />
                                                ) : (
                                                    <Eye className="h-5 w-5" />
                                                )}
                                            </button>
                                        </div>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="userSelection"
                                render={({ field }) => (
                                    <FormItem className="space-y-2">
                                        <FormLabel>Signing As</FormLabel>
                                        <FormControl>
                                            <RadioGroup
                                                onValueChange={field.onChange}
                                                value={field.value}
                                                className="flex justify-between w-full"
                                            >
                                                <div className="flex items-center space-x-2">
                                                    <RadioGroupItem value="buyer" id="buyer" />
                                                    <Label htmlFor="buyer">Buyer</Label>
                                                </div>
                                                <div className="flex items-center space-x-2">
                                                    <RadioGroupItem value="seller" id="seller" />
                                                    <Label htmlFor="seller">Supplier</Label>
                                                </div>
                                            </RadioGroup>
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <Button
                                type="submit"
                                className="w-full py-2 text-base font-semibold bg-primary hover:bg-primary/90 mt-4"
                                disabled={loading}
                            >
                                {loading ? 'Signing Up...' : 'Sign up'}
                            </Button>
                        </form>
                    </Form>

                    <div className="mt-6 text-center">
                        <p className="text-sm">
                            Already have an account?{' '}
                            <Link
                                href="/auth/signin"
                                className="font-semibold text-primary hover:underline"
                            >
                                Sign in
                            </Link>
                        </p>
                    </div>
                </CardContent>
            </Card>
        </div>



    )
}

