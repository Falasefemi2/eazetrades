"use client";

import { useState } from "react";
import bg from "../../../public/images/bgPhone.png"
import Image from "next/image";

function AccountPage() {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
            {/* background image */}
            <div className="absolute inset-0 grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-8 gap-2 p-4 opacity-50">
                <div className="bg-white rounded-lg shadow overflow-hidden">
                    <Image src={bg} alt="bg" width={393} height={852} />
                </div>
            </div>
            {/* form container */}
            <div className="relative z-10 max-w-md w-full bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="px-6 py-8">
                    <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">Create new account</h2>
                    <form>
                        <div className="space-y-4">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                                <input type="text" id="name" className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400
                    focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500" placeholder="Placeholder" />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email address</label>
                                <input type="email" id="email" className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400
                    focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500" placeholder="Placeholder" />
                            </div>
                            <div>
                                <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                                <div className="mt-1 relative">
                                    <input type={showPassword ? "text" : "password"} id="password" className="block w-full px-3 py-2 bg-white border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400
                      focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500" placeholder="Password" />
                                    <button type="button" className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5" onClick={() => setShowPassword(!showPassword)}>
                                        {showPassword ? "Hide" : "Show"}
                                    </button>
                                </div>
                            </div>
                            <div>
                                <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">Confirm password</label>
                                <div className="mt-1 relative">
                                    <input type={showConfirmPassword ? "text" : "password"} id="confirmPassword" className="block w-full px-3 py-2 bg-white border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400
                      focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500" placeholder="Password" />
                                    <button type="button" className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5" onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
                                        {showConfirmPassword ? "Hide" : "Show"}
                                    </button>
                                </div>
                            </div>
                            <div>
                                <span className="text-sm text-blue-600 hover:text-blue-500 cursor-pointer">Forgot password?</span>
                            </div>
                            <div>
                                <p className="block text-sm font-medium text-gray-700">Signing As</p>
                                <div className="mt-2 space-x-4">
                                    <label className="inline-flex items-center">
                                        <input type="radio" className="form-radio" name="accountType" value="buyer" />
                                        <span className="ml-2">Buyer</span>
                                    </label>
                                    <label className="inline-flex items-center">
                                        <input type="radio" className="form-radio" name="accountType" value="supplier" />
                                        <span className="ml-2">Supplier</span>
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="mt-6">
                            <button type="submit" className="w-full px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-indigo-200">
                                Sign up
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    )
}

export default AccountPage;