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

export default function RegistrationForm() {
    const [loading, setLoading] = useState(false)
    const [success, setSuccess] = useState(false)
    const [error, setError] = useState<string | null>(null);

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);


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

    // const handleRegistrationError = (message: string) => {
    //     setError(message);
    //     toast.error(message)
    // };

    // async function onSubmit(values: RegistrationInput) {
    //     setLoading(true);
    //     setError(null);

    //     try {
    //         const result = await registerUser(values);
    //         // console.log({ result });

    //         if (result.status === 200 && result.data?.status === "200") {
    //             console.log(result.data.message);

    //             setSuccess(true);
    //             form.reset();
    //             toast.success("Registration completed successfully");
    //         } else {
    //             handleRegistrationError(result.message || "Registration failed");
    //         }
    //     } catch (error) {
    //         handleRegistrationError("An unexpected error occurred");
    //     } finally {
    //         setLoading(false);
    //     }
    // }
    const handleRegistrationError = (message: string, details?: any) => {
        console.error('Registration Error Details:', details); // Debug log
        setError(message);
        toast.error(message);
    };

    async function onSubmit(values: RegistrationInput) {
        console.log('Form Submission Started with values:', values); // Debug log
        setLoading(true);
        setError(null);

        try {
            console.log('Calling registerUser...'); // Debug log
            const result = await registerUser(values);
            console.log('Raw API Response:', result); // Debug log

            if (!result) {
                console.error('No result returned from registerUser'); // Debug log
                handleRegistrationError('No response from server');
                return;
            }

            if (result.status === 200 && result.data?.status === "200") {
                console.log('Registration Success:', {
                    status: result.status,
                    data: result.data,
                    message: result.data.message
                }); // Debug log

                setSuccess(true);
                form.reset();
                toast.success(result.data.message || "Registration completed successfully");
            } else {
                console.error('Registration Failed:', {
                    status: result.status,
                    message: result.message,
                    data: result.data,
                    errors: result.errors
                }); // Debug log

                handleRegistrationError(
                    result.message || "Registration failed",
                    { result }
                );
            }
        } catch (error) {
            console.error('Unexpected Error:', error); // Debug log
            handleRegistrationError(
                "An unexpected error occurred",
                error
            );
        } finally {
            setLoading(false);
            console.log('Form Submission Completed'); // Debug log
        }
    }


    return (
        <div className="min-h-screen flex items-center justify-center px-4 overflow-y-auto relative">
            <div className="fixed inset-0">
                <Image
                    src={bg}
                    alt="background"
                    layout="fill"
                    objectFit="cover"
                    quality={100}
                    priority
                />
                <div className="absolute inset-0 bg-black bg-opacity-50" />
            </div>

            <Card className="w-[400px] mx-auto z-10 bg-white">
                <CardHeader className="px-6 py-8">
                    <CardTitle>Create new Account</CardTitle>
                </CardHeader>

                <CardContent>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                            <FormField
                                control={form.control}
                                name="fullName"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Full Name</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Enter your full name" {...field} />
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
                                            <Input type="email" placeholder="Enter your email" {...field} />
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
                                                    type={showPassword ? "text" : "password"}
                                                    placeholder="Enter your password"
                                                    {...field}
                                                />
                                            </FormControl>
                                            <button
                                                type="button"
                                                onClick={() => setShowPassword(!showPassword)}
                                                className="absolute right-2 top-1/2 transform -translate-y-1/2"
                                            >
                                                {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
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
                                                    type={showConfirmPassword ? "text" : "password"}
                                                    placeholder="Confirm your password"
                                                    {...field}
                                                />
                                            </FormControl>
                                            <button
                                                type="button"
                                                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                                className="absolute right-2 top-1/2 transform -translate-y-1/2"
                                            >
                                                {showConfirmPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
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
                                                className="flex gap-4"
                                            >
                                                <div className="flex items-center space-x-2">
                                                    <RadioGroupItem value="buyer" id="buyer" />
                                                    <Label htmlFor="buyer">Buyer</Label>
                                                </div>
                                                <div className="flex items-center space-x-2">
                                                    <RadioGroupItem value="seller" id="seller" />
                                                    <Label htmlFor="seller">Seller</Label>
                                                </div>
                                            </RadioGroup>
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <Button
                                type="submit"
                                className="w-full"
                                disabled={loading}
                            >
                                {loading ? 'Registering...' : 'Register'}
                            </Button>
                        </form>
                    </Form>
                </CardContent>

                {/* {success && (
                    <CardFooter>
                        <p className="text-green-600 text-center w-full">
                            Registration successful! Please check your email.
                        </p>
                    </CardFooter>
                )} */}

                <div className="flex items-center justify-center mb-4">
                    <p className="text-lg font-semibold text-[#333333]">
                        Already have an account?{' '}
                        <Link href="/auth/signin" className="text-[#5F3AFB]">
                            Sign in
                        </Link>
                    </p>
                </div>
            </Card>
        </div>


    )
}

