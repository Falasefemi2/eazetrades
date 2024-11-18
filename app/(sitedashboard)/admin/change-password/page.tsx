'use client'

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function Component() {
    const [isLoading, setIsLoading] = useState(false)

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsLoading(true)
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000))
        setIsLoading(false)
    }

    return (
        <div className="w-full p-6 bg-white rounded-lg shadow-sm">
            <h2 className="text-2xl font-semibold mb-6">Change Password</h2>
            <form onSubmit={handleSubmit} className="space-y-4 max-w-3xl">
                <div className="space-y-2">
                    <Label htmlFor="old-password">Old Password</Label>
                    <Input
                        id="old-password"
                        placeholder="Enter old password"
                        required
                        type="password"
                        className="w-full"
                    />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="new-password">New Password</Label>
                    <Input
                        id="new-password"
                        placeholder="Enter new password"
                        required
                        type="password"
                        className="w-full"
                    />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="confirm-password">Confirm Password</Label>
                    <Input
                        id="confirm-password"
                        placeholder="Confirm new password"
                        required
                        type="password"
                        className="w-full"
                    />
                </div>
                <div className="flex flex-col sm:flex-row gap-3 pt-4">
                    <Button
                        variant="outline"
                        className="w-full sm:w-1/2"
                        type="button"
                        disabled={isLoading}
                    >
                        Cancel
                    </Button>
                    <Button
                        className="w-full sm:w-1/2 bg-indigo-600 hover:bg-indigo-700"
                        type="submit"
                        disabled={isLoading}
                    >
                        {isLoading ? "Changing..." : "Change password"}
                    </Button>
                </div>
            </form>
        </div>
    )
}