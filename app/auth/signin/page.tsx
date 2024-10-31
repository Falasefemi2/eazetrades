/* eslint-disable react/no-unescaped-entities */
"use client"
import {
    Card,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
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
import { Label } from "@/components/ui/label";
import Image from "next/image";
import bg from "../../../public/images/bgPhone.png"
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import Link from "next/link";
import { SubmitHandler, useForm } from "react-hook-form";
// import { submitLogin } from "@/app/action";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { SignInInput, SignInSchema } from "@/lib/schema";
import { SignInUser } from "@/app/action";

interface SignInFormData {
    userEmail: string;
    password: string;
}


const SignInPage = () => {
    const [loading, setLoading] = useState(false)
    const [success, setSuccess] = useState(false)
    const [error, setError] = useState<string | null>(null);

    const [showPassword, setShowPassword] = useState(false);



    // const router = useRouter();

    const form = useForm<SignInInput>({
        resolver: zodResolver(SignInSchema),
        defaultValues: {
            userEmail: '',
            password: '',
        }
    })

    const handleRegistrationError = (message: string, details?: any) => {
        console.error('Registration Error Details:', details); // Debug log
        setError(message);
        toast.error(message);
    };

    async function onSubmit(values: SignInInput) {
        setLoading(true);
        setError(null);

        try {
            const result = await SignInUser(values);

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
                toast.success(result.result.message || "Sign in successful"); // Show success toast
                // router.push('/auth/otp');
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
                    className="opacity-90"
                />
                <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
            </div>

            <Card className="relative z-10 w-full max-w-[400px] bg-white/95 shadow-xl">
                <CardHeader className="space-y-1 text-center pb-8">
                    <CardTitle className="text-3xl font-bold tracking-tight">Sign in</CardTitle>
                    <CardDescription className="text-base">
                        Welcome back! Please enter your details
                    </CardDescription>
                </CardHeader>
                <div className="p-6">
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                            <FormField
                                control={form.control}
                                name="userEmail"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Email</FormLabel>
                                        <FormControl>
                                            <Input
                                                className="h-11"
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
                                                    className="h-11"
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
                            <Button
                                type="submit"
                                className="w-full h-11 text-base font-semibold bg-primary hover:bg-primary/90"
                                disabled={loading}
                            >
                                {loading ? 'Signing in...' : 'Sign in'}
                            </Button>
                        </form>
                    </Form>
                </div>
                <div className="px-6 pb-6 text-center">
                    <p className="text-sm">
                        Don't have an account?{' '}
                        <Link
                            href="/auth/createaccount"
                            className="font-semibold text-primary hover:underline"
                        >
                            Sign up
                        </Link>
                    </p>
                </div>
            </Card>
        </div>

    );
}

export default SignInPage;

