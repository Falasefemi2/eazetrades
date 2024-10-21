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
import { SubmitHandler, useForm } from "react-hook-form";
// import { submitLogin } from "@/app/action";
import { toast } from "sonner";

interface SignInFormData {
    userEmail: string;
    password: string;
}


const SignInPage = () => {
    // const [isSubmitting, setIsSubmitting] = useState(false)
    // const [submitError, setSubmitError] = useState<string | null>(null)
    // const [submitSuccess, setSubmitSuccess] = useState<boolean>(false)
    // const [showPassword, setShowPassword] = useState(false)
    // const { register, handleSubmit, formState: { errors } } = useForm<SignInFormData>()

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const { register, handleSubmit, formState: { errors } } = useForm<SignInFormData>();


    // const onSubmit: SubmitHandler<SignInFormData> = async (data) => {
    //     setIsSubmitting(true)
    //     setSubmitError(null)
    //     setSubmitSuccess(false)

    //     try {
    //         const formData = new FormData()
    //         Object.entries(data).forEach(([key, value]) => {
    //             formData.append(key, value)
    //         })

    //         const result = await submitLogin(formData)
    //         if (result.status === "200") {
    //             setSubmitSuccess(true)
    //             // Handle successful login (e.g., redirect to dashboard)
    //         } else {
    //             setSubmitError(result.message || 'An unexpected error occurred')
    //         }
    //     } catch (error) {
    //         setSubmitError(error instanceof Error ? error.message : 'Failed to sign in. Please try again.')
    //     } finally {
    //         setIsSubmitting(false)
    //     }
    // }

    const onSubmit: SubmitHandler<SignInFormData> = async (data) => {
        setIsSubmitting(true);

        try {
            const formData = new FormData();
            Object.entries(data).forEach(([key, value]) => {
                formData.append(key, value);
            });

            // const result = await submitLogin(formData);
            // console.log("Login response:", result); // For debugging

            // if (result.status === "200") {
            //     toast.success("Sign in successful!");
            //     // Handle successful login (e.g., redirect to dashboard)
            //     // router.push('/dashboard');
            // } else {
            //     // Handle server-side error
            //     const errorMessage = result.message || 'An unexpected error occurred';
            //     toast.error(errorMessage);

            //     if (result.status === "503") {
            //         console.error("Server error:", result);
            //         // You might want to implement additional error handling here,
            //         // such as reporting the error to your error tracking service
            //     }
            // }
        } catch (error) {
            console.error("Login error:", error);
            const errorMessage = error instanceof Error ? error.message : 'Failed to sign in. Please try again.';
            toast.error(errorMessage);
        } finally {
            setIsSubmitting(false);
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
                    <CardTitle className="text-[#333333] text-3xl lg:text-4xl font-bold mb-3">Sign in</CardTitle>
                    <CardDescription>Welcome back! Please enter your details</CardDescription>
                </CardHeader>
                <div className="px-6 py-8">

                    {/* <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="space-y-4">
                            <div>
                                <Label htmlFor="userEmail" className="block text-sm font-medium text-gray-700">Email</Label>
                                <Input
                                    id="userEmail"
                                    type="email"
                                    {...register('userEmail', {
                                        required: 'Email is required',
                                        pattern: {
                                            value: /\S+@\S+\.\S+/,
                                            message: "Invalid email address",
                                        }
                                    })}
                                    placeholder="Your email"
                                    className="mt-1 block w-full px-3 py-2 border border-[#333333] rounded-md text-sm placeholder-gray-400 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 bg-[#F3F5F8]"
                                />
                                {errors.userEmail && <p className="mt-1 text-xs text-red-500">{errors.userEmail.message}</p>}
                            </div>
                            <div>
                                <Label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</Label>
                                <div className="mt-1 relative">
                                    <Input
                                        type={showPassword ? "text" : "password"}
                                        id="password"
                                        {...register('password', { required: 'Password is required' })}
                                        className="block w-full px-3 py-2 border border-[#333333] rounded-md text-sm placeholder-gray-400 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 bg-[#F3F5F8]"
                                        placeholder="Password"
                                    />
                                    <button
                                        type="button"
                                        className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5"
                                        onClick={() => setShowPassword(!showPassword)}
                                    >
                                        {showPassword ? <EyeOff /> : <Eye />}
                                    </button>
                                </div>
                                {errors.password && <p className="mt-1 text-xs text-red-500">{errors.password.message}</p>}
                                <div className="mt-2 text-right">
                                    <Link href="/auth/forgetpassword" className="text-[#5F3AFB] font-medium text-sm">Forget Password</Link>
                                </div>
                            </div>
                        </div>
                        {submitError && <p className="mt-4 text-sm text-red-500">{submitError}</p>}
                        {submitSuccess && <p className="mt-4 text-sm text-green-500">Sign in successful!</p>}
                        <div className="mt-12">
                            <Button
                                type="submit"
                                className="w-full px-4 py-2 bg-[#5F3AFB] text-white font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-[#5F3AFB] focus:ring-offset-2 focus:ring-offset-[#5F3AFB] rounded-[30px]"
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? 'Signing in...' : 'Sign in'}
                            </Button>
                        </div>
                    </form> */}
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="space-y-4">
                            <div>
                                <Label htmlFor="userEmail" className="block text-sm font-medium text-gray-700">Email</Label>
                                <Input
                                    id="userEmail"
                                    type="email"
                                    {...register('userEmail', {
                                        required: 'Email is required',
                                        pattern: {
                                            value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,
                                            message: "Invalid email address",
                                        }
                                    })}
                                    placeholder="Your email"
                                    className="mt-1 block w-full px-3 py-2 border border-[#333333] rounded-md text-sm placeholder-gray-400 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 bg-[#F3F5F8]"
                                />
                                {errors.userEmail && <p className="mt-1 text-xs text-red-500">{errors.userEmail.message}</p>}
                            </div>
                            <div>
                                <Label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</Label>
                                <div className="mt-1 relative">
                                    <Input
                                        type={showPassword ? "text" : "password"}
                                        id="password"
                                        {...register('password', {
                                            required: 'Password is required',
                                            minLength: {
                                                value: 8,
                                                message: "Password must be at least 8 characters long"
                                            }
                                        })}
                                        className="block w-full px-3 py-2 border border-[#333333] rounded-md text-sm placeholder-gray-400 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 bg-[#F3F5F8]"
                                        placeholder="Password"
                                    />
                                    <button
                                        type="button"
                                        className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5"
                                        onClick={() => setShowPassword(!showPassword)}
                                    >
                                        {showPassword ? <EyeOff /> : <Eye />}
                                    </button>
                                </div>
                                {errors.password && <p className="mt-1 text-xs text-red-500">{errors.password.message}</p>}
                                <div className="mt-2 text-right">
                                    <Link href="/auth/forgetpassword" className="text-[#5F3AFB] font-medium text-sm">Forget Password</Link>
                                </div>
                            </div>
                        </div>
                        <div className="mt-12">
                            <Button
                                type="submit"
                                className="w-full px-4 py-2 bg-[#5F3AFB] text-white font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-[#5F3AFB] focus:ring-offset-2 focus:ring-offset-[#5F3AFB] rounded-[30px]"
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? 'Signing in...' : 'Sign in'}
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

