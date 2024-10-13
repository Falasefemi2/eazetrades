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
import { SubmitHandler, useForm } from "react-hook-form";
import { submitRegistration } from "@/app/action";

interface RegistrationFormData {
    fullName: string;
    userEmail: string;
    password: string;
    rePassword: string;
    userSelection: 'buyer' | 'supplier';
}

function CreateAccount() {
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitError, setSubmitError] = useState<string | null>(null)
    const [submitSuccess, setSubmitSuccess] = useState<boolean>(false)
    const [showPassword, setShowPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)
    const { register, handleSubmit, formState: { errors }, watch } = useForm<RegistrationFormData>()

    const onSubmit: SubmitHandler<RegistrationFormData> = async (data) => {
        setIsSubmitting(true)
        setSubmitError(null)
        setSubmitSuccess(false)

        try {
            const formData = new FormData()
            Object.entries(data).forEach(([key, value]) => {
                formData.append(key, value)
            })

            const result = await submitRegistration(formData)
            if (result.status === "200") {
                setSubmitSuccess(true)
            } else {
                setSubmitError(result.message || 'An unexpected error occurred')
            }
        } catch (error) {
            setSubmitError(error instanceof Error ? error.message : 'Failed to submit the form. Please try again.')
        } finally {
            setIsSubmitting(false)
        }
    }


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
                    {/* <form>
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
                    </form> */}
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="space-y-4">
                            <div>
                                <Label htmlFor="fullName" className="block text-sm font-medium text-gray-700">Name</Label>
                                <Input
                                    type="text"
                                    id="fullName"
                                    {...register('fullName', { required: 'Name is required' })}
                                    className="mt-1 block w-full px-3 py-2 border border-[#333333] rounded-md text-sm placeholder-gray-400 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 bg-[#F3F5F8]"
                                    placeholder="Your full name"
                                />
                                {errors.fullName && <p className="mt-1 text-xs text-red-500">{errors.fullName.message}</p>}
                            </div>
                            <div>
                                <Label htmlFor="userEmail" className="block text-sm font-medium text-gray-700">Email address</Label>
                                <Input
                                    type="email"
                                    id="userEmail"
                                    {...register('userEmail', {
                                        required: 'Email is required',
                                        pattern: {
                                            value: /\S+@\S+\.\S+/,
                                            message: "Invalid email address",
                                        }
                                    })}
                                    className="mt-1 block w-full px-3 py-2 border border-[#333333] rounded-md text-sm placeholder-gray-400 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 bg-[#F3F5F8]"
                                    placeholder="Your email address"
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
                                                message: "Password must be at least 8 characters long",
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
                            </div>
                            <div>
                                <Label htmlFor="rePassword" className="block text-sm font-medium text-gray-700">Confirm password</Label>
                                <div className="mt-1 relative">
                                    <Input
                                        type={showConfirmPassword ? "text" : "password"}
                                        id="rePassword"
                                        {...register('rePassword', {
                                            required: 'Please confirm your password',
                                            validate: (val: string) => {
                                                if (watch('password') != val) {
                                                    return "Your passwords do not match";
                                                }
                                            }
                                        })}
                                        className="block w-full px-3 py-2 border border-[#333333] rounded-md text-sm placeholder-gray-400 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 bg-[#F3F5F8]"
                                        placeholder="Confirm password"
                                    />
                                    <button
                                        type="button"
                                        className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5"
                                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                    >
                                        {showConfirmPassword ? <EyeOff /> : <Eye />}
                                    </button>
                                </div>
                                {errors.rePassword && <p className="mt-1 text-xs text-red-500">{errors.rePassword.message}</p>}
                            </div>
                            <div>
                                <p className="block text-sm font-medium text-gray-700">Signing As</p>
                                <div className="mt-2 space-x-4">
                                    <Label className="inline-flex items-center">
                                        <Input
                                            type="radio"
                                            {...register('userSelection', { required: 'Please select an account type' })}
                                            value="buyer"
                                            className="form-radio"
                                        />
                                        <span className="ml-2">Buyer</span>
                                    </Label>
                                    <Label className="inline-flex items-center">
                                        <Input
                                            type="radio"
                                            {...register('userSelection', { required: 'Please select an account type' })}
                                            value="supplier"
                                            className="form-radio"
                                        />
                                        <span className="ml-2">Supplier</span>
                                    </Label>
                                </div>
                                {errors.userSelection && <p className="mt-1 text-xs text-red-500">{errors.userSelection.message}</p>}
                            </div>
                        </div>
                        {submitError && <p className="mt-4 text-sm text-red-500">{submitError}</p>}
                        {submitSuccess && <p className="mt-4 text-sm text-green-500">Registration successful!</p>}
                        <div className="mt-6">
                            <Button
                                type="submit"
                                className="w-full px-4 py-2 bg-[#5F3AFB] text-white font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-[#5F3AFB] focus:ring-offset-2 focus:ring-offset-[#5F3AFB] rounded-[30px]"
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? 'Signing up...' : 'Sign up'}
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

