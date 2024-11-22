"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function Component() {
    const [isLoading, setIsLoading] = useState(false)

    async function onSubmit(event: React.FormEvent) {
        event.preventDefault()
        setIsLoading(true)

        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1000))
        setIsLoading(false)
    }

    return (
        <div className="p-4 md:p-6">
            <h1 className="text-2xl font-semibold mb-6">Change Password</h1>
            <Card className="p-6 bg-white">
                <form onSubmit={onSubmit} className="space-y-6">
                    <div className="space-y-2">
                        <Label htmlFor="old-password">Old Password</Label>
                        <Input
                            id="old-password"
                            required
                            type="password"
                            disabled={isLoading}
                            className="bg-[#F4F4F4] h-[52px] w-full md:w-[670px]"

                            placeholder="Enter old password"
                        />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="new-password">New Password</Label>
                        <Input
                            id="new-password"
                            required
                            type="password"
                            disabled={isLoading}
                            className="bg-[#F4F4F4] h-[52px] w-full md:w-[670px]"

                            placeholder="Enter new password"
                        />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="confirm-password">Confirm Password</Label>
                        <Input
                            id="confirm-password"
                            required
                            type="password"
                            disabled={isLoading}
                            className="bg-[#F4F4F4] h-[52px] w-full md:w-[670px]"

                            placeholder="Confirm password"
                        />
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4 pt-4">
                        <Button
                            variant="outline"
                            className="flex-1 h-12 w-full"
                            disabled={isLoading}
                            type="button"
                        >
                            Cancel
                        </Button>
                        <Button
                            type="submit"
                            className="flex-1 h-12 bg-[#6C5DD3] hover:bg-[#6C5DD3]/90 text-white w-full"
                            disabled={isLoading}
                        >
                            {isLoading ? "Changing..." : "Change password"}
                        </Button>
                    </div>
                </form>
            </Card>
        </div>
    )
}


