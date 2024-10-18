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
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue
} from '@/components/ui/select'
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
// import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Eye, EyeOff } from "lucide-react";
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import Link from 'next/link';

export default function RegistrationForm() {
    const [loading, setLoading] = useState(false)
    const [success, setSuccess] = useState(false)

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

    async function onSubmit(values: RegistrationInput) {
        setLoading(true)
        try {
            const result = await registerUser(values)
            if (result.status === 200) {
                setSuccess(true)
                form.reset()
            } else {
                // Handle validation/server errors
                const errors = result.errors
                Object.keys(errors).forEach((key) => {
                    form.setError(key as keyof RegistrationInput, {
                        message: errors[key][0]
                    })
                })
            }
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center px-4 overflow-y-auto relative">
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
                                            <Input {...field} />
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
                                            <Input type="email" {...field} />
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
                                        <FormControl>
                                            <Input type="password" {...field} />
                                        </FormControl>
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
                                        <FormControl>
                                            <Input type="password" {...field} />
                                        </FormControl>
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
                {success && (
                    <CardFooter>
                        <p className="text-green-600 text-center w-full">
                            Registration successful! Please check your email.
                        </p>
                    </CardFooter>
                )}
                <div className="flex items-center justify-center mb-4">
                    <p className=" text-lg font-semibold text-[#333333]">Already have an account? <span className="text-[#5F3AFB]"><Link href="/auth/signin">Sign in</Link></span></p>
                </div>

            </Card>

        </div>



    )
}

